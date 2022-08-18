import "./Experience.css";
import "./ExperienceMobile.css";

export const Experience = () => {
  return (
    <div id="Experience">

      {/* Head */}
      <div className="Experience-head">
        <a>Experience</a>
      </div>

      {/* Part1 */}
      <div className="Experience-part1">
        <h1>Assistant Sales Manager</h1>
        <h2>Sirirak Shrimp Farm</h2>
        <h4>2020 – 2022</h4>
        <ul>
          <li>Leading sales teams to achieve sales objectives.</li>
          <li>Identifying potential
          customers in the market.</li>
          <li>Managing the firm’s sales budget and costs
          Estimating costs involved.</li>
        </ul>
      </div>

      {/* Part2 */}
      <div className="Experience-part2">
        <h1>Sales Engineer</h1>
        <h2>Pneumax Co.,Ltd.</h2>
        <h4>2017 – 2020</h4>
        <ul>
          <li>Managed the sales operation of the firm to accomplish business
          strategy goals.</li>
          <li>Sustained sound relationship with existing clientele –
          Quantified client requirements through close contact.</li>
          <li>Tracked sales (using computer or spreadsheets) to provide accurate reports.
          </li>
          <li>Participated in conferences, group meetings, trade shows and
          exhibitions to deliver presentations on customer sites.</li>
          <li>Monitored competitor activities closely to identify any business threats.</li>
        </ul>
      </div>
    </div>
  );
};
