import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {

    const menuAnimation = (e) => {
        if (e.target.id === "menuIcon") {
            e.target.classList.toggle("change");
            if (e.target.parentNode.lastChild.classList.contains("hide")) {
                e.target.parentNode.lastChild.classList.remove("hide");
                e.target.parentNode.lastChild.classList.add("show");
            } else {
                e.target.parentNode.lastChild.classList.add("hide");
                e.target.parentNode.lastChild.classList.remove("show");
            }
        } else {
            e.target.parentNode.classList.toggle("change");
            if (e.target.parentNode.parentNode.lastChild.classList.contains("hide")) {
                e.target.parentNode.parentNode.lastChild.classList.remove("hide");
                e.target.parentNode.parentNode.lastChild.classList.add("show");
            } else {
                e.target.parentNode.parentNode.lastChild.classList.add("hide");
                e.target.parentNode.parentNode.lastChild.classList.remove("show");
            }
        }
    }

    /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-50px";
        }
        prevScrollpos = currentScrollPos;
    }

    return (
        <header className="Header" id="navbar">
            <div className="Logo">
                <Link to="/"><p>William Page</p></Link>
                {/* <p className="HeaderJobTag">Software Developer</p> */}
            </div>
            <div className="Menu">
                <Link to="/"><p>Home</p></Link>
                <a href="/William-Page-cv.pdf"><p>Resume</p></a>
                <Link to="/blog"><p>Blog</p></Link>
                <a href="https://github.com/willp11" target="_blank" rel="noreferrer"><p>Github</p></a>
            </div>
            <div className="MenuIcon" id="menuIcon" onClick={(e)=>menuAnimation(e)}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            <div className="MenuDropdown hide">
                <Link to="/"><p>Home</p></Link>
                <a href="/William-Page-cv.pdf"><p>Resume</p></a>
                <Link to="/blog"><p>Blog</p></Link>
                <a href="https://github.com/willp11" target="_blank" rel="noreferrer"><p>Github</p></a>
            </div>
        </header>
    )
}

export default Header;