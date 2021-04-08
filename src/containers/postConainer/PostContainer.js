import { useParams } from "react-router";
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser'
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Home from '../../pages/home/Home';

const PostContainer = ({ userId, usersD, userlog }) => {
    const params = useParams()


    const [user, setUser] = useState(null)
    const [article, setArticle] = useState(null)


    useEffect(() => {
        if (userlog) {
            setUser(usersD.find(element => {
                return element.name.split(' ').join('') === params.aoutor
            }))
        }
    }, [params.aoutor, userlog, usersD])
    useEffect(() => {
        if (user !== null) {
            setArticle(user.article.find(element => {
                return element.title.split(' ').join('') === params.name
            })
            )
        }

    }, [user, params.name])

    const displayPage = () => {
        return (
            <div className="container ui segment">
                <div className="ui segment" >
                    <div className="ui breadcrumb">
                        <Link className="section" to="/">Home</Link>
                        <i className="right chevron icon divider"></i>
                        <Link className="section" to={`/${params.aoutor}`}>{user.name}</Link>
                        <i className="right arrow icon divider"></i>
                        <Link className="active section" to={`/${params.aoutor}/${params.name}`}>{article.title}</Link>
                    </div>
                    <div className="ui hidden divider"></div>
                    <div style={{ display: 'flex', width: "100%", justifyContent: "space-between" }}>
                        <div><h5>{user.name}</h5></div>
                        <div><h5>{article.date}</h5></div>
                    </div>
                    <div className="ui clearing divider"></div>
                    <h1 className="ui very large header">{article.title}</h1>
                    <div className="ui hidden divider"></div>
                    <img className="ui fluid image" src={article.postImg} alt="post img"></img>
                    <div>
                        <div style={{ fontSize: '22px', lineHeight: '2.5rem' }} className="ui very padded segment">{ReactHtmlParser(article.postContent)}</div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div style={{ display: "flex" }}>
                                <i style={{ fontSize: "1.5rem" }} className="heart outline icon" />
                                <p>{user.likersID.length}</p>
                            </div>
                            <div style={{ display: "flex" }}>
                                <p>{user.likersID.length}</p>
                                <i style={{ fontSize: "1.5rem" }} className="user outline icon"></i>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        )
    }

    return (
        <div>
            <div>
                {userlog && article ? displayPage() : <Home />}

            </div>

        </div>
    )
}

export default PostContainer;