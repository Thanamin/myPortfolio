import "./Hello.css";
import "./HelloMobile.css";

export const Hello = () => {
  return (
    <div id="Hello">
      <div className="Hello-box">
        {/* Profile img */}
        <img src="./Picture/profile-v01.png" />
        <div className="Hello-text">
          <a className="Hello-text-1">
            <span>Hello !! My Name is</span>
          </a>
          <a className="Hello-text-3">Thanamin Akkharananwinit</a>
          <a className="Hello-text-4">(Seeking Junior Software Developer)</a>
          <br />

          {/* Link Component */}
          <div className="Hello-text-Link">
            <a
              className="Link-Github"
              href="https://github.com/Thanamin"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./GitHub-Mark/PNG/GitHub-Mark-120px-plus.png" alt="" />
            </a>
            <a
              className="Link-LinkedIn"
              href="https://www.linkedin.com/in/thanamin-akkharananwinit-7150b2240/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="./LinkedIn-Icon/icons8-linkedin-circled-60.png"
                alt=""
              />
            </a>
            <a
              className="Link-Email"
              href="mailto: thanamin.akk@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./Email-Icon/email-icon-256px.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
