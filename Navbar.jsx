import React from 'react'
import logo from './logo/dark-theme.svg'
import './Navbar.css';
import tata from './logo/logo-tata.svg';
// import {Link} from 'react-router-dom'; 
const Navbar = () => {

  // const Navbar=()=>{
  //   <ul>
  //         <li><a href='#'>What we do</a></li>
  //         <li><a href='#'>Who we are</a></li>
  //         <li><a href='#'>Insights</a></li>
  //         <li><a href='#'>Careers</a></li>
  //         <li><a href='#'>Investors</a></li>
  //   </ul>
  
  return (
    <section>
      <article>

      {/* hamburger */}

      <div className='ham'>
        <i class="fa-solid fa-bars"></i>
      </div>

      {/* logo */}
        <div className='logo'>
          <img src={logo}/>
        </div>
      
      

      {/* lists */}
      <div className='hamburger'>
        <ul>

          <li><a href='#'>What we do</a></li>
        
          <li><a href='#'>Who we are</a></li>
        
          <li><a href='#'>Insights</a></li>
       
          <li><a href='#'>Careers</a></li>
       
          <li><a href='#'>Investors</a></li>
       
        </ul>
      </div>


      {/* right footer for navbar */}
      <div className='navbar-footer'>
        <ul>
          <li><a href='#'><b>CONTACT US</b></a></li>
          <li><a href='#'><b>TCS WORLDWIDE</b></a></li>
        </ul>
      </div>
       {/* search-icon */}

      <div className='footer'>
       <span className='search-icon'>
          <i class="fa-solid fa-magnifying-glass"></i>
        </span>

        {/* tata-logo */}
        <span className='tata'>
        <img src={tata}/>
        </span>

      </div>
      </article>
    </section>
   
  )
}

export default Navbar


 