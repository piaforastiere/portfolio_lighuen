import React,{ useState, useEffect} from 'react'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaYoutube, FaEnvelope }from 'react-icons/fa'
import $ from 'jquery'

import Press from './Press'
import Contact from './Contact'


const Nav = () => {
   const [contactOpen, setContactOpen] = useState(false)
   const [isotope, setIsotope] = useState(null);
   const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    var jQueryBridget = require('jquery-bridget');

    $('.navbar-toggler').click(function(){
      $('.collapse').toggleClass('active')
      $('.navbar-toggler div').toggleClass('active')
    })

  }, [])

  const handleClick = () => {
    window.location.reload()
  }


  return(
    <nav className="sticky-top navbar navbar-expand-lg navbar-light">

    {
      contactOpen &&
        <Contact {...contactOpen} closeContact={() => setContactOpen(false)}/>
      }
        <Link href="/">
        <a className="navbar-brand" onClick={handleClick}>LIGHUEN <br/><span>DESANTO</span></a>
        </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <div className="navbar-toggler-icon-top"></div>
            <div className="navbar-toggler-icon-bottom"></div>
          </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav left-nav">
          <Link href="/" >
            <li className="nav-item active">
              <a className="nav-link" onClick={handleClick}>Home <span className="sr-only">(current)</span></a>
            </li>
          </Link>
          <Link href="/press">
            <li className="nav-item">
              <a className="nav-link">Press</a>
            </li>
          </Link>
          </ul>
          <ul className="navbar-nav right-nav">
            <li className="nav-item">
              <a className="nav-link" href="https://www.facebook.com/lighuendesantophoto/" target="_blank"><FaFacebookF /></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.instagram.com/lighuendesanto/?hl=es" target="_blank"><FaInstagram /></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.youtube.com/user/LighuenDesanto" target="_blank"><FaYoutube /></a>
            </li>
            <li className="nav-item" onClick={() => setContactOpen(true)}>
              <a className="nav-link" href="#"><FaEnvelope /></a>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default Nav
