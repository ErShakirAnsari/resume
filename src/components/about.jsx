import Header from "./common/header";
import Section from "./common/section";
const About = () => {
  return (
    <>
      <Section id="about" title="Shakir Ansari">
        <div className="mb-5 p-5 shadow rounded border">
          <p className="lead">
            I'm a software engineer based in Rajasthan, India with passion for both frontend and backend.
          </p>
          <p className="lead">
            Having 5.6 years Experience in web and mobile based application development using technologies like
            SpringBoot, Hibernate, ReactJS &amp; Android. With build management using Maven.
          </p>
          <p className="lead">
            Interaction with the Client for requirement gather Experience in Agile development in Scrum Methodology.
            <a href="#skills" style={{ textDecoration: "none" }}>
              {" "}
              technologies.{" "}
            </a>
          </p>
        </div>
      </Section>
    </>
  );
};

export default About;
