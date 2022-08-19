import React from "react";
//import "./Styles.css";
import Main from "./views/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Detail from "./views/Detail";
//import Update from "./components/Update";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
