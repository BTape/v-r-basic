import React from "react";
import { useSelector } from "react-redux";
import Element from "./Element";
import { useParams } from "react-router-dom";
import { modules } from "./Modules";

const Elements = () => {
  // const blocks = useSelector((state) => state.blocks);
  const params = useParams();

  console.table(params);

  return (
    <div className="module_view">
      {modules.map(
        (module) =>
          module?.name === params?.name &&
          module?.pages?.map((page) => <Element key={page.name} page={page} />)
      )}
    </div>
  );
};

export default Elements;
