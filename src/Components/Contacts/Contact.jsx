import "./contact.css"
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
    return (
        <div id="contact" className="contact-container">
            <div className="contact-left">
                <div className="contact-intro">
                    Fix Apointment <br />
                    <button>sign up</button><br /> <br />
                    Contact me with:
                    <div className="contact-links">
                        <a href="https://www.instagram.com/sus_me_ta/"><FaInstagram /></a>
                        <a href="https://www.facebook.com/susmita.shrestha.14"><FaFacebookSquare /></a>
                        <a href="#"><FaViber /></a>
                        <a href="#"><FaWhatsapp /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}