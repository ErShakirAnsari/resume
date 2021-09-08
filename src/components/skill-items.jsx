const SkillItem = ({ data }) => {
  return getItem_v3(data);
};

function getItem_v1(data) {
  console.log("data", data);
  return (
    <button type="button" className="btn btn-primary m-1">
      {data.name} <span className="badge bg-danger"> {data.skill} </span>
    </button>
  );
}
function getItem_v2(data) {
  return (
    <button
      type="button"
      className="btn btn-light bg-gradient border shadow-sm m-1"
    >
      {data.name} <span className="badge bg-primary"> {data.skill} </span>
    </button>
  );
}

function getItem_v3(data) {
  return (
    <div className="row mb-2">
      <div className="col-xl-2 col-md-3 col-sm-6 text-end fw-bold fs-6">
        {" "}
        {data.name}{" "}
      </div>
      <div className="col-xl col-md-9 col-sm-6">
        <div className="progress">
          <div
            // className="progress-bar w-75"
            className={getClass(data)}
            // style={{ width: getStyle(data) }}
            role="progressbar"
            aria-valuenow={data.skill}
            aria-valuemin="0"
            aria-valuemax="10"
          ></div>
        </div>
      </div>
    </div>
  );
}

function getClass(data) {
  return "progress-bar bg-h-grad width-" + data.skill * 10;
}

export default SkillItem;
