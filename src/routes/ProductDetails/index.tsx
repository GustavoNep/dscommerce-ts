import HeaderClient from "../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import "./styles.css";
export default function ProductDetails() {
  return (
    <>
      <HeaderClient />
      <section id="product-details-section" className="dsc-container">
        <ProductDetailsCard />
      </section>
    </>
  );
}
