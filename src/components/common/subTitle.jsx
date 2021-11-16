import LocationSvg from "./svg/location-svg";

const SubTitle = ({ subTitle, mDash }) => {
  const mdashHtml = "&mdash;";
  return (
    <div className="fs-5 text-muted">
      <LocationSvg />
      <span className="align-text-top">
        {mDash && mdashHtml} {subTitle}
      </span>
    </div>
  );
};

export default SubTitle;
