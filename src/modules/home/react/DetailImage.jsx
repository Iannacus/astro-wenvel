import { BackgroundAnimation } from "@components/index.js";

export default function DetailImage({ img }) {
  return (
    <div className="col-12 feature-details">
      <div className="single-image col-12 flex  center">
        <img src={img} alt="" />
      </div>
      <div className="feature-background-animation feature">
        <BackgroundAnimation client:load />
        <div className="feature-background-gradient"></div>
      </div>
    </div>
  );
}
