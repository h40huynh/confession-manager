import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../images/logo.png";

//TODO Web Template Studio: Add a new link in the NavBar for your page here.
// A skip link is included as an accessibility best practice. For more information visit https://www.w3.org/WAI/WCAG21/Techniques/general/G1.
const NavBar = () => {
  const menuList = [
    { title: "Trang chủ", link: "/" },
    { title: "Giới thiệu", link: "/About" },
    { title: "Quản lý", link: "/Authentication" },
  ];

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-sm navbar-light">
        <Link className="navbar-brand" to="/">
          <img src={logo} width="64" height="64" alt="" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ml-sm-auto">
            {menuList.map((menu) => (
              <li key={menu.title} className="nav-item">
                <NavLink className="nav-link" exact={true} to={menu.link}>
                  {menu.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};
export default NavBar;
