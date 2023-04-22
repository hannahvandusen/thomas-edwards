import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

function Footer() {

    const currentYear = new Date().getFullYear();

    return(
       <footer className="footer" style={{color: "#16181e"}}>innerfamous.com &copy; {currentYear}

        <p> <a href="https://twitter.com/innerfamousone" target="_blank" className="twitter-social" style={{color: "#16181e"}}><FontAwesomeIcon icon={faTwitter} size="1x"/></a>
        <a href="https://www.linkedin.com/in/thomas-edwards-0739598/" target="_blank" className="linkedin-social" style={{color: "#16181e"}}><FontAwesomeIcon icon={faLinkedinIn} size="1x"/></a>
        <a href="https://www.instagram.com/innerfamous/" target="_blank" className="instagram-social" style={{color: "#16181e"}}><FontAwesomeIcon icon={faInstagram} size="1x"/></a>
        <a href="https://www.facebook.com/profile.php?id=100088780985542" target="_blank" className="facebook-social" style={{color: "#16181e"}}><FontAwesomeIcon icon={faFacebook} size="1x" /></a> </p>
        <a href="/admin/" style={{fontSize: "small", color: "#16181e"}} className="link">Admin</a>
        </footer>
    )
}

export default Footer;
