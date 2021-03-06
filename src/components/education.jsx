import axios from "axios";
import { useEffect, useState } from "react";
import EducationBlock from "./education-block";
import config from "../utils/config.json";
import Section from "./common/section";

const endPoint = config.apiBaseUrl + "/educations.json?20210908";

const Education = () => {
  const dataList = [
    {
      id: 201007,
      location: "Kota",
      board: "Rajasthan Technical University",
      school: "Maharishi Arvind International Institute of Technology",
      course: "B.Tech in Computer Science & Engineering",
      marks: "66.03",
      startDate: "July2010",
      endDate: "May2014",
    },
    {
      id: 200707,
      location: "Kota",
      board: "Board of Secondary Education Rajasthan",
      school: "Mayank sr. secondary schoool",
      course: "Senior Secondary / (10+2)",
      marks: "60.03",
      startDate: "July2007",
      endDate: "May2008",
    },
    {
      id: 200507,
      location: "Kota",
      board: "Board of Secondary Education Rajasthan",
      school: "Bright future secondary school",
      course: "Secondary / (10th)",
      marks: "63.07",
      startDate: "July2005",
      endDate: "May2006",
    },
  ];

  const [educations, setEducations] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(endPoint);
      if (response && response.data && response.data.educations) {
        setEducations(response.data.educations);
      } else {
        alert("somthing went wrong");
      }
    }
    getData();
  }, []);

  return (
    <>
      <Section id="education" title="Education" subTitle="(B.Tech in Computer Science &amp; Engineering)">
        {educations.map((data) => (
          <EducationBlock key={data.id} data={data} />
        ))}
      </Section>
    </>
  );
};

export default Education;
