import "./Projects.css";

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
                            <a  href="https://thanamin.github.io/colmar/"
                                target="_blank"
                                rel="noreferrer">Colmar</a> 
                            <img src="../../public/Project/Colmar.jpg" />
                        </div>
                        <div className="box">
                            <a href="https://replit.com/@ThanaminAkkhara/Find-Your-Hat-20Thanamin-Minmin#index.js"
                                target="_blank"
                                rel="noreferrer">Find Your Hat</a>
                            <img src="../../public/Project/FindYourHat.jpg" />
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
                            <img src="../../public/Project/Jammming.jpg" />
                        </div>
                        <div className="box">
                            <a>2beFit</a>
                            <img src="../../public/Project/2befit.jpg" />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div>
                <button className="Project-Button-SeeMore" onClick="">See more on git hub</button>
            </div> */}
        </div>
    );
};
