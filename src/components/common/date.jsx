import CalenderSvg from "./calender-svg";

const Date = ({ startDate, endDate }) => {
  return (
    <div className="col-md-3 text-md-end">
      <span className="text-primary">
        {startDate} - {endDate}
      </span>
      &nbsp;&nbsp;
      <CalenderSvg />
    </div>
  );
};

export default Date;
