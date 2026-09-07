import styles from "./insta.module.css";
import Anime from "./anime";

const posts = [
  "/HomePage/Instagram/gallery-item-1.png",
  "/HomePage/Instagram/gallery-item-2.png",
  "/HomePage/Instagram/gallery-item-3.png",
  "/HomePage/Instagram/gallery-item-4.png",
  "/HomePage/Instagram/gallery-item-5.png",
  "/HomePage/Instagram/gallery-item-6.png",
  "/HomePage/Instagram/gallery-item-3.png",
  "/HomePage/Instagram/gallery-item-4.png",
];

const Insta = () => {
  const { viewportRef } = Anime();

  return (
    <section className={styles.InstaSec}>
      <div className={styles.InstaContent}>
        <div className={styles.slider} ref={viewportRef}>
          <div className={styles.sliderContainer}>
            {posts.map((post, index) => (
              <div className={styles.slide} key={index}>
                <img
                  loading="lazy"
                  src={post}
                  alt={`Insta post ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insta;
