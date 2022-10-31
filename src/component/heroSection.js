import React from "react";
import {Button} from "./button";
import "./heroSection.css";


export function HeroSection(props){


    return(
        <div className="hero-container">
          <video src="/videos/video-2.mp4" autoPlay loop muted typeof="video/mp4" />
          <h1> ADVENTURE LOADING.....</h1>
          <p>Are you ready to be swept your feet? </p>

          <div className="hero-btns"> 
          <Button className="btns" buttonStyle="btn--outline" buttonSize="btn-large">
            GET STARTED
         </Button>

         <Button className="btns" buttonStyle="btn--primary" buttonSize="btn-large">
            WATCH TRAILER <i className="far fa-play-circle"/>
         </Button>
          
          </div>
        </div>
    )
}