import { ChevronsRight } from "lucide-react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={`${styles.headContent} flex ac sb`}>
          <a className="flex ac" href="/">
            <img src="/favicon.png" alt="Nek Disha" />
            <p>Nek Disha</p>
          </a>

          <nav>
            <ul className="flex ac">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Donation</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>

          <div className="cta flex ac">
            <div className="svg">
              <ChevronsRight color="#ff3c00" />
            </div>

            <a href="#">Join with us</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
