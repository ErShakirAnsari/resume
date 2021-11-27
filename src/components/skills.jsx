import axios from "axios";
import { useEffect, useState } from "react";
import SkillBlock from "./skill-block";
import Section from "./common/section";
import config from "../utils/config.json";

const endPoint = config.apiBaseUrl + "/skills.json?20210908";

const Skills = () => {
  const [frontendLanguages, setFrontendLanguages] = useState([]);
  const [backendLanguages, setBackendLanguages] = useState([]);
  const [tools, setTools] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios(endPoint);

      if (response && response.data) {
        if (response.data.frontendLanguages) setFrontendLanguages(response.data.frontendLanguages);
        if (response.data.backendLanguages) setBackendLanguages(response.data.backendLanguages);
        if (response.data.tools) setTools(response.data.tools);
      } else {
        alert("somthing went wrong");
      }
    }
    getData();
  }, []);

  return (
    <>
      <Section id="skills" title="Skills">
        <SkillBlock title="Frontend Technologies" dataList={frontendLanguages} />
        <SkillBlock title="Backend Technologies" dataList={backendLanguages} />
        <SkillBlock title="Tools &amp; Utilities" dataList={tools} />
      </Section>
    </>
  );
};

export default Skills;
