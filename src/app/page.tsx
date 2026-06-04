import Accordion from './components/Accordion'
import ExperienceSection from './components/ExperienceSection'
import Footer from './components/Footer'
import HeroHeading from './components/HeroHeading'
import HowItWorks from './components/HowItWorks'
import Navbar from './components/Navbar'
import PropertyListings from './components/PropertyListings'
import SearchFilter from './components/SearchFilter'
import TestimonialSlider from './components/TestimonialSlider'
import styles from './page.module.css'

const Home = () => {
  return (
    <div>
      <section className={styles.hero}>
        <Navbar/>
      <HeroHeading/>
      <SearchFilter/>
      </section>

      <section className={styles.UnderHero}>
        <ExperienceSection/>
        <PropertyListings/>
        <HowItWorks/>
        <Accordion/>
        <TestimonialSlider/>
      </section>
      <section>
        <Footer/>
      </section>
      
    </div>
  )
}

export default Home