import "./Education.css";
import "./EducationMobile.css";

export const Education = () => {
  return (
    <div id="Education">
      <div className="Education-head">
        <a>Education</a>
      </div>

      {/* Part 1 */}
      <div className="Education-part1">
        <div className="Education-part1-left">
          <a className="Education-a-1">Generation Thailand</a>
          <a className="Education-a-2">Junior Software Developer Bootcamp</a>
          <div className="Education-part1-right-mobile">
            <h4>(Jun.2022 - Sep.2022)</h4>
          </div>
          <div className="Education-detail">
            <h3>
              Learn HTML, CSS, Bootstrap, JavaScript, Reactjs, Nodejs, Express,
              MongoDB BSM: Problem solving, Time management, Communication,
              Agile Scrum, Project management <br />
              Projects:
              <br />
              - Colemar (HTML, CSS)
              <br />
              - Find Your Hat (JaveScript)
              <br />
              - JAMMMING (Reactjs)
              <br />- iTracker (MERN stacks)
            </h3>
          </div>
        </div>
        <div className="Education-part1-right">
          <a className="Education-a-2">Jun.2022 - Sep.2022</a>
        </div>
      </div>

      {/* Part 2 */}
      <div className="Education-part2">
        <div className="Education-part2-left">
          <a className="Education-a-1">Srinakharinwirot University</a>
          <a className="Education-a-2">Bachelor's degree in Chemical Engineering</a>
          <div className="Education-part2-right-mobile">
            <h4>(Jun.2012 - Sep.2017)</h4>
          </div>
          <div className="Education-detail">
            <h3>
              Chemical engineers conceive and design processes involved in
              chemical manufacturing. The main role of chemical engineers is to
              design and troubleshoot processes for the production of chemicals,
              fuels, foods, pharmaceuticals, and biologicals, to name just a
              few. They are most often employed by large-scale manufacturing
              plants to maximize productivity and product quality while
              minimizing costs.
            </h3>
          </div>
        </div>
        <div className="Education-part2-right">
          <a className="Education-a-2">Jun.2012 - Sep.2017</a>
        </div>
      </div>
    </div>
  );
};
