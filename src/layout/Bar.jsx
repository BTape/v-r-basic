import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Bar = () => {
  const blocks = useSelector((state) => state.blocks);
  const navigate = useNavigate();

  return (
    <div className="bar">
      {blocks?.modules.map((block) => {
        return (
          <div
            className="logo"
            key={block?.name}
            onClick={() => navigate(block?.name)}
          >
            <img className={block?.class} src={block?.icon} />
          </div>
        );
      })}
    </div>
  );
};

export default Bar;
