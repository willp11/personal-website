import './about.css';
// import TestAboutImg from '../../Assets/TestAboutImg.jpg';
import Avatar from '../../Assets/Avatar.png';
import ActionButton from '../ActionButton/actionButton';

import htmlLogo from '../../Assets/html.png';
import cssLogo from '../../Assets/css.png';
import reactLogo from '../../Assets/react.png';
import nodeLogo from '../../Assets/node.png';
import mysqlLogo from '../../Assets/mysql.png';
import postgresqlLogo from '../../Assets/postgreSQL.jpg';
import flaskLogo from '../../Assets/flask.png';
import djangoLogo from '../../Assets/django.png';
import pythonLogo from '../../Assets/python.jpg';
import solanaLogo from '../../Assets/solana.jpg';
import rustLogo from '../../Assets/rust.png';
import gitLogo from '../../Assets/git.png';

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
                        I am a full-stack software developer from the UK, currently living in Chiang Mai, Thailand.
                        My software development journey started 5 years ago, in 2017. I started writing software as a hobby whilst working as an English teacher, but
                        it soon became clear that it was my passion and so I started the process of transitioning my career.
                    </p>
                    <p>
                        I have a very strong knowledge of computer science fundamentals, software engineering best-practices and the full software development lifecycle, from
                        idea conception to product delivery into a production environment. I gained these skills during my time studying for a Computer Science degree
                        from the University of London, Goldsmiths College and throughout my career thus far.
                    </p>
                    <p>
                        I am currently working as a freelance full-stack developer and have completed contracts developing user interfaces with React, APIs with Python and 
                        Solana smart contracts with Rust. 
                        Ideally, I am looking for a full-time permanent position within an amazing organisation. My goal is to work with interesting people to create exciting new products!
                    </p>
                    <p>For more information, please read my <a href="/">resume</a>.</p>
                </div>
            </div>
            <div className="SkillsSummary">
                <h4>Technologies</h4>
                <div className="LangsIcons">
                    <div className="LangsIconsRow">
                        <img src={htmlLogo} alt="HTML" style={{"height":"30px", "width":"30px"}}/>
                        <img src={cssLogo} alt="HTML" style={{"height":"30px", "width":"30px"}}/>
                        <img src={reactLogo} alt="HTML" style={{"height":"30px", "width":"35px"}}/>
                        <img src={mysqlLogo} alt="HTML" style={{"height":"25px", "width":"45px"}}/>
                        <img src={postgresqlLogo} alt="HTML" style={{"height":"30px", "width":"30px"}}/>
                        <img src={nodeLogo} alt="HTML" style={{"height":"30px", "width":"40px"}}/>
                    </div>
                    <div className="LangsIconsRow">
                        <img src={flaskLogo} alt="HTML" style={{"height":"30px", "width":"30px"}}/>
                        <img src={djangoLogo} alt="HTML" style={{"height":"30px", "width":"30px"}}/>
                        <img src={pythonLogo} alt="HTML" style={{"height":"30px", "width":"35px"}}/>
                        <img src={solanaLogo} alt="HTML" style={{"height":"30px", "width":"30px"}}/>
                        <img src={rustLogo} alt="HTML" style={{"height":"30px", "width":"30px"}}/>
                        <img src={gitLogo} alt="HTML" style={{"height":"30px", "width":"30px"}}/>
                    </div>
                </div>
            </div>
            <a href="#Skills"><ActionButton content="My Skills"/></a>
        </div>
    );
}

export default About;