import "./secheader.css";
import off from "../../assets/off.svg";
import check from "../../assets/check.svg";
import wifi from "../../assets/wifi.svg";
import phone from "../../assets/phone.svg";
import map from "../../assets/map.svg";
import axios from "axios";
import { useSelector } from "react-redux";
export default function SectionHeader() {
  const { isAuth } = useSelector((state) => state.productsSlice);
  console.log(localStorage.getItem("client"));
  return (
    <div className="section-header">
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
            }}
          >
            {" "}
            <img src={off} alt="" /> Oficiant
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
            }}
          >
            {" "}
            <img src={check} alt="" /> Check
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
