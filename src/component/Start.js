import React from "react";

import RufaidaCv from "../data/rufaida.pdf"

function Start (){
    return (
    <section id="start">
        <div className="start container">
            <div className="start-info" >   
                <p>Hello, <span></span></p>
                <p>My Name Is <span></span></p>
                <p>Rufaida <span></span></p>
                <a href={RufaidaCv} download="RufaidaCV.pdf" className="cta">Download CV</a>
            </div>   
        </div>
  </section>
    )
}
export default Start;