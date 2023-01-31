import React, { useState } from 'react'

function Emoji() {

    const [selectEmoji, setSelectemoji] = useState("🤠")

    const emoji = ["😀","😂","😂","🤣","😋","😅","😆","😉","😊","😎","😍","😘","🥰","😗","🤨","🤔","🤩","🤗","😚","😑","😐","🤐","😪","😫","🥱","😴","😛","🙃","😤","😨","😬","🤯","🥶","🥵","😰","🤑","😜","😲","🤬","😡","😈","🥺","🥳","🤧","🧐","🤓","🤭","🤫","🤥","😷","🥶","🤤","😝","😭","😢","😶","🙁","😞","😟","😧","🥴","🤢","🤕"];

    const handleClick = ()=>{
        const randomIndex = Math.floor(Math.random() * emoji.length);
        setSelectemoji(emoji[randomIndex])
    }

  return (
    <div className='container'>
      <span>{selectEmoji}</span>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default Emoji