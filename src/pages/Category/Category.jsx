import "./category.css";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import CategoryB from "../../components/CategoryB/CategoryB";
import React from "react";
export default function Category() {
  React.useEffect(() => {
    window.scroll({
      left: 0,
      top: 0,
    });
  }, []);
  return (
    <section>
      <div className="container">
        <SectionHeader />
        <CategoryB />
      </div>
    </section>
  );
}
