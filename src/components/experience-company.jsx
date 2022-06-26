import config from "../utils/config.json";

const ExperienceCompany = ({ companyData }) => {
  return (
    <div className="d-flex flex-column company-details">
      <div className="fs-2">
        <span>{companyData?.name}</span>
      </div>
      <div className="fs-6">
        <i class="bi bi-geo-alt"></i> &nbsp;
        <span>{companyData?.location}</span>
      </div>
    </div>
  );
};

export default ExperienceCompany;
