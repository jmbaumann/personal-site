import Parser from "rss-parser";
import { z } from "zod";
import axios from "axios";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { env } from "~/env";
import { TRPCError } from "@trpc/server";

// Regular expression pattern to match the URL and title
const regex = /<a\s+href="([^"]+)">([^<]+)<\/a>/;

// Function to extract URL and title from each string
const extractData = (str: string) => {
  const match = str.match(regex);
  if (match) {
    const url = match[1]; // URL is captured by the first capturing group
    const title = match[2]; // Title is captured by the second capturing group
    return { url, title, data: {} as Result | undefined };
  }
  return null; // Return null if no match is found
};

export const letterboxdRSSRouter = createTRPCRouter({
  getFeed: publicProcedure
    .input(z.object({ username: z.string() }))
    .query(async ({ input }) => {
      try {
        const parser = new Parser();
        const rss = await parser.parseURL(
          `https://letterboxd.com/${input.username}/rss/`,
        );
        const list = rss.items.find(
          (e) => e.title?.toLocaleLowerCase().trim() === "release calendar",
        );
        if (!list)
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "No list found",
          });
        const arr = list.content?.split("<li>");
        arr?.shift();
        const upcoming = arr?.map(extractData);
        if (!upcoming?.length)
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "No films found",
          });

        for (const movie of upcoming) {
          if (movie?.title) {
            const { data }: { data: TMDBSearch } = await axios.get(
              `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movie.title)}`,
              {
                headers: {
                  accept: "application/json",
                  Authorization: `Bearer ${env.TMDB_API_TOKEN}`,
                },
              },
            );
            movie.data = data.results.length > 0 ? data.results[0] : undefined;
          }
        }
        return upcoming.sort(
          (a, b) =>
            new Date(a?.data?.release_date ?? "").getTime() -
            new Date(b?.data?.release_date ?? "").getTime(),
        );
      } catch (e) {
        throw new TRPCError({
          message: "Unable to find user or list",
          code: "NOT_FOUND",
        });
      }
    }),
});

export interface TMDBSearch {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}

export interface Result {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
