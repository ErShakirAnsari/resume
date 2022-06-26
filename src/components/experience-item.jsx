import moment from "moment";
import React from "react";
import { getExperience } from "../utils/utils";
import Date from "./common/date";
import Paragraph from "./common/paragraph";

const ExperieneItem = ({ position }) => {
  const displayDateFormate = "MMM, YYYY";
  let dateStart = new window.Date(position?.startDate);
  let dateEnd = position?.endDate ? new window.Date(position?.endDate) : null;

  return (
    <div className="d-flex flex-column ps-3 mt-4 position">
      <div className="fs-3">
        <span>{position?.title}</span>
      </div>

      <div className="d-flex">
        <div className="align-self-center me-3 fs-5">
          <i class="bi bi-calendar3"></i>
        </div>

        <div className="flex-fill">
          <div className="d-flex flex-column">
            <div>
              <span className="fs-5">{getExperience(dateStart, dateEnd)}</span>
            </div>
            <div>
              <span>{moment(dateStart).format(displayDateFormate)}</span>
              <span>&nbsp;&mdash;&nbsp;</span>
              <span>{dateEnd ? moment(dateEnd).format(displayDateFormate) : "working"}</span>
              {/* <Date dateStart={dateStart} dateEnd={dateEnd} /> */}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="mt-3">
          {position?.about.map((aboutItem) => (
            <Paragraph> {aboutItem} </Paragraph>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperieneItem;
