import React from 'react'

export default function Skills() {

    const allSkills = [
        {
          icon: "text-blue-accent-700 text-4xl fab fa-html5",
          title: "FrontEnd",
          skills: [
            ["HTML", "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white&style=flat"],
            ["CSS", "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white&style=flat"],
            ["ReactJS" ,"https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB&style=flat" ],
            ["JavaScript","https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E&style=flat" ],
            ["TailwindCSS", "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white&style=flat"],
            ["Bootstrap", "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white&style=flat" ],
            ["jQuery" , "https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white&style=flat" ],
            ["Pug", "https://img.shields.io/badge/Pug-E3C29B?style=for-the-badge&logo=pug&logoColor=black&style=flat"],
            ["Styled-Component", "https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white&style=flat"]
          ],
        },
        {
            icon: "text-blue-accent-700 text-4xl fa-solid fa-code",
            title: "BackEnd",
            skills: [
              ["NodeJS", "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white&style=flat"],
              ["Express", "https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&style=flat"],
              ["MySQL", "https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white&style=flat"],
              ["MongoDB", "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white&style=flat" ],
              ["Python", "https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white&style=flat"], 
              ["Mongoose", "https://img.shields.io/badge/Mongoose-800?logo=mongoose&logoColor=fff&style=flat&style=flat"],
              ["NPM", "	https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white&style=flat"],
              ["Google Firebase", "https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black&style=flat"]
            ],
          },
          {
            icon: "text-blue-accent-700 text-4xl fa-solid fa-screwdriver-wrench",
            title: "Others",
            skills: [
              ["C++", "https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white&style=flat"],
              ["JAVA", "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white&style=flat"],
              ["GitHub", "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white&style=flat"], 
              ["PostMan", "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white&style=flat"],
              ["Git", "https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff&style=flat"],
              ["Netlify", "https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white&style=flat"],
              ["VSCode", "https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?logo=visualstudiocode&logoColor=fff&style=flat"],
              ["Render", "https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white&style=flat"],
              ["IntelliJ", "https://img.shields.io/badge/IntelliJ%20IDEA-000?logo=intellijidea&logoColor=fff&style=flat"],
              ["Leetcode", "	https://img.shields.io/badge/-LeetCode-FFA116?style=for-the-badge&logo=LeetCode&logoColor=black&style=flat"]
            ],
          }
    ]

  return ( 
      <div
      id="skills"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      >
      <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 -right-28 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="df31b9f6-a505-42f8-af91-d2b7c3218e5c"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#df31b9f6-a505-42f8-af91-d2b7c3218e5c)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">My Skills</span>
          </span>
        </h2>
      </div>
      <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
        {allSkills.map((skill, index) => (
          <div key={index} className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 mx-auto sm:w-24 sm:h-24">
            <i
              className={`${skill.icon} text-blue-700`}
              aria-hidden="true"
            ></i>
          </div>
          <h6 className="mb-2 font-semibold leading-5 border-b-2 pb-4">
            {skill.title}
          </h6>
          {skill.skills.map((item, index1) => (
            <>
              <p
                key={index1}
                className=" inline-flex mr-2"
                >
                  {<img src={item[1]} alt={item[0]} />}
              </p>
            </>
          ))}
        </div>
        ))}
      </div>
    </div>
  )
}
