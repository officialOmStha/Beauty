import "./about.css"
import Card from "./AboutCard"

export default function About(){
    return(
        <div id="about" className="about-container">
            <div className="about-intro">
            Flawless. Fierce. You. Bringing Your Beauty Vision to Life
            </div>
            <div className="about-secc">
            <Card />
            </div>
        </div>
    )
}