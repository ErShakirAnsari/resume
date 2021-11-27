import React from "react";
import ExperieneItem from "./experience-item";

const ExperieneRow = ({ data }) => {
  return (
    <div className="mb-5 p-5 shadow rounded border">
      {data.map((item, index) => (
        <ExperieneItem key={index} dataLength={data.length} dataIndex={index} data={item} />
      ))}
    </div>
  );
};

export default ExperieneRow;
