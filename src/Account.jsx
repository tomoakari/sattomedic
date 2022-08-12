import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import './Account.css'
import { Footer } from "./Footer";

export const Account = () => {
  
  return (
    <div className="Account">
      <h3>受診情報の編集</h3>
      <p className="inputwapper2">
        <input placeholder="姓"></input><input placeholder="名"></input>
      </p>
      <p className="inputwapper2">
        <input placeholder="せい"></input><input placeholder="めい"></input>
      </p>
      <p className="inputwapper1">
        <input placeholder="電話番号"></input>
      </p>
      <p className="inputwapper1">
        <input placeholder="生年月日（ex. 1990/10/08）"></input>
      </p>
      <p className="inputwapper2">
        <input placeholder="性別"></input>
      </p>
      <p className="inputwapper1">
        <input placeholder="郵便番号"></input>
      </p>
      <p className="inputwapper2">
        <input placeholder="都道府県"></input>
      </p>
      <p className="inputwapper1">
        <input placeholder="住所"></input>
      </p>
      <p className="inputwapper1">
        <input placeholder="建物名・部屋名"></input>
      </p>

      
      <div className='button'>
        <Link to="/upload">保存</Link>
      </div>
      <Footer></Footer>
    </div>
  )
}

