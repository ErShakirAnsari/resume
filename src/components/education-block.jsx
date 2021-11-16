import CalenderSvg from "./common/svg/calender-svg";
import Date from "./common/date";
import Paragraph from "./common/paragraph";
import SubTitle from "./common/subTitle";
import Title from "./common/title";

const EducationBlock = ({ data }) => {
  return getItem2(data);
};

function getItem1(data) {
  return (
    <div className="resume-item d-flex flex-column flex-md-row mb-5">
      <div className="resume-content mr-auto">
        <h3 className="fw-normal mb-1">
          {data.board}, {data.location}
        </h3>
        <div style={{ fontSize: "1.2em" }}>
          {data.school}
          <br />
          {data.course} with percentage of <i className="text-primary">{data.marks}%</i>
        </div>
      </div>
      <div className="resume-date text-md-right">
        <CalenderSvg width="18" height="18" />
        &nbsp; &nbsp;
        <span className="text-primary">
          {data.startDate} - {data.endDate}
        </span>
      </div>
    </div>
  );
}

function getItem2(data) {
  return (
    <div className="row mb-4 p-4 shadow-sm rounded">
      <div className="col">
        <Title title={data.course} />
        <SubTitle subTitle={data.board} />
        <Paragraph>
          {data.school}, {data.location}
        </Paragraph>
      </div>
      <Date startDate={data.startDate} endDate={data.endDate} />
    </div>
  );
}

export default EducationBlock;
