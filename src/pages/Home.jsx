import Hero from "../components/Hero"
import AboutSummary from "../components/AboutSummary"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function Home() {
    return (
        <>
            <Hero />
            <Projects />
            <AboutSummary />
            <Contact />
            <Footer />
        </>
    )
}
