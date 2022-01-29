import { Heart, Info} from "react-bootstrap-icons"
import { Link } from "react-router-dom"

const MoreInfo = ({movieId}) => {
    return (
        <Link className="more-info-button" to={`/movie/${movieId}`}>
            <p className="more-info-text">More Info</p>
            <Info className="info-icon"/>
        </Link>
    )
}

export default MoreInfo