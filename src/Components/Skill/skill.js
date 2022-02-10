import './skill.css';

const Skill = (props) => {
    const image = props.image;
    const skill = props.skill;
    const description = props.description;

    const descriptionDiv = description.map((paragraph)=>{
        return (
            <p key={paragraph}>{paragraph}</p>
        )
    });

    return (
        <div className="Skill">
            <div className="SkillImgAndHeading">
                <div className="SkillImgWrapper">
                    <img src={image.src} style={{"height": image.height, "width": image.width}} alt=""/>
                </div>
                <div className="SkillHeadingWrapper">
                    <h4>{skill}</h4>
                </div>
            </div>
            <div className="SkillDescWrapper">
                {descriptionDiv}
            </div>
        </div>
    )
}

export default Skill;