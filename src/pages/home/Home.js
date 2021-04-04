import './home.css'
import MockAPI from '../../apis/MockAPI'
import SideBar from '../../components/sidebar/Sidebar'

const Home = () => {
    return (
        <div className="container">
            <div className="main">
                <MockAPI />
                <h1>Home Page</h1>
            </div>
            <SideBar />
        </div >
    )
}

export default Home;