import '../StyleSheets/Projects.css'
import { DesignSection } from './DesignSection'
import kitchenPic from '/kitchenHolder.jpg'
import bathroomPic from '/bathroomHolder.jpg'
import bedroomPic from '/bedroomHolder.jpg'
import livingRoomPic from '/livingRoomHolder.jpg'
import patioPic from '/patioHolder.jpg'

export const Projects: React.FC = () => {
    return(
        <section className="projectContainer" id="projects">
            <div className="projectContent">

            <DesignSection 
            className2=''
            colorStyle='#d9e2e7'
            designName='Kitchen Design'
            designDesc='Every meal will feel like a retreat'
            linkTo='/lux43/kitchen'
            designButtonText='Kitchen Gallery'
            designBottomText='Unveil the artistry of our kitchen designs, meticulously curated to transform your cooking space into a haven of elegance. From sleek countertops to smart storage solutions, every detail is designed with your comfort in mind'
            designImage={kitchenPic}
            />

            <DesignSection 
            className2='bathroomSec'
            colorStyle='#FFED9C'
            designName='Bathroom Design'
            designDesc='Your sanctuary of comfort'
            linkTo='/lux43/bathroom'
            designButtonText='Bathroom Gallery'
            designBottomText='Transform your daily routine into a spa-like escape. Our bathroom designs redefine relaxation, offering a sanctuary where every moment becomes a refreshing retreat'
            designImage={bathroomPic}
            />

            <DesignSection 
            className2='bedroomSec'
            colorStyle='#D9D7BA'
            designName='Bedroom Design'
            designDesc='Restful nights to your liking'
            linkTo='/lux43/bedroom'
            designButtonText='Bedroom Gallery'
            designBottomText='Discover tranquility in every detail. Our bedroom designs create a harmonious haven where restful nights and rejuvenating mornings seamlessly blend, turning your personal space into a serene retreat'
            designImage={bedroomPic}
            />

            <DesignSection 
            className2='livingRoomSec'
            colorStyle='#FFAF74'
            designName='Living Room Design'
            designDesc='Live in comfort and style to your taste'
            linkTo='/lux43/livingroom'
            designButtonText='Living Room Gallery'
            designBottomText='Elevate your living experience with designs that breathe life into your space. Our living room creations are a symphony of comfort and style, turning ordinary moments into extraordinary memories in the heart of your home'
            designImage={livingRoomPic}
            />

            <DesignSection
            className2='patioSec' 
            colorStyle='#e2abae'
            designName='Patio Design'
            designDesc='Kick back in style with your patio'
            linkTo='/lux43/patio'
            designButtonText='Patio Gallery'
            designBottomText='Unwind in the embrace of nature with our patio designs. Transform your outdoor space into a haven of relaxation, where every sunset becomes a breathtaking retreat and every day is an invitation to enjoy the open air'
            designImage={patioPic}
            />
            </div>
        </section>
    )
}