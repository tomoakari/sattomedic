import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import Calendar from 'react-calendar';

import './Reserve.css'
import { Footer } from "./Footer";


export const Reserve = () => {

  return (
    <div className="Reserve">
      <h3>予約可能日</h3>
      <Calendar locale="en-US"  />
      <div className="reservetime">
        <p>
          <input type="radio" name="reservetime" value="10"/>10:00 ~ 10:30
        </p>
        <p>
          <input type="radio" name="reservetime" value="10"/>10:30 ~ 11:00
        </p>
        <p>
          <input type="radio" name="reservetime" value="10"/>11:00 ~ 11:20
        </p>
        <p>
          <input type="radio" name="reservetime" value="10"/>11:30 ~ 12:00
        </p>
        <p>
          <input type="radio" name="reservetime" value="10"/>13:00 ~ 13:30
        </p>
        <p>
          <input type="radio" name="reservetime" value="10"/>13:30 ~ 14:00
        </p>
          
      </div>
      <div className='button'>
        <Link to="/apply">決定</Link>
      </div>
      <Footer></Footer>
    </div>
  )
}

