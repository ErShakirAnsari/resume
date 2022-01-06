import Header from "./header";

const Section = (props) => {
  const { id, title, subTitle } = props;
  return (
    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id={id}>
      <div className="container my-auto">
        <Header header={title} subHeader={subTitle} />
        {props.children}
      </div>
    </section>
  );
};

export default Section;
