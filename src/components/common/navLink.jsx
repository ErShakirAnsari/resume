const NavLink = ({ navItem }) => {
  return (
    <li className="nav-item">
      <a
        className="nav-link js-scroll-trigger fw-normal text-white"
        href={navItem.href}
        target={navItem.isExternal && "_blank"}
        rel={navItem.isExternal && "noreferrer"}
      >
        <i className={navItem.icon}></i> {navItem.lable}
      </a>
    </li>
  );
};

export default NavLink;
