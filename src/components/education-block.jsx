import Date from "./common/date";
import Paragraph from "./common/paragraph";
import SubTitle from "./common/subTitle";
import Title from "./common/title";

const EducationBlock = ({ data }) => {
  return getItem2(data);
};

function getItem2(data) {
  return (
    <div className="row mb-5 p-5 shadow rounded border">
      <div className="col">
        <Title title={data.course} />
        <SubTitle subTitle={data.board} />
        <Paragraph>
          {data.school}, {data.location}
        </Paragraph>
      </div>
      <Date startDate={data.startDate} endDate={data.endDate} />
    </div>
  );
}

export default EducationBlock;
