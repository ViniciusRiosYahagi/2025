function Header() {
  return (
    <header
      id="home"
      className="d-flex align-items-baseline p-5"
      style={{ height: "250px" }}
    >
      <h1>
        <a href="#home" className="text-decoration-none fw-bold text-white display-3 me-5">
          Storm Power
        </a>
      </h1>
      <nav className="navbar navbar-expand-lg">
        <ul className="navbar-nav">
          {[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Plans", id: "plans" },
            { name: "Promotion", id: "promotion" },
          ].map((item, index) => (
            <li key={index} className="nav-item me-3">
              <a
                href={`#${item.id}`}
                className="text-decoration-none fw-bold text-white"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
