const Header = ({ header, subHeader }) => {
  return (
    <div className="mb-4">
      <div className="display-4 text-dark">{header}</div>
      {subHeader && <div className="fs-4"> {subHeader} </div>}
    </div>
  );
};

export default Header;
