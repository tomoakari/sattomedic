import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import './Videoroom.css'

export const Videoroom = () => {

  return (
    <div className="Videoroom">
      <iframe src="https://conference.aice.cloud/?secret=6a39e4b20e0e057de6f01746fea92f22"></iframe>

      <div className='fab-long plb'>
        <Link to="/home">退室する</Link>
      </div>
    </div>
  )
}

