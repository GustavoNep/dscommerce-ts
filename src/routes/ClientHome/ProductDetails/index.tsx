import "./styles.css";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import { ProductDTO } from "../../../models/product";

const product: ProductDTO = {
  id: 2,
  name: "Smart TV",
  description: "Best of one",
  imgUrl: "",
  price: 2500.99,
  categories: [
    {
      id: 2,
      name: "Eletronicos",
    },
    {
      id: 3,
      name: "Computadores",
    },
  ],
};

export default function ProductDetails() {
  return (
    <section id="product-details-section" className="dsc-container">
      <ProductDetailsCard product={product} />
    </section>
  );
}
