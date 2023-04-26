import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    const currentYear = new Date().getFullYear();

<<<<<<< HEAD
    return (
        <footer className="footer" style={{ color: "#16181e" }}>
            innerfamous.com &copy; {currentYear}
            <p>
                <a
                    href="https://twitter.com/innerfamousone"
                    className="twitter-social"
                    style={{ color: "#16181e" }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faTwitter} size="1x" />
                </a>
                <a
                    href="https://www.linkedin.com/in/thomas-edwards-0739598/"
                    className="linkedin-social"
                    style={{ color: "#16181e" }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedinIn} size="1x" />
                </a>
                <a
                    href="https://www.instagram.com/innerfamous/"
                    className="instagram-social"
                    style={{ color: "#16181e" }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faInstagram} size="1x" />
                </a>
                <a
                    href="https://www.facebook.com/profile.php?id=100088780985542"
                    className="facebook-social"
                    style={{ color: "#16181e" }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faFacebook} size="1x" />
                </a>
=======
    return(
        <footer className="footer" style={{color: "#16181e"}}>innerfamous.com &copy; {currentYear}
            <p> 
                <a href="https://twitter.com/innerfamousone" target="_blank" rel="noopener noreferrer" className="twitter-social" style={{color: "#16181e"}}><FontAwesomeIcon icon={faTwitter} size="1x"/></a>
                <a href="https://www.linkedin.com/in/thomas-edwards-0739598/" target="_blank" rel="noopener noreferrer" className="linkedin-social" style={{color: "#16181e"}}><FontAwesomeIcon icon={faLinkedinIn} size="1x"/></a>
                <a href="https://www.instagram.com/innerfamous/" className="instagram-social" target="_blank" rel="noopener noreferrer" style={{color: "#16181e"}}><FontAwesomeIcon icon={faInstagram} size="1x"/></a>
                <a href="https://www.facebook.com/profile.php?id=100088780985542" target="_blank" rel="noopener noreferrer" className="facebook-social" style={{color: "#16181e"}}><FontAwesomeIcon icon={faFacebook} size="1x" /></a> 
>>>>>>> 0db1084b4080b30e500141202c18258dd3b7acf2
            </p>
            <a
                href="/admin"
                style={{ fontSize: "small", color: "#16181e" }}
                className="link"
            >
                Account
            </a>
        </footer>
    );
}

export default Footer;
