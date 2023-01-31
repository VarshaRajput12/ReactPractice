import React from "react";


function Card(props) {
//   console.log(props);
  return (
    <>
      <div>
        <div className="card">
          <img src={props.imgSrc} alt="image" width="20%"/>
          <div className="card_info">
            <span className="category"></span>
            <h3 className="title">{props.title}</h3>
            <a href={props.link} target="_blank">
              <button>Play</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
