import "../styles/Home.scss"

function Home() {
  return (
    <main>
      <header className="content header">
        <div className="div01">
          <h1 className="title">Storm Power</h1>
          <p className="subtitle">The power of the storm at your fingertips</p>
          <p className="description">
           StormPower is an innovative startup dedicated to revolutionizing energy solutions. Our mission is to harness the natural power of storms to provide clean, sustainable, and efficient energy for homes and businesses. Join us on this exciting journey!
          </p>
          <div>
            <a href="" className="btn">More</a>
          </div>
        </div>

        <div className="div02">
          <img className="image" src="./img/rain.png" alt="Cloud with Rain" />
        </div>
      </header>
    </main>
  )
}

export default Home