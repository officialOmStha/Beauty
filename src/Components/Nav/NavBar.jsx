import "./nav.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';


export default function Nav() {
    return (
        <header>
            <h1>Sushmita</h1>
            <nav>
                <input type="checkbox" id="sidebar-active" />
                <label htmlFor="sidebar-active" className="open-sidebar-button">
                    <FontAwesomeIcon className="icc" icon={faBars} />
                </label>
                <label id="overlay" htmlFor="sidebar-active"></label>
                <div className="links-container">
                    <label htmlFor="sidebar-active" className="close-sidebar-button">
                        <FontAwesomeIcon className="icc" icon={faXmark} />
                    </label>
                    <a href="#home">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Works</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                </div>
            </nav>
        </header>
    )
}