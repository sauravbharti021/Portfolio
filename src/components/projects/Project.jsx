import React from 'react'
import { useContext } from 'react'
import { Toggle } from '../../context/MenuToggleProvider'
import Project1 from '../../assets/Project1.png'
import Project2 from '../../assets/Project2.png'
import Project3 from '../../assets/Project3.png'
import Project4 from '../../assets/Project4.png' 
import Project5 from '../../assets/Project5.png'
import Project6 from '../../assets/Project6.png'

export default function Project() {
    const {dict} = useContext(Toggle)

    const projects = [
        {

            title : "User-Management System",
            subTitle : "Data manipulation app", 
            description : 
                "A responsive and dynamic web application for user management leveraging the MERN stack with user addition/updation/deletion, multiple parameters filtering and pagination for seamless user management",
            image: Project1,
            technologies: [
                "ReactJS",
                "MongoDB",
                "Express",
                "Bootstrap",
                "CSS",
                "NPM",
                "Netlify",
                "Render"
            ],
            github: "https://github.com/sauravbharti021/CSV-crud-backend",
            live: "https://user-management-system-saurav.netlify.app/",
            demo: "https://www.youtube.com/watch?v=3-X8G39ippo&feature=youtu.be"
        }
        ,
        {
          title: "Movie-Watchlist",
          subTitle: "Scheduler app",
          description: "Created watchlist and watched-movies functionality, allowing users to add their favorite movies to respective lists for future reference utilizing local storage in JavaScript",
          image: Project2,
          technologies: [
            "ReactJS",
            "ContextAPI",
            "JavaScript",
            "HTML",
            "CSS",
            "NodeJS",
            "NPM"
          ],
          github: "https://github.com/sauravbharti021/movie-watchlist",
          live: "https://movie-watchlist-saurav.netlify.app/",
          demo: "https://www.youtube.com/watch?v=yNCeWp6Gvdk",
        },
        {
          title: "Billa CP",
          subTitle: "E-Learning",
          description: "An E-learning Responsive and Dynamic website using HTML,CSS and JavaScript as Front-end. Collections of important resources for beginners regarding competitive programming and web developing",
          image: Project3,
          technologies: [
            "HTML",
            "CSS",
            "NodeJS",
            "JavaScript",
            "Pug",
            "MongoDB",
            "Express",
            "Render"
          ],
          github: "https://github.com/sauravbharti021/Dynamic-website-with-backend",
          live: "https://billacp.onrender.com/home",
          demo: "https://www.youtube.com/watch?v=8PUq4rHhe2g"
        },
        {
          title: "Street-Shop",
          subTitle: "E-Commerce",
          description: "A shopping site for different categories of Clothes. Single Page application allowing users seamless experience. Google Firebase used for authenticationa and as Database.",
          image: Project4,
          technologies: [
            "Google Firebase",
            "ReactJS",
            "Styled-Component",
            "Netlify",
            "JavaScript",
            "Bootstrap"
          ],
          github: "https://github.com/sauravbharti021/Street-Shop-",
          live: "https://golden-meringue-65dec5.netlify.app/"
        },
        {
          title: "Chatworld",
          subTitle: "Social Media",
          description: "Chatworld is a social media application that allows users to create account and interact with other active users. It is buiilt using JavaScript, Socket.io and CSS",
          image: Project5,
          technologies:[ 
            "JavaScript",
            "Socket.io",
            "HTML",
            "CSS",
            "NPM",
            "Render"
          ],
          github: "https://github.com/sauravbharti021/ChatWorld-socket.io",
          live: "https://realworld-chat-app.onrender.com/"

        },
        {
          title: "Kyu Bane Crorepati",
          subTitle: "Quiz-app",
          description : "Replica of famous Indian quiz game ( Kon banega Crorepati), using React hooks and javascript",
          image: Project6,
          technologies: [
            "ReactJS",
            "ContextAPI",
            "JavaScript",
            "CSS",
            "Netlify"
          ],
          github: "https://github.com/sauravbharti021/Quiz-app",
          live: "kyu-bane-crorepati.netlify.app/"
        }

    ]

  return (
    <div id="projects" className="bg-gray-900">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mx-auto mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
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
              <span className="relative">Projects</span>
            </span>
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-800 flex flex-col overflow-hidden transition-shadow duration-300 rounded shadow-md"
            >
              <img
                src={project.image}
                className="object-cover w-full h-64"
                alt=""
              />
              <div className="p-5 flex flex-col bg-white flex-1">
                <h1 className="inline-block mb-3 text-2xl font-bold leading-5">
                  {project.title}
                </h1>
                <h2 className="inline-block text-gray-600 mb-3 text-xl font-bold leading-5">
                  {project.subTitle}
                </h2>
                <p className="mb-2 text-gray-700">{project.description}</p>
                <div className="flex flex-wrap space-x-2 mt-5">
                  <h2 className="inline-block text-gray-600 mb-3 text-xl font-bold leading-5">
                    Technologies:
                  </h2>
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 mb-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full"
                    >
                      {<img src={dict[tech]} alt={tech} />}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap space-x-2 mt-5">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label=""
                    className="inline-flex px-4 py-2 border-black    items-center transform font-semibold border transition duration-300 hover:scale-105 shadow hover:shadow-lg"
                  >
                    Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label=""
                    className="inline-flex bg-blue-500 hover:bg-blue-700 shadow hover:shadow-lg px-4 py-2 items-center font-semibold transition duration-300 hover:scale-105 text-white"
                  >
                    Source Code
                  </a>
                  {
                    project.demo && 
                    <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label=""
                    className="inline-flex bg-green-500 hover:bg-green-700 shadow hover:shadow-lg px-4 py-2 items-center font-semibold transition duration-300 hover:scale-105 text-white"
                  >
                    Demo
                  </a>
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
