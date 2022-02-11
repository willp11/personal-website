import './notFound.css';
import ActionButton from '../ActionButton/actionButton';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="NotFound">
            <h1>404</h1>
            <h2>Page not found!</h2>
            <Link to="/"><ActionButton content="Back to Home" /></Link>
        </div>
    )
}

export default NotFound;