import '../StyleSheets/ReviewCard.css'

interface ReviewCardProps {
    text: string,
    source: string
}


export const ReviewCard: React.FC<ReviewCardProps> = ({text, source}) => {
    return(
        <div className="reviewCardContainer">
            <div className="reviewTextDiv">
                <h1 className='reviewText'>"{text}"</h1>
                <p className='reviewSource'>{source}</p>
            </div>
        </div>
    )
}