import "./homeb.css";
import { Link, useParams } from "react-router-dom";
import React from "react";
export default function HomeB({ category }) {
  const { id } = useParams();
  return (
    <section className="homeb">
      <div className="btm"></div>
      <div className="home-body-inner">
        {category?.map((cat) => (
          <Link
            key={cat.id}
            to={`/category/${cat.id}`}
            className="category"
            style={{ backgroundImage: `url(${cat.img_url})` }}
          >
            <h2>
              {
                cat.translations.filter(
                  (lang) => lang.locale == localStorage.getItem("lang")
                )[0].name
              }
            </h2>
          </Link>
        ))}
      </div>
    </section>
  );
}
