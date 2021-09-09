const SubTitle = ({ subTitle, mDash }) => {
  const mdashHtml = "&mdash;";
  return (
    <div className="fs-5 text-muted">
      {mDash && mdashHtml} {subTitle}
    </div>
  );
};

export default SubTitle;
