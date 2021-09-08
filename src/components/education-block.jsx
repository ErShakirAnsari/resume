import CalenderSvg from "./common/calender-svg";

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
          {data.course} with percentage of{" "}
          <i className="text-primary">{data.marks}%</i>
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
        <h3 className="mb-1"> {data.course} </h3>
        <div className="fs-5 text-muted">
          &mdash; {data.board}
        </div>
        <div className="fs-5 text-muted">
          &mdash; {data.school}, {data.location}
          {/* <br />
          {data.course} with percentage of{" "}
          <i className="text-primary">{data.marks}%</i> */}
        </div>
      </div>
      <div className="col-md-3">
        <CalenderSvg width="18" height="18" />
        &nbsp; &nbsp;
        <span className="text-primary">
          {data.startDate} - {data.endDate}
        </span>
      </div>
    </div>
  );
}

export default EducationBlock;
