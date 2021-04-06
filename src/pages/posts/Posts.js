// import React, { useState } from 'react'
import NewPost from '../../containers/newPost/NewPost'

const Posts = ({ setUsersD, usersD, userId }) => {

    return (

        < div className="post-container" >
            { console.log(usersD)}
            <NewPost userId={userId} setUsersD={setUsersD} usersD={usersD} />
        </div >
    )
}

export default Posts;