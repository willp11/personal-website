import './actionButton.css';

const ActionButton = (props) => {
    return (
        <button className="ActionButton">{props.content}</button>
    );
}

export default ActionButton;