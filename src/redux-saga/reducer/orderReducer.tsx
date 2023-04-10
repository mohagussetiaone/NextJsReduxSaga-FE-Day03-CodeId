import * as ActionTypeOrder from "../constant/orderConstant";

const init_state = {
  orders: [],
  order: [],
};

const OrdersReduce = (state = init_state, action: any) => {
  switch (action.type) {
    case ActionTypeOrder.GET_ORDER_REQUEST:
      return { ...state };
    case ActionTypeOrder.GET_ORDER_SUCCESS:
      return GetOrders(state, action);
    case ActionTypeOrder.ADD_ORDER_REQUEST:
      return { ...state };
    case ActionTypeOrder.ADD_ORDER_SUCCESS:
      return AddOrders(state, action);
    case ActionTypeOrder.FIND_ORDER_REQUEST:
      return { ...state };
    case ActionTypeOrder.FIND_ORDER_SUCCESS:
      return FindOrders(state, action);
    case ActionTypeOrder.EDIT_ORDER_REQUEST:
      return { ...state };
    case ActionTypeOrder.EDIT_ORDER_SUCCESS:
      return EditOrders(state, action);
    case ActionTypeOrder.DEL_ORDER_REQUEST:
      return { ...state };
    case ActionTypeOrder.DEL_ORDER_SUCCESS:
      return DeleteOrders(state, action);
    default:
      return { ...state };
  }
};

const GetOrders = (state: any, action: any) => {
  return {
    ...state,
    orders: action.payload,
  };
};

const AddOrders = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    orders: [...state.orders, payload],
  };
};

const FindOrders = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    order: payload,
  };
};

const EditOrders = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DeleteOrders = (state: any, action: any) => {
  return {
    ...state,
  };
};

export default OrdersReduce;
