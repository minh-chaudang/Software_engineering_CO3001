import React from "react";
import admin_logo from "./shared/img/admin_logo.png";
import team_logo from "./shared/img/team_logo.png";

type Props = {};

const Nav = (props: Props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light sticky-top shadow">
        <div className="container-fluid">
          <img
            className="border rounded-circle p-1 mx-2 me-3"
            src={team_logo}
            alt=""
            width="35"
            height="35"
          />
          <a className="navbar-brand" href="#">
            Admin
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="index.php"
                >
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Quản lý
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="index.php?page=admin&controller=admin&action=index"
                    >
                      Thành viên
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="index.php?page=admin&controller=user&action=index"
                    >
                      Khách hàng
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="index.php?page=admin&controller=products&action=index"
                    >
                      Sản phẩm
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="index.php?page=admin&controller=comments&action=index"
                    >
                      Bình luận
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="index.php?page=admin&controller=news&action=index"
                    >
                      Bài viết
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="index.php?page=admin&controller=company&action=index"
                    >
                      Chi nhánh
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
          <div className="nav-item">
            <strong>DUC DEMO</strong>
          </div>
          <div className="">
            <div className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-reference="parent"
              >
                <img
                  className="border rounded-circle p-1 mx-2 dropdown-toggle"
                  src={admin_logo}
                  alt=""
                  width="35"
                  height="35"
                />
              </div>
              <ul className="dropdown-menu dropdown-menu-end my-3">
                <li>
                  <a
                    className="dropdown-item"
                    href="index.php?page=admin&controller=login&action=logout"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
