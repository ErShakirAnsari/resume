// import calendar from "../images/calendar.svg";
import React from "react";
import CalenderSvg from "./common/calender-svg";
// import logoWipro from "../images/logo-wipro.svg";

const ExperieneBlock = ({ data }) => {
  return (
    <React.Fragment>
      <div className="row mb-2">
        <div className="col">
          <h3 className="display-6 text-dark mb-1">{data.position}</h3>
          <div className="fs-5 d-flex">
            &mdash;&nbsp;
            {/* <img src={logoWipro} alt="logo" width="24" height="24" /> */}
            {data.company}, {data.location}
          </div>
        </div>
        <div className="col-md-3 text-md-right">
          <CalenderSvg width="16" height="16" />
          &nbsp;&nbsp;
          <span className="text-primary">
            {data.startDate} - {data.endDate}
          </span>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col">
          <p className="fs-6 text-muted">{data.about}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ExperieneBlock;
