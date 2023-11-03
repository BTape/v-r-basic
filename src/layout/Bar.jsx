import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import panda from "/panda.gif";

const Bar = () => {
  const blocks = useSelector((state) => state.blocks);
  const navigate = useNavigate();
  const params = useParams();

  return (
    <>
      <div className="bar">
        <div
          style={{ display: "flex", width: "3rem" }}
          onClick={() => navigate("/")}
        >
          <img src={panda} style={{ cursor: "pointer" }} />
        </div>

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
              <div>{block?.name}</div>
            </div>
          );
        })}
      </div>

      <Outlet />
    </>
  );
};

export default Bar;
