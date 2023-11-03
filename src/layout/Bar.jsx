import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate, useParams } from "react-router-dom";

const Bar = () => {
  const blocks = useSelector((state) => state.blocks);
  const navigate = useNavigate();
  const params = useParams();

  return (
    <>
      <div className="bar">
        {blocks?.modules.map((block) => {
          return (
            <div
              className={`button${
                params?.name === block?.name ? " active" : ""
              }`}
              key={block?.name}
              onClick={() => navigate(block?.name)}
            >
              <img className={block?.class} src={block?.icon} />
              <p>{block?.name}</p>
            </div>
          );
        })}
      </div>

      <Outlet />
    </>
  );
};

export default Bar;
