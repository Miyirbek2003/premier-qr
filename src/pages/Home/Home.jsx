import HomeB from "../../components/HomeBody/HomeB";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import "./home.css";
export default function Home() {
  return (
    <section className="main-home">
      <div className="container">
        <SectionHeader />
        <HomeB />
      </div>
    </section>
  );
}
