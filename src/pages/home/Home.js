import React, { useState, } from 'react';
import './home.css';

// import MockAPI from '../../apis/MockAPI';
import PrevCard from '../../containers/cards/PrevCard'
import { useEffect } from 'react';

const Home = ({ usersD, userId, isUserlog }) => {
    // console.log(props)
    const [cardContent, setCardContent] = useState('')
    const [welcomPage, setWelcomPage] = useState('')

    useEffect(() => {
        if (Array.isArray(usersD)) {
            setCardContent(
                <>
                    <div className="ui segment">
                        <h1>Home Page</h1>
                        {usersD.map((user, index) => {
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
                                        />
                                        {/* {console.log(isUserlog)} */}
                                    </React.Fragment>
                                )
                            })
                        })}
                    </div>
                </>
            )
        }
    }, [usersD, isUserlog, userId])

    useEffect(() => {
        setWelcomPage(<div style={{ height: "90vh" }}>
            <h1>
                Welcome to my site
            </h1>
            <div>
                al;sdf lkasjdfklajf lkasdflaks  lasdfl kal;sdf lkasjdfklajf lkasdflaks  lasdfl kal;sdf lkasjdfklajf lkasdflaks  lasdfl kal;sdf lkasjdfklajf lkasdflaks  lasdfl kal;sdf lkasjdfklajf lkasdflaks  lasdfl kal;sdf lkasjdfklajf lkasdflaks  lasdfl kal;sdf lkasjdfklajf lkasdflaks  lasdfl kal;sdf lkasjdfklajf lkasdflaks  lasdfl kal;sdf lkasjdfklajf lkasdflaks  lasdfl kal;sdf lkasjdfklajf lkasdflaks  lasdfl kal;sdf lkasjdfklajf lkasdflaks  lasdfl kal;sdf lkasjdfklajf lkasdflaks  lasdfl kal;sdf lkasjdfklajf lkasdflaks  lasdfl kal;sdf lkasjdfklajf lkasdflaks  lasdfl k
            </div>
            <h2>Sub text</h2>
            <div>
                al;sdf lkasjdfklajf lkasdflaks  lasdfl kal;sdf lkasjdfklajf lkasdflaks  lasdfl kal;sdf lkasjdfklajf lkasdflaks  lasdfl kal;sdf lkasjdfklajf lkasdflaks  lasdfl kal;sdf lkasjdfklajf lkasdflaks  lasdfl kal;sdf lkasjdfklajf lkasdflaks  lasdfl kal;sdf lkasjdfklajf lkasdflaks  lasdfl kal;sdf lkasjdfklajf lkasdflaks  lasdfl kal;sdf lkasjdfklajf lkasdflaks  lasdfl kal;sdf lkasjdfklajf lkasdflaks  lasdfl kal;sdf lkasjdfklajf lkasdflaks  lasdfl k
            </div>
            <h3>Sub text</h3>
            <div>
                al;sdf lkasjdfklajf lkasdflaks  lasdfl kal;sdf lkasjdfklajf lkasdflaks  lasdfl kal;sdf lkasjdfklajf lkasdflaks  lasdfl kal;sdf lkasjdfklajf lkasdflaks  lasdfl kal;sdf lkasjdfklajf lkasdflaks  lasdfl kal;sdf lkasjdfklajf lkasdflaks  lasdfl kal;sdf lkasjdfklajf lkasdflaks  lasdfl kal;sdf lkasjdfklajf lkasdflaks  lasdfl kal;sdf lkasjdfklajf lkasdflaks  lasdfl kal;sdf lkasjdfklajf lkasdflaks  lasdfl kal;sdf lkasjdfklajf lkasdflaks  lasdfl k
            </div>
            <h4>Sub text</h4>
            <div>
                al;sdf lkasjdfklajf lkasdflaks  lasdfl kal;sdf lkasjdfklajf lkasdflaks  lasdfl kal;sdf lkasjdfklajf lkasdflaks  lasdfl kal;sdf lkasjdfklajf lkasdflaks  lasdfl kal;sdf lkasjdfklajf lkasdflaks  lasdfl kal;sdf lkasjdfklajf lkasdflaks  lasdfl kal;sdf lkasjdfklajf lkasdflaks  lasdfl kal;sdf lkasjdfklajf lkasdflaks  lasdfl kal;sdf lkasjdfklajf lkasdflaks  lasdfl kal;sdf lkasjdfklajf lkasdflaks  lasdfl kal;sdf lkasjdfklajf lkasdflaks  lasdfl k
            </div>
        </div>)
    }, [])


    return (
        <div className="container ui segment">
            {/* {console.log(isUserlog)} */}
            {/* use that ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */}
            {isUserlog && cardContent}
            {!isUserlog && welcomPage}
            {/* {cardContent} */}
        </div >
    )
}

export default Home;