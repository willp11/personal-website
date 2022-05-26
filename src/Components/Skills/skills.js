import './skills.css';
import Skill from '../Skill/skill';
import SkillBoard from '../SkillBoard/skillBoard';

import htmlLogo from '../../Assets/html.png';
import cssLogo from '../../Assets/css.png';
import reactLogo from '../../Assets/react.png';
import mysqlLogo from '../../Assets/mysql.png';
import postgresqlLogo from '../../Assets/postgreSQL.jpg';
import flaskLogo from '../../Assets/flask.png';
import djangoLogo from '../../Assets/django.png';
import solanaLogo from '../../Assets/solana.jpg';
import gitLogo from '../../Assets/git.png';

import { Fade } from 'react-reveal';

const Skills = () => {

    const skills = [
        {
            title: "Back-end",
            skills: [
                {
                    image: {src: djangoLogo, height: "30px", width: "30px"},
                    skill: "Django",
                    description: [
                        "Django is my preferred Python framework.",
                        "Can build both REST APIs and monolithic web applications using Django.",
                        "Strong understanding of all areas of the Django framework and related libraries including Django REST Framework.",
                        "Experienced using dj-rest-auth and allauth for user authentication."
                    ]
                },
                {
                    image: {src: flaskLogo, height: "30px", width: "30px"},
                    skill: "Flask",
                    description: [
                        "Can build REST APIs using Flask and related libraries.",
                        "Experienced with Flask-migrate for database migrations.",  
                        "Flask SQLAlchemy for object-relational mapping.", 
                        "Flask Login for user authentication."
                    ]
                }
            ]
        },
        {
            title: "Front-end",
            skills: [
                {
                    image: {src: reactLogo, height: "30px", width: "35px"},
                    skill: "React JS",
                    description: [
                        "Over 2 years experience with React JS.",
                        "Can write both function-based and class-based components.",
                        "Solid understanding of all React hooks.",
                        "Knowledge of app optimization with effective use of useCallback and useMemo.",
                        "Experienced using Redux for state management.",
                        "Experienced using Jest for testing."
                    ]
                },
                {
                    image: {src: htmlLogo, height: "30px", width: "30px"},
                    skill: "HTML",
                    description: [
                        "Strong knowledge of HTML5.",
                        "Good understanding of how to structure web pages effectively.",
                        "Knowledge of using HTML to help boost SEO ranking."
                    ]
                },
                {
                    image: {src: cssLogo, height: "30px", width: "30px"},
                    skill: "CSS",
                    description: [
                        "Strong knowledge of CSS3.",
                        "Can create beautiful and responsive websites.",
                        "Ability to create websites following wireframes passed on from a design team."
                    ]
                }
            ]
        },
        {
            title: "Databases",
            skills: [
                {
                    image: {src: mysqlLogo, height: "25px", width: "45px"},
                    skill: "MySQL",
                    description: [
                        "Can effectively implement relational databases using MySQL."
                    ]
                },
                {
                    image: {src: postgresqlLogo, height: "30px", width: "30px"},
                    skill: "PostgreSQL",
                    description: [
                        "Can effectively implement relational databases using PostgreSQL."
                    ]
                }
            ]
        },
        {
            title: "Version Control",
            skills: [
                {
                    image: {src: gitLogo, height: "30px", width: "30px"},
                    skill: "Git",
                    description: [
                        "Very experienced using Git for version control.",
                        "Comfortable creating branches, pull requests, merging and all other main functionality found within Git."
                    ]
                }
            ]
        },
        {
            title: "Web3 / Smart contracts",
            skills: [
                {
                    image: {src: solanaLogo, height: "30px", width: "30px"},
                    skill: "Solana",
                    description: [
                        "Strong knowledge of the Solana blockchain architecture.",
                        "Ability to write Solana on-chain programs, using both pure-Rust and Anchor framework.",
                        "Experienced deploying custom Solana programs to devnet and mainnet.",
                        "Experienced deploying Metaplex Candy-machine to devnet and mainnet.",
                        "Comfortable with Solana libraries, including; web3/js, spl-token and spl-metadata."
                    ]
                }
            ]
        }
    ]

    const skillsBoards = skills.map((board) => {
        const skillsDiv = board.skills.map((skill)=>{
            return (
                <Skill image={skill.image} skill={skill.skill} description={skill.description} key={skill.skill}/>
            );
        });
        return (
            <Fade left key={board.title}>
                <SkillBoard title={board.title} skills={skillsDiv} key={board.title}/>
            </Fade>
        )
    })

    return (
        <div className="Skills" id="Skills">
            <h2>Skills</h2>
            {skillsBoards}
        </div>
    )
}

export default Skills;