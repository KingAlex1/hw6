const initialState = {
  orderProducts: [],
  farmProducts: [],
  clientProducts: [],
  recivedMoney: 0,
  sellerCost: 0,
  farmCost: 0,
  deliveryCost: 0
};

export default function productReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case "NEW_ORDER_PRODUCT":
      return {
        ...state,
        orderProducts: [
          ...state.orderProducts,
          action.payload
        ],
        recivedModey:
          state.recivedMoney + action.payload.price,
        sellerCost: state.sellerCost - 20
      };
    case "POST_FARM_PRODUCT":
      return {
        ...state,
        orderProducts: [...action.payload.orderProducts],
        farmProducts: [
          ...state.farmProducts,
          action.payload.farmProducts
        ],
        farmCost: state.farmCost - 100
      };
    case "POST_CLIENT_PRODUCT":
      return {
        ...state,
        farmProducts: [...action.payload.farmProducts],
        clientProducts: [
          ...state.clientProducts,
          action.payload.clientProducts
        ],
        deliveryCost: state.deliveryCost - 20
      };
    default:
      return state;
  }
}
