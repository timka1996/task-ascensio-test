import "./playComponent.css";
import image from "../../images/play.png";

function PlayComponent() {
  return (
    <div className="play__component col-6 flex">
      <div className="play__up">
        <h1>
          AVS Video ReMaker <br /> <span> Giveaway</span>
        </h1>
      </div>
      <div className="play__down">
        <img src={image} alt="img" />
      </div>
    </div>
  );
}

export default PlayComponent;
