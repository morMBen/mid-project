import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import './prevCard.css'

const PrevCard = ({ uTitle, uName, uImage, uText }) => {

    const [summary, setSummary] = useState(null)

    useEffect(() => {
        setSummary(uText.split('').slice(0, 250))
    }, [uText])


    return (
        <div className="ui items">
            <div className="item">
                <div className="image">
                    <img src={uImage} alt='img' />
                </div>
                <div className="content">
                    <h2 className="header">{uTitle}</h2>
                    <h4 className="meta">{uName}</h4>
                    <div className="description">{summary} <Link to="/posts">read more</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrevCard;