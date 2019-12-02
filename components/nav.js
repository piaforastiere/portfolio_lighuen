import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaVimeoV, FaEnvelope }from 'react-icons/fa'

const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav className="sticky-top navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="lighuen.html">LIGHUEN <br/><span>DESANTO</span></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav left-nav">
          <li className="nav-item active">
            <a className="nav-link" href="lighuen.html">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="lighuen.html#filters">Galerry</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="press.html">Press</a>
          </li>
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
          <li className="nav-item">
            <a className="nav-link" href="#"><FaEnvelope /></a>
          </li>
        </ul>
      </div>
    </nav>
)

export default Nav
