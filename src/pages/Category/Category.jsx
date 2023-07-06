import "./category.css";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import CategoryB from "../../components/CategoryB/CategoryB";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/productsSlice";
import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
export default function Category() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productsSlice);
  React.useEffect(() => {
    dispatch(getProducts());
  }, []);
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
        <CategoryB products={products} />
        <div className="scrollTop">
          <button
            onClick={() => {
              window.scroll({
                left: 0,
                top: 0,
              });
            }}
          >
            <AiOutlineArrowUp />
          </button>
        </div>
      </div>
    </section>
  );
}
