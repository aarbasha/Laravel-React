import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

function App() {
  return (
    <BrowserRouter>
      <div className="App">

         <Navbar />
        <div className="container">
          
          <Router />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
