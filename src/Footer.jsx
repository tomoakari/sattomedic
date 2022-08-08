import './Footer.css'
import { BrowserRouter, Link, Routes, Route } from "react-router-dom"

export const Footer = () =>  {

  return (
    <div className="Footer">
      <div><Link to="/home">Home</Link></div>
      <div><Link to="/search">Search</Link></div>
      <div><Link to="/message">Message</Link></div>
      <div><Link to="/account">Account</Link></div>
    </div>
  )
}

