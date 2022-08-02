// import { MyName } from "../MyName/MyName";
import "./Hello.css";

export const Hello = () => {
  return (
    <div id="Hello">
      <div className="Hello-box">
        <img src="../../../Picture/profile-test.png" />
        <div className="Hello-text">
          {/* <MyName /> */}
          <a className="Hello-text-1"><span>Hello !! My Name is</span></a>
          {/* <a className="Hello-text-2">My Name is</a> */}
          <a className="Hello-text-3">Thanamin Akkharananwinit</a>
          <a className="Hello-text-4">(Seeking Jr.Fullstack Developer)</a><br/>
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
