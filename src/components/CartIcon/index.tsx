import { Link } from "react-router-dom";
import cartIcon from "../../assets/cart.svg";
import "./style.css";

export default function CartIcon() {
  return (
    <>
      <img src={cartIcon} alt="Carrinho de compras" />
      <div className="dsc-cart-count">2</div>
    </>
  );
}
