import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import './Credit.css'
import { Footer } from "./Footer";

export const Credit = () => {
  
  return (
    <div className="Credit">
      <h3>クレジットカードの登録</h3>
      <p className="inputwapper1">
        <input placeholder="カード番号"></input>
      </p>
      
      <p className="inputwapper3">
        <span className="notes">有効期限</span><br/>
        <input placeholder="xx月"></input>/<input placeholder="xx年"></input>
      </p>
      <p className="inputwapper2">
        <input placeholder="セキュリティ番号"></input>
      </p>
      <p className="inputwapper1">
        <input placeholder="名義"></input>
      </p>
      
      <div className='button'>
        <Link to="/pickupway">登録</Link>
      </div>
      <Footer></Footer>
    </div>
  )
}

