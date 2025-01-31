import AboutSection from "../../components/AboutSection/AboutSection"
import HeroSection from "../../components/HeroSection/HeroSection"

import styles from './Home.module.scss'

function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <AboutSection />
    </main>
  )
}

export default Home