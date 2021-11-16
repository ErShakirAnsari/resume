import moment from "moment";
import CalenderSvg from "./svg/calender-svg";

const Date = ({ startDate, endDate }) => {
  const displayDateFormate = "MMM, YYYY";
  let dateStart = new window.Date(startDate);
  let dateEnd = new window.Date();
  if (endDate) {
    dateEnd = new window.Date(endDate);
  }

  return (
    <div className="col-12">
      <CalenderSvg />
      &nbsp;
      <span className="text-primary1">
        <span className="px-2 fs-5">{getExperience(dateStart, dateEnd)}</span>
        <span className="">
          ( {moment(dateStart).format(displayDateFormate)} &mdash; {moment(dateEnd).format(displayDateFormate)})
        </span>
      </span>
    </div>
  );
};

function getExperience(dateStart, dateEnd) {
  // let years = moment(dateEnd).diff(moment(dateStart), "years", false);
  let years = 0;
  let months = moment(dateEnd).diff(moment(dateStart), "months", false);

  while (months > 11) {
    years += 1;
    months -= 12;
  }

  months += 1; //sep-nov its 2month

  return `${years}y ${months}m`;
}

export default Date;
