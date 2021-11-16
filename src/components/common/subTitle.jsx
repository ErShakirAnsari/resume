// import BuildingSvg from "./svg/building-svg";
// import LocationSvg from "./svg/location-svg";
// import OfficeSvg from "./svg/office-svg";

const SubTitle = ({ subTitle, mDash }) => {
  const mdashHtml = "&mdash;";
  return (
    <span className="fs-5 text-muted">
      {/* <OfficeSvg /> */}
      <span className="align-text-top">
        {mDash && mdashHtml} {subTitle}
      </span>
    </span>
  );
};

export default SubTitle;
