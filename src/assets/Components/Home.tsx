import { AboutUs } from "./AboutUs"
import { Footer } from "./Footer"
import { Hero } from "./Hero"
import { InfoSlider } from "./InfoSlider"
import { Navbar } from "./Navbar"
import { Projects } from "./Projects"
import { Review } from "./Review"



export const Home: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Review />
            <AboutUs />
            <Projects />
            <InfoSlider />
            <Footer />
        </div>
    )
}