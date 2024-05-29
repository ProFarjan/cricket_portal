import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuData from "../../data/menu/HeaderMenu.json";
import topMenu from "../../data/fake/topMenu.json";
import FloatingMenu from "./FloatingMenu";
import TopHeaderCard from "../common/TopHeaderCard";
import OffcanvasMenu from "./OffcanvasMenu";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeaderOne = () => {
  // Main Menu Toggle
  var menuRef = useRef();

  const toggleDropdownMenu = () => {
    const dropdownSelect = menuRef.current.childNodes;
    let dropdownList = [];

    for (let i = 0; i < dropdownSelect.length; i++) {
      const element = dropdownSelect[i];
      if (element.classList.contains("has-dropdown")) {
        dropdownList.push(element);
      }
    }

    dropdownList.forEach((element) => {
      element.children[0].addEventListener("click", () => {
        if (element.classList.contains("active")) {
          element.classList.remove("active");
          element.childNodes[1].classList.remove("opened");
        } else {
          dropdownList.forEach((submenu) => {
            if (element !== submenu) {
              submenu.classList.remove("active");
              submenu.childNodes[1].classList.remove("opened");
            } else {
              submenu.classList.add("active");
              submenu.childNodes[1].classList.add("opened");
            }
          });
        }
      });
    });
  };

  useEffect(() => {
    toggleDropdownMenu();
  }, []);

  // Offcanvas Menu
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Header Search
  const [searchshow, setSearchShow] = useState(false);

  const headerSearchShow = () => {
    setSearchShow(true);
  };
  const headerSearchClose = () => {
    setSearchShow(false);
  };

  // Mobile Menu Toggle
  const [mobileToggle, setMobileToggle] = useState(false);

  const MobileMenuToggler = () => {
    setMobileToggle(!mobileToggle);
    const HtmlTag = document.querySelector("html");
    const menuSelect = document.querySelectorAll(".main-navigation li");

    if (HtmlTag.classList.contains("main-menu-opened")) {
      HtmlTag.classList.remove("main-menu-opened");
    } else {
      setTimeout(() => {
        HtmlTag.classList.add("main-menu-opened");
      }, 800);
    }

    menuSelect.forEach((element) => {
      element.addEventListener("click", function () {
        if (!element.classList.contains("has-dropdown")) {
          HtmlTag.classList.remove("main-menu-opened");
          setMobileToggle(false);
        }
      });
    });
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <>
      <OffcanvasMenu ofcshow={show} ofcHandleClose={handleClose} />
      <header className="page-header">
        <div className="header-top bg-primary-color">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-auto">
                <ul className="header-top-nav list-inline justify-content-center justify-content-md-start">
                  <li className="fs-5">
                    <Link href="/">
                      <strong>Matches (6)</strong>
                    </Link>
                  </li>
                  {topMenu.map((data, index) =>
                    <li key={index} className="fs-5">
                      <Link href={data.path}>
                        {data.label}
                      </Link>
                    </li>
                  )}
                </ul>
                <Slider {...settings} className="mb-4">
                  {topMenu.map((data, index) => {
                    return data.child.length == 1 ? (
                      <TopHeaderCard key={index} data={data.child[0]} />
                    ) : (
                      data.child.map((sub_data, indx) =>
                        <TopHeaderCard key={indx} data={sub_data} />
                      )
                    )
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar bg-secondary-color">
          <div className="container">
            <div className="navbar-inner">
              <div className="brand-logo-container">
                <Link href="/">
                  <a>
                    <Image
                      src="/images/logo-black.svg"
                      alt="brand-logo"
                      width={102}
                      height={34}
                    />
                  </a>
                </Link>
              </div>
              <div className="main-nav-wrapper">
                <ul className="main-navigation list-inline" ref={menuRef}>
                  {MenuData.map((data, index) =>
                    data.submenu ? (
                      <li className="has-dropdown" key={index}>
                        <Link href={data.path}>
                          <a>{data.label}</a>
                        </Link>
                        <ul className="submenu">
                          {data.submenu.map((data, index) => (
                            <li key={index}>
                              <Link href={data.subpath}>
                                <a>{data.sublabel}</a>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ) : (
                      <li key={index}>
                        <Link href={data.path}>
                          <a>{data.label}</a>
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="navbar-extra-features ml-auto">
                <form
                  action="#"
                  className={`navbar-search ${searchshow ? "show-nav-search" : ""
                    }`}
                >
                  <div className="search-field">
                    <input
                      type="text"
                      className="navbar-search-field"
                      placeholder="Search Here..."
                    />
                    <button className="navbar-search-btn" type="button">
                      <i className="fal fa-search" />
                    </button>
                  </div>
                  <span
                    className="navbar-search-close"
                    onClick={headerSearchClose}
                  >
                    <i className="fal fa-times" />
                  </span>
                </form>

                <button
                  className="nav-search-field-toggler"
                  onClick={headerSearchShow}
                >
                  <i className="far fa-search" />
                </button>
                <button className="side-nav-toggler" onClick={handleShow}>
                  <span />
                  <span />
                  <span />
                </button>
              </div>
              {/* <div
                className={`main-nav-toggler d-block d-lg-none ${mobileToggle ? "expanded" : ""
                  }`}
              >
                <div className="toggler-inner" onClick={MobileMenuToggler}>
                  <span />
                  <span />
                  <span />
                </div>
              </div> */}
              <div
                className={`d-block d-lg-none ${mobileToggle ? "expanded" : ""
                  }`}
              >
                <FloatingMenu />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default HeaderOne;
