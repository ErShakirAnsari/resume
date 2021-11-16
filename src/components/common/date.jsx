import moment from "moment";
import CalenderSvg from "./svg/calender-svg";

const Date = ({ startDate, endDate }) => {
  // const displayDateFormate = "MMM DD, YYYY";
  const displayDateFormate = "MMM, YYYY";
  const dateStart = new window.Date("2021-01-01");
  const dateEnd = new window.Date("2021-10-31");

  const years = moment(dateEnd).diff(moment(dateStart), "years", false);
  const months = moment(dateEnd).diff(moment(dateStart), "months", false);

  return (
    <div className="col-121">
      <CalenderSvg />
      &nbsp;&nbsp;
      <span className="text-primary1">
        <span className="px-2 fs-5">
          {years}y {months}m
        </span>
        <span className="">
          ( {moment(dateStart).format(displayDateFormate)} &mdash; {moment(dateEnd).format(displayDateFormate)})
        </span>
      </span>
    </div>
  );
};

export default Date;
