import React from "react"
import memesData from "./memesData.js"

export default function Body(){
    const [memeImage, setMemeImage] = React.useState("");
    const [formData, setFormData] = React.useState({
        topCaption: "",
        bottomCaption: ""
    })

    console.log(formData);

    function handleChange(event){
        event.preventDefault()
        const {name, value} = event.target;
        setFormData( prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

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
                    name="topCaption"
                    value={formData.topCaption}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="input"
                    name="bottomCaption"
                    value={formData.bottomCaption}
                    onChange={handleChange}
                />
                <button 
                    className="button"
                    onClick={getNewImage}
                >
                    Get a new meme image
                </button>
            </div>

            <div className="meme">
                <img src={memeImage} className="image" />
                <h2 className="text top">{formData.topCaption}</h2>
                <h2 className="text bottom">{formData.bottomCaption}</h2>
            </div>

        </main>
    )
}