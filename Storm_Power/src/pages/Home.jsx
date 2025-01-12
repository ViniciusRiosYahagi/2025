// Styles
import "../styles/pages-styles/Home.scss"
// Componentes
// import AboutSection from "../components/AboutSection"
import HeroSection from "../components/HeroSection"
import HowItWorksSection from "../components/HowItWorksSection"
import PlanSection from "../components/PlanSection"
import EmailSection from "../components/EmailSection"

function Home() {
  return (
    <main>
      <HeroSection />
      <HowItWorksSection />
      <PlanSection />
      <EmailSection />
      {/* <AboutSection/> */}
    </main>
  )
}

export default Home