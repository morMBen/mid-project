import React, { Component, useState } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const ToDelete = () => {

    const [editorState, setEditorState] = useState(null)

    const [editorState2, setEditorState2] = useState(null)

    const [saveToHtml, setSaveToHtml] = useState('')

    const onSaveToHtml = () => {
        if (editorState)
            setSaveToHtml(draftToHtml(convertToRaw(editorState.getCurrentContent())))
        console.log(saveToHtml)
    }

    const onGrabFromDraft = () => {
        const contentBlock = htmlToDraft(saveToHtml);
        if (contentBlock) {
            const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
            const editorState2 = EditorState.createWithContent(contentState);
            setEditorState2(editorState2)
            console.log(contentState)
        }
    }
    const onEditorStateChange2 = (e) => {
        setEditorState2(e)

    }
    const onEditorStateChange = (e) => {
        setEditorState(e)
        console.log(saveToHtml)
    }
    return (
        <>
            <button onClick={onSaveToHtml}>save</button>
            <button onClick={onGrabFromDraft}>delete</button>
            <Editor
                editorState={editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={onEditorStateChange}
            />
            {editorState2 &&
                <Editor
                    editorState={editorState2}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={onEditorStateChange2}
                />
            }
        </>
    )
}
export default ToDelete;