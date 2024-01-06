import { Link } from 'react-router-dom';
import '../StyleSheets/DesignSection.css'

interface DesignSectionProps {
    designName: string;
    designDesc: string;
    designButtonText: string;
    designBottomText: string;
    designImage: string;
    colorStyle: string;
    linkTo: string,
}

export const DesignSection: React.FC<DesignSectionProps> = ({colorStyle, designName, designDesc, designButtonText, linkTo, designBottomText, designImage}) => {

    const containerStyle = {
        backgroundColor: colorStyle,
      };


    return(
        <div className="designSectionContainer" style={containerStyle}>
            <div className="designSectionContent">
                <div className="leftSideDiv">

                <div className='textTitles'>
                    <h1 className='textLeftHeader'>{designName}</h1>
                    <p className='textLeftDesc'>{designDesc} </p>
                    <Link to={linkTo} className='linkStyle'>{designButtonText}</Link>
                </div>

                <div className='bottomLeftDiv'>
                    <p className='bottomLeftText'>{designBottomText}</p>
                </div>

                </div>
                
                <div className="rightSideDiv">
                    <img src={designImage} className='imgStyleHolder'/>
                </div>
            </div>
        </div>
    )
}