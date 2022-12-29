import "./Main.css";
import background from "./img/background.png";
import brand from "./img/databiz.png";

export default function Main() {
  return (
    <div className="main">
      <div className="big-box">
        <div className="h1">Make remote work</div>
        <p className="text">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button>Learn More</button>
        <div className="footer">
          <img src={brand} alt="brand" />
          <img src={brand} alt="brand" />
          <img src={brand} alt="brand" />
          <img src={brand} alt="brand" />
        </div>
      </div>
      <div className="second-box">
        <img src={background} alt="" />
      </div>
    </div>
  );
}
