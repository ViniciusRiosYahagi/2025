import styles from "../styles/FeatureSection.module.scss"
import { useEffect, useState } from "react";

function FeatureSection() {

  const [index, setIndex] = useState(0)

  const date = [
    {
      title: "Lightning Capture Technology",
      text: "An advanced, safe, and efficient lightning capture system is installed in your home. It absorbs the energy from lightning and converts it into usable electricity.",
    },
    {
      title: "Smart Conversion",
      text: "The captured energy is regulated and transformed into stable electricity, ready to be used in household appliances and systems.",
    },
    {
      title: "Sustainable Storage",
      text: "Any excess energy is stored in high-capacity batteries, ensuring extra power even when there are no storms.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % date.length)
    }, 3000)
    return () => clearInterval(interval)
  })

  return (
    <section className={`content ${styles.section}`}>
      <div className={styles.div01}>
        <h1  className={styles.title}>How It Work</h1>
      </div>
      <div className={styles.div02}>
        <h1 className={styles.subtitle}>{date[index].title}</h1>
        <p className={styles.description}>{date[index].text}</p>
      </div>

      <div className={styles.div03}>
        {date.map((_, i) => (
          <button
            key={i}
            className={styles.button}
            style={{
              backgroundColor: index === i ? "#292929" : "#5697b6",
            }}
            onClick={() => setIndex(i)}
          >
            
          </button>
        ))}
      </div>
    </section>
  )
}

export default FeatureSection