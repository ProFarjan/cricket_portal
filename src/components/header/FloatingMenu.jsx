// components/FloatingMenu.js
import { Navbar, Nav } from 'react-bootstrap';
import styles from '../../styles/FloatingMenu.module.css';

const FloatingMenu = () => {
    return (
        <Navbar fixed="bottom" className={styles.floatingMenu}>
            <Nav className="w-100 d-flex justify-content-around">
                <Nav.Link href="#home"  className={`text-center ${styles.floatingActive}`}>
                    <i className="fa-solid fa-house"></i>
                    <div className={styles.floatingTextSize}>Home</div>
                </Nav.Link>
                <Nav.Link href="#matches" className="text-center">
                    <i className="fa-solid fa-gamepad-modern"></i>
                    <div className={styles.floatingTextSize}>Matches</div>
                </Nav.Link>
                <Nav.Link href="#series" className="text-center">
                    <i className="fa-solid fa-tv"></i>
                    <div className={styles.floatingTextSize}>Series</div>
                </Nav.Link>
                <Nav.Link href="#videos" className="text-center">
                    <i className="fa-solid fa-video"></i>
                    <div className={styles.floatingTextSize}>Videos</div>
                </Nav.Link>
                <Nav.Link href="#news" className="text-center">
                    <i className="fa-regular fa-newspaper"></i>
                    <div className={styles.floatingTextSize}>News</div>
                </Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default FloatingMenu;