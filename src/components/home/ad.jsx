import "../../styles/ad.sass";
import { Link} from "react-router-dom";

function Ad() {
  return (
    <div className="ad-container">
      <div className="ad1">
        <p>New arrivals are now in!</p>
        <Link to="/all">
        <div className="ad-badge">Show collection</div>
        </Link>
      </div>
      <div className="ad2">
        <p>Basic t-shirts $29,99</p>
        <Link to="/all">

        <div className="ad-badge">More details</div>
        </Link>

      </div>
      <div className="ad3">
        <p>Sale this summer</p>
        <Link to="/all">

        <div className="ad-badge">View all</div>
        </Link>

      </div>
    </div>
  );
}

export default Ad;
