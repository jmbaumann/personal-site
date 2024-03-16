import Head from "next/head";
import Link from "next/link";
import {
  Twitter,
  Youtube,
  Instagram,
  Download,
  Github,
  Clapperboard,
} from "lucide-react";

export default function MovieCalendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[#2c3440] pb-4 text-[#9ab]">
      <Head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎬</text></svg>"
        />
      </Head>
      <main className="flex-grow bg-gradient-to-b from-[#1e262d] to-[#14181c] pb-4 font-serif">
        <div className="mx-auto lg:w-11/12">{children}</div>
      </main>

      <footer className="mt-2 flex w-full justify-center bg-[#2c3440]">
        <div className="mt-2 w-[80%] text-xs opacity-80">
          Made by{" "}
          <Link href="/" target="_blank" className="underline">
            Jeremy Baumann
          </Link>
          . This site has no affiliation with{" "}
          <a
            href="https://letterboxd.com"
            target="_blank"
            className="underline"
          >
            Letterboxd
          </a>
          . Movie data from{" "}
          <a
            href="https://themoviedb.org"
            target="_blank"
            className="underline"
          >
            TMDB
          </a>
          .
        </div>
      </footer>
    </div>
  );
}
