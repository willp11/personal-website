import './home.css';
import ActionButton from '../ActionButton/actionButton';
import bg from '../../Assets/bg-2.jpg';

const Home = () => {

    return (
        <div className="Home">
            <div className="HomeInfo">
                <h1>Full-stack</h1>
                <h2>Software Engineer</h2>
                <a href="#About"><ActionButton content="Learn More"/></a>
            </div>
            <div className="HomeImg">
                <img src={bg} alt=""/>
            </div>
        </div>
    )
}

export default Home;