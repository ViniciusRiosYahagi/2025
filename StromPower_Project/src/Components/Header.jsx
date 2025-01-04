function Header() {
  return (
    <header className="d-flex justify-content-start p-5" style={{backgroundColor: "transparent"}}>
      <h1>
        <a href="#" className="text-decoration-none fw-bold text-white" style={{fontSize: "1.2em", margin: "2em"}}>Strom Power</a>
      </h1>
      <nav className="navbar navbar-expand-lg">
        <ul className="navbar-nav">
          {['Inicio', 'Sobre', 'Planos', 'Contato'].map((item, index) => (
            <li key={index} className="nav-item me-3 fs-6">
              <a href="#" className="text-decoration-none fw-bold text-white">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header