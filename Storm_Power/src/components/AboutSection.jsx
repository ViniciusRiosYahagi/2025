import styles from "../styles/AboutSection.module.scss";

// eslint-disable-next-line react/prop-types
function AboutSection({ title, subtitle01, description01, subtitle02, description02 }) {
  return (
    <section className={`content  ${styles.section}`}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.div}>
        <h2 className={styles.subtitle}>{subtitle01}</h2>
        <p className={styles["description-2"]}>{description01}</p>
      </div>
      <div className={styles.div}>
        <h2 className={styles.subtitle}>{subtitle02}</h2>
        <p className={styles["description-2"]}>{description02}</p>
      </div>
    </section>
  );
}

export default AboutSection;
