import './home.css';
import Bg from '../../Assets/Scenes02.svg';
import ActionButton from '../ActionButton/actionButton';

const Home = () => {

    return (
        <div className="Home">
            <div className="HomeInfo">
                <div className="HomeTitle">
                    <h1 style={{"color":"#da1212"}}>Hello!</h1><h1 id="Name">I'm Will</h1>
                </div>
                <h2>Software Developer</h2>
                {/* <div className="HomeInfoParagraph">
                    <p>I am a freelance Software Developer with a passion for writing clean code in both front-end and back-end to create high quality web applications.
                    </p>
                    <p>I will be writing articles and tutorials for all my favourite technologies in my blog! Coming Soon!
                    </p>
                </div> */}
                <a href="#About"><ActionButton content="Learn More"/></a>
            </div>
            <div className="HomeImage">
                <img className="HomeImagePlaceholder" src={Bg} alt=""/>
            </div>
        </div>
    )
}

export default Home;