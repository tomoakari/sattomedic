import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import './Upload.css'
import { Footer } from "./Footer";

export const Upload = () => {
  
  return (
    <div className="App">
      <h1>保険証のアップロード</h1>
      
      <div className='button'>
        <Link to="/credit">アップロード</Link>
      </div>
      <Footer></Footer>
    </div>
  )
}

