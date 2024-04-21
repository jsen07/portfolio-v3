import React from 'react'

const Hero = () => {
  return (
    <section className='hero-section'>
        <div className='hero-container'>
            <div className='header-portfolio'>
                <h1> PORTFOLIO. </h1>
            </div>
            <div className='avatar-container'>
                <div className='square'>
                <div className='circle'></div>
                </div>
            </div>
        </div> 

        <div className='sub-header'>
            <div className='sub-header-content'>
            <h1> &#123; Full Stack Developer &#125; </h1>

            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div className='profile-links'>
            <a href="https://www.google.co.uk/" target="_blank"  rel="noreferrer"><li id="cv"></li></a>
            <a href="https://www.google.co.uk/" target="_blank"  rel="noreferrer"><li id="gh"> </li></a>
            <a href="https://www.google.co.uk/" target="_blank"  rel="noreferrer"><li id="linkedin" ></li></a>
            <a href="https://www.google.co.uk/" target="_blank"  rel="noreferrer"><li id="con"></li> </a> 

                
            </div>

            </div>


        </div>

    </section>
  )
}

export default Hero