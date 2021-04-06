import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import './prevCard.css'

const PrevCard = ({ userId, uTitle, uName, uImage, uText, isMyArticle, articleId }) => {

    const [summary, setSummary] = useState(null)
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        setSummary(uText.split('').slice(0, 250))
    }, [uText])

    const hoverStylingOn = () => {
        setIsHovered(true)
    }
    const hoverStylingOff = () => {
        setIsHovered(false)
    }


    return (
        <Link to={`/${uName.split(' ').join('')}/${uTitle.split(' ').join('')}`}>
            <div
                id={userId}
                onMouseEnter={hoverStylingOn}
                onMouseLeave={hoverStylingOff}
                className="ui items"
                style={{ background: isHovered ? '#dadada' : '' }}
            >
                <div className="item">
                    <div className="image">
                        <img src={uImage} alt='img' style={{ opacity: isHovered ? '0.5' : '1' }} />
                    </div>
                    <div className="content" >
                        <h2 className="header">{uTitle}</h2>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <h4 className="meta">{uName}</h4>
                            {isMyArticle && <div className="meta"> My {articleId} Story <i className="book icon" /></div>}
                        </div>
                        <div className="description">{summary}
                        </div>
                    </div>
                </div>
            </div>
        </Link>

    )
}

export default PrevCard;