import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={`${styles.popUp} flex ac sb`}>
          <div className={`${styles.colmn} flex ac`}>
            {/* <div className={`${styles.icon} flex ac`}></div> */}
            <div className={`${styles.colmnHalf} flex fClmn`}>
              <p>Address</p>
              <h2>4648 Rocky Road Philadelphia PA, 1920</h2>
            </div>
          </div>
          <div className={`${styles.colmn} flex ac`}>
            {/* <div className={`${styles.icon} flex ac`}></div> */}
            <div className={`${styles.colmnHalf} flex fClmn`}>
              <p>Send Email</p>
              <h2>nekdisha@gmail.com</h2>
            </div>
          </div>
          <div className={`${styles.colmn} flex ac`}>
            {/* <div className={`${styles.icon} flex ac`}></div> */}
            <div className={`${styles.colmnHalf} flex fClmn`}>
              <p>Mobile Number</p>
              <h2>+91 76969 92194</h2>
            </div>
          </div>
        </div>

        <div className={`${styles.Content} flex sb`}>
          <div className={`${styles.row1} flex fClmn`}>
            <div className={`${styles.logo} flex ac`}>
              <img src="/favicon.png" alt="Logo" />
              <h2>Nek Disha</h2>
            </div>
            <p>
              Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a
              lacinia curabitur lacinia mollis
            </p>
            <div className={`${styles.icons} flex ac`}></div>
          </div>

          <div className={`${styles.row2} flex fClmn`}>
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="#"> About Us</a>
              </li>
              <li>
                <a href="#"> Our Services</a>
              </li>
              <li>
                <a href="#"> Our Blogs</a>
              </li>
              <li>
                <a href="#"> FAQ's</a>
              </li>
              <li>
                <a href="#"> Contact Us</a>
              </li>
            </ul>
          </div>

          <div className={`${styles.row3} flex fClmn`}>
            <h2>Recent Posts</h2>
          </div>
          <div className={`${styles.row4} flex fClmn`}>
            <h2>Contact Us</h2>
            <ul>
              <li>
                <a href="#"> nekdisha@gmail.com</a>
              </li>
              <li>
                <a href="#"> +91 76969 92194</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`${styles.policyWrapper}`}>
        <div className={`${styles.rights} flex ac sb`}>
          <p>© 2026 Nek Disha Foundation. All rights reserved</p>
          <div className={`${styles.policy} flex ac`}>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
