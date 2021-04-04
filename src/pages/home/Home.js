import './home.css'
import MockAPI from '../../apis/MockAPI'

const Home = () => {
    return (
        <div className="container">
            <div className="main">
                <MockAPI />
                <h1>Home Page</h1>
            </div>
            <div className="side-bar">
            </div>
        </div >
    )
}

export default Home;