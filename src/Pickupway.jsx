import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import './Pickupway.css'
import { Footer } from "./Footer";

export const Pickupway = () => {
  
  return (
    <div className="Pickupway">
      <h3>薬の受け取り方</h3>

      <div className="selectcard">
        <input type="radio" name="isFirst" value="true" />薬局を指定する（推奨）
        <p className="notes">提携の薬局から選択する</p>
      </div>
      <div className="selectcard mb-20">
        <input type="radio" name="isFirst" value="false"/>あとで決める
        <p className="notes">診療時に先生と相談して決める</p>
      </div>

      <div className="selectcard bg-blue">
        <h4>料金</h4>
        <table>
          <tr><td>システム利用料</td><td>--</td></tr>
          <tr><td>診療費用</td><td>診療後に確定</td></tr>
        </table>
      </div>


      <div className='button'>
        <Link to="/waitingroom">この内容で申し込む</Link>
      </div>
      <Footer></Footer>
    </div>
  )
}

