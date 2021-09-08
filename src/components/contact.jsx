const Contact = () => {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex d-column" id="contact">
      <div className="my-auto text-dark">
        <h1 className="display-3 mb-5 text-dark">
          Contact
          {/* <span className="small fs-4 text-muted"></span> */}
        </h1>

        <div className="px-5">
          <p className="fs-5 text-muted">
            Feel free to contact me, I look forward to hearing from you!
          </p>
          <p className="fs-5 text-muted">
            My personal email address is &quot;shakir.ansari@live.com&quot;
          </p>

          <div className="social-icons mt-5">
            <a
              href="https://www.linkedin.com/in/ershakiransari/"
              target="_blank"
              rel="noreferrer"
              title="linkedin"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://github.com/ErShakirAnsari"
              target="_blank"
              rel="noreferrer"
              title="github"
            >
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
