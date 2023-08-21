import { useEffect, useState } from "react";
import { OrderDTO } from "../../../models/order";
import { useParams } from "react-router-dom";
import * as orderService from "../../../services/order-service";
import { Link } from "react-router-dom";
import './styles.css'

export default function Confirmation() {

  const params = useParams();

  const [order, setOrder] = useState<OrderDTO>();

  useEffect(() => {
    orderService.findByIdRequest(Number(params.orderId)).then((response) => {
      setOrder(response.data);
    });
  }, []);

  return (
    <main>
      <section id="confirmation-section" className="dsc-container">
        <div className="dsc-card dsc-mb20">
          {order?.items.map((x) => (
            <div
              key={x.productId}
              className="dsc-cart-item-container dsc-line-bottom"
            >
              <div className="dsc-cart-item-left">
                <img src={x.imgUrl} alt={x.name} />
                <div className="dsc-cart-item-description">
                  <h3>{x.name}</h3>
                  <div className="dsc-cart-item-quantity-container">
                    <p>{x.quantity}</p>
                  </div>
                </div>
              </div>
              <div className="dsc-cart-item-right">
                R$ {typeof x.subTotal === "number" ? x.subTotal.toFixed(2) : ""}
              </div>
            </div>
          ))}

          <div className="dsc-cart-total-container">
            <h3>
              R${" "}
              {typeof order?.total === "number" ? order?.total.toFixed(2) : ""}
            </h3>
          </div>
        </div>

        <div className="dsc-confirmation-message dsc-mb20">
          Pedido realizado! Número {order?.id}
        </div>
        <div className="dsc-btn-page-container">
          <Link to="/">
            <div className="dsc-btn dsc-btn-white">Início</div>
          </Link>
        </div>
      </section>
    </main>
  );
}
