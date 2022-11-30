import React from "react";

import Image1 from "../assets/cat.jpeg"

export default function ImageLibrary() {
    return (
        <div style={{display: "none"}}>
            <img id="image1" src={Image1} width="30" height="23" />
        </div>
    )
}
