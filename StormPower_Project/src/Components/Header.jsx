function Header() {
  return (
    <header className="navbar navbar-expand-lg d-flex justify-content-start align-items-baseline py-5">
      <h1 className="m-0">
        <a href="#" className="text-decoration-none fw-bold text-white display-3 m-5">
          Storm Power
        </a>
      </h1>
      <nav>
        <ul className="navbar-nav ms-auto">
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
