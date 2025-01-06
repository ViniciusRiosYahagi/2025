import Card from "../Components/Card";
import Header from "../Components/Header";
import Slide from "../Components/Slide";

function Home() {
  return (
    <main style={{ background: "linear-gradient(290deg, #0ed4ff, #0047b2)" }}>
      {/* Header Component*/}
      <Header /> 
      {/* Section 01 */}
      <section className="d-flex justify-content-center align-items-center text-white" style={{height: "750px"}} >
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
          <a href="#" className="fbtn btn btn-warning text-black fs-3">
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
      <section className="d-flex flex-column justify-content-center align-items-center" style={{ height: "400px" }}>
        <div className="text-center text-white w-75">
          <h1>Why subscribe to a StormPower Plan?</h1>
          <p className="fs-5">
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
      {/* Section 05 */}
      <section className="d-flex flex-column justify-content-center align-items-center bg-warning w-auto" style={{ height: "650px"}}>
        <div className="w-50">
          <h1 className="display-6">
            Exclusive Bonus: Sign up with your email now and get 10% off the
            first month of any chosen plan!
          </h1>
          <p className="fs-5">
            Receive exclusive tips, insights on sustainable energy, and a
            personalized StormPower demonstration directly in your email.
          </p>
 
        </div>

        <div className="d-flex justify-content-start align-items-start w-50">
        <p className="fs-5 fw-bold">
            Leave your email now and take the first step to harness the power of
            StormPower in your home!
          </p>
          <input
            type="email"
            placeholder="email"
            className="einput fw-bold rounded p-3 me-3"
            style={{ width: "600px"}}
          />
          <button className="ebtn btn btn-dark fw-bold p-3" style={{ width: "200px"}}>Send</button>
        </div>
      </section>
    </main>
  );
}

export default Home;
