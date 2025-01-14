import styles from "../styles/components-styles/Header.module.scss"
import { Link } from "react-router-dom"
import Search from "./Search"

function Header() {

  const menu = [
    {menu: 'News', id: '/'},
    {menu: 'About', id: '/about'},
    {menu: 'Create', id: '/create'}
  ]

  return (
    <header className={styles.header}>
      {/* Logo */}
        <div className={styles["logo-div"]}>
          <h1>Mercury</h1>
        </div>
      {/* Search */}
        <Search />
      {/* Nav */}
      <nav className={styles.nav}>
        <ul>
          {menu.map((item,index) => (
            <Link to={item.id} key={index}>{item.menu}</Link>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header