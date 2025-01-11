import styles from "../styles/HeroSection.module.scss";

function HeroSection() {
  return (
    <header className={`content ${styles.header}`}>
      <div className={styles.div01}>
        <h1 className={styles.title}>Storm Power</h1>
        <p className={styles.subtitle}>The power of the storm at your fingertips</p>
        <p className={styles["description-1"]}>
        StormPower is an innovative startup dedicated to revolutionizing energy   solutions. Our mission is to harness the natural power of storms to provide clean, sustainable, and efficient energy for homes and businesses. Join us on this exciting journey!
        </p>
        <div>
          <a href="#" className={styles.btn}>
            More
          </a>
        </div>
      </div>
      <img className={styles.image} src="./img/rain.png" alt="Cloud With Rain" />
    </header>
  );
}

export default HeroSection;
