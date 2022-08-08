import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import './Login.css'
import { Footer } from "./Footer";

export const Login = () => {

  return (
    <div className="App">
      <h1>Satto Medicへようこそ</h1>
      <div className='button'>
        <Link to="/home">ログイン</Link>
      </div>
      <div className='subbutton'>
        <Link to="/home">新規登録</Link>
      </div>
      <Footer></Footer>
    </div>
  )
}

