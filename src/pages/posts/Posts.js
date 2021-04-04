import React, { useState } from 'react'
import NewPost from '../../containers/newPost/NewPost'

const Posts = ({ setUsersD, usersD }) => {
    console.log(usersD)
    return (
        <div className="post-container">
            <NewPost setUsersD={setUsersD} usersD={usersD} />
        </div >
    )
}

export default Posts;