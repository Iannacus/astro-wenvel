import DetailImage from "./DetailImage";

export default function DetailsExpand({ details }) {
  return (
    <div className="flex column gap-3">
      <h2 className="c-dark">{details.title}</h2>
      <p className="c-grey p-big">{details.description}</p>
      {/* <img src={details.image} /> */}
      <div class="flex center">
        <DetailImage img={details.image} />
      </div>
    </div>
  );
}
