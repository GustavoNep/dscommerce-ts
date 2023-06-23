import "./styles.css";
import notImg from "../../assets/notbook.png";
import ProductCategory from "../ProductCategory";
import ButtonPrimary from "../ButtonPrimary";
import ButtonInverse from "../ButtonInverse";
import { ProductDTO } from "../../models/product";

type Props = {
  product: ProductDTO;
};

export default function ProductDetailsCard({ product }: Props) {
  return (
    <>
      <div className="dsc-card dsc-mb20">
        <div className="dsc-product-details-top dsc-line-bottom">
          <img src={product.imgUrl} alt={product.name} />
        </div>
        <div className="dsc-product-details-bottom">
          <h3>R$ {product.price}</h3>
          <h4>{product.name}</h4>
          <p>{product.description}</p>
          <div className="dsc-category-container">
            {
              product.categories.map((item) => {
                return <ProductCategory name={item.name} key={item.id}/>
              })
            }
          </div>
        </div>
      </div>
      <div className="dsc-btn-page-container">
        <ButtonPrimary text="Comprar" />
        <ButtonInverse text="Voltar"/>
      </div>
    </>
  );
}
