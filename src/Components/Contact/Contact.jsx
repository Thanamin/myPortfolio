import "./Contact.css";
import "./ContactMobile.css";

export const Contact = () => {
  return (
    <div id="Contact">
      <div className="Contact-banner">
        <div className="Contact-head">
          <a>Contact</a>
        </div>
        <div className="Contact-city">
          <a>Bankok, Thailand</a>
        </div>
        <div className="Tel">
          <a>Tel : 088-5706796</a>
        </div>

        <div className="Contact-logo">
          <a
            className="Github"
            href="https://github.com/Thanamin"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="./GitHub-Mark/PNG/GitHub-Mark-64px.png"
              alt=""
            />
            GitHub
          </a>
          <a
            className="LinkedIn"
            href="https://www.linkedin.com/in/thanamin-akkharananwinit-7150b2240/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="./LinkedIn-Icon/icons8-linkedin-circled-60.png"
              alt=""
            />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};
