import React from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { modules } from "../Modules/Modules";
import pato from "/duck.gif";
import panda from "/panda.gif";

const Bar = () => {
  const navigate = useNavigate();
  const params = useParams();

  return (
    <>
      <div className="bar">
        <div>
          <div
            style={{ display: "flex", width: "3rem", justifyContent: "center" }}
            onClick={() => navigate("/")}
          >
            <img src={panda} style={{ cursor: "pointer" }} />
          </div>

          {modules.map((block) => {
            return (
              <div
                className={`button${
                  params?.name === block?.name ? " active" : ""
                }`}
                key={block?.name}
                onClick={() => navigate(block?.name)}
              >
                {block?.icon && (
                  <img className={block?.class} src={block?.icon} />
                )}
                <div>{block?.name}</div>
              </div>
            );
          })}

          <div
            style={{ display: "flex", width: "3rem", justifyContent: "center" }}
            onClick={() => navigate("/")}
          >
            <img src={pato} style={{ cursor: "pointer" }} />
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Bar;
