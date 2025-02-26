import { ExternalLink } from "lucide-react";
import Head from "next/head";
import Layout from "~/layouts/Layout";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import Consensu5Logo from "~/components/Consensu5Logo";
import Image from "next/image";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Jeremy Baumann</title>
      </Head>
      <Layout>
        <div className="px-4 text-xl lg:px-16">
          <h1 className="mt-10 text-2xl font-bold">Projects</h1>
          <div>
            <BigMovieBois />
            <InReview />
            <LetterboxdCalendar />
            <Consensu5 />
            <Roshambodle />
            <ThisSite />
          </div>
        </div>
      </Layout>
    </>
  );
}

export function BigMovieBois() {
  return (
    <Card className="mt-4 bg-emerald-800 text-white">
      <CardHeader className="text-xl">
        <CardTitle>Big Movie Bois</CardTitle>
      </CardHeader>
      <CardContent className="text-sm">
        <div className="flex w-full flex-row">
          <div className="flex flex-col">
            <p className="pb-2 pr-2">
              Launched early in 2025, bigmoviebois.com has several features with
              more still in development. Its flagship feature is Fantasy Film
              Leagues which is a spin on Fantasy Football but instead of
              managing a team & drafting players, you manage a Studio & draft
              upcoming Films.
            </p>
            <p className="pr-2">
              There's also a daily game called Overlap, Award Show Pick 'Ems, &
              bi-weekly Tournaments. You can watch more features get developed
              live on the{" "}
              <a
                className="underline"
                href="https://twitch.tv/bigmoviebois"
                target="_blank"
              >
                BigMovieBois Twitch channel
              </a>{" "}
              (& talk about movies too).
            </p>

            <hr className="my-2 w-full lg:my-4" />

            <div className="flex flex-col lg:flex-row">
              <div className="ml-2">
                <h3 className="text-lg">Stack</h3>
                <ul className="ml-2 flex list-disc flex-wrap justify-evenly lg:block">
                  <li className="mx-2">Typescript</li>
                  <li className="mx-2">React (Next.js)</li>
                  <li className="mx-2">Tailwind CSS</li>
                  <li className="mx-2">shadcn/ui</li>
                  <li className="mx-2">tRPC</li>
                  <li className="mx-2">Prisma</li>
                  <li className="mx-2">PostgreSQL (Supabase)</li>
                  <li className="mx-2">Vercel</li>
                  <li className="mx-2">TMDB API</li>
                </ul>
              </div>

              <Carousel className="lg:ml-auto lg:mr-12 lg:w-[400px]">
                <CarouselContent>
                  <CarouselItem className="items-center">
                    <Image
                      src="https://jbaumann-personal.s3.us-west-1.amazonaws.com/bmb-1.png"
                      width={400}
                      height={200}
                      alt="Big Movie Bois Screenshot #1"
                    />
                  </CarouselItem>
                  <CarouselItem className="items-center">
                    <Image
                      src="https://jbaumann-personal.s3.us-west-1.amazonaws.com/bmb-2.png"
                      width={400}
                      height={200}
                      alt="Big Movie Bois Screenshot #2"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src="https://jbaumann-personal.s3.us-west-1.amazonaws.com/bmb-3.png"
                      width={400}
                      height={200}
                      alt="Big Movie Bois Screenshot #3"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src="https://jbaumann-personal.s3.us-west-1.amazonaws.com/bmb-4.png"
                      width={400}
                      height={200}
                      alt="Big Movie Bois Screenshot #4"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src="https://jbaumann-personal.s3.us-west-1.amazonaws.com/bmb-5.png"
                      width={400}
                      height={200}
                      alt="Big Movie Bois Screenshot #5"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="hidden text-black lg:inline-flex" />
                <CarouselNext className="hidden text-black lg:inline-flex" />
              </Carousel>
            </div>
            <small className="text-center lg:hidden">
              Swipe to view more images
            </small>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="bg-white text-emerald-800 hover:text-white"
          onClick={() => window.open("https://bigmoviebois.com", "_blank")}
        >
          <ExternalLink size={24} className="mr-2 h-4 w-4" />
          Visit site
        </Button>
      </CardFooter>
    </Card>
  );
}

