function Header() {
  return (
    <header
      className="d-flex justify-content-start align-items-center pt-5"
      style={{ backgroundColor: "transparent", height: "150px"}}
    >
      <h1>
        <a
          href="#"
          className="text-decoration-none fw-bold text-white"
          style={{ fontSize: "1.2em", margin: "2em" }}
        >
          Storm Power
        </a>
      </h1>
      <nav className="navbar navbar-expand-lg">
        <ul className="navbar-nav">
          {["Home", "About", "Plans", "Contact"].map((item, i) => (
            <li key={i} className="nav-item me-3 fs-6">
              <a href="#" className="text-decoration-none fw-bold text-white">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
