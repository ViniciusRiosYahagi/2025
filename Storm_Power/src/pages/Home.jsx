// Styles
import "../styles/Home.scss"
// Componentes
import AboutSection from "../components/AboutSection"
import HeroSection from "../components/HeroSection"
import HowItWorksSection from "../components/HowItWorksSection"
import PlanSection from "../components/PlanSection"

function Home() {
  return (
    <main>
      <HeroSection />
      <HowItWorksSection />
      <PlanSection />
      <AboutSection/>
    </main>
  )
}

export default Home