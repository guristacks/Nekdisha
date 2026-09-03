import { ChevronsRight } from "lucide-react";
import { Phone } from "lucide-react";
import { Handshake } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import styles from "./about.module.css";

const About = () => {
  return (
    <section className={styles.aboutSec}>
      <div className="container">
        <div className={`${styles.aboutContent} flex ac`}>
          <div className={styles.heart}>
            <img
              loading="lazy"
              src="/HomePage/About/about-img.png"
              alt="Experience Image"
            />
          </div>

          <div className={`${styles.aboutUs} flex fClmn`}>
            <p>❤️ About US</p>
            <h2>Helping Each Other can Make World Better</h2>
            <p>
              We believe every life deserves care, dignity, and hope. Nekdisha
              Foundation brings people together to support communities, protect
              animals, preserve nature, and create lasting positive change.
            </p>
            <div className={`${styles.aboutInner} flex ac sb`}>
              <div className={`${styles.start} flex fClmn`}>
                <div className={`${styles.start1} flex ac`}>
                  <Handshake />
                  <p>Start Helping Team</p>
                </div>
                <div className={`${styles.start1} flex ac`}>
                  <ShieldCheck />
                  <p>There are many variations of solve</p>
                </div>
              </div>
              <img
                loading="lazy"
                src="/HomePage/About/about-block-img.jpg"
                alt="Team image"
              />
            </div>
            <div className={`${styles.aboutCta} flex ac`}>
              <div className="cta flex ac">
                <div className="svg">
                  <ChevronsRight color="#ff3c00" />
                </div>
                <a href="#">Explore More</a>
              </div>
              <div className={`${styles.cta2} flex ac`}>
                <Phone color="#000" />
                <div className={`${styles.call} flex fClmn`}>
                  <p>Call any time</p>
                  <a href="tel: +91 7696992194"> +91 76969 92194</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
