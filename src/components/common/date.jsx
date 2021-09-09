import CalenderSvg from "./calender-svg";
import alarm from "bootstrap-icons/icons/alarm.svg";
const Date = ({ startDate, endDate }) => {
  return (
    <div className="col-md-3 text-md-end">
      <span className="text-primary">
        {startDate} &mdash; {endDate}
      </span>
      &nbsp;&nbsp;
      <CalenderSvg />
    </div>
  );
};

export default Date;
