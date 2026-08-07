import React from "react";
import mock10 from '../assets/images/mock10.png';
import mock09 from '../assets/images/mock09.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Jaydeng75/EcoLens" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Jaydeng75/EcoLens" target="_blank" rel="noreferrer"><h2>EcoLens</h2></a>
                <p>A Chrome extension providing real-time, explainable sustainability insights while shopping online. It analyzes product claims, detects greenwashing, and suggests eco-friendly alternatives using a weighted sustainability model. Built with JavaScript, HTML5, and the Chrome Extensions API (Manifest V3).</p>
            </div>
            <div className="project">
                <a href="https://github.com/Jaydeng75/ShellPilot" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Jaydeng75/ShellPilot" target="_blank" rel="noreferrer"><h2>ShellPilot</h2></a>
                <p>An event-driven AI copilot for the terminal that activates only when a command fails and helps developers recover safely. It diagnoses errors, suggests fixes, and self-learns from previous failures using Amazon Bedrock LLMs and Titan text embeddings. Built with Python.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
