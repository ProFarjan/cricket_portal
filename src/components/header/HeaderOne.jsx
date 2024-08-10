import React, { useState, useRef, useEffect } from "react";
import { useQuery } from 'react-query';
import Link from "next/link";
import Image from "next/image";
import MenuEditionData from "../../data/fake/MenuEditionData.json";
import { getTopMetches, getMenus } from "../../api/api";
import reactQuery from "../../config/reactQueryConfig";
import FloatingMenu from "./FloatingMenu";
import TopHeaderCard from "../common/TopHeaderCard";
import OffcanvasMenu from "./OffcanvasMenu";
import Slider from "react-slick";
import { hasData } from "../../helpers/helper";
import { Nav } from 'react-bootstrap';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slugify } from "../../utils";

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

  // Offcanvas Menu
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Header Search
  const [searchshow, setSearchShow] = useState(false);
  const [series, setSeriesData] = useState('');

  const headerSearchShow = () => {
    setSearchShow(true);
  };
  const headerSearchClose = () => {
    setSearchShow(false);
  };

  const {
    data: topMenu,
    error,
    isLoading
  } = useQuery('series-metches', getTopMetches, reactQuery);

  const {
    data: menus,
    error: menu_error,
    isLoading: menu_isloading
  } = useQuery('get-menus', getMenus, reactQuery);

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

  useEffect(() => {
    toggleDropdownMenu();
    if (topMenu?.seriesMatches) {
      setSeriesData(topMenu.seriesMatches);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [topMenu]);


  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: false,
    centerMode: false
  };

  const loadMatchData = (series_id) => (event) => {
    event.preventDefault();
    const mySeriesData = topMenu.seriesMatches.find((series) => series.series_id == series_id);
    setSeriesData([mySeriesData])
  }

  const loadAllMatchData = () => (event) => {
    event.preventDefault();
    setSeriesData(topMenu.seriesMatches)
  }

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
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
                  <li className="fs-5" onClick={loadAllMatchData()}>
                    <Nav.Item>
                      <Nav.Link>
                        <strong>Matches ({topMenu?.total_matches})</strong>
                      </Nav.Link>
                    </Nav.Item>
                  </li>
                  {hasData(topMenu) &&
                    topMenu.seriesMatches.slice(0, 5).map((data, index) =>
                      <li key={index} className="fs-5" onClick={loadMatchData(data.series_id)}>
                        <Nav.Item key={data.series_id}>
                          <Nav.Link>
                            {data.label} ({data.child.length})
                          </Nav.Link>
                        </Nav.Item>
                      </li>
                    )
                  }
                </ul>
                <Slider {...settings} className="mb-4">
                  {hasData(series) &&
                    series.map((data, index) => {
                      return data.child.length == 1 ? (
                        <TopHeaderCard key={index} data={data.child[0]} />
                      ) : (
                        data.child.map((sub_data, indx) =>
                          <TopHeaderCard key={indx} data={sub_data} />
                        )
                      )
                    })}
                  {hasData(series) && series.length < 4 &&
                    Array.from({ length: (4 - series.length) }, (_, index) => (
                      <div key={index}>

                      </div>
                    ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <nav className={`navbar bg-secondary-color ${scrollPosition > 240 ? 'sticky-header' : ''}`}>
          <div className="container">
            <div className="navbar-inner">
              <div className="brand-logo-container">
                <Link href="/">
                  <a>
                    <Image
                      src="/images/logo.png"
                      alt="brand-logo"
                      width={160}
                      height={41}
                    />
                  </a>
                </Link>
              </div>
              <div className="main-nav-wrapper">
                <ul className="main-navigation list-inline" ref={menuRef}>
                  {hasData(menus) &&
                    menus.slice(0, 10).map((data, index) =>
                      data.front_end_sub_menu ? (
                        <li key={index}>
                          <Link href={`/${slugify(data.menu_title)}`}>
                            <a>{data.menu_title}</a>
                          </Link>
                          <ul className={`submenu`}>
                            {data.front_end_sub_menu.map((data, sub_index) => (
                              <li key={sub_index}>
                                <Link href={`/sub-menu/${slugify(data.menu_title)}`}>
                                  <a>{data.menu_title}</a>
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

                <ul className="main-navigation list-inline" ref={menuRef}>
                  {MenuEditionData.map((data, index) =>
                    data.submenu ? (
                      <li key={index}>
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
                <button className="nav-search-field-toggler">
                  <i className="far fa-moon" />
                </button>
                <button className="nav-search-field-toggler">
                  <i className="far fa-bell" />
                </button>
                <button className="nav-search-field-toggler">
                  <i className="far fa-bars" />
                </button>
                <button
                  className="nav-search-field-toggler"
                  onClick={headerSearchShow}
                >
                  <i className="far fa-search" />
                </button>
              </div>
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
