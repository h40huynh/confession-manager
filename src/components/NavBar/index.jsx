import React from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import logo from "../../images/logo.png";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { logout } from "../../redux/authentication/authenticationActions";

//TODO Web Template Studio: Add a new link in the NavBar for your page here.
// A skip link is included as an accessibility best practice. For more information visit https://www.w3.org/WAI/WCAG21/Techniques/general/G1.
const NavBar = () => {
  const isUser = useSelector((state) => state.isUser, shallowEqual);
  const dispatch = useDispatch();
  const history = useHistory();

  const menuList = [
    { title: "Trang chủ", link: "/", private: 2 },
    { title: "Đăng nhập", link: "/Authentication", private: 0 },
    { title: "Confession", link: "/Confession", private: 1 },
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
            {menuList.map((menu) => {
              if (
                menu.private === 2 ||
                (menu.private === 1 && isUser) ||
                (menu.private === 0 && !isUser)
              ) {
                return (
                  <li key={menu.title} className="nav-item">
                    <NavLink className="nav-link" exact={true} to={menu.link}>
                      {menu.title}
                    </NavLink>
                  </li>
                );
              }
              return "";
            })}

            {isUser ? (
              <li className="nav-item">
                <span
                  className="nav-link cursor-pointer"
                  exact="true"
                  onClick={() => dispatch(logout(history))}
                >
                  Đăng xuất
                </span>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
