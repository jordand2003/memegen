import React from "react"
import memesData from "./memesData.js"

export default function Body(){
    const [memeImage, setMemeImage] = React.useState("");

    function getNewImage(){
        const memeArray = memesData.data.memes;
        const randomIndex = Math.floor(Math.random() * memeArray.length);
        setMemeImage(memeArray[randomIndex].url);
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="input"
                />
                <button 
                    className="button"
                    onClick={getNewImage}
                >
                    Get a new meme image
                </button>
            </div>
            <img src={memeImage} className="image" />
        </main>
    )
}