import React, { useState } from "react";
import memeData from "../memeData";

function Meme() {
  //   const [randomImage, setRandomImage] = useState("");
  const [state, setState] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });
  const [allMemes, setAllMemes] = useState(memeData);
  function getRandomImage(e) {
    e.preventDefault();
    const memesArray = allMemes.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    // setRandomImage(allMemes[randomNumber].url);
    setState((prev) => ({
      ...prev,
      randomImage: memesArray[randomNumber].url,
    }));
  }

  return (
    <div className="meme--container">
      <form className="meme--form">
        <input type="text" placeholder="Enter top text"></input>
        <input type="text" placeholder="Enter bottom text"></input>
        <button onClick={(e) => getRandomImage(e)}>Get a new meme image</button>
        {state.randomImage && (
          <div className="meme--image--container">
            <h1 className="top--text">Top Text</h1>
            <h1 className="bottom--text">Bottom Text</h1>
            <img src={state.randomImage} />
          </div>
        )}
      </form>
    </div>
  );
}

export default Meme;
