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

                    <div className="ui segment myAccountContainer">
                        <h1>Home Page</h1>
                        {usersD.map((user, index) => {
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
        setWelcomPage(<div style={{ height: "85vh" }}>
            <div class="container ui segment" style={{ height: "85vh" }}>
                <br></br>
                <h1 style={{ textAlign: 'center' }}>
                    Sing in and be the story everyone is talking about
            </h1>
                <img style={{ width: '340px' }} class="ui small left floated image" src="https://image.freepik.com/free-vector/learning-concept-illustration_114360-3454.jpg" alt='img' />
                <h3>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</h3>
                <img style={{ width: '340px' }} class="ui small right floated image" src="https://image.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg" alt='img' />
                <h3>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</h3>
                <h3>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</h3>
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