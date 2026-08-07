import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faShieldHalved, faCode } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "C",
    "C++",
    "JavaScript",
    "Python",
    "PHP",
    "Ruby",
    "Kotlin",
    "NestJS",
    "Prisma",
    "PostgreSQL",
    "Swagger/OpenAPI",
    "HTML",
    "CSS"
];

const labelsSecond = [
    "Penetration Testing",
    "Ethical Hacking",
    "Vulnerability Assessment",
    "Malware Analysis",
    "Reverse Engineering",
    "Firewall Configuration",
    "IDS/IPS (Snort, Suricata, OSSEC)",
];

const labelsThird = [
    "Data Structures",
    "Algorithms",
    "System Design",
    "Networking",
    "Linux Administration",
    "Docker",
    "Nginx",
    "HashiCorp Tools",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Backend & Web Development</h3>
                    <p>Experienced in building scalable applications with a focus on backend systems, databases, and robust APIs using modern tools like NestJS, Prisma, and PostgreSQL.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faShieldHalved} size="3x"/>
                    <h3>Cybersecurity</h3>
                    <p>Hands-on experience in penetration testing, vulnerability assessment, and defensive security. I practice exploitation, privilege escalation, and Active Directory attacks through advanced lab environments.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>Systems & Competitive Programming</h3>
                    <p>Strong foundation in data structures, algorithms, system design, and networking. I solve algorithmic problems competitively and work hands-on with Linux-based systems and DevOps tooling.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
