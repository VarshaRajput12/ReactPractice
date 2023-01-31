import React from "react";
import Greeting from "./JsCode";
import { myName, myAge } from "./JsCode";

function CurrTimeDate() {
  // let date = new Date().toLocaleDateString()
  // let time = new Date().toLocaleTimeString()
  const style = {
    color: "green",
    backgroundColor: "yellow",
    fontFamily: "cursive",
  };

  return (
    <>
      {/* <h1>hello world</h1>
      <p contentEditable="true">current date {date}</p>
      <p>current time {time}</p> */}
      <h1>
        Hello, <span style={style}>{Greeting}</span>
      </h1>
      <h1>{myName}</h1>
      <h1>{myAge}</h1>
    </>
  );
}

export default CurrTimeDate;
