import React from 'react'
import { useEffect } from 'react';
const Aboutme = () => {

    // useEffect(() => {
        const techStack = [
            {name: "ReactJs",
                link: "https://react.dev/"},
            {name: "Javascript",
            link: "https://www.javascript.com/"},
            {name:"JQuery",
            link: "https://jquery.com/"},
            {name: "HTML",
            link: "https://developer.mozilla.org/en-US/docs/Web/HTML"},
            {name: "CSS",
            link: "https://web.dev/learn/css"},
            {name: "SASS",
            link: "https://sass-lang.com/"},
            {name: "NodeJS",
            link: "https://nodejs.org/en"},
            {name: "Express JS",
            link: "https://expressjs.com/"},
            {name: "Redux",
            link: "https://redux.js.org/"},
            {name: "graphQL",
            link: "https://graphql.org/"},
            {name:"mySQL",
            link: "https://www.mysql.com/"},
            {name: "MongoDB",
            link: "https://www.mongodb.com/"},
            {name: "Github",
            link: "https://github.com/home?ef_id=_k_CjwKCAjwoPOwBhAeEiwAJuXRh_YlmJu8eUO-A6A_DnVz9Shyl6356pbtmUjvvL22ZBBHjf95csr4eBoC6q0QAvD_BwE_k_&OCID=AIDcmm153qff2f_SEM__k_CjwKCAjwoPOwBhAeEiwAJuXRh_YlmJu8eUO-A6A_DnVz9Shyl6356pbtmUjvvL22ZBBHjf95csr4eBoC6q0QAvD_BwE_k_&gad_source=1&gclid=CjwKCAjwoPOwBhAeEiwAJuXRh_YlmJu8eUO-A6A_DnVz9Shyl6356pbtmUjvvL22ZBBHjf95csr4eBoC6q0QAvD_BwE"},
            {name: "Git",
            link: "https://git-scm.com/"},
        ];

        const stack = techStack.map((tech) =>

        <div className='tech-box'>
           

            <p>{tech.name}</p>
        </div>
        );

  return (
    <section id='aboutme-section'>

        <div className='aboutme-container'>

        <h1> &#123; About me &#125;</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra adipiscing at in tellus integer feugiat. Eget mi proin sed libero enim sed faucibus turpis in. Mauris pharetra et ultrices neque. Morbi tristique senectus et netus et malesuada. Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Sed vulputate odio ut enim blandit volutpat. Sed vulputate odio ut enim blandit volutpat maecenas volutpat.</p>

        <div className='tech-stack'>
            <h1> &#123; Tech Stack &#125;</h1>

        <div id='tech-stack-container'>
             {/* tech boxes here */}
             { stack }
            
        </div>

        </div>



        </div>
    </section>
  )
}

export default Aboutme