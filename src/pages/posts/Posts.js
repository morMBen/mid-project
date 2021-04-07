// import React, { useState } from 'react'
import NewPost from '../../containers/newPost/NewPost'
import Home from '../home/Home'
const Posts = ({ setUsersD, usersD, theUserId, userlog }) => {
    return (
        <>
            {!userlog && <Home />}
            { userlog &&
                < div className="post-container" >
                    <NewPost
                        userId={theUserId}
                        setUsersD={setUsersD}
                        usersD={usersD}
                    />
                </div >
            }
        </>
    )
}

export default Posts;