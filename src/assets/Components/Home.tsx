import { AboutUs } from "./AboutUs"
import { Contact } from "./Contact"
import { Footer } from "./Footer"
import { Hero } from "./Hero"
import { InfoSlider } from "./InfoSlider"
import { Projects } from "./Projects"
import { Review } from "./Review"



export const Home: React.FC = () => {
    return (
        <div>
            <Hero />
            <Review />
            <AboutUs />
            <Projects />
            <InfoSlider />
            <Contact />
            <Footer />
        </div>
    )
}