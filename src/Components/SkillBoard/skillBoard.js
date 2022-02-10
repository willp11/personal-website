import './skillBoard.css';

const SkillBoard = (props) => {
    const title = props.title;
    const skillsDiv = props.skills;

    return (
        <div className="SkillBoard">
            <h3>{title}</h3>
            {skillsDiv}
        </div>
    )
}

export default SkillBoard;