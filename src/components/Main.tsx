import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://github.com/Jaydeng75.png" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Jaydeng75" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="mailto:chessp750@gmail.com" target="_blank" rel="noreferrer"><MailIcon/></a>
          </div>
          <h1>Jayden Jeswin Raj</h1>
          <p>Software Engineer & Cybersecurity Enthusiast</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Jaydeng75" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="mailto:chessp750@gmail.com" target="_blank" rel="noreferrer"><MailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
