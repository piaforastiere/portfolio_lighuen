import React,{ useState} from 'react'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaVimeoV, FaEnvelope }from 'react-icons/fa'

import Press from './Press'
import Contact from './Contact'


const Nav = () => {
   const [contactOpen, setContactOpen] = useState(false)

  return(
    <nav className="sticky-top navbar navbar-expand-lg navbar-light">

    {
      contactOpen &&
        <Contact {...contactOpen} closeContact={() => setContactOpen(false)}/>
      }
        <Link href="/" title="lighuen desanto">
        <a className="navbar-brand">LIGHUEN <br/><span>DESANTO</span></a>
        </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav left-nav">
          <Link href="/" title="Home">
            <li className="nav-item active">
              <a className="nav-link" >Home <span className="sr-only">(current)</span></a>
            </li>
          </Link>
          <Link href="/press" title="Press">
            <li className="nav-item">
              <a className="nav-link">Press</a>
            </li>
          </Link>
          </ul>
          <ul className="navbar-nav right-nav">
            <li className="nav-item">
              <a className="nav-link" href="#"><FaFacebookF /></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><FaInstagram /></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><FaVimeoV /></a>
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
