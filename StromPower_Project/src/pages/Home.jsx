import Card from "../Components/Card";
import Header from "../Components/Header";
import Slide from "../Components/Slide";

function Home() {
  return (
    <main style={{ background: "linear-gradient(290deg, #0ed4ff, #0047b2)" }}>
      {/* Header Component*/}
      <Header />
      {/* Section 01 */}
      <section
        className="container01 text-white d-flex justify-content-center align-items-center"
        style={{ height: "650px" }}
      >
        <div
          className="d-flex flex-column align-items-start gap-5"
          style={{ maxWidth: "50vw" }}
        >
          <h1 style={{ fontSize: "4.5em" }}>
            The power of the storm at your fingertips.
          </h1>
          <p style={{ fontSize: "1.3em" }}>
            StormPower is an innovative company that harnesses the power of
            lightning during rainy days to generate extra, clean, and
            sustainable energy. Our goal is to transform intense weather events
            into a reliable energy source for homes, reducing costs and
            environmental impact.
          </p>
          <a
            href="#"
            className="btn btn-warning fs-4 text-black p-3"
          >
            Learn More
          </a>
        </div>
        <img
          className="cloud img-fluid"
          style={{ height: "650px" }}
          src="./img/rain.png"
          alt="cloud with rain"
        />
      </section>
      {/* Section 02 */}
      <Slide />
      {/* Section 03 */}
      <section
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "400px" }}
      >
        <div
          className="text-center text-white"
          style={{ maxWidth: "60vw" }}
        >
          <h1>Why subscribe to a StormPower Plan?</h1>
          <p style={{ fontSize: "1.3em" }}>
            With Storm Power, you turn storms into clean energy and guaranteed
            savings! Our innovative system safely harnesses the power of
            lightning, reduces your electricity bill, and decreases dependence
            on the grid. Benefit from extra energy during critical moments, with
            24/7 dedicated support and the peace of mind of a sustainable and
            efficient solution. Choose the ideal plan and start revolutionizing
            your energy today!
          </p>
        </div>
      </section>
      {/* Section 04 */}
      <Card />
    </main>
  );
}

export default Home;
