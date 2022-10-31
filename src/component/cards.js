import React from "react";
import {CardItem} from "./cardItem";
import "./card.css"

export function Cards(){


    return (<div className="cards">
        <h1> Check out these EPIC Destinations!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                 <CardItem 
                 src="images/img-9.jpg"
                 text="Explore the hidden waterfall deep inside the amazon jungle"
                 label="Adventure"
                 path="/services"
                 
                 />
                 <CardItem 
                 src="images/img-2.jpg"
                 text="Explore the hidden waterfall deep inside the amazon jungle"
                 label="Luxury"
                 path="/services"
                 
                 />
                </ul>
                <ul className="cards__items">
                 <CardItem 
                 src="images/img-9.jpg"
                 text="Explore the hidden waterfall deep inside the amazon jungle"
                 label="Adventure"
                 path="/services"
                 
                 />
                 <CardItem 
                 src="images/img-2.jpg"
                 text="Explore the hidden waterfall deep inside the amazon jungle"
                 label="Luxury"
                 path="/services"
                 
                 />
                  <CardItem 
                 src="images/img-2.jpg"
                 text="Explore the hidden waterfall deep inside the amazon jungle"
                 label="Luxury"
                 path="/services"
                 
                 />
                </ul>

            </div>

        </div>
         
    </div>)
}