import React, { useState, useEffect } from 'react'

import './myAccount.css';
import PrevCard from '../../containers/cards/PrevCard'
import Home from '../home/Home'
const MyAccount = ({ usersD, userId, isUserlog, setUsersData }) => {
    const [cardContent, setCardContent] = useState('')
    useEffect(() => {
        if (Array.isArray(usersD)) {
            setCardContent(
                <>
                    <div
                        className="ui segment myAccountContainer">
                        {usersD.map((user, index) => {
                            if (user.googleId === userId) {
                                return user.article.map((ar, i) => {
                                    return (
                                        <React.Fragment key={`${user}_ar_${i}`}>
                                            <PrevCard
                                                userId={userId}
                                                uTitle={ar.title}
                                                uImage={ar.postHeaderImg}
                                                uName={user.name}
                                                uText={ar.postContent}
                                                numberOfWords={ar.numberOfWords}
                                                articleId={i + 1}
                                                isMyArticle={isUserlog ? userId === user.googleId ? true : false : false}
                                                deletedItem={true}
                                                setUsersData={setUsersData}
                                                usersD={usersD}
                                                currentUserData={user}
                                                currentArticleData={ar}
                                            />
                                            {/* {console.log(isUserlog)} */}
                                        </React.Fragment>
                                    )
                                })
                            }
                        })}

                    </div>
                </>
            )
        }
    }, [usersD, isUserlog, userId])


    return (
        <>
            {!isUserlog && <Home />}
            <div className="container">
                <div className="main">
                    <h1>My Storys</h1>
                    {isUserlog && cardContent}
                </div>
            </div >
        </>
    )
}

export default MyAccount;