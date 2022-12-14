import "./Experience.css";
import "./ExperienceMobile.css";

export const Experience = () => {
  return (
    <div id="Experience">
      <div className="Experience-head">
        <a>Experience</a>
      </div>
      <div className="Experience-content">
        {/* Part 1 */}
        <div className="Experience-part1">
          <div className="Experience-part1-left-box">
            <div className="Experience-part1-left">
              <a className="Experience-a-1">Generation Thailand</a>
              <a className="Experience-a-2">
                Junior Software Developer Bootcamp
              </a>
              <div className="Experience-part1-right-mobile">
                <h4>(Jun.2022 – Sep.2022)</h4>
              </div>
              <div className="Experience-detail">
                <h3>
                  Learn HTML, CSS, Bootstrap, JavaScript, Reactjs, Nodejs,
                  Express, MongoDB BSM: Problem solving, Time management,
                  Communication, Agile Scrum, Project management <br />
                  Projects:
                  <br />
                  <ul>
                    <li>Colmar (HTML, CSS)</li>
                    <li>Find Your Hat (JaveScript)</li>
                    <li>JAMMMING (Reactjs)</li>
                    <li>Fit2be (MERN stacks)</li>
                  </ul>
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="Experience-part1-right">
          <div className="line"></div>
          <a className="Experience-a-3">Jun.2022 – Sep.2022</a>
        </div>

        {/* Part 2 */}
        <div className="Experience-part2-left">
          <a className="Experience-a-3">Jun.2020 – Feb.2022</a>
          <div className="line"></div>
        </div>

        <div className="Experience-part2">
          <div className="Experience-part2-right-box">
            <div className="Experience-part2-right">
              <a className="Experience-a-1">Sirirak Shrimp Farm</a>
              <a className="Experience-a-2">Assistant Sales Manager</a>
              <div className="Experience-part1-left-mobile">
                <h4>(Jun.2020 – Feb.2022)</h4>
              </div>
              <div className="Experience-detail">
                <h3>
                I have expanded the market by focusing on the central region. This leads to more sales than targets and more new customers.
                  <ul>
                    <li>Leading sales teams to achieve sales objectives.</li>
                    <li>Identifying potential customers in the market.</li>
                  </ul>
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Part 3 */}
        <div className="Experience-part3">
          <div className="Experience-part3-left-box">
            <div className="Experience-part3-left">
              <a className="Experience-a-1">Pneumax Co.,Ltd.</a>
              <a className="Experience-a-2">Sales Engineer</a>
              <div className="Experience-part3-right-mobile">
                <h4>(Nov.2017 – May.2020)</h4>
              </div>
              <div className="Experience-detail">
                <h3>
                I have a responsibility to manage the sales of the company successfully. Sustained sound relationship with existing clientele – Quantified client requirements through close contact. Tracked sales (using computer or spreadsheets) to provide accurate reports. 
Participated in conferences, group meetings, trade shows, and exhibitions to deliver presentations on customer sites.
                   
                  
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="Experience-part3-right">
          <div className="line"></div>
          <a className="Experience-a-3">Nov.2017 – May.2020</a>
        </div>

        {/* Part 4 */}
        <div className="Experience-part4-left">
          <a className="Experience-a-3">Jun.2012 – Sep.2017</a>
          <div className="line"></div>
        </div>

        <div className="Experience-part4">
          <div className="Experience-part4-right-box">
            <div className="Experience-part4-right">
              <a className="Experience-a-1">Srinakharinwirot University</a>
              <a className="Experience-a-2">
                Bachelor's degree in Chemical Engineering
              </a>
              <div className="Experience-part4-left-mobile">
                <h4>(Jun.2012 – Sep.2017)</h4>
              </div>
              <div className="Experience-detail">
                <h3>
                  Chemical engineers conceive and design processes involved in
                  chemical manufacturing. The main role of chemical engineers is
                  to design and troubleshoot processes for the production of
                  chemicals, fuels, foods, pharmaceuticals, and biologicals, to
                  name just a few. They are most often employed by large-scale
                  manufacturing plants to maximize productivity and product
                  quality while minimizing costs.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
