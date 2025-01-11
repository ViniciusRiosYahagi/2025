import styles from "../styles/AboutSection.module.scss";

function AboutSection() {
  return (
    <section className={`content  ${styles.section}`}>
      <h1 className={styles.title}>About us</h1>
      <div className={styles.div}>
        <h2 className={styles.subtitle}>Vision</h2>
        <p className={styles["description-2"]}>
        StormPower is a sustainable startup committed to transforming the way we generate and use energy. Our innovative approach leverages the natural power of storms to produce clean, renewable energy, reducing dependence on fossil fuels and minimizing environmental impact.
        </p>
      </div>

      <div className={styles.div}>
        <h2 className={styles.subtitle}>Commitment</h2>
        <p className={styles["description-2"]}>
        At the core of StormPower’s mission is a dedication to sustainability and eco-conscious innovation. We believe in creating solutions that not only benefit our customers but also contribute to a greener, more resilient planet.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
