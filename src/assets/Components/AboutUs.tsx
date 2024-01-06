import '../StyleSheets/AboutUs.css'
import pic from "/interiorHomepic.jpg"

export const AboutUs: React.FC = () => {
    return(
        <section className="aboutUsContainer">
            <div className="aboutUsContent">

                <div className='aboutUsHeaderDiv'>
                    <h1 className='headerTitle'>Crafting Dream Spaces for Over a Decade</h1>
                </div>

                <div className='aboutUsInfoDiv'>
                    <div className='aboutUsInfoContent'>
                   <div className='infoTextDiv'>
                    <p className='infoText'>For over a decade, we have been <span className='infoTextSpan'>passionately</span> dedicated to the art of crafting dream spaces. Our team of experts brings a wealth of <span className='infoTextSpan'>experience</span> and <span className='infoTextSpan'>creativity</span> to every project, transforming houses into personalized havens. </p>
                    <p className='infoText'>Our team of <span className='infoTextSpan'>seasoned</span> experts, with years of collective experience, approaches each project with a unique blend of <span className='infoTextSpan'>passion</span> and precision. We go beyond the ordinary, delving into the intricacies of design to create not just houses but bespoke sanctuaries — spaces that encapsulate the individual <span className='infoTextSpan'>dreams</span> and <span className='infoTextSpan'>lifestyles</span> of our clients.</p>
                   </div>

                   <div className='infoPictureDiv'>
                   <img src={pic} className='infoPicStyle'/>
                   </div>
                   </div>
                </div>
            </div>
        </section>
    )
}