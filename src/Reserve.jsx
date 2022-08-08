import { BrowserRouter, Link, Routes, Route } from "react-router-dom"

import './Reserve.css'
import { Footer } from "./Footer";

export const Reserve = () => {

  return (
    <div className="Reserve">
      <h1>予約可能日</h1>
      
      <div className='button'>
        <Link to="/apply">決定</Link>
      </div>
      <Footer></Footer>
    </div>
  )
}

