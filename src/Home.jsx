import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import './Home.css'
import { Footer } from "./Footer";

export const Home = () => {
  
  return (
    <div className="Home">
      <div className='button'>
        <Link to="/reserve">予約可能日を見る</Link>
      </div>
      <Footer></Footer>
    </div>
  )
}

