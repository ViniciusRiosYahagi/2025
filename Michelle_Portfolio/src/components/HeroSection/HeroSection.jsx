import { Link } from 'react-router-dom'
import styles from './HeroSection.module.scss'

function HeroSection() {
  return (
    
    <>
            <div className={styles.shadow}></div>

      <header className={styles.header}>
      {/* Name */}
      <h1>Michelle</h1>
      {/* Image */}
      <div>
        <img src="public/img/michelle.jpg" alt="michelle" />
      </div>
      {/* Navbar */}
      <nav className={styles.nav}>
        <ul>
          <li><Link to='#about'>About</Link></li>
          <li><Link to='#gallery'>Gallery</Link></li>
          <li><Link to='#Contact'>Contact</Link></li>
        </ul>
      </nav>
    </header>
    </>
  )
}

export default HeroSection