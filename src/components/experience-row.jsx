import React, { useState } from "react";
import ExperienceCompany from "./experience-company";
import ExperienceCompanyLogo from "./experience-company-logo";
import ExperieneItem from "./experience-item";

const ExperieneRow = ({ data }) => {
  return (
    <div className="mb-5 p-5 shadow rounded border">
      <div className="d-flex company">
        <div class="logo">
          <ExperienceCompanyLogo imageUrl={data?.company?.image} />
        </div>
        <div class="flex-fill details ms-5">
          <ExperienceCompany companyData={data.company} />

          {data?.positions.map((item, index) => (
            <ExperieneItem key={index} position={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperieneRow;
