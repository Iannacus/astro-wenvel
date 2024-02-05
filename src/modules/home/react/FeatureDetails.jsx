import { useState } from "react";
import DetailsList from "./DetailsList";
import DetailsExpand from "./DetailsExpand";
import { details } from "@data/details";

export default function FeatureDetails() {
  const [selected, setSelected] = useState("Presentación");

  const getDetails = (title) => {
    return details.find((detail) => detail.title === title);
  };

  return (
    <div className="col-12 flex justify-between gap-4">
      <div className="col-4">
        <DetailsList
          data={details}
          selected={selected}
          handleSelect={setSelected}
        />
      </div>
      <div className="col-8">
        <DetailsExpand details={getDetails(selected)} />
      </div>
    </div>
  );
}
