import './home.css';
import Bg from '../../Assets/Computer-bg.jpg';
import ActionButton from '../ActionButton/actionButton';

const Home = () => {

    return (
        <div className="Home">
            <div className="HomeInfo">
                <div className="HomeTitle">
                    <h1 style={{"color":"#ad0303"}}>Hello!</h1><h1 style={{"paddingLeft": "20px"}}>I'm Will</h1>
                </div>
                <h2>Full-stack Developer</h2>
                {/* <img className="HomeImagePlaceholderMobile" src={Bg} alt=""/> */}
                <div className="HomeInfoParagraph">
                    <p>I am a freelance Software Developer with a passion for writing clean code in both front-end and back-end to create high quality web applications.
                    </p>
                    <p>Read my blog to find articles and tutorials
                         about the different technologies I am currently working with!
                    </p>
                </div>
                <a href="#About"><ActionButton content="Learn More"/></a>
            </div>
            <div className="HomeImage">
                <img className="HomeImagePlaceholder" src={Bg} alt=""/>
            </div>
        </div>
    )
}

export default Home;