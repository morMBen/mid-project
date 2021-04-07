import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ReactHtmlParser from 'react-html-parser'
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import './prevCard.css'

const PrevCard = ({ currentArticleData, currentUserData, usersD, setUsersData, deletedItem, numberOfWords, userId, uTitle, uName, uImage, uText, isMyArticle, articleId }) => {

    const [summary, setSummary] = useState(null)
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (uText) {

            setSummary(uText.split('').slice(0, 250).join(''))
        }
    }, [uText])

    const hoverStylingOn = (e) => {
        setIsHovered(true)
    }
    const hoverStylingOff = () => {
        setIsHovered(false)
    }


    const deleteItem = () => {
        const userIndex = usersD.findIndex((e) => e.googleId === userId)
        const articleIndex = currentUserData.article.findIndex((e) => e.id === articleId)

        const shallowArticleData = [...currentUserData.article]
        shallowArticleData.splice(articleIndex, 1)
        const tempArticle = shallowArticleData;

        const shallowUserData = [...usersD]
        shallowUserData.splice(userIndex, 1)
        const tempDataToUpdate = [...shallowUserData, { ...currentUserData, article: tempArticle }]


        // console.log({ ...currentUserData, article: tempArticle })
        // console.log(usersD)


        setUsersData(tempDataToUpdate)
        setItemOnApi({ ...currentUserData, article: tempArticle })
    }


    const setItemOnApi = async (dataToSet) => {
        await axios.put(`https://605b218e27f0050017c063ab.mockapi.io/users/${currentUserData.ids}`, dataToSet)
    }

    const editItem = () => {
        console.log('edit')
    }

    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Link to={`/${uName.split(' ').join('')}/${uTitle.split(' ').join('')}`}>
                <div
                    id={userId}
                    onMouseEnter={hoverStylingOn}
                    onMouseLeave={hoverStylingOff}
                    className="ui items p-card"
                    style={{ background: isHovered ? '#dadada' : '', padding: "0.7rem", borderRadius: "5px" }}
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
                            <div className="description">{ReactHtmlParser(summary)}<h5>{Math.round(numberOfWords / 200)} Minuts reading</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            {deletedItem &&
                <div style={{ display: "flex", alignItems: "center", fontSize: "2rem" }}>
                    <div
                        className='p-card-icon'
                        id="trash"
                        onClick={deleteItem}
                    >
                        <i className="trash alternate outline icon"></i></div>
                    <div
                        className='p-card-icon'
                        id="edit"
                        onClick={editItem}
                    >
                        <i className="edit outline icon"></i>
                    </div>
                </div>
            }
        </div >

    )
}

export default PrevCard;