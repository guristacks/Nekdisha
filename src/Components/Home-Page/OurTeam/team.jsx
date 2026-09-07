import styles from "./team.module.css";
import { ChevronsRight } from "lucide-react";

const members = [
  {
    image: "/HomePage/Team/Founder.jpeg",
    name: "Gurwinder Singh",
    position: "Founder",
  },
  {
    image: "/HomePage/Team/Ceo.jpg",
    name: "Sewak Singh",
    position: "CEO",
  },
  {
    image:
      "https://images.pexels.com/photos/38095356/pexels-photo-38095356.jpeg?_gl=1*1ysxx7k*_ga*MTM0MzM5NDkzNi4xNzg4MDk5MTg5*_ga_8JE65Q40S6*czE3ODg3NjMzNTkkbzgkZzEkdDE3ODg3NjM0MjckajU5JGwwJGgw",
    name: "Pardeep Singh",
    position: "Partner",
  },
  {
    image:
      "https://images.pexels.com/photos/29611425/pexels-photo-29611425.jpeg?_gl=1*19y5n1b*_ga*MTM0MzM5NDkzNi4xNzg4MDk5MTg5*_ga_8JE65Q40S6*czE3ODg3NjMzNTkkbzgkZzEkdDE3ODg3NjM0OTQkajU5JGwwJGgw",
    name: "Arjan Dhillon",
    position: "Voluntree",
  },
];

const Teams = () => {
  return (
    <section className={styles.teamSec}>
      <div className="container">
        <div className={`${styles.teamContent} flex fClmn`}>
          <div className={`${styles.title} flex ac sb`}>
            <div className={`${styles.titleInner} flex fClmn`}>
              <p>❤️ Our Team</p>
              <h2>
                Skilled Legal Professionals <br /> Dedicated to You
              </h2>
            </div>
            <div className="cta flex ac">
              <div className="svg">
                <ChevronsRight color="#ff3c00" />
              </div>
              <a href="#">Join with us</a>
            </div>
          </div>
          <div className={`${styles.memberWrapper} flex ac sb`}>
            {members.map((member, index) => (
              <div
                className={`${styles.memberBox} flex fClmn ac jc`}
                key={index}
              >
                <div className={`${styles.imgBox} flex ac jc`}>
                  <img src={member.image} alt="Member Image" />
                </div>
                <p>{member.name}</p>
                <p>{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
