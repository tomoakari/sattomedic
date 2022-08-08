import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import './Videoroom.css'
import { Footer } from "./Footer";

export const Videoroom = () => {

  return (
    <div className="Videoroom">
      <h1>ビデオ通話</h1>

      <div className='button'>
        <Link to="/home">退室</Link>
      </div>
      <Footer></Footer>
    </div>
  )
}

