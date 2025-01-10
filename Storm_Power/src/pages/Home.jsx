// import AboutSection from "../components/AboutSection"
import FeatureSection from "../components/FeatureSection"
import HeroSection from "../components/HeroSection"
import "../styles/Home.scss"

function Home() {
  return (
    <main>
      <HeroSection 
        title={"Storm Power"}
        subtitle={"The power of the storm at your fingertips"}
        description={"StormPower is an innovative startup dedicated to revolutionizing energy   solutions. Our mission is to harness the natural power of storms to provide clean, sustainable, and efficient energy for homes and businesses. Join us on this exciting journey!"}
        textButton={"More"}

        imageSrc={"./img/rain.png"}
        imageAlt={"Cloud With Rain"}
      />
      <FeatureSection />
      {/* <AboutSection 
        title={"About us"}

        subtitle01={"Vision"}
        description01={"StormPower is a sustainable startup committed to transforming the way we generate and use energy. Our innovative approach leverages the natural power of storms to produce clean, renewable energy, reducing dependence on fossil fuels and minimizing environmental impact."}

        subtitle02={"Commitment"}
        description02={"At the core of StormPower’s mission is a dedication to sustainability and eco-conscious innovation. We believe in creating solutions that not only benefit our customers but also contribute to a greener, more resilient planet."}
      /> */}
      
    </main>
  )
}

export default Home