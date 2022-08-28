import type { NextPage } from "next";
import Head from "next/head";
import HeroPic from "../components/core/HeroPic";
import Title from "../components/core/Title";
import HeadingWithText from "../components/HeadingWithText";

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Daniel's Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>

        {/* Hero Section */ }
        <section className="py-12">
          <HeroPic />
          <HeadingWithText title="Hi! I am Daniel," style="gradient" 
          text="Code Hack Life Work"
          label="Take me to the code land"
          href="https://github.com/danielh4t" />
        </section>

        {/*  Projects Section */ }
        <section className="py-12">
          <Title title="Selected projects" style="gradient" />
          <div className="space-y-12 mb-12">
            {/* Project 1 */ }
            <div className="flex flex-col space-y-8 mt-4 md:flex-row-reverse md:justify-between md:items-center md:space-y-0">
              <div className="w-full h-[250px] md:w-[350px] md:h-[180px] bg-gradient-to-r from-cyan-300 to-blue-500 rounded-md shadow-lg md:ml-12"></div>
              <div>
                <span className="text-sm text-gray-400 font-light ">
                  2022 - present
                </span>
                <HeadingWithText 
                title="Plan" 
                text="Task manager Android " 
                label="Try it out"
                href="https://github.com/danielh4t" />
              </div>
            </div>
          </div>
        </section>

        {/* Articles Section */ }
        <section className="py-12">
          <Title title="Articles" style="gradient" />

          <div className="space-y-12 mb-12">
            <div>
              <span className="text-sm text-gray-400 font-light ">
                2020 - present
              </span>
              <HeadingWithText title="Divide & Conquer and Binary Search" 
              text="Divide and conquer is an approach in some common programming problems. One such case is finding the longest common prefix which involves developing a solution to find the longest common prefix string in an array of strings."
              label="Read More" 
              href="https://levelup.gitconnected.com/divide-conquer-and-binary-search-f3645e43f05d" />
            </div>
          </div>


        </section>
      </main>
    </div>
  );
};

export default Home;
