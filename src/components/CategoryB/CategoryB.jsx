import img from "../../assets/category.png";
import "./categoryb.css";
export default function CategoryB() {
  return (
    <div className="categoryb">
      <h2>Hot Seals</h2>
      <div className="category-card">
        <div className="category-item">
          <div className="img">
            <img src={img} alt="" />
          </div>
          <div className="category-text">
            <div className="category-title">
              <h2>"Home Made" dumpling</h2>
              <p>250g</p>
            </div>
            <div className="category-body">
              <p>Vareniki with mashed potatoes and fried chanterelles</p>
              <span className="price">35000 <span>swm</span></span>
            </div>
          </div>
        </div>
        <div className="category-item">
          <div className="img">
            <img src={img} alt="" />
          </div>
          <div className="category-text">
            <div className="category-title">
              <h2>"Home Made" dumpling</h2>
              <p>250g</p>
            </div>
            <div className="category-body">
              <p>Vareniki with mashed potatoes and fried chanterelles</p>
              <span className="price">35000 <span>swm</span></span>
            </div>
          </div>
        </div>
        <div className="category-item">
          <div className="img">
            <img src={img} alt="" />
          </div>
          <div className="category-text">
            <div className="category-title">
              <h2>"Home Made" dumpling</h2>
              <p>250g</p>
            </div>
            <div className="category-body">
              <p>Vareniki with mashed potatoes and fried chanterelles</p>
              <span className="price">35000 <span>swm</span></span>
            </div>
          </div>
        </div>
        <div className="category-item">
          <div className="img">
            <img src={img} alt="" />
          </div>
          <div className="category-text">
            <div className="category-title">
              <h2>"Home Made" dumpling</h2>
              <p>250g</p>
            </div>
            <div className="category-body">
              <p>Vareniki with mashed potatoes and fried chanterelles</p>
              <span className="price">35000 <span>swm</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
