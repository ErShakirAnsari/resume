import config from "../utils/config.json";
const ExperienceCompanyLogo = ({ imageUrl }) => {
  return <img className="image shadow rounded" src={`${config.api.baseUrl}${imageUrl}`} />;
};

export default ExperienceCompanyLogo;
