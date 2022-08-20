import React from "react";
//import "./Styles.css";
import Main from "./views/Main";
import AutoresForm from "./views/AutoresForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from "./views/Update";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/new' element={<AutoresForm />} />
          <Route exact path='/edit/:edit' element={<Update/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
