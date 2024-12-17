// components/FloatingMenu.js
import { Navbar, Nav } from "react-bootstrap";
import styles from "../../styles/FloatingMenu.module.css";

const FloatingMenu = () => {
  return (
    <Navbar fixed="bottom" className={styles.floatingMenu}>
      <Nav className="w-100 d-flex justify-content-around">
        <Nav.Link
          href="#home"
          className={`text-center ${styles.floatingActive}`}
        >
          <i className="fa-solid fa-house" />
          <div className={styles.floatingTextSize}>Home</div>
        </Nav.Link>
        <Nav.Link href="#matches" className="text-center">
          <i className="fa-solid fa-gamepad-modern" />
          <div className={styles.floatingTextSize}>Matches</div>
        </Nav.Link>
        <Nav.Link href="#series" className="text-center">
          <i className="fa-solid fa-tv" />
          <div className={styles.floatingTextSize}>Series</div>
        </Nav.Link>
        <Nav.Link href="#videos" className="text-center">
          <i className="fa-solid fa-video" />
          <div className={styles.floatingTextSize}>Videos</div>
        </Nav.Link>
        <Nav.Link href="#news" className="text-center">
          <i className="fa-regular fa-newspaper" />
          <div className={styles.floatingTextSize}>News</div>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default FloatingMenu;
