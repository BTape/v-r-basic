import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const Bar = () => {
  const blocks = useSelector((state) => state.blocks);
  const navigate = useNavigate();

  return (
    <>
      <div className="bar">
        {blocks?.modules.map((block) => {
          return (
            <div
              className="button"
              key={block?.name}
              onClick={() => navigate(block?.name)}
            >
              <img className={block?.class} src={block?.icon} />
            </div>
          );
        })}
      </div>

      <Outlet />
    </>
  );
};

export default Bar;
