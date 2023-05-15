import "./Footer.css";
const Footer = () => {
    return (
        <footer>
            <a
                href="https://twitter.com/explore"
                target="_blank"
                rel="noreferrer"
            >
                <i className="fa-brands fa-twitter fa-2x"></i>
            </a>
            <a
                href="https://in.linkedin.com/someone"
                target="_blank"
                rel="noreferrer"
            >
                <i className="fa-brands fa-linkedin fa-2x"></i>
            </a>
            <a
                href="https://openweathermap.org/api"
                target="_blank"
                rel="noreferrer"
            >
                <i className="fa-solid fa-cloud-sun fa-2x"></i>
            </a>
            <a href="mailto: abhinay.sinha_cs.aiml20@gla.ac.in">
                <i className="fa-solid fa-envelope fa-2x"></i>
            </a>
        </footer>
    );
};

export default Footer;
