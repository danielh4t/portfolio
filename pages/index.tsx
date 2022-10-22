import type { NextPage } from "next";
import Head from "next/head";
import Image from 'next/image';
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
                href="https://github.com/danielh4t/plan" />
              </div>
            </div>
            {/* Project 2 */}
            <div className="flex flex-col space-y-8 mt-4 md:flex-row-reverse md:justify-between md:items-center md:space-y-0">
            <Image src="/images/xoxo.png" alt="Picture of tic tac toe xoxo game" width={271} height={301} className="rounded-md shadow-lg"/>
              <div>
                <span className="text-sm text-gray-400 font-light ">
                  2022 - present
                </span>
                <HeadingWithText 
                title="xoxo" 
                text="Unbeatable AI at Tic Tac Toe" 
                label="Play It"
                href="https://tictactoe-xoxo.web.app" />
              </div>
            </div>
          </div>
        </section>

        {/* Articles Section */ }
        <section className="py-12">
          <Title title="Articles" style="gradient" />
       
          <div className="space-y-12 mb-12">
             {/* Article 1 */ }
            <div>
              <span className="text-sm text-gray-400 font-light ">
                1
              </span>
              <HeadingWithText title="Divide & Conquer and Binary Search" 
              text="Divide and conquer is an approach in some common programming problems. One such case is finding the longest common prefix which involves developing a solution to find the longest common prefix string in an array of strings."
              label="Read More" 
              href="https://levelup.gitconnected.com/divide-conquer-and-binary-search-f3645e43f05d" />
            </div>
              {/* Article 2 */ }
            <div>
              <span className="text-sm text-gray-400 font-light ">
                2
              </span>
              <HeadingWithText title="OCR Coding" 
              text="OCR, optical character recognition is conversion of typed, handwritten or printed text into machine-encoded text."
              label="Read More" 
              href="https://danielh4t.medium.com/ocr-coding-cc00e1e6f135" />
            </div>
              {/* Article 3 */ }
              <div>
              <span className="text-sm text-gray-400 font-light ">
                3
              </span>
              <HeadingWithText title="Cracking PDF on GPU" 
              text="Cracking, a password locked PDF document with Hashcat can be a quite a task."
              label="Read More" 
              href="https://danielh4t.medium.com/cracking-pdfs-using-hashcat-with-custom-word-lists-d1adf5076ec1" />
            </div>
          </div>


        </section>
      </main>
    </div>
  );
};

export default Home;
