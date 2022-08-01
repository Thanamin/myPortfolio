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
                            <a>Colmar</a>
                            <img src="../../public/Project/Jammming.jpg" />
                        </div>
                        <div className="box">
                            <a>Find My Hat</a>
                            <img src="../../public/Project/Jammming.jpg" />
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
                            <a>Fit2Be</a>
                            <img src="../../public/Project/Jammming.jpg" />
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
