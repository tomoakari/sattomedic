import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import './Upload.css'
import { Footer } from "./Footer";

export const Upload = () => {
  
  return (
    <div className="Upload">
      <div className="coverbg"></div>
      <div className='uploadbuttonarea'>
        <p className="note">画像をアップロード</p>
        <p className="bt pt-1em"><Link to="/credit">アップロード</Link></p>
        <p className="bt pt-1em"><Link to="/credit">撮影する</Link></p>
      </div>
      <Footer></Footer>
    </div>
  )
}

