import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import './Waitingroom.css'
import { Footer } from "./Footer";
import doctorimage from './assets/doctor.jpg'

export const Waitingroom = () => {

  return (
    <div className="Waitingroom">
      <h3>音声と映像を確認</h3>
      <p>8月20日（土）14:30 ~ 15:00</p>
      <div className="imagewrapper mb-30">
        <img src={doctorimage} className="doctorimage"/>
      </div>
      <div className='button'>
        <a href="https://conference.aice.cloud/?secret=6a39e4b20e0e057de6f01746fea92f22" target="_blank">オンライン診察室に入室</a>
      </div>
      <Footer></Footer>
    </div>
  )
}