export function InReview() {
  return (
    <Card className="mt-4 bg-emerald-800 text-white">
      <CardHeader className="text-xl">
        <CardTitle>Kinda Funny&apos;s In Review</CardTitle>
      </CardHeader>
      <CardContent className="text-sm">
        <div className="flex w-full flex-row">
          <div className="flex flex-col">
            <p className="pr-2">
              This is a website I built for{" "}
              <a
                href="https://podcasts.apple.com/us/podcast/in-review-movies-ranked-reviewed-recapped-a-kinda/id1579548228"
                className="underline"
              >
                Kinda Funny&apos;s In Review
              </a>{" "}
              podcast. It serves as a hub for all of their episodes as well as
              allows users to rank the movies that they&apos;ve reviewed & see
              how it compares to the group&apos;s rankings along with an average
              ranking from all users.
            </p>

            <hr className="my-2 w-full lg:my-4" />

            <div className="flex flex-col lg:flex-row">
              <div className="ml-2">
                <h3 className="text-lg">Stack</h3>
                <ul className="ml-2 flex list-disc flex-wrap justify-evenly lg:block">
                  <li className="mx-2">Typescript</li>
                  <li className="mx-2">React (Next.js)</li>
                  <li className="mx-2">Tailwind CSS</li>
                  {/* <li className="mx-2">shadcn/ui</li> */}
                  <li className="mx-2">tRPC</li>
                  <li className="mx-2">Prisma</li>
                  <li className="mx-2">Vercel</li>
                  <li className="mx-2">MySQL</li>
                  <li className="mx-2">OMDb API</li>
                </ul>
              </div>
              <Carousel className="lg:ml-auto lg:mr-12 lg:w-[400px]">
                <CarouselContent>
                  <CarouselItem className="items-center">
                    <Image
                      src="https://jbaumann-personal.s3.us-west-1.amazonaws.com/in-review-1.png"
                      width={400}
                      height={200}
                      alt="In Review Screenshot #1"
                    />
                  </CarouselItem>
                  <CarouselItem className="items-center">
                    <Image
                      src="https://jbaumann-personal.s3.us-west-1.amazonaws.com/in-review-2.png"
                      width={400}
                      height={200}
                      alt="In Review Screenshot #2"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src="https://jbaumann-personal.s3.us-west-1.amazonaws.com/in-review-3.png"
                      width={400}
                      height={200}
                      alt="In Review Screenshot #3"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src="https://jbaumann-personal.s3.us-west-1.amazonaws.com/in-review-4.png"
                      width={400}
                      height={200}
                      alt="In Review Screenshot #4"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="hidden text-black lg:inline-flex" />
                <CarouselNext className="hidden text-black lg:inline-flex" />
              </Carousel>
            </div>
            <small className="text-center lg:hidden">
              Swipe to view more images
            </small>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="bg-white text-emerald-800 hover:text-white"
          onClick={() =>
            window.open("https://kindafunnyinreview.com", "_blank")
          }
        >
          <ExternalLink size={24} className="mr-2 h-4 w-4" />
          Visit site
        </Button>
      </CardFooter>
    </Card>
  );
}

export function LetterboxdCalendar() {
  return (
    <Card className="mt-4 bg-emerald-800 text-white">
      <CardHeader className="text-xl">
        <CardTitle>Letterboxd Release Calendar</CardTitle>
      </CardHeader>
      <CardContent className="text-sm">
        <div className="flex w-full flex-row">
          <div className="flex flex-col">
            <p className="pr-2">
              I wanted to visualize upcoming movie releases that I plan on
              seeing in theaters and thought I&apos;d try to incorporate my{" "}
              <a
                className="underline"
                href="https://letterboxd.com"
                target="_blank"
              >
                Letterboxd
              </a>{" "}
              watchlist. Ultimately I ended up using their RSS feed to find a
              list named &quot;Release Calendar&quot; and putting that data into
              both a calendar and a list view. Unfortunately this approach
              limits me to just the first 10 entries in the Letterboxd list, but
              it&apos;s still pretty useful. Especially considering this was
              something I thought of after leaving{" "}
              <a
                className="underline"
                href="https://letterboxd.com/film/love-lies-bleeding-2024/"
                target="_blank"
              >
                Love Lies Bleeding
              </a>{" "}
              at 6:30pm and had it up and running before midnight.
            </p>

            <hr className="my-2 w-full lg:my-4" />

            <div className="flex flex-col lg:flex-row">
              <div className="ml-2">
                <h3 className="text-lg">Stack</h3>
                <ul className="ml-2 flex list-disc flex-wrap justify-evenly lg:block">
                  <li className="mx-2">Typescript</li>
                  <li className="mx-2">React (Next.js)</li>
                  <li className="mx-2">Tailwind CSS</li>
                  <li className="mx-2">shadcn/ui</li>
                  <li className="mx-2">tRPC</li>
                  <li className="mx-2">Vercel</li>
                  <li className="mx-2">Letterboxd RSS feed</li>
                  <li className="mx-2">
                    <a href="https://themoviedb.org" target="_blank">
                      TMBD API
                    </a>
                  </li>
                </ul>
              </div>
              <Image
                className="ml-auto mr-4"
                src="https://jbaumann-personal.s3.us-west-1.amazonaws.com/letterboxd-calendar.png"
                width={400}
                height={200}
                alt="Letterboxd Release Calendar Screenshot"
              />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="bg-white text-emerald-800 hover:text-white"
          onClick={() =>
            window.open("https://jeremybaumann.me/movie-calendar", "_blank")
          }
        >
          <ExternalLink size={24} className="mr-2 h-4 w-4" />
          Visit site
        </Button>
      </CardFooter>
    </Card>
  );
}

