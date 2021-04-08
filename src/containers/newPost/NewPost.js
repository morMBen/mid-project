
import React, { useState } from 'react'
import axios from 'axios';
import Button from '../../components/buttons/Button'
import Input from '../../containers/input/Input'


import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import { convertToRaw } from 'draft-js';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const NewPost = ({ setUsersD, usersD, userId }) => {
    const [postTitle, setPostTitle] = useState('');
    // const [postContent, setPostContent] = useState('');
    const [postImg, setPostImg] = useState('');
    const [postHeaderImg, setPostHeaderImg] = useState('');
    const [numberOfWords, setNumberOfWords] = useState(0);

    const [editorState, setEditorState] = useState(null)
    const [saveToHtml, setSaveToHtml] = useState(null)




    const formatDate = (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [day, month, year].join('-');
    }


    const setInput = (e) => {
        switch (e.target.id) {
            case ('setPostTitle'):
                setPostTitle(e.target.value)
                break;
            // case ('setPostHeaderImg'):
            //     setPostHeaderImg(e.target.value)
            //     break;
            case ('setPostImg'):
                setPostImg(e.target.value)
                break;
            default:
        }
    }

    const countNumOfWords = () => {
        const reg = new RegExp(/\n|\s/)
        const tempArr = saveToHtml.split(reg)
        setNumberOfWords(tempArr.length)
    }

    const sendPost = async () => {
        const index = usersD.findIndex(e => {
            return e.googleId === userId
        })

        const numOfArticle = usersD.reduce((acc, cur) => cur.article.length + acc, 0)
        console.log(index)
        console.log(numOfArticle)
        const newArticle = {
            id: numOfArticle + 1,
            title: postTitle,
            postImg: postImg,
            postContent: saveToHtml,
            postHeaderImg: postHeaderImg,
            numberOfWords: numberOfWords,
            date: formatDate(new Date())
        }

        const tempData =
        {
            ...usersD[index],
            followersID: [],
            likersID: [],
            article: usersD.length === 0 && usersD[index].article ? [newArticle] : [...usersD[index].article, newArticle]
        }

        await setUsersD(usersD.map((e, i) => {
            if (i === index) {
                return tempData
            } else {
                return { ...e }
            }
        }))

        console.log(tempData)
        setPostTitle('')
        setEditorState('<p></p>')
        setPostImg('')
        setPostHeaderImg('')
        setTimeout(async () => {
            await axios.put(`https://605b218e27f0050017c063ab.mockapi.io/users/${usersD[index].ids}`, tempData)
        }, 500)
    }

    const onEditorStateChange = (e) => {
        setEditorState(e)
        if (editorState) {
            setSaveToHtml(draftToHtml(convertToRaw(e.getCurrentContent())))
        }
        if (saveToHtml) {
            countNumOfWords(saveToHtml)
        }
    }

    return (
        <>

            <div className="container ui segment" style={{ padding: "1rem" }}>
                <div className=" segment" >
                    <div className='myAccountContainer' style={{ padding: "1rem" }}>
                        <h1>Write a new post</h1>
                        <Input
                            id='setPostTitle'
                            onUserChange={setInput}
                            userValue={postTitle}
                            inputTitle='Title'
                            typingErrorText='You must enter title'
                        />

                        <Input
                            id='setPostImg'
                            onUserChange={setInput}
                            userValue={postImg}
                            inputTitle='Story Image'
                            typingErrorText='You must enter a valid url'
                        />
                        <div>
                            <h2>Post Content</h2>
                            <div style={{ minHeight: "100%" }}>
                                {/* <textarea
                            id='postContent'
                            onChange={setInput}
                            value={postContent}
                            style={{ width: "100%", height: '60vh' }}
                        >
                        </textarea> */}
                                <Editor
                                    toolbarStyle={{}}
                                    wrapperStyle={{ borderRadius: '5px', margin: '0', padding: '0.2rem', minHeight: "50vh", width: "100%", backgroundColor: '#d3d3d3', occupy: "100%" }}
                                    editorStyle={{ width: "100%", minHeight: '50vh', background: '#fff' }}
                                    editorState={editorState}
                                    wrapperClassName="demo-wrapper"
                                    editorClassName="demo-editor"
                                    onEditorStateChange={onEditorStateChange}
                                />
                            </div>
                        </div>
                        <div className="ui hidden divider"></div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Button
                                buttonValue='Submit'
                                onClick={() => { sendPost() }}
                            />
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <h4>Number Of words:  {numberOfWords}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ >
    )
}

export default NewPost;