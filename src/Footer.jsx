import './Footer.css'
import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import homeicon from './assets/homeicon.svg'
import searchicon from './assets/searchicon.svg'
import envelopeicon from './assets/envelopeicon.svg'
import usericon from './assets/usericon.svg'

export const Footer = () =>  {

  return (
    <div className="Footer">
      <div>
        <Link to="/home">
          <img src={homeicon} className="footericon"/>
          <p>HOME</p>
        </Link>
      </div>
      <div>
        <Link to="/search">
          <img src={searchicon} className="footericon"/>
          <p>SEARCH</p>
        </Link>
      </div>
      <div>
        <Link to="/message">
          <img src={envelopeicon} className="footericon"/>
          <p>MESSAGE</p>
        </Link>
      </div>
      <div>
        <Link to="/account">
          <img src={usericon} className="footericon"/>
          <p>ACCOUNT</p>
        </Link>
      </div>
    </div>
  )
}

