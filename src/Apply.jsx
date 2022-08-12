import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import './Apply.css'
import { Footer } from "./Footer";

export const Apply = () => {
  
  return (
    <div className="Apply">
      <h3>受診申し込み</h3>
      <p className="notes">
        症状を入力してください
      </p>
      <textarea></textarea>
      
      <div className='button'>
        <Link to="/account">登録して次へ</Link>
      </div>
      <Footer></Footer>
    </div>
  )
}

