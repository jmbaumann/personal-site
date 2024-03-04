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
        <div className="px-16 text-xl">
          <h1 className="mt-10 text-2xl font-bold">Projects</h1>
          <div>
            <InReview />
            <Consensu5 />
            <Roshambodle />
            <ThisSite />
          </div>
        </div>
      </Layout>
    </>
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

            <hr className="my-4 w-full" />

            <div className="flex flex-row">
              <div className="ml-2">
                <h3 className="text-lg">Stack</h3>
                <ul className="ml-2 list-disc">
                  <li>Typescript</li>
                  <li>React (Next.js)</li>
                  <li>Tailwind CSS</li>
                  {/* <li>shadcn/ui</li> */}
                  <li>tRPC</li>
                  <li>Prisma</li>
                  <li>Vercel</li>
                  <li>PlanetScale</li>
                  <li>OMDb API</li>
                </ul>
              </div>
              <Carousel className="ml-auto mr-12 w-[400px]">
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
                <CarouselPrevious className="text-black" />
                <CarouselNext className="text-black" />
              </Carousel>
            </div>
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
