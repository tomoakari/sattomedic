import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import './App.css'

import { Login } from "./Login";
import { Upload } from "./Upload";
import { Home } from "./Home";
import { Account } from "./Account";
import { Apply } from "./Apply";
import { Credit } from "./Credit";
import { Pickupway } from "./Pickupway";
import { Reserve } from "./Reserve";
import { Videoroom } from "./Videoroom";
import { Waitingroom } from "./Waitingroom";

import { Header } from "./Header";

function App() {
  return (
    
    //<BrowserRouter basename={process.env.PUBLIC_URL}>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="App">
        <Link to="/">top</Link>
        <br />
        <Link to="/Login">login</Link>
        <br />
        <Link to="/Upload">upload</Link>
        

        
      <Header></Header>
        <Routes>
          {/* exactをつけると完全一致になります。Homeはexactをつけてあげます */}
          <Route exact path='/' element={<Login/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/upload' element={<Upload/>} />
          <Route path='/account' element={<Account/>} />
          <Route path='/apply' element={<Apply/>} />
          <Route path='/credit' element={<Credit/>} />
          <Route path='/pickupway' element={<Pickupway/>} />
          <Route path='/reserve' element={<Reserve/>} />
          <Route path='/videoroom' element={<Videoroom/>} />
          <Route path='/waitingroom' element={<Waitingroom/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
