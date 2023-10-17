import React from "react"

export default function Body(){
    return (
        <main>
            <form className="controls">
                <input 
                    type="text"
                    placeholder="Top text"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                />
                <button>Get a new image</button>
            </form>
        </main>
    )
}