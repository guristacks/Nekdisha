import { ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react";

import styles from "./blogs.module.css";
import useBlogsSlider from "./anime";

const blogs = [
  {
    date: "12",
    month: "SEP",
    image: "/HomePage/Programs/event1.jpg",
    title: "Small Acts Can Create Big Changes",
    description:
      "Discover how simple acts of kindness can create meaningful changes in someone's life.",
  },
  {
    date: "18",
    month: "SEP",
    image: "/HomePage/Programs/event2.jpg",
    title: "Together We Can Make A Difference",
    description:
      "When people come together for a common cause, even small efforts can make a lasting impact.",
  },
  {
    date: "24",
    month: "SEP",
    image: "/HomePage/Programs/event3.jpg",
    title: "Hope Begins With Helping Others",
    description:
      "Learn why compassion and community support are important for building a better tomorrow.",
  },
  {
    date: "02",
    month: "OCT",
    image: "/HomePage/Programs/event4.jpg",
    title: "Every Child Deserves A Better Future",
    description:
      "Creating opportunities for children today can help build a brighter and stronger future.",
  },
  {
    date: "08",
    month: "OCT",
    image: "/HomePage/Programs/event1.jpg",
    title: "The Power Of Giving Back",
    description:
      "Giving your time, resources, or skills can have a powerful impact on the people around you.",
  },
  {
    date: "15",
    month: "OCT",
    image: "/HomePage/Programs/event2.jpg",
    title: "Why Community Matters",
    description:
      "Strong communities are built when people support, care for, and stand beside one another.",
  },
  {
    date: "21",
    month: "OCT",
    image: "/HomePage/Programs/event3.jpg",
    title: "Kindness Has No Boundaries",
    description:
      "A little kindness can reach far beyond what we imagine and inspire others to do the same.",
  },
  {
    date: "29",
    month: "OCT",
    image: "/HomePage/Programs/event4.jpg",
    title: "Building A Better Tomorrow",
    description:
      "Real change starts when we choose to take action and make a difference in our communities.",
  },
  {
    date: "04",
    month: "NOV",
    image: "/HomePage/Programs/event1.jpg",
    title: "Every Contribution Counts",
    description:
      "No contribution is too small when it helps someone move towards a better life.",
  },
  {
    date: "11",
    month: "NOV",
    image: "/HomePage/Programs/event2.jpg",
    title: "Be The Reason Someone Smiles",
    description:
      "Sometimes the smallest gesture can bring hope and happiness into someone's day.",
  },
];

const Blogs = () => {
  const { viewportRef, scrollPrev, scrollNext } = useBlogsSlider();

  return (
    <section className={styles.blogSec}>
      <div className="container">
        <div className={`${styles.blogContent} flex`}>
          <div className={`${styles.blogIntro} flex fClmn`}>
            <p>❤️ Our Blogs</p>

            <h2>Stories That Inspire Change</h2>

            <p>
              Explore stories, ideas and experiences that inspire us to care,
              connect and create a better world together.
            </p>

            <div className={`${styles.sliderBtns} flex`}>
              <button onClick={scrollPrev} aria-label="Previous blog">
                <ChevronLeft />
              </button>

              <button onClick={scrollNext} aria-label="Next blog">
                <ChevronRight />
              </button>
            </div>
          </div>

          <div className={styles.blogRight}>
            <div className={styles.blogSlider} ref={viewportRef}>
              <div className={styles.blogTrack}>
                {blogs.map((blog, index) => (
                  <article className={styles.blogBox} key={index}>
                    <div className={styles.imgBox}>
                      <img src={blog.image} alt={blog.title} />

                      <div className={`${styles.dateBox} flex ac jc`}>
                        <p>
                          {blog.date} <br /> {blog.month}
                        </p>
                      </div>
                    </div>

                    <div className={`${styles.detailsBox} flex fClmn`}>
                      <h2>{blog.title}</h2>

                      <p>{blog.description}</p>

                      <div className="cta flex ac">
                        <div className="svg">
                          <ChevronsRight color="#ff3c00" />
                        </div>
                        <a href="#">Make Donation</a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
