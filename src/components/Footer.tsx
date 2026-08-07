import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Jaydeng75" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="mailto:chessp750@gmail.com" target="_blank" rel="noreferrer"><MailIcon/></a>
      </div>
      <p>A portfolio designed & built by <a href="https://github.com/Jaydeng75/react-portfolio-template" target="_blank" rel="noreferrer">Jayden Jeswin Raj</a> with 💜</p>
    </footer>
  );
}

export default Footer;