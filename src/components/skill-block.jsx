import SkillItem from "./skill-items";

const SkillBlock = ({ title, dataList }) => {
  return (
    <div className="mb-5 p-5 shadow rounded border">
      <h3 className="text-primary mb-3"> {title} &mdash; </h3>
      {dataList.map((data) => (
        <SkillItem key={data.name} data={data} />
      ))}
    </div>
  );
};

export default SkillBlock;
