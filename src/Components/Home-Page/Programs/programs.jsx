import { ChevronsRight } from "lucide-react";
import styles from "./programs.module.css";

const events = [
  {
    image: "/HomePage/Programs/event1.jpg",
    title: "Food Distribution Drive for Underprivileged Families",
    description:
      "Providing nutritious meals and essential food supplies to families in need and spreading hope through community support.",
    location: "Ladda, Dhuri, Punjab",
    date: "10",
    month: "Sep",
  },
  {
    image: "/HomePage/Programs/event2.jpg",
    title: "Education Support & Learning Initiative",
    description:
      "Supporting children with educational resources, learning materials, and opportunities to build a brighter future.",
    location: "Benra, Dhuri, Punjab",
    date: "15",
    month: "Sep",
  },
  {
    image: "/HomePage/Programs/event3.jpg",
    title: "Care & Support for Stray Animals",
    description:
      "A community initiative focused on providing food, care, and basic support to stray and abandoned animals.",
    location: "Bhasaur, Dhuri, Punjab",
    date: "18",
    month: "Sep",
  },
  {
    image: "/HomePage/Programs/event4.jpg",
    title: "Clothes & Essentials Donation Camp",
    description:
      "Collecting and distributing clothes, blankets, and daily essentials to people and families facing difficult circumstances.",
    location: "Hassanpur, Dhuri, Punjab",
    date: "22",
    month: "Sep",
  },
];

const Programs = () => {
  return (
    <section className={styles.eventSec}>
      <div className="container">
        <div className={`${styles.eventContent} flex fClmn`}>
          <div className={`${styles.intro} flex ac sb`}>
            <div className={`${styles.title} flex fClmn`}>
              <p>❤️ Upcoming Events</p>
              <h2>
                Nek Disha Upcoming <br /> Event Schedule
              </h2>
            </div>

            <div className="cta flex ac">
              <div className="svg">
                <ChevronsRight color="#ff3c00" />
              </div>
              <a href="#">Explore More</a>
            </div>
          </div>

          <div className={styles.eventBoxWrapper}>
            {events.map((event, index) => (
              <div className={`${styles.eventBox} flex ac`} key={index}>
                <div className={styles.imgBox}>
                  <div className={`${styles.imgInner} flex ac jc`}>
                    <p>
                      {event.date} <br /> {event.month}
                    </p>
                  </div>
                  <img src={event.image} alt={event.title} />
                </div>

                <div className={`${styles.details} flex fClmn`}>
                  <h2>{event.title}</h2>
                  <p>{event.description}</p>
                  <p>Location</p>
                  <p>{event.location}</p>

                  <div className="cta flex ac">
                    <div className="svg">
                      <ChevronsRight color="#ff3c00" />
                    </div>
                    <a href="#">Event Details</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
