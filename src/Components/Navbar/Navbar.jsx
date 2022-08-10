import "./Navbar.css";

export const Navbar = () => {
  return (
    <div id="Navbar">
      <div className="Navbar-Link">
        <div className="Navbar-logo">
          <img src="../../public/Minnie_bear.png" />
        </div>

        <div className="Navbar-blank"></div>
        <a href="#Home">Home</a>
        <a href="#AboutMe">About</a>
        <a href="#Experience">Experience</a>
        <a href="#Project">Project</a>
        <a href="#Skill">Skill</a>
        <a
          href="https://drive.google.com/file/d/1IDSb45MzvFeXy7jjw5cliUgnLrW6BXv8/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
    </div>
  );
};
