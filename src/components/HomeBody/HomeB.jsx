import hot from "../../assets/hot.png";
import salad from "../../assets/salad.png";
import desert from "../../assets/desert.png";
import brakefast from "../../assets/brakefast.png";
import "./homeb.css";

import { Link, useParams } from "react-router-dom";
export default function HomeB() {
  const { id } = useParams();
  return (
    <section className="homeb">
      <div className="btm"></div>
      <div className="home-body-inner">
        <Link to={`/${id}/category/hot`} className="category">
          <h2>Hot seald</h2>
        </Link>
        <Link to={`/${id}/category/salads`} className="category">
          <h2>Salads</h2>
        </Link>
        <Link to={`/${id}/category/deserts`} className="category">
          <h2>Deserts</h2>
        </Link>
        <Link to={`/${id}/category/brakefasts`} className="category">
          <h2>Brakefasts</h2>
        </Link>
      </div>
    </section>
  );
}
