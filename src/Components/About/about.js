import './about.css';
// import TestAboutImg from '../../Assets/TestAboutImg.jpg';
import Avatar from '../../Assets/Avatar.png';
// import ActionButton from '../ActionButton/actionButton';

// import htmlLogo from '../../Assets/html.png';
// import cssLogo from '../../Assets/css.png';
// import reactLogo from '../../Assets/react.png';
// import nodeLogo from '../../Assets/node.png';
// import mysqlLogo from '../../Assets/mysql.png';
// import postgresqlLogo from '../../Assets/postgreSQL.jpg';
// import flaskLogo from '../../Assets/flask.png';
// import djangoLogo from '../../Assets/django.png';
// import pythonLogo from '../../Assets/python.jpg';
// import solanaLogo from '../../Assets/solana.jpg';
// import rustLogo from '../../Assets/rust.png';
// import gitLogo from '../../Assets/git.png';

const About = () => {
    return (
        <div className="About" id="About">
            <h2>About me</h2>
            <h3>Let me introduce myself.</h3>
            <div className="AboutWrapper">
                <div className="AboutImage">
                    <img src={Avatar} alt=""/>
                </div>
                <div className="AboutContent">
                    <p>
                        I am a full-stack software engineer, from the UK, that enjoys building and deploying high quality web applications.
                        I have a strong interest in financial markets and trading, originating from my first batchelor's degree in Economics, which led to the desire to learn
                        to code in order to automate some of my strategies. I quickly realised that my true passion is writing software and decided to return to university
                        to study Computer Science in order to transition into a new career as a software engineer.
                    </p>
                    <p>
                        My main stack is Python backend, Django or Flask web-frameworks, MySQL or PostgreSQL database and React for the frontend JavaScript framework. 
                        I also have experience developing blockchain applications on the Solana blockchain, using Rust for the smart contracts with a React JS frontend.
                    </p>
                    <p>
                        My current goals are to continue learning and developing my programming skills and collaborate with other talented software engineers to create products
                        that are used on a large scale and make a difference to the world.
                    </p>
                    <p>
                        I have a very strong knowledge of computer science fundamentals, software engineering best-practices and the full software development lifecycle, from
                        idea conception to product delivery into a production environment.
                    </p>
                    <p>For more information, please read my <a href="/William-Page-cv.pdf">Resume</a>.</p>
                </div>
            </div>
        </div>
    );
}

export default About;