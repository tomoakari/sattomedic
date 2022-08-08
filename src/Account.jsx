import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import './Account.css'
import { Footer } from "./Footer";

export const Account = () => {
  
  return (
    <div className="App">
      <h1>受診情報の編集</h1>
      
      <div className='button'>
        <Link to="/upload">アップロード</Link>
      </div>
      <Footer></Footer>
    </div>
  )
}

