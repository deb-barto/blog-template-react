import Posts from '../../posts/Posts'
import Sidebar from '../../sitebar/Sidebar'
import "./home.css"

export default function Home() {
    return (
        <div className="home-class">
            <Sidebar/>
            <Posts/>
        </div>
    )
}
