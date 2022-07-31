import "./Navbar.css";

export const Navbar = () => {
  return (
    <div id="Navbar">
      <div className="Navbar-Link">
        <div className="Navbar-blank"></div>

        <a href="#Home">Home</a>
        <a href="#AboutMe">About</a>
        <a href="#Experience">Experience</a>
        <a href="#Project">Project</a>
        <a href="#Skill">Skill</a>
        <a href="#Resume">Resume</a>
      </div>
    </div>
  );
};
