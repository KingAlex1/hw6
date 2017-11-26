import React, { Component } from "react";
import { connect } from "react-redux";

import "./Budget.css";

class Budget extends Component {
  render() {
    const {
      recivedMoney,
      sellerCost,
      farmCost,
      deliveryCost
    } = this.props;

    return (
      <div className="budget">
        <h2> Бюджет </h2>
        <p> Всего получено денег:{recivedMoney} </p>
        <p> Расходы продавцов:{sellerCost} </p>
        <p> Расходы на ферме:{farmCost} </p>
        <p> Расходы на доставку:{deliveryCost} </p>
        <p>
          Итого:
          {recivedMoney +
            sellerCost +
            farmCost +
            deliveryCost}
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recivedMoney: state.recivedMoney,
  sellerCost: state.sellerCost,
  farmCost: state.farmCost,
  deliveryCost: state.deliveryCost
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(
  Budget
);
