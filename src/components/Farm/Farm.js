import React, { Component } from "react";
import { connect } from "react-redux";
import Order from "../Order/Order";

import "./Farm.css";

class Farm extends Component {
  handleClick = () => {
    const { farmProducts, postToClient } = this.props;
    const payload = {
      clientProducnt: farmProducts.pop(),
      farmProducts: farmProducts
    };
    postToClient(payload);
  };

  render() {
    const { farmProducts } = this.props;

    return (
      <div className="farm">
        <h2>Производство на ферме</h2>
        <button
          onClick={this.handleClick}
          disabled={!farmProducts.length}
        >
          Отправить урожай клиенту
        </button>
        <Order products={farmProducts} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
    farmProducts:state.farmProducts
})

const mapDispatchToProps = dispatch => {
    return{
        postToClient:payload=>{
            dispatch({
                type: 'POST_CLIENT_PRODUCT',
                payload: payload
            })
        }
    }
}

export default connect (mapStateToProps , mapDispatchToProps)(Farm)