import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import './Waitingroom.css'
import { Footer } from "./Footer";

export const Waitingroom = () => {

  return (
    <div className="Waitingroom">
      <h1>音声と映像を確認</h1>
      
      <div className='button'>
        <Link to="/videoroom">ビデオ検診ルームに入室</Link>
      </div>
      <Footer></Footer>
    </div>
  )
}

