import styles from "./stats.module.css";

const statsData = [
  {
    value: "350+",
    label: "Total Happy Children",
  },
  {
    value: "180+",
    label: "Families Supported",
  },
  {
    value: "50+",
    label: "Volunteers",
  },
  {
    value: "1000+",
    label: "Worldwide Donors",
  },
];
const Stats = () => {
  return (
    <section className={styles.statsSec}>
      <div className="container">
        <div className={`${styles.statsContent} flex ac sb`}>
          {statsData.map((stat, index) => (
            <div className={`${styles.statsBox} flex fClmn ac jc`} key={index}>
              <p>{stat.value}</p>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
