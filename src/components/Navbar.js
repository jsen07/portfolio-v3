import React from 'react'

const Navbar = () => {


  return (
    <section className='navbar'>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"></link>
        <header className='nav-header'>
        <div className='logo'> [JD] </div>

        {/* hamburger menu */}
        <div className='hamburger-wrapper'>
        <div className='hamburger-nav' onClick={(e) => { 
            e.target.classList.toggle('isActive')
            const menu = document.querySelector('.hamburger-menu');
            menu.classList.toggle('isActive');
            
        }}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
        </div>
       
        </div>
        {/*       desktop nav */}
        <div className='nav-links'>
            <li><a href="#aboutme-section"> About me </a></li>
            <li><a> Projects </a></li>
            <li><a> Contact </a></li>
            
        </div>
        </header>

        <span className='hamburger-menu'>
            <li><a href="#aboutme-section"> About me </a></li>
            <li><a> Projects </a></li>
            <li><a> Contact </a></li>

        </span>

    
    </section>
  )
}

export default Navbar