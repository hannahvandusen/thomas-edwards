import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

function Footer() {

    const currentYear = new Date().getFullYear();

    return(
        <footer className="footer">Copyright innerfamous.com &copy; {currentYear}

        <p> <a href="https://twitter.com/innerfamousone" className="twitter-social"> <FontAwesomeIcon icon={faTwitter} size="2x" /></a> </p>
        <p> <a href="https://www.instagram.com/innerfamous/" className="instagram-social"> <FontAwesomeIcon icon={faInstagram} size="2x" /></a> </p>
        <p> <a href="https://www.facebook.com/profile.php?id=100088780985542" className="facebook-social"> <FontAwesomeIcon icon={faFacebook} size="2x" /></a> </p>
<<<<<<< HEAD
        <a href="/admin/login" style={{fontSize: "small"}}> Admin</a>
=======
        <a href="/admin/" style={{fontSize: "small"}}>Admin</a>
>>>>>>> 6a7471c873a441d2d9d19a6d6154584a1b321a33
        </footer>
    )
}

export default Footer;
