import "./styles.css";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import * as productService from "../../../services/product-service";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ButtonInverse from "../../../components/ButtonInverse";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ProductDTO } from "../../../models/product";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductDetails() {
  //const params = useParams();

  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {
    axios.get("http://localhost:8080/products/2")
      .then(response => {
        console.log(response.data);
        setProduct(response.data)
      })
  }, [])

  //const product = productService.findById(Number(params.productId));

  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        {product && <ProductDetailsCard product={product} />}
        <div className="dsc-btn-page-container">
          <ButtonPrimary text="Comprar" />
          <Link to="/">
            <ButtonInverse text="Voltar" />
          </Link>
        </div>
      </section>
    </main>
  );
}
