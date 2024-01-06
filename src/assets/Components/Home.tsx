import { AboutUs } from "./AboutUs"
import { Hero } from "./Hero"
import { Projects } from "./Projects"
import { Review } from "./Review"



export const Home: React.FC = () => {
    return (
        <div>
            <Hero />
            <Review />
            <AboutUs />
            <Projects />
        </div>
    )
}