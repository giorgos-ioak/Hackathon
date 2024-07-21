import HeroSection from "./components/HeroSection.jsx";
import Navbar from "./components/Navbar.jsx";
import StepSection from "./components/StepSection.jsx";
import FormSection from "./components/FormSection.jsx";
import OutputSection from "./components/OutputSection.jsx";

function App() {
  return (
    <>
      <Navbar aboutUs/>
      <HeroSection />
      <StepSection />
      <FormSection />
      <OutputSection />
    </>
  )
}

export default App
