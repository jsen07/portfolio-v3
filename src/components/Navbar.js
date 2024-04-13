import React from 'react'


const Navbar = () => {
  return (
    <section className='navbar'>

        <div className='logo'> Logo </div>

        {/* hamburger menu */}
        <div className='hamburger-wrapper'>
        <div className='hamburger-nav isActive'>
            <div className='bar-1'></div>
            <div className='bar-2'></div>
            <div className='bar-3'></div>
        </div>
        </div>


{/* 
        desktop nav */}
        <div className='nav-links'>
            <li><a> About me </a></li>
            <li><a> Projects </a></li>
            <li><a> Contact </a></li>
            
        </div>

    
    </section>
  )
}

export default Navbar