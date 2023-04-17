import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

function Footer() {

    const currentYear = new Date().getFullYear();

    return(
       <footer className="footer" style={{color: "#c2cdc0"}}>innerfamous.com &copy; {currentYear}

        <p> <a href="https://twitter.com/innerfamousone" className="twitter-social" style={{color: "#c2cdc0"}}> <FontAwesomeIcon icon={faTwitter} size="1x" /></a>
        <a href="https://www.instagram.com/innerfamous/" className="instagram-social" style={{color: "#c2cdc0"}}> <FontAwesomeIcon icon={faInstagram} size="1x" /></a>
        <a href="https://www.facebook.com/profile.php?id=100088780985542" className="facebook-social" style={{color: "#c2cdc0"}}> <FontAwesomeIcon icon={faFacebook} size="1x" /></a> </p>
        <a href="/admin/" style={{fontSize: "small"}} className="link">Admin</a>
        </footer>
    )
}

export default Footer;
