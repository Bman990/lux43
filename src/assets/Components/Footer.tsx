import '../StyleSheets/Footer.css'
import { InstagramSvg } from './InstagramSvg'
import { PinterestSvg } from './PinterestSvg'
import { TwitterSvg } from './TwitterSvg'


export const Footer: React.FC = () => {
    return(
        <section className="footerContainer">
            <div className="footerContent">

                <div className="contactFooterDiv">
                    <h1 className='contactText'>Contact</h1>
                    <p className='phoneNumber'>555-341-4345</p>
                    <p className='email'>service@lux43.com</p>
                </div>

                <div className="followUsFooterDiv">

                    <h1 className='followUsText'>Follow Us</h1>

                    <div className='svgDiv'>
                    <PinterestSvg className='pinterestStyle'/>
                    <TwitterSvg className='twitterStyle' />
                    <InstagramSvg className='instagramStyle'/>
                    </div>
                </div>

            </div>

            <div className='copyrightDiv'>
                <p>2024 Lux43 All Rights Reserved</p>
            </div>
        </section>
    )
}