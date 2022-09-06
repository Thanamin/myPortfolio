import "./Education.css";
import "./EducationMobile.css";

export const Education = () => {
  return (
    <div id="Experience">
      <div className="Education-head">
        <a>Experience</a>
      </div>
      <div className="Education-content">
        {/* Part 1 */}
        <div className="Education-part1">
          <div className="Education-part1-left-box">
            <div className="Education-part1-left">
              <a className="Education-a-1">Generation Thailand</a>
              <a className="Education-a-2">
                Junior Software Developer Bootcamp
              </a>
              <div className="Education-part1-right-mobile">
                <h4>(Jun.2022 - Sep.2022)</h4>
              </div>
              <div className="Education-detail">
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

        <div className="Education-part1-right">
          <div className="line"></div>
          <a className="Education-a-3">Jun.2022 - Sep.2022</a>
        </div>

        {/* Part 2 */}
        <div className="Education-part2-left">
          <a className="Education-a-3">2020 – 2022</a>
          <div className="line"></div>
        </div>

        <div className="Education-part2">
          <div className="Education-part2-right-box">
            <div className="Education-part2-right">
              <a className="Education-a-1">Sirirak Shrimp Farm</a>
              <a className="Education-a-2">Assistant Sales Manager</a>
              <div className="Education-part1-left-mobile">
                <h4>(2020 – 2022)</h4>
              </div>
              <div className="Education-detail">
                <h3>
                  {/* Learn HTML, CSS, Bootstrap, JavaScript, Reactjs, Nodejs, Express,
              MongoDB BSM: Problem solving, Time management, Communication,
              Agile Scrum, Project management <br />
              Projects:
              <br /> */}
                  <ul>
                    <li>Leading sales teams to achieve sales objectives.</li>
                    <li>Identifying potential customers in the market.</li>
                    <li>
                      Managing the firm’s sales budget and costs Estimating
                      costs involved.
                    </li>
                  </ul>
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Part 3 */}
        <div className="Education-part3">
          <div className="Education-part3-left-box">
            <div className="Education-part3-left">
              <a className="Education-a-1">Pneumax Co.,Ltd.</a>
              <a className="Education-a-2">Sales Engineer</a>
              <div className="Education-part3-right-mobile">
                <h4>(2017 – 2020)</h4>
              </div>
              <div className="Education-detail">
                <h3>
                  {/* Learn HTML, CSS, Bootstrap, JavaScript, Reactjs, Nodejs, Express,
              MongoDB BSM: Problem solving, Time management, Communication,
              Agile Scrum, Project management <br />
              Projects:
              <br /> */}
                  <ul>
                    <li>
                      Managed the sales operation of the firm to accomplish
                      business strategy goals.
                    </li>
                    <li>
                      Sustained sound relationship with existing clientele –
                      Quantified client requirements through close contact.
                    </li>
                    <li>
                      Tracked sales (using computer or spreadsheets) to provide
                      accurate reports.
                    </li>
                    <li>
                      Participated in conferences, group meetings, trade shows
                      and exhibitions to deliver presentations on customer
                      sites.
                    </li>
                    <li>
                      Monitored competitor activities closely to identify any
                      business threats.
                    </li>
                  </ul>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="Education-part3-right">
          <div className="line"></div>
          <a className="Education-a-3">2017 – 2020</a>
        </div>

        {/* Part 4 */}
        <div className="Education-part4-left">
          <a className="Education-a-3">Jun.2012 - Sep.2017</a>
          <div className="line"></div>
        </div>

        <div className="Education-part4">
          <div className="Education-part4-right-box">
            <div className="Education-part4-right">
              <a className="Education-a-1">Srinakharinwirot University</a>
              <a className="Education-a-2">
                Bachelor's degree in Chemical Engineering
              </a>
              <div className="Education-part4-left-mobile">
                <h4>(Jun.2012 - Sep.2017)</h4>
              </div>
              <div className="Education-detail">
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
