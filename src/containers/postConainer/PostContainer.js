import { useHistory, useLocation, useParams, useRouteMatch } from "react-router";

const PostContainer = (props) => {
    const brr = useRouteMatch()
    return (
        <div>
            {console.log(brr.params)}
            <h1>PostContainer</h1>
        </div>
    )
}

export default PostContainer;