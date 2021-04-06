import { useParams } from "react-router";
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Home from '../../pages/home/Home';

const PostContainer = ({ userId, usersD, userlog }) => {
    const params = useParams()
    // const [aoutorAndTitle, setAoutorAndTitle] = useState(null)
    const [user, setUser] = useState(null)
    const [article, setArticle] = useState(null)


    useEffect(() => {
        if (userlog) {
            setUser(usersD.find(element => {
                // console.log(element.name.split('').join(''))
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
        return <div>
            <Link to="/">Home</Link> → <Link to={`/${params.aoutor}`}>{user.name}</Link> → <Link to={`/${params.aoutor}/${params.name}`}>{article.title}</Link>
            <h1>{article.title}</h1>
            <img src={article.postImg} alt="post img"></img>
            <div>{article.postContent}</div>
        </div>
    }

    return (
        <div>
            {/* {console.log(article)} */}
            <div><h5>
            </h5>
                {userlog && article ? displayPage() : <Home />}
            </div>

        </div>
    )
}

export default PostContainer;