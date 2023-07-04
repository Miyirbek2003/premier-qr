import "./secheader.css";
import off from "../../assets/off.svg";
import check from "../../assets/check.svg";
import wifi from "../../assets/wifi.svg";
import phone from "../../assets/phone.svg";
import map from "../../assets/map.svg";
import { useSelector } from "react-redux";
export default function SectionHeader() {
  const { isAuth } = useSelector((state) => state.productsSlice);
  return (
    <div className="section-header">
      {isAuth && (
        <div className="buttons">
          <button>
            {" "}
            <img src={off} alt="" /> Oficiant
          </button>
          <button>
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
