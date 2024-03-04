import Layout from "~/layouts/Layout";
import { InReview } from "./projects";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jeremy Baumann</title>
      </Head>
      <Layout>
        <div className="px-4 text-xl lg:px-16">
          <h1 className="mt-10 text-2xl font-bold">Hi.</h1>
          <p>I&apos;m Jeremy.</p>
          <p>I like to make things.</p>
          <p>Sometimes I even finish them.</p>

          <h1 className="mt-10 text-2xl font-bold">Featured Project</h1>
          <InReview />
        </div>
      </Layout>
    </>
  );
}
