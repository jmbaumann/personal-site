import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import multiMonthPlugin from "@fullcalendar/multimonth";
import MovieCalendarLayout from "~/layouts/MovieCalendarLayout";
import { useEffect, useRef, useState } from "react";
import { api } from "~/utils/api";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Loader2, RefreshCcw } from "lucide-react";
import Image from "next/image";
import { format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { type Result } from "~/server/api/routers/letterboxd-rss";
import useLocalStorage from "~/lib/useLocalStorage";

export default function CalendarPage() {
  const [username, setUsername] = useLocalStorage("letterboxd-username", "");
  const [filteredMovies, setFilteredMovies] = useState<
    | ({
        url: string | undefined;
        title: string | undefined;
        data: Result | undefined;
      } | null)[]
    | undefined
  >([]);
  const [filter, setFilter] = useState("all");

  const {
    data: movies,
    refetch,
    isFetching,
  } = api.letterboxdRSS.getFeed.useQuery(
    { username },
    { enabled: false, staleTime: 60 * 60 * 1000 },
  );

  function handleUsername() {
    if (username.length) void refetch();
  }

  function filterMovies() {
    if (filter === "all") setFilteredMovies(movies);
    else
      setFilteredMovies(
        movies?.filter(
          (e) =>
            new Date(e?.data?.release_date ?? "").getTime() >
            new Date().getTime(),
        ),
      );
  }

  useEffect(() => {
    filterMovies();
  }, [movies, filter]);

  useEffect(() => {
    addEvents();
  }, [filteredMovies]);

  useEffect(() => {
    handleUsername();
  }, [username]);

  const calendarRef = useRef<FullCalendar>(null);

  function addEvents() {
    if (calendarRef.current && filteredMovies) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.removeAllEvents();
      for (const movie of filteredMovies)
        calendarApi.addEvent({
          title: movie?.title,
          start: movie?.data?.release_date,
        });
    }
  }

  return (
    <>
      <MovieCalendarLayout>
        <div className="flex w-full py-6">
          <p className="max-w-[60%] text-sm">
            Create a list on{" "}
            <a href="https://letterboxd.com" target="_blank">
              Letterboxd
            </a>{" "}
            with the name &quot;Release Calendar&quot; then enter your
            Letterboxd username and click on the{" "}
            <RefreshCcw className="inline" size={14} /> button to see the films
            in that list displayed on the calendar
          </p>
          <div className="ml-auto flex max-w-[240px] flex-row items-center">
            <Input
              className="border-none bg-[#2c3440] ring-0 ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              type="text"
              placeholder="Letterboxd Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Button
              variant="outline"
              size="icon"
              className="ml-2 border-none bg-[#1ce043] text-white ring-0 ring-offset-0 hover:bg-[#13ad32] hover:text-white focus:ring-0 focus:ring-offset-0"
              onClick={handleUsername}
            >
              {isFetching ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <RefreshCcw className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        <div className="flex w-full">
          <div className="w-9/12">
            <FullCalendar
              ref={calendarRef}
              plugins={[dayGridPlugin, interactionPlugin, multiMonthPlugin]}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                // right: "dayGridMonth",
                right: "",
              }}
              initialView="dayGridMonth"
              nowIndicator={true}
              editable={true}
              selectable={true}
              selectMirror={true}
              multiMonthMaxColumns={1} // force a single column
              // resources={[
              //   { id: 'a', title: 'Auditorium A' },
              //   { id: 'b', title: 'Auditorium B', eventColor: 'green' },
              //   { id: 'c', title: 'Auditorium C', eventColor: 'orange' },
              // ]}
              initialEvents={movies?.map((movie) => ({
                title: movie?.title,
                start: new Date(movie?.data?.release_date ?? ""),
              }))}
            />
          </div>

          <div className="mt-5 w-3/12 px-4">
            <Select defaultValue={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-[180px] border-none bg-[#2c3440] ring-0 ring-offset-0 focus:ring-0 focus:ring-offset-0">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="upcoming">Upcoming</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {/* <h1 className="font-sans text-xl font-bold text-white">Upcoming</h1> */}
            <hr className="mb-4 mt-2 w-full opacity-80" />

            {filteredMovies?.map((movie, index) => (
              <div key={movie?.url} className="flex flex-col">
                <div className="flex">
                  <Image
                    src={
                      `https://image.tmdb.org/t/p/w1280/${movie?.data?.poster_path}` ??
                      ""
                    }
                    width={70}
                    height={105}
                    alt={`${movie?.title} poster`}
                  />
                  <div className="ml-2 flex flex-col">
                    <p className="text-2xl font-bold text-white">
                      {movie?.title}
                    </p>
                    <p className="font-sans">
                      {format(
                        new Date(movie?.data?.release_date + " 00:00:00") ??
                          new Date(),
                        "PPP",
                      )}
                    </p>
                  </div>
                </div>

                {index < filteredMovies.length - 1 && (
                  <hr className="my-4 w-full opacity-40" />
                )}
              </div>
            ))}
          </div>
        </div>
      </MovieCalendarLayout>
    </>
  );
}
