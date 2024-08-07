/* eslint-disable quotes */
/* eslint-disable no-undef */
import { Link } from 'react-router-dom';
import styles from './Contacts.module.css';
import initMap from './initMap';

function Contacts() {
    initMap();

    return (
        <section className={styles.contacts}> 
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h2>Конатакти</h2>
                </div>
                <div className={styles.companyInfo}>
                    <div className="address">
                        <h3>Адрес</h3>

                        <p><strong>Централен офис:</strong> гр. София, 
                        <br />
                        бул. Княгиня Мария Луиза 16</p>
                    </div>
                    <div className="contacts">
                        <h3>За връзка</h3>

                        <p>
                            <strong>T: </strong>
                            <Link to={`tel: 3590888123456`}> +359 (0)88 812 3456</Link>
                            <br />
                            <strong>email: </strong>
                            <Link to={`email: info@quiz.bg`}>info@quiz.bg</Link>
                        </p>
                    </div>
                    <div className={styles.socialMedia}>
                        <h3>Последвайте ни</h3>

                        <div className={styles.mediaLinks}>
                            <a href="https://www.facebook.com/kino.vlajkova" target="_blank">
                                <i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#">
                                <i className="fa-brands fa-twitter"></i></a>
                            <a href="#">
                                <i className="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div className={styles.companyMap} id="map"></div>
            </div>
        </section>
    );
}

export default Contacts;