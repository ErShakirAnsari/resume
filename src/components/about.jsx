import Header from "./common/header";
import Section from "./common/section";
const About = () => {
  return (
    <>
      <Section id="about" title="Shakir Ansari">
        <div className="mb-5 p-5 shadow rounded border fs-3">
          <span>I’m a software engineer based in Rajasthan India with passion for both frontend and backend.</span>
          &nbsp;
          <span>
            I have total of 5+years experience in various
            <a href="#skills" style={{ textDecoration: "none" }}>
              {" "}
              technologies.{" "}
            </a>
          </span>
        </div>
      </Section>
    </>
  );
};

export default About;
