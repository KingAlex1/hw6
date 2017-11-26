import React, { Component } from "react";
import "./Market.css";
import { connect } from "react-redux";
import Order from "../Order/Order";

let id = 0;
const getId = () => {
  id += 1;
  return id;
};
export const vegetables = [
  "Капуста",
  "Редиска",
  "Огурцы",
  "Морковь",
  "Горох",
  "Баклажан",
  "Тыква",
  "Чеснок",
  "Лук",
  "Перец",
  "Картофель",
  "Редька"
];

const getNewOrder = () => {
  return {
    id: getId(),
    name: vegetables[Math.floor(Math.random() * vegetables.length)],
    price: 100 + Math.floor(Math.random() * 100),
    createdAt: new Date().toString()
  };
};

export class Market extends Component {
  handlePostToFarmClick = () => {
    const { orderProducts, postToFarm } = this.props;
    const payload = {
      farmProducts: orderProducts.pop(),
      orderProducts: orderProducts
    };
    postToFarm(payload);
  };

  render() {
    const { createNewOrder, orderProducts } = this.props;

    return (
      <div className="market">
        <h2>Новые заказы в магазине</h2>
        <button onClick={createNewOrder}>Создать заказ</button>
        <button
          onClick={this.handlePostToFarmClick}
          disabled={!orderProducts.length}
        >
          Отправить заказ на ферму
        </button>
        <div className="order-list">
          <Order products={orderProducts} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  orderProducts: state.orderProducts
});

const mapDispatchToProps = dispatch => {
  return {
    createNewOrder: () => {
      dispatch({
        type: "NEW_ORDER_PRODUCT",
        payload: getNewOrder()
      });
    },

    postToFarm: payload => {
      dispatch({
        type: "POST_FARM_PRODUCT",
        payload: payload
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Market);