import Plans from "../Components/Plans";
import Email from "../Components/Email";
import Slide from "../Components/Slide";

function Home() {
  return (
    <main style={{ background: "linear-gradient(290deg, #0ed4ff, #0047b2)" }}>
      {/* Section 01 - First impression */}
      <section
        className="d-flex align-items-center justify-content-center text-white vh-100"
               >
  <div className="row w-100">
    <div className="col-md-6 col-12 text-center text-md-start">
      <h1 className="display-1 fw-medium">Storm Power</h1>
      <h1 className="display-3">The power of the storm at your fingertips.</h1>
      <p className="fw-medium">
        StormPower is an innovative startup dedicated to revolutionizing energy
        solutions. Our mission is to harness the natural power of storms to
        provide clean, sustainable, and efficient energy for homes and
        businesses. Join us on this exciting journey!
      </p>
      <a href="#plans" className="btn btn-warning text-black fs-3">
        About Plans
      </a>
    </div>
    <div className="col-md-6 col-12 text-center">
      <img
        className="cloud img-fluid"
        src="./img/rain.png"
        alt="cloud with rain"
        style={{height: "600px"}}
      />
    </div>
  </div>
</section>
      {/* Section 02 - Slide */}
      <section>
        <Slide />
      </section>
      {/* Section 03  - About Plans */}
      <section>
        <Plans />
      </section>
      {/* Section 04 - Email */}
      <section>
        <Email />
      </section>
      {/* Footer */}
      <footer className="d-flex justify-content-evenly align-items-center text-white fw-bold" style={{height: "100px"}}>
        <a href="https://github.com/ViniciusRiosYahagi" className="text-white">
          Made by Vinicius Yahagi Rios
        </a>
        <i>© 2024 ProActive. All rights reserved.</i>
        <i>Phone Number: +1 (800) 555-7890</i>
        <i>Email: support@stormpower.com</i>
      </footer>
    </main>
  );
}

export default Home;
