import React from "react";
import Title from "./common/title";
import SubTitle from "./common/subTitle";
import Date from "./common/date";
import Paragraph from "./common/paragraph";

const ExperieneItem = ({ data, dataIndex, dataLength }) => {
  console.log(`dataIndex: ${dataIndex}, dataLength: ${dataLength}`);

  const css = dataIndex + 1 < dataLength ? "row mb-5" : "row";

  return (
    <React.Fragment>
      <div className="row mb-2">
        <div className="col-12">
          <Title title={data.position} />
          <SubTitle subTitle={`${data.company} (${data.location})`} />
          <Date startDate={data.startDate} endDate={data.endDate} />
        </div>
        <div className="col-12"></div>
      </div>
      <div className={css}>
        <div className="col">
          {data.about.map((aboutItem) => (
            <Paragraph> {aboutItem} </Paragraph>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ExperieneItem;
