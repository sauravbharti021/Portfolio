import React from 'react'
import about from '../../assets/about.gif'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <div id="about" className="relative bg-gray-900">
          <div className="barber-pic absolute top-0 left-0 right-0 bottom-0 z-0 opacity-10"></div>
          <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-white">
            <div className="max-w-xl mb-10 md:mx-auto lg:max-w-5xl md:mb-12">
              <h2 className="text-center max-w-lg mx-auto mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-100 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="27df4f81-c854-45de-942a-fe90f7a300f9"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#27df4f81-c854-45de-942a-fe90f7a300f9)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span className="relative">About</span>
                </span>{" "}
                Me
              </h2>
              <div className="w-full flex flex-wrap">
                <div className="w-full lg:w-1/2 p-2 flex items-center">
                <img src={about} alt="Raul" className="mx-auto rounded-lg border border-gray-800 shadow-md" />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center p-2 py-8">
                  <p className="text-base text-gray-400 md:text-lg">
                    I graduated from Orissa Engineering College, Bhubaneswar in 2023 from Computer Science and Engineering Branch.  As a Technical Content Intern at Geeks for Geeks, I honed my skills by actively contributing to diverse projects related to Data Structures, Algorithms, Databases, Web Development, and Competitive Programming. With a proactive mindset and a blend of technical proficiency, problem-solving acumen, and a passion for continuous learning, I am eager to contribute my skills and enthusiasm to dynamic projects and collaborative teams.
                  </p>
                  <p className="mt-4 text-base text-gray-400 md:text-lg">
                    My journey extends beyond academia, with my active participation in competitive programming. I have earned the titles of Expert on Codeforces, Knight on LeetCode, and 4 Star Coder on CodeChef, I consistently rank in the top percentile globally. Notably, I secured the 3rd position in CodeChef's May long Challenge, 1683 global rank in Hacker Cup by Facebook and achieved a remarkable 234th rank in Coding Ninja’s CodeKaze. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}
