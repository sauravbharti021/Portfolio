
import React from 'react'
import { createContext, useState } from 'react'

export const Toggle = createContext() 

export default function MenuToggleProvider({children}) {

  const dict = {
    "HTML": "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white&style=flat",
    "CSS": "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white&style=flat",
    "ReactJS": "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB&style=flat",
    "JavaScript": "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E&style=flat",
    "TailwindCSS": "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white&style=flat",
    "Bootstrap": "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white&style=flat",
    "jQuery": "https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white&style=flat",
    "Pug": "https://img.shields.io/badge/Pug-E3C29B?style=for-the-badge&logo=pug&logoColor=black&style=flat",
    "Styled-Component": "https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white&style=flat",
    "NodeJS": "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white&style=flat",
    "Express": "https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&style=flat",
    "MySQL": "https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white&style=flat",
    "MongoDB": "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white&style=flat",
    "Python": "https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white&style=flat",
    "Mongoose": "https://img.shields.io/badge/Mongoose-800?logo=mongoose&logoColor=fff&style=flat&style=flat",
    "NPM": "https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white&style=flat",
    "Google Firebase": "https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black&style=flat",
    "C++": "https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white&style=flat",
    "JAVA": "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white&style=flat",
    "GitHub": "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white&style=flat",
    "PostMan": "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white&style=flat",
    "Git": "https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff&style=flat",
    "Netlify": "https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white&style=flat",
    "VSCode": "https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?logo=visualstudiocode&logoColor=fff&style=flat",
    "Render": "https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white&style=flat",
    "IntelliJ": "https://img.shields.io/badge/IntelliJ%20IDEA-000?logo=intellijidea&logoColor=fff&style=flat",
    "Leetcode": "https://img.shields.io/badge/-LeetCode-FFA116?style=for-the-badge&logo=LeetCode&logoColor=black&style=flat",
    "ContextAPI" : "https://img.shields.io/badge/Context--Api-000000?style=for-the-badge&logo=react&style=flat",
    "Socket.io" : "https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101&style=flat"
  }
  

    const [isMenuToggleOpen, setIsMenuToggleOpen] = useState(false)
    const value= {
        isMenuToggleOpen,
        setIsMenuToggleOpen,
        dict
    }
  return (
    <Toggle.Provider value={value}>{children}</Toggle.Provider>
  )
}
