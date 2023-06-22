import "./header.css";
import { FaAngleDown } from "react-icons/fa";
import React from "react";
export default function Header() {
  const [lang, setLang] = React.useState("Qaraqalpaqsha");
  return (
    <header className="header">
      <div className="container">
        <div className="lang">
          <button
            onClick={() => {
              const drop = document.querySelector(".drop");
              drop.classList.toggle("active");
            }}
          >
            {lang} <FaAngleDown />{" "}
          </button>
          <ul className="drop">
            <li
              onClick={() => {
                const drop = document.querySelector(".drop");
                drop.classList.toggle("active");
                setLang("Qaraqalpaqsha");
              }}
            >
              Qaraqalpaqsha
            </li>
            <li
              onClick={() => {
                const drop = document.querySelector(".drop");
                drop.classList.toggle("active");
                setLang("English");
              }}
            >
              English
            </li>
            <li
              onClick={() => {
                const drop = document.querySelector(".drop");
                drop.classList.toggle("active");
                setLang("O'zbek");
              }}
            >
              O'zbek
            </li>
            <li
              onClick={() => {
                const drop = document.querySelector(".drop");
                drop.classList.toggle("active");
                setLang("Русский");
              }}
            >
              Русский
            </li>
          </ul>
        </div>
      </div>
      <div className="btm"></div>
    </header>
  );
}
