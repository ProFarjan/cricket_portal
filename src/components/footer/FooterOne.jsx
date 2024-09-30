import Image from "next/image";
import Link from "next/link";
import { useQuery } from 'react-query';
import SocialLink from "../../data/social/SocialLink.json";
import { getMenus } from "../../api/api";
import reactQuery from "../../config/reactQueryConfig";
import { hasData } from "../../helpers/helper";

const FooterOne = () => {
  const {
    data: menus,
    error: menu_error,
    isLoading: menu_isloading
  } = useQuery('get-menus', getMenus, reactQuery);

  return (
    <footer className="page-footer bg-grey-dark-key">
      <div className="container">
        <div className="footer-top">
          <div className="row">
            <div className="col-lg-2 col-md-4 col-6">
              <div className="footer-widget">
                <h2 className="footer-widget-title">Key Series</h2>
                <ul className="footer-nav">
                  <li>
                    <Link href="/">
                      <a>Recent Matches</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Update News</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Exclusive News</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Interview</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Expert Opinion</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Top Stories</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Videos</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Top Articles</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Photos</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="footer-widget">
                <h2 className="footer-widget-title">Pages</h2>
                <ul className="footer-nav">
                  {hasData(menus) &&
                    menus.map((data, index) =>
                      <li key={index}>
                        <Link href="/">
                          <a>{data.menu_title}</a>
                        </Link>
                      </li>
                    )}
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="footer-widget">
                <h2 className="footer-widget-title">Category List</h2>
                <ul className="footer-nav">
                  <li>
                    <Link href="/">
                      <a>Matches</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Exclusive</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Stories</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Articles</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Training</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Entertainment Video</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="footer-widget">
                <h2 className="footer-widget-title">Recent Matches Score</h2>
                <ul className="footer-nav">
                  <li>
                    <Link href="/">
                      <a>Executive</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Senate</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>House</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Judiciary</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Foreign policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Polls</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Elections</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="col-lg-2 col-md-4 col-6">
              <div className="footer-widget">
                <h2 className="footer-widget-title">Teams</h2>
                <ul className="footer-nav">

                </ul>
              </div>
            </div> */}
            <div className="col-lg-2 col-md-4 col-6">
              <div className="footer-widget">
                <h2 className="footer-widget-title">About</h2>
                <ul className="footer-nav">
                  <li>
                    <Link href="/">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Contact Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Advertise With Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Ad Choices</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Media Relations</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* End of .footer-top */}
        <div className="footer-mid">
          <div className="row align-items-center">
            <div className="col-md">
              <div className="footer-logo-container">
                <Link href="/">
                  <a>
                    <Image
                      src="/images/logo.png"
                      alt="footer logo"
                      className="footer-logo"
                      width={160}
                      height={41}
                    />
                  </a>
                </Link>
              </div>
              {/* End of .brand-logo-container */}
            </div>
            {/* End of .col-md-6 */}
            <div className="col-md-auto">
              <div className="footer-social-share-wrapper">
                <div className="footer-social-share">
                  <div className="axil-social-title">Find us here</div>
                  <ul className="social-share social-share__with-bg">
                    <li>
                      <a href={SocialLink.fb.url}>
                        <i className={SocialLink.fb.icon} />
                      </a>
                    </li>
                    <li>
                      <a href={SocialLink.twitter.url}>
                        <i className={SocialLink.twitter.icon} />
                      </a>
                    </li>
                    <li>
                      <a href={SocialLink.yt.url}>
                        <i className={SocialLink.yt.icon} />
                      </a>
                    </li>
                    <li>
                      <a href={SocialLink.linked.url}>
                        <i className={SocialLink.linked.icon} />
                      </a>
                    </li>
                    <li>
                      <a href={SocialLink.pinterest.url}>
                        <i className={SocialLink.pinterest.icon} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End of .footer-social-share-wrapper */}
            </div>
            {/* End of .col-md-6 */}
          </div>
          {/* End of .row */}
        </div>
        {/* End of .footer-mid */}
        <div className="footer-bottom">
          <ul className="footer-bottom-links">
            <li>
              <Link href="/">
                <a>Terms of Use</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Advertise with us</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>The Cricket Store</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Newsletters</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Sitemap</a>
              </Link>
            </li>
          </ul>
          {/* End of .footer-bottom-links */}
          <p className="axil-copyright-txt">
            © {new Date().getFullYear()}. All rights reserved by <a>The Cricket Co</a>.
          </p>
        </div>
        {/* End of .footer-bottom */}
      </div>
      {/* End of .container */}
    </footer >
  );
};

export default FooterOne;
