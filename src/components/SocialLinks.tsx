import instagramIcon from "../assets/images/logo-instagram.png";
import linkedinIcon from "../assets/images/logo-linkedin.png";
import webIcon from "../assets/images/logo-web.png";

import "../styles/SocialLinks.css";

export default function SocialLinks() {
  return (
    <div className="social-links" aria-label="Redes sociales">
      <a
        href="https://www.instagram.com/savioslatam/"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram Savios Latam"
        title="Instagram"
      >
        <img src={instagramIcon} alt="Instagram" />
      </a>

      <a
        href="https://www.linkedin.com/company/savioslatam/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn Savios Latam"
        title="LinkedIn"
      >
        <img src={linkedinIcon} alt="LinkedIn" />
      </a>

      <a
        href="https://savios.com.co/"
        target="_blank"
        rel="noreferrer"
        aria-label="Sitio web Savios"
        title="Sitio web"
      >
        <img src={webIcon} alt="Web" />
      </a>
    </div>
  );
}