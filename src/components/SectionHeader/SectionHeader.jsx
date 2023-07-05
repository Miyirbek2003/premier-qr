import "./secheader.css";
import off from "../../assets/off.svg";
import check from "../../assets/check.svg";
import wifi from "../../assets/wifi.svg";
import phone from "../../assets/phone.svg";
import map from "../../assets/map.svg";
import axios from "axios";
import { useSelector } from "react-redux";
import Modal from "../Modal/Modal";
import React from "react";
export default function SectionHeader() {
  const { isAuth, lang } = useSelector((state) => state.productsSlice);

  const [modalOpen, setModalOpen] = React.useState(false);
  if (modalOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return (
    <div className="section-header">
      {modalOpen && <Modal />}

      {isAuth && (
        <div className="buttons">
          <button
            onClick={() => {
              fetch("https://qrmenu.dbc-server.uz/api/call?type=waiter", {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  uuid: localStorage.getItem("client"),
                },
                params: {
                  type: "waiter",
                },
              });
              setModalOpen(true);
              setTimeout(() => {
                setModalOpen(false);
              }, 3000);
            }}
          >
            {" "}
            <img src={off} alt="" />{" "}
            {lang == "ru"
              ? "Официант"
              : lang == "uz"
              ? "Ofisiant"
              : lang == "qr"
              ? "Oficiant"
              : lang == "en" && "Waiter"}
          </button>
          <button
            onClick={() => {
              fetch("https://qrmenu.dbc-server.uz/api/call?type=bill", {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  uuid: localStorage.getItem("client"),
                },
                params: {
                  type: "bill",
                },
              });
              setModalOpen(true);
              setTimeout(() => {
                setModalOpen(false);
              }, 3000);
            }}
          >
            {" "}
            <img src={check} alt="" />{" "}
            {lang == "ru"
              ? "Счет"
              : lang == "uz"
              ? "Hisob"
              : lang == "qr"
              ? "Esap"
              : lang == "en" && "Bill"}
          </button>
        </div>
      )}
      <div className="infos">
        <div className="infos-top">
          <span>
            <img src={wifi} alt="" />
            Wifi_parolwifi
          </span>
          <span>
            <img src={phone} alt="" />
            +998 90 010-85-10
          </span>
        </div>
        <div className="infos-btm">
          <span>
            <img src={map} alt="" />
            Tashkent, Uzbekistan, Taras Shevchenko, 2{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
