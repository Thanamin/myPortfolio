import "./Education.css";

export const Education = () => {
  return (
    <div id="Education">
      <div className="Education-head">
        <a>Education</a>
      </div>

      {/* Part 1 */}
      <div className="Education-part1">
        <div className="Education-part1-left">
          <h1>Generation Thailand</h1>
          <h2>Junior Software Developer Bootcamp</h2>
          <div className="Education-detail">
            <h3>
              TECHNICAL: HTML, CSS, Bootstrap, JavaScript, Reactjs, Nodejs,
              Express, MongoDB BSM: Problem solving, Time management,
              Communication, Agile Scrum, Project management <br />
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
          <h2>Jun.2022 - Sep.2022</h2>
        </div>
      </div>

      {/* Part 2 */}
      <div className="Education-part2">
        <div className="Education-part2-left">
          <h1>Srinakharinwirot University</h1>
          <h2>Bachelor's degree in Chemical Engineering</h2>
          <div className="Education-detail">
            <h3>
              อธิบายว่าทำอะไรในมหาลัย TECHNICAL: HTML, CSS, Bootstrap,
              JavaScript, Reactjs, Nodejs, Express, MongoDB BSM: Problem
              solving, Time management, Communication, Agile Scrum, Project
              management Projects: - Colemar (HTML, CSS) - Find Your Hat
              (JaveScript) - JAMMMING (Reactjs) - iTracker (MERN stacks)
            </h3>
          </div>
        </div>
        <div className="Education-part2-right">
          <h2>Jun.2012 - Sep.2017</h2>
        </div>
      </div>
    </div>
  );
};
