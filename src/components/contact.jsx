import Header from "./common/header";
import Section from "./common/section";

const Contact = () => {
  return (
    <>
      <Section id="contact" title="Contact">
        <div className="row mb-5 p-5 shadow rounded border">
          <p className="lead">Feel free to contact me, I look forward to hearing from you!</p>
          <p className="lead">
            My personal email address is <mark>shakir.ansari@live.com</mark>
          </p>

          <div className="social-icons mt-5">
            <a href="https://www.linkedin.com/in/ershakiransari/" target="_blank" rel="noreferrer" title="linkedin">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://github.com/ErShakirAnsari" target="_blank" rel="noreferrer" title="github">
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;
