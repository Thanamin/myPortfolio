import "./Contact.css";

export const Contact = () => {
  return (
    <div id="Contact">
      <div>
        <a>Contact</a>
        <a>Bankok, Thailand</a>
        <a className="Email" href="mailto: thanamin.akk@gmail.com" >thanamin.akk@gmail.com</a>
        <a className="Github" href="https://github.com/Thanamin" target="_blank" rel="noreferrer">
          <img
            src="../../../public/GitHub-Mark/PNG/GitHub-Mark-32px.png"
            alt=""
          />
          GitHub
        </a>
        <a className="LinkedIn" href="https://www.linkedin.com/in/thanamin-akkharananwinit-7150b2240/" target="_blank" rel="noreferrer">
          <img
            src="../../../public/LinkedIn-Icon/icons8-linkedin-circled-60.png"
            alt=""
          />
          LinkedIn
        </a>
      </div>
    </div>
  );
};