function Consensu5() {
  return (
    <Card className="mt-4 bg-emerald-800 text-white">
      <CardHeader className="text-xl">
        <CardTitle className="flex items-center justify-between">
          <Consensu5Logo />
          <p className="text-sm uppercase text-slate-300">currently offline</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm">
        <div className="flex w-full flex-row">
          <div className="flex w-[70%] flex-col">
            <p className="pr-2">Wordle x Family Feud </p>
            <p className="w-[80%]">
              Guess the top 5 answers to the prompt before guessing 3 incorrect
              answers. Participate in surveys that&apos;ll be used in future
              games
            </p>

            <hr className="my-4 w-[80%]" />

            <h3 className="text-lg">Stack</h3>
            <ul className="ml-2 list-disc">
              <li>Typescript</li>
              <li>React (Next.js)</li>
              <li>Tailwind CSS</li>
              <li>shadcn/ui</li>
              <li>tRPC</li>
              <li>zustand</li>
              <li>Prisma</li>
              <li>Vercel</li>
              <li>Supabase</li>
            </ul>
          </div>
          <Image
            src="https://jbaumann-personal.s3.us-west-1.amazonaws.com/consensu5-1.PNG"
            width={200}
            height={400}
            alt="CONSESNU5 Screenshot #1"
            className="max-h-[400px]"
          />
        </div>
      </CardContent>
      {/* <CardFooter>
        <Button
          className="bg-white text-emerald-800 hover:text-white"
          onClick={() => window.open("https://consensu5.com", "_blank")}
        >
          <ExternalLink size={24} className="mr-2 h-4 w-4" />
          Visit site
        </Button>
      </CardFooter> */}
    </Card>
  );
}
function Roshambodle() {
  return (
    <Card className="mt-4 bg-emerald-800 text-white">
      <CardHeader className="text-xl">
        <CardTitle>roshambodle</CardTitle>
      </CardHeader>
      <CardContent className="text-sm">
        <div className="flex w-full flex-row">
          <div className="flex w-[70%] flex-col">
            <p>A daily game that challenges you to win Rock Paper Scissors</p>

            <hr className="my-4 w-[80%]" />

            <h3 className="text-lg">Stack</h3>
            <ul className="ml-2 list-disc">
              <li>React (Next.js)</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <Image
            src="https://jbaumann-personal.s3.us-west-1.amazonaws.com/roshambodle.png"
            width={200}
            height={400}
            alt="In Review Screenshot #1"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="bg-white text-emerald-800 hover:text-white"
          onClick={() =>
            window.open("https://roshambodle.vercel.app", "_blank")
          }
        >
          <ExternalLink size={24} className="mr-2 h-4 w-4" />
          Visit site
        </Button>
      </CardFooter>
    </Card>
  );
}

function ThisSite() {
  return (
    <Card className="mt-4 bg-emerald-800 text-white">
      <CardHeader className="text-xl">
        <CardTitle>This Site</CardTitle>
      </CardHeader>
      <CardContent className="text-sm">
        <div className="flex w-full flex-row">
          <div className="flex flex-col">
            <p className="pr-2">
              This is where you can find the projects I&apos;m working on
            </p>

            <hr className="my-4 w-full" />

            <div className="flex flex-row">
              <div className="ml-2">
                <h3 className="text-lg">Stack</h3>
                <ul className="ml-2 list-disc">
                  <li>React (Next.js)</li>
                  <li>Tailwind CSS</li>
                  <li>shadcn/ui</li>
                </ul>
              </div>
              {/* <span>image placeholder</span> */}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="bg-white text-emerald-800 hover:text-white"
          onClick={() => window.open("https://jeremybaumann.me", "_blank")}
        >
          <ExternalLink size={24} className="mr-2 h-4 w-4" />
          Visit site
        </Button>
      </CardFooter>
    </Card>
  );
}
