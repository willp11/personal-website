import './home.css';
import ActionButton from '../ActionButton/actionButton';

const Home = () => {

    return (
        <div className="Home">
            <div className="HomeInfo">
                <h1>Full-stack</h1>
                <h2>Software Engineer</h2>
                <a href="#About"><ActionButton content="Learn More"/></a>
            </div>
        </div>
    )
}

export default Home;