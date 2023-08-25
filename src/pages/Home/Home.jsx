import { Posts, Stories } from "../../components"
import "./Home.scss"

const Home = () => {
  return(
    <div className="home">
      <Stories />
      <Posts />
    </div>
  )
}
export default Home