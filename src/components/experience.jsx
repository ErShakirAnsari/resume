import axios from "axios";
import { useEffect, useState } from "react";
import ExperieneRow from "./experience-row";

import config from "../utils/config.json";
import Section from "./common/section";

// const endPoint = config.apiBaseUrl + "/experience.json";
const endPoint = config.api.baseUrl + "/experience.json?v=" + config.api.version;

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
  console.log("experience", data);

  return (
    <Section id="experience" title="Experience" subTitle="Total experience = 6+ years">
      {data.map((item, index) => (
        <ExperieneRow key={index} data={item} />
      ))}
    </Section>
  );
};

export default Experience;
