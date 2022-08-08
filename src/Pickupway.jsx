import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import './Pickupway.css'
import { Footer } from "./Footer";

export const Pickupway = () => {
  
  return (
    <div className="App">
      <h1>薬の受け取り方</h1>

      <div className='button'>
        <Link to="/waitingroom">この内容で申し込む</Link>
      </div>
      <Footer></Footer>
    </div>
  )
}

