import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header  from "./components/Header";
import './App.css';
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
