const Header = ({ header, subHeader }) => {
  return (
    <h1 className="display-3 mb-5 text-dark">
      {header}
      {subHeader && <span className="small fs-4 text-muted"> {subHeader} </span>}
    </h1>
  );
};

export default Header;
