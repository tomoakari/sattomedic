import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import './Credit.css'
import { Footer } from "./Footer";

export const Credit = () => {
  
  return (
    <div className="App">
      <h1>クレジットカードの登録</h1>
      
      <div className='button'>
        <Link to="/pickupway">登録</Link>
      </div>
      <Footer></Footer>
    </div>
  )
}

