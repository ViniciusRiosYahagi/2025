import styles from "../styles/HeroSection.module.scss";

// eslint-disable-next-line react/prop-types
function HeroSection({ title, subtitle, description, textButton, imageSrc, imageAlt }) {
  return (
    <header className={`content ${styles.header}`}>
      <div className={styles.div01}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles["description-1"]}>{description}</p>
        <div>
          <a href="#" className={styles.btn}>
            {textButton}
          </a>
        </div>
      </div>
      <img className={styles.image} src={imageSrc} alt={imageAlt} />
    </header>
  );
}

export default HeroSection;
