import React, { Component } from "react";
import "./Order.css";

class Order extends Component {
  render() {
    const { products } = this.props;

    return products.map(product => (
      <div className="order" key={product.id}>
        <div className="order__upper">
          <p className="p--order">Название: {product.name}</p>
          <p className="p--order">Цена: {product.price}</p>
        </div>
        <div className="order__lower">
          <p className="p--order">Создан: {product.createdAt}</p>
        </div>
      </div>
    ));
  }
}

export default Order;