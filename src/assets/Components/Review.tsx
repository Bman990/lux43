import Marquee from "react-fast-marquee"
import { ReviewCard } from "./ReviewCard"
import '../StyleSheets/Review.css'



export const Review: React.FC = () => {
    return(
    <section className="reviewSection">

        <Marquee
        className="marqueeStyle"
        pauseOnHover
        >
            
            <ReviewCard
            text="Interior Design Award"
            source="Interior.com"
            />

            <ReviewCard
            text="Best Remodeling Project Award"
            source="House Magazine"
            />

            <ReviewCard
            text="Design Masterpiece Award"
            source="Modern Styles Atlanta"
            />

            <ReviewCard
            text="Designer's Choice Award"
            source="Home Life Magazine"
            />

        </Marquee>
    </section>
    )
}