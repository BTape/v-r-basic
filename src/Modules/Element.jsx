import React from "react";
import { useNavigate } from "react-router-dom";

const Element = ({ page }) => {
  const navigate = useNavigate();

  return (
    <div className="button page" onClick={() => navigate(page?.name)}>
      {page?.name}
    </div>
  );
};

export default Element;
