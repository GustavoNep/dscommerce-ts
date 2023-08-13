import cartIcon from "../../assets/cart.svg";
import "./style.css";
import { useContext, useState } from "react";
import { ContextCartCount } from "../../utils/context-cart";

export default function CartIcon() {


  const {contextCartCount} = useContext(ContextCartCount);

  return (
    <>
      <img src={cartIcon} alt="Carrinho de compras" />
      <div className="dsc-cart-count">{contextCartCount}</div>
    </>
  );
}
