import React, { useState } from 'react'
import NewPost from '../../containers/newPost/NewPost'

const Posts = ({ setUsersD, usersD, userId }) => {
    // console.log(usersD)
    return (
        <div className="post-container">
            <NewPost userId={userId} setUsersD={setUsersD} usersD={usersD} />
        </div >
    )
}

export default Posts;