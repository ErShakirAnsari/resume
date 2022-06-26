import moment from "moment";
import { getExperience } from "../../utils/utils";

const Date = ({ dateStart, dateEnd }) => {
  const displayDateFormate = "MMM, YYYY";

  return (
    <div className="d-flex align-items-center">
      <div className="me-2">
        <i class="bi bi-calendar3"></i>
      </div>

      {/* <div className="me-2">
        <span className="fs-5 fw-bold">{getExperience(dateStart, dateEnd)}</span>
      </div> */}

      <div className="me-2">
        {moment(dateStart).format(displayDateFormate)}
        &nbsp;&mdash;&nbsp;
        {dateEnd ? moment(dateEnd).format(displayDateFormate) : "...working"}
      </div>
    </div>
  );
};

export default Date;
