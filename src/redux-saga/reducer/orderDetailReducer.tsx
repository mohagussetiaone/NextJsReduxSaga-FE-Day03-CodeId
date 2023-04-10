import * as ActionTypeOrderDetail from "../constant/orderDetailConstant";

const init_state = {
  orderDetails: [],
  orderDetail: [],
};

const OrderDetailReduce = (state = init_state, action: any) => {
  switch (action.type) {
    case ActionTypeOrderDetail.GET_ORDERDETAIL_REQUEST:
      return { ...state };
    case ActionTypeOrderDetail.GET_ORDERDETAIL_SUCCESS:
      return GetOrderDetail(state, action);
    case ActionTypeOrderDetail.ADD_ORDERDETAIL_REQUEST:
      return { ...state };
    case ActionTypeOrderDetail.ADD_ORDERDETAIL_SUCCESS:
      return AddOrderDetail(state, action);
    case ActionTypeOrderDetail.FIND_ORDERDETAIL_REQUEST:
      return { ...state };
    case ActionTypeOrderDetail.FIND_ORDERDETAIL_SUCCESS:
      return FindOrderDetail(state, action);
    case ActionTypeOrderDetail.EDIT_ORDERDETAIL_REQUEST:
      return { ...state };
    case ActionTypeOrderDetail.EDIT_ORDERDETAIL_SUCCESS:
      return EditOrderDetail(state, action);
    case ActionTypeOrderDetail.DEL_ORDERDETAIL_REQUEST:
      return { ...state };
    case ActionTypeOrderDetail.DEL_ORDERDETAIL_SUCCESS:
      return DeleteOrderDetail(state, action);
    default:
      return { ...state };
  }
};

const GetOrderDetail = (state: any, action: any) => {
  return {
    ...state,
    orderDetails: action.payload,
  };
};

const AddOrderDetail = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    orderDetails: [...state.orderDetails, payload],
  };
};

const FindOrderDetail = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    orderDetail: payload,
  };
};

const EditOrderDetail = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DeleteOrderDetail = (state: any, action: any) => {
  return {
    ...state,
  };
};

export default OrderDetailReduce;
