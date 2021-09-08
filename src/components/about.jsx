const About = () => {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
      <div className="my-auto">
        {/* <h5 className="mb-4">
          <a
            className="btn btn-outline-dark"
            href="mailto:shakir.ansari@live.com"
          >
            <i className="bi bi-envelope" aria-hidden="true"></i>{" "}
            shakir.ansari@live.com
          </a>
        </h5> */}
        <div className="p-5 rounded shadow-sm width-100  d-block">
          <h1 className="display-1 text-dark">Shakir A. Ansari </h1>
          <hr className="mt-2 mb-4" />
          <p className="fs-5 text-muted">
            I’m a software engineer in Rajasthan India with a passion for both
            frontend and backend.
            <br />I have total of 5+years experience in various
            <a href="#skills" style={{ textDecoration: "none" }}>
              {" "}
              technologies.{" "}
            </a>
          </p>
        </div>
        {/* <!-- <a href="#"><i className="fab fa-twitter"></i></a> --> */}
        {/* <!-- <a href="#"><i className="fab fa-facebook-f"></i></a> --> */}
      </div>
    </section>
  );
};

export default About;
