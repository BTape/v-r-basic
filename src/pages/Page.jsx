import React from "react";
import { useParams } from "react-router-dom";
import { modules } from "../Modules/Modules";

const Page = () => {
  const params = useParams();

  console.table(params);

  return (
    <div className="page_view">
      {
        modules
          ?.find((module) => module.name === params?.name)
          .pages?.find((page) => page.name === params?.page)?.component
      }
    </div>
  );
};

export default Page;
