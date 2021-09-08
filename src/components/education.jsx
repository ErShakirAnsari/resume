import EducationBlock from "./education-block";

const Education = () => {
  const dataList = [
    {
      id: 201007,
      location: "Kota",
      board: "Rajasthan Technical University",
      school: "Maharishi Arvind International Institute of Technology",
      course: "Bachelor of Technology in Computer Science",
      marks: "66.03",
      startDate: "July2010",
      endDate: "May2014",
    },
    {
      id: 200707,
      location: "Kota",
      board: "Board of Secondary Education Rajasthan",
      school: "Mayank sr. secondary schoool",
      course: "Mathematics Science & physics",
      marks: "60.03",
      startDate: "July2007",
      endDate: "May2008",
    },
    {
      id: 200507,
      location: "Kota",
      board: "Board of Secondary Education Rajasthan",
      school: "Bright future secondary school",
      course: null,
      marks: "63.07",
      startDate: "July2005",
      endDate: "May2006",
    },
  ];

  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex flex-column"
      id="education"
    >
      <div className="my-auto">
        <h1 className="display-3 mb-5 text-dark">
          Education
          <span className="small fs-4 text-muted"> (B.Tech in CS) </span>
        </h1>

        {dataList.map((data) => (
          <EducationBlock key={data.id} data={data} />
        ))}
      </div>
    </section>
  );
};

export default Education;
