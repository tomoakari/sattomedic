import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import './Home.css'
import { Footer } from "./Footer";

export const Home = () => {
  
  return (
    <div className="Home">
      <h3>東京淡路町耳鼻科</h3>

      <div className="hometab">
        <div>メニュー</div>
        <div>医療機関情報</div>
        <div>診療時間</div>
      </div>
      <div className="homecontent mb-10">
        <h3>オンライン診療メニュー</h3>
        <div>
          <input type="radio" name="isFirst" value="true"/>初診
        </div>
        <div>
          <input type="radio" name="isFirst" value="false"/>再診
          <div>
            <p>前回の診療</p>
            1月10日：アレルギー性鼻炎の診察および処方
          </div>
        </div>
      </div>


      <div className='button'>
        <Link to="/reserve">予約可能日を見る</Link>
      </div>
      <Footer></Footer>
    </div>
  )
}

