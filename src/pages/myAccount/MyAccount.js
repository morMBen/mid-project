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
                        <h1>My Storys</h1>
                        {usersD.map((user, index) => {
                            if (user.googleId === userId) {
                                return user.article.map((ar, i) => {
                                    return (
                                        <React.Fragment key={`${user}_ar_${i}`}>
                                            <PrevCard
                                                userId={userId}
                                                uTitle={ar.title}
                                                uImage={ar.postImg}
                                                uName={user.name}
                                                uText={ar.postContent}
                                                numberOfWords={ar.numberOfWords}
                                                articleId={ar.id}
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
                            return <React.Fragment key={index + Math.random() * 10}></React.Fragment>
                        })}

                    </div>
                </>
            )
        }
    }, [usersD, isUserlog, userId, setUsersData])


    return (
        <>
            {!isUserlog && <Home />}
            <div className="main-app">
                <div className="container ui segment">

                    {isUserlog && cardContent}
                </div>
            </div >
        </>
    )
}

export default MyAccount;