import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import './Videoroom.css'
import doctorimage from './assets/doctor_full.jpg'
import clientimage from './assets/woman.jpg'

export const Videoroom = () => {

  return (
    <div className="Videoroom">
      <div className="videowrapper">
        <img src={doctorimage} className="video"/>
      </div>
      <div className="clientwrapper">
        <img src={clientimage} className="clientvideo"/>
      </div>
      <div className='fab-long plb'>
        <Link to="/home">退室する</Link>
      </div>
    </div>
  )
}

