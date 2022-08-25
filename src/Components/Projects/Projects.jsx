import "./Projects.css";
import "./ProjectsMobile.css";

export const Project = () => {
  return (
    <div id="Project">
      <div>
        <div className="Project-head">
          <a>Project</a>
        </div>

        <div className="Project-box">
          <div className="Project-col1">
            <div className="box">
              <a
                href="https://thanamin.github.io/colmar/"
                target="_blank"
                rel="noreferrer"
              >
                Colmar
              </a>
              <a href="https://thanamin.github.io/colmar/" target="_blank">
                <img src="./Project/ColmarV2.jpg" />
              </a>
            </div>
            <div className="box">
              <a
                href="https://replit.com/@ThanaminAkkhara/Find-Your-Hat-20Thanamin-Minmin#index.js"
                target="_blank"
                rel="noreferrer"
              >
                Find Your Hat
              </a>
              <a
                href="https://replit.com/@ThanaminAkkhara/Find-Your-Hat-20Thanamin-Minmin#index.js"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./Project/FindYourHatV2.jpg" />
              </a>
            </div>
          </div>

          <div className="Project-col2">
            <div className="box">
              <a
                href="http://thanamin_jammming.surge.sh/"
                target="_blank"
                rel="noreferrer"
              >
                Jammming
              </a>
              <a
                href="http://thanamin_jammming.surge.sh/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./Project/JammmingV2.jpg" />
              </a>
            </div>
            <div className="box">
              <a
              a
              href="https://fit2be-project-thanamin.vercel.app/"
              target="_blank"
              rel="noreferrer">Fit2Be</a>
              <a href="https://fit2be-project-thanamin.vercel.app/"
                target="_blank"
                rel="noreferrer"><img src="./Project/2befitV2.jpg" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
