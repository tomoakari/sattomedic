import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import './App.css'

import { Login } from "./Login";
import { Upload } from "./Upload";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/Login">login</Link>
        <br />
        <Link to="/Upload">upload</Link>
        

        <Routes>
          {/* exactをつけると完全一致になります。Homeはexactをつけてあげます */}
          <Route exact path='/' element={<Login/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/upload' element={<Upload/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
