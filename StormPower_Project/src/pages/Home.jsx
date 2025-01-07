import Card from "../Components/Card";
import Email from "../Components/Email";
import Header from "../Components/Header";
import Slide from "../Components/Slide";

function Home() {
  return (
    <main style={{ background: "linear-gradient(290deg, #0ed4ff, #0047b2)" }}>
      {/* Section 00 -Header */}
      <section>
        <Header /> 
      </section>
      {/* Section 01 - First impression */}
      <section  className="d-flex justify-content-center align-items-center text-white" style={{height: "650px"}} >
        <div className="d-flex flex-column align-items-start gap-5 w-50">
          <h1 className="display-1">
            The power of the storm at your fingertips.
          </h1>
          <p className="fs-5">
            StormPower is an innovative company that harnesses the power of
            lightning during rainy days to generate extra, clean, and
            sustainable energy. Our goal is to transform intense weather events
            into a reliable energy source for homes, reducing costs and
            environmental impact.
          </p>
          <a href="#about" className="fbtn btn btn-warning text-black fs-2">
            Learn More
          </a>
        </div>
        <img style={{ height: "650px" }} src="./img/rain.png" alt="cloud with rain" />
      </section>
      {/* Section 02 - Slide */}
      <section>
        <Slide />
      </section>
      {/* Section 03  - About Plans */}
      <section>
        <Card />
      </section>
      {/* Section 04 - Email */}
      <section>
        <Email />
      </section>
      {/* Footer */}
      <footer className="d-flex justify-content-evenly align-items-center text-white fw-bold bg-dark" style={{height: "100px"}}>
        <a href="https://github.com/ViniciusRiosYahagi" className="text-white">
          Made by Vinicius Yahagi Rios
        </a>
        <i>© 2024 ProActive. All rights reserved.</i>
      </footer>
    </main>
  );
}

export default Home;
