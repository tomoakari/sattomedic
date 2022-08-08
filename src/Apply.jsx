import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import './Apply.css'
import { Footer } from "./Footer";

export const Apply = () => {
  
  return (
    <div className="App">
      <h1>受診申し込み</h1>
      
      <div className='button'>
        <Link to="/account">登録して次へ</Link>
      </div>
      <Footer></Footer>
    </div>
  )
}

