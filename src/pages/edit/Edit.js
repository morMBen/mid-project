import React, { useEffect, useState, useRef } from 'react'
import { useParams } from "react-router";
import Button from '../../components/buttons/Button'
import Input from '../../containers/input/Input'
import { Editor } from 'react-draft-wysiwyg';
import axios from 'axios';

// import { Editor } from 'react-draft-wysiwyg';

import { EditorState, convertToRaw, ContentState } from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Edit = ({ setUsersData, usersD, userId }) => {

    const [postTitle, setPostTitle] = useState('');
    const [postImg, setPostImg] = useState('');
    const [numberOfWords, setNumberOfWords] = useState(0);

    const [editorState, setEditorState] = useState('')
    const [saveToHtml, setSaveToHtml] = useState('<></>')

    const params = useParams()

    const [currentUserIndex, setCurrentUserIndex] = useState(usersD.findIndex((e) => {
        return e.name.split(' ').join('') === params.name
    }))
    const currentUserArticle = usersD[currentUserIndex].article.findIndex((e) => {
        return e.title.split(' ').join('') === params.title
    })


    useState(() => {

        console.log(saveToHtml)
        console.log(useRef.current)
        setPostTitle(usersD[currentUserIndex].article[currentUserArticle].title)
        setPostImg(usersD[currentUserIndex].article[currentUserArticle].postImg)

        const contentBlock = htmlToDraft(usersD[currentUserIndex].article[currentUserArticle].postContent);
        if (contentBlock) {
            const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
            const editorState2 = EditorState.createWithContent(contentState);
            setEditorState(editorState2)
            // console.log(contentState)
        }
    }, [setCurrentUserIndex])

    useState(() => {
        console.log(editorState)
        // setSaveToHtml(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    }, [editorState])

    // console.log(typeof params.edit === 'undefined')




    useEffect(() => {

    }, [])

    const countNumOfWords = () => {
        const reg = new RegExp(/\n|\s/)
        const tempArr = saveToHtml.split(reg)
        setNumberOfWords(tempArr.length)
    }

    // const formatDate = (date) => {

    // }

    const sendPost = async () => {

        const index = usersD.findIndex(e => {
            return e.googleId === userId
        })
        // const numOfArticle = usersD.reduce((acc, cur) => cur.article.length + acc, 0)

        console.log(index)
        const newArticle = {
            id: usersD[currentUserIndex].article[currentUserArticle].id,
            title: postTitle,
            postImg: postImg,
            postContent: saveToHtml,
            numberOfWords: numberOfWords,
            date: usersD[currentUserIndex].article[currentUserArticle].date
        }

        const shallowArticleData = [...usersD[currentUserIndex].article]
        shallowArticleData.splice(currentUserArticle, 1)
        // const tempArticle = shallowArticleData;


        const shallowUserData = [...usersD]
        const temp = shallowUserData.splice(currentUserIndex, 1)
        const tempDataToUpdate = [...shallowUserData, { ...usersD[currentUserIndex], article: [...shallowArticleData, newArticle] }]

        await axios.put(`https://605b218e27f0050017c063ab.mockapi.io/users/${usersD[index].ids}`, ...temp)
        // console.log([...tempDataToUpdate])

        await setUsersData([...tempDataToUpdate])
    }

    const setInput = (e) => {
        switch (e.target.id) {
            case ('setPostTitle'):
                setPostTitle(e.target.value)
                break;

            case ('setPostImg'):
                setPostImg(e.target.value)
                break;
            default:
        }
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
        <div>
            <>

                <div className="main">
                    <h1>Edit Your Story</h1>
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
                                wrapperStyle={{ margin: '0', padding: '0.2rem', minHeight: "50vh", width: "100%", backgroundColor: '#d3d3d3', occupy: "100%" }}
                                editorStyle={{ width: "100%", minHeight: '50vh', background: '#fff' }}
                                editorState={editorState}
                                wrapperClassName="demo-wrapper"
                                editorClassName="demo-editor"
                                onEditorStateChange={onEditorStateChange}
                            />
                        </div>
                    </div>
                    <div>
                        <Button
                            buttonValue='Submit'
                            onClick={() => { sendPost() }}
                        />
                        <h4>Number Of words:</h4>
                        <h4>{numberOfWords}</h4>
                    </div>
                </div>
            </ >
        </div>
    )
}

export default Edit;