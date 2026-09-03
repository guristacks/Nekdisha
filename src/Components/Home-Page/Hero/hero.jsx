import { ChevronsRight } from "lucide-react";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={`${styles.heroSec} flex ac jc`}>
      <div className="container">
        <div className={`${styles.heroOne} flex fClmn`}>
          <p>❤️ Change The World Together</p>
          <h1>
            A Little Kindness <br /> Can Change a Life.
          </h1>
          <p>
            Every act of kindness matters. When we choose compassion over
            indifference, we take one small step toward a brighter and more
            beautiful world.
          </p>
          <div className={`${styles.oneHalf} flex ac`}>
            <div className="cta flex ac">
              <div className="svg">
                <ChevronsRight color="#ff3c00" />
              </div>
              <a href="#">Make Donation</a>
            </div>
            <div className={`${styles.userImages} flex ac`}>
              <img
                loading="lazy"
                src="/HomePage/Hero/user-1.png"
                alt="User Image"
              />
              <img
                loading="lazy"
                src="/HomePage/Hero/user-2.png"
                alt="User Image"
              />
              <img
                loading="lazy"
                src="/HomePage/Hero/user-3.png"
                alt="User Image"
              />
              <div className={`${styles.user4} flex ac jc`}>
                <p>1K+</p>
              </div>
            </div>
            <p>Active Doners</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
