// import calendar from "../images/calendar.svg";
import React from "react";
import Title from "../components/common/title";
import SubTitle from "../components/common/subTitle";
import Date from "./common/date";
import Paragraph from "./common/paragraph";
// import logoWipro from "../images/logo-wipro.svg";

const ExperieneBlock = ({ data }) => {
  return (
    <React.Fragment>
      <div className="mb-4 p-4 shadow-sm rounded">
        <div className="row mb-2">
          <div className="col">
            <Title title={data.position} />
            <SubTitle subTitle={`${data.company}, ${data.location}`} />
          </div>
          <Date startDate={data.startDate} endDate={data.endDate} />
        </div>
        <div className="row">
          <div className="col">
            <Paragraph> {data.about} </Paragraph>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ExperieneBlock;
