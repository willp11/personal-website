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
            title: "Front-end",
            skills: [
                {
                    image: {src: htmlLogo, height: "30px", width: "30px"},
                    skill: "HTML",
                    description: [
                        "Very strong knowledge of HTML5.",
                        "Structures web pages effectively, in order to boost SEO rankings and provide accessibility to all users."
                    ]
                },
                {
                    image: {src: cssLogo, height: "30px", width: "30px"},
                    skill: "CSS",
                    description: [
                        "Strong knowledge of CSS3.",
                        "Creates responsive websites using flexbox and grid.",
                        "Can create websites to perfectly match any design passed on from a design team."
                    ]
                },
                {
                    image: {src: reactLogo, height: "30px", width: "35px"},
                    skill: "React JS",
                    description: [
                        "Over 2 years experience using React JS.",
                        "Experienced with both class-based and functional components.",
                        "Strong knowledge of all React hooks.",
                        "Comfortable using Redux for state management.",
                        "Experienced using Jest for testing",
                        "Other third-party libraries; React-router for URL routing, React-lottie for animations, React-reveal for reveal animation."
                    ]
                }
            ]
        },
        {
            title: "Back-end Web Frameworks",
            skills: [
                {
                    image: {src: flaskLogo, height: "30px", width: "30px"},
                    skill: "Flask",
                    description: [
                        "Implement high quality web applications and REST APIs.",
                        "Use Flask and related libraries to create models, views and routes.",
                        "Flask-migrate for database migrations.",  
                        "Flask SQLAlchemy for object-relational mapping.", 
                        "Flask Login for session management."
                    ]
                },
                {
                    image: {src: djangoLogo, height: "30px", width: "30px"},
                    skill: "Django",
                    description: [
                        "Implement high quality web applications and REST APIs.",
                        "Use Django and the Django REST framework to create models, views, routes, serializers and unit tests.",
                        "FactoryBoy for database model factories."
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
                        "Ability to design and implement relational databases using MySQL.", 
                        "Experienced using MySQL Shell and Workbench."
                    ]
                },
                {
                    image: {src: postgresqlLogo, height: "30px", width: "30px"},
                    skill: "PostgreSQL",
                    description: [
                        "Ability to design and implement relational databases using PostgreSQL."
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
                        "Strong knowledge of the inner workings of the Solana blockchain and it's accounts model.",
                        "Ability to write Solana on-chain programs, using both pure-Rust and Anchor framework.",
                        "Experienced deploying custom Solana programs to devnet and mainnet.",
                        "Experienced deploying Metaplex Candy-machine to devnet and mainnet.",
                        "Comfortable with Solana libraries, including; web3/js, spl-token and spl-metadata."
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
                        "Very experienced using Git for version control and CI/CD within teams of developers.",
                        "Comfortable creating branches, pull requests, merging and all other main functionality found within Git."
                    ]
                }
            ]
        },
    ]

    const skillsBoards = skills.map((board) => {
        const skillsDiv = board.skills.map((skill)=>{
            return (
                <Skill image={skill.image} skill={skill.skill} description={skill.description} key={skill.skill}/>
            );
        });
        return (
            <Fade bottom key={board.title}>
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