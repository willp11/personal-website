import './about.css';
import Avatar from '../../Assets/Avatar.png';

const About = () => {
    return (
        <div className="About" id="About">
            <h2>About me</h2>
            <div className="AboutWrapper">
                <div className="AboutImage">
                    <img src={Avatar} alt=""/>
                </div>
                <div className="AboutContent">
                    <p>
                        I am a full-stack software engineer, from the UK, with a passion for designing, building and deploying high-quality web applications.
                    </p>
                    <p>
                        My main stack is Python's Django for building APIs, React SPA front-end and MySQL or PostgreSQL database.
                    </p>
                    <p>
                        I have a strong knowledge of computer science fundamentals and software engineering best-practices. and the full software development lifecycle, from
                        idea conception to product delivery into a production environment.
                    </p>
                    <p>You can find more information about my educational background and work experience on my <a href="/William-Page-cv.pdf">resume</a>.</p>
                </div>
            </div>
        </div>
    );
}

export default About;