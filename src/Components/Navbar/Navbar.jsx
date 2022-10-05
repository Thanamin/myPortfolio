import "./Navbar.css";
import "./NavbarMobile.css";
import {Link} from 'react-scroll'

export const Navbar = () => {
  return (
    <div id="Navbar">
      <div className="Navbar-Link">
        <div className="Navbar-logo">
        <Link spy={true} smooth={true} duration={500} to="Hello"><a href="#Hello"><img src="./Minnie_bear.png" /></a></Link>
        </div>

        {/* Link Navbar */}
        <div className="Navbar-blank"></div>
        <Link className="link" spy={true} smooth={true} duration={500} to="Hello"><a href="#Hello">Home</a></Link>
        <Link className="link" spy={true} smooth={true} duration={500} to="AboutMe"><a href="#AboutMe">About</a></Link>
        {/* <Link className="link" spy={true} smooth={true} duration={500} to="Education"><a href="#Education">Education</a></Link> */}
        <Link className="link" spy={true} smooth={true} duration={500} to="Experience"><a href="#Experience">Experience</a></Link>
        <Link className="link" spy={true} smooth={true} duration={500} to="Skill"><a href="#Skill">Skill</a></Link>
        <Link className="link" spy={true} smooth={true} duration={500} to="Project"><a href="#Project">Project</a></Link>
        <a id="link-resume"
          href="https://drive.google.com/file/d/1YYMtmTsgpodzswmCUdSHNIcErEOKNucw/view"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
    </div>
  );
};
