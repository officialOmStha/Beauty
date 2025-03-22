import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import "./Nav/nav.css"

export default function ShowDiv() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <div
        onClick={() => setIsVisible(!isVisible)}
        style={{ padding: "20px", backgroundColor: "gray", color: "white", borderRadius: "5px", cursor: "pointer" }}
      >
        {isVisible ? <FontAwesomeIcon className="icc" icon={faXmark} /> : <FontAwesomeIcon  className="icc" icon={faBars} />}
      </div>
      {isVisible && (
          <div className="mobi" >
                <a href="#home">Home</a>
                <a href="#">About</a>
                <a href="#">Service</a>
                <a href="#">Contact us</a>
                <div className="menu-ic"><FontAwesomeIcon className="icc" icon={faXmark} /></div>
                </div>
      )}
    </div>
  );
}
