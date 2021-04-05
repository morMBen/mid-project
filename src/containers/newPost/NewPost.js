import React, { useState } from 'react'
import axios from 'axios';
import Button from '../../components/buttons/Button'
import Input from '../../containers/input/Input'

const NewPost = ({ setUsersD, usersD, userId }) => {
    const [postTitle, setPostTitle] = useState('');
    const [postContent, setPostContent] = useState('');
    const [postImg, setPostImg] = useState('');
    const [postHeaderImg, setPostHeaderImg] = useState('');
    const [numberOfWords, setNumberOfWords] = useState(0);

    const setInput = (e) => {
        switch (e.target.id) {
            case ('setPostTitle'):
                setPostTitle(e.target.value)
                break;
            case ('setPostHeaderImg'):
                setPostHeaderImg(e.target.value)
                break;
            case ('setPostImg'):
                setPostImg(e.target.value)
                break;
            case ('postContent'):
                setPostContent(e.target.value)
                if (e.target.value.length > 0) {
                    countNumOfWords()
                } else (setNumberOfWords(0))
                break;
            default:
        }
    }

    const countNumOfWords = () => {
        const reg = new RegExp(/\n|\s/)
        const tempArr = postContent.split(reg)
        setNumberOfWords(tempArr.length)
    }

    const sendPost = async () => {
        const index = usersD.findIndex(e => e.googleId === userId)
        console.log(usersD)
        setUsersD(usersD.map((e, i) => {
            if (i === index) {
                console.log(index)
                return {
                    ...e, article: e.article.push({
                        title: postTitle,
                    })
                }
                // e.article.push({
                //     title: postTitle,
                // })
            }
            console.log({ ...e })
            return e;
        }))

        // await axios.post('https://605b218e27f0050017c063ab.mockapi.io/users', usersD)
    }

    return (
        <>
            <div className="main">
                <h1>Write a new post</h1>
                <Input
                    id='setPostTitle'
                    onUserChange={setInput}
                    userValue={postTitle}
                    inputTitle='Title'
                    typingErrorText='You must enter title'
                />
                <Input
                    id='setPostHeaderImg'
                    onUserChange={setInput}
                    userValue={postHeaderImg}
                    inputTitle='Header Image'
                    typingErrorText='You must enter a valid url'
                />
                <Input
                    id='setPostImg'
                    onUserChange={setInput}
                    userValue={postImg}
                    inputTitle='Content Image'
                    typingErrorText='You must enter a valid url'
                />
                <div>
                    <h2>Post Content</h2>
                    <div>
                        <textarea
                            id='postContent'
                            onChange={setInput}
                            value={postContent}
                            style={{ width: "100%", height: '60vh' }}
                        >
                        </textarea>
                    </div>
                </div>
                <div>
                    <Button
                        buttonValue='Submit'
                        onClick={sendPost}
                    />
                    <h4>Number Of words:</h4>
                    <h4>{numberOfWords}</h4>
                </div>
            </div>
        </ >
    )
}

export default NewPost;