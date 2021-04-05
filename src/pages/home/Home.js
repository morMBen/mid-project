import React, { useState } from 'react'
import './home.css';

// import MockAPI from '../../apis/MockAPI';
import PrevCard from '../../containers/cards/PrevCard'
import { useEffect } from 'react';

const Home = ({ usersD, userId, isUserlog }) => {

    const [cardContent, setCardContent] = useState('')

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
                                            uTitle={ar.title}
                                            uImage={ar.postHeaderImg}
                                            uName={user.name}
                                            uText={ar.postContent}
                                        />
                                    </React.Fragment>
                                )
                            })
                        })}
                    </div>
                </>
            )
        }
    }, [usersD])



    return (
        <div className="container">
            {console.log(isUserlog)}
            {isUserlog && cardContent}
        </div >
    )
}

export default Home;