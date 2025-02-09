import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Body";
import './App.css';

import Header from "./Header";
/**
 * -header
 * -body
 * -footer
 */
const App =()=>{
 return (
  <div className="app">
  <Header/>
  <Body/>
  </div>
 )

}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
