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

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👖</text></svg>"
        />
      </Head>
      <main className="font-ubuntu h-full min-h-screen bg-orange-100 pb-8 font-semibold text-emerald-800">
        <div className="mx-auto w-9/12">
          <div className="flex w-full flex-row items-center px-8 py-6">
            <Link href="/" className="mx-2 text-lg hover:underline">
              Home
            </Link>
            <Link href="/projects" className="mx-2 text-lg hover:underline">
              Projects
            </Link>
            <Link href="/blog" className="mx-2 text-lg hover:underline">
              Blog
            </Link>

            <div className="ml-auto flex flex-row items-center">
              {/* <button className="mr-2 flex items-center rounded-md bg-emerald-800 px-2 py-2 text-sm text-white">
              <Download size={24} className="mr-2 h-4 w-4" />
              Resume
            </button> */}
              <a href="https://twitter.com/jeremy_baumann" target="_blank">
                <Twitter className="mx-2 hover:cursor-pointer" />
              </a>
              <a href="https://youtube.com/@jeremybaumann" target="_blank">
                <Youtube className="mx-2 hover:cursor-pointer" />
              </a>
              <a href="https://letterboxd.com/jbaumann" target="_blank">
                <Clapperboard className="mx-2 hover:cursor-pointer" />
              </a>
              <a href="https://instagram.com/jeremy_baumann" target="_blank">
                <Instagram className="mx-2 hover:cursor-pointer" />
              </a>
              <a href="https://github.com/jmbaumann" target="_blank">
                <Github className="mx-2 hover:cursor-pointer" />
              </a>
            </div>
          </div>

          {children}
        </div>
      </main>
    </>
  );
}
