// import { MyName } from "../MyName/MyName";
import "./Hello.css";

export const Hello = () => {
  return (
    <div id="Hello">
      <div className="Hello-box">
        <img src="../../../Picture/profile-test.png" />
        <div className="Hello-text">
          {/* <MyName /> */}
          <a><span>Hello...</span></a><br/><br/><br/>
          <a>My Name is Thanamin Akkharananwinit</a>
          <a>I want to be a Software Developer</a><br/>
          <div className="Hello-text-Link">
            <a
              className="Link-Github"
              href="https://github.com/Thanamin"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="../../../public/GitHub-Mark/PNG/GitHub-Mark-120px-plus.png"
                alt=""
              />
  
            </a>
            <a
              className="Link-LinkedIn"
              href="https://www.linkedin.com/in/thanamin-akkharananwinit-7150b2240/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="../../../public/LinkedIn-Icon/icons8-linkedin-circled-60.png"
                alt=""
              />

              
            </a>
            <a
              className="Link-Email"
              href="mailto: thanamin.akk@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="../../../public/Email-Icon/email-icon-256px.png"
                alt=""
              />

              
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
