import axios from "axios";
import { useEffect, useState } from "react";
import ExperieneBlock from "./experience-block";

import config from "../utils/config.json";
import Header from "./common/header";

const endPoint = config.apiBaseUrl + "/experience.json?20210908";

const Experience = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios(endPoint);

      if (response && response.data && response.data.experience) {
        setData(response.data.experience);
      } else {
        alert("somthing went wrong");
      }
    }
    getData();
  }, []);

  console.log(data.length);

  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex flex-column"
      id="experience"
    >
      <div className="my-auto">
        <Header header="Experience" subHeader="(5+ years)" />
        {data.map((item) => (
          <ExperieneBlock key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
