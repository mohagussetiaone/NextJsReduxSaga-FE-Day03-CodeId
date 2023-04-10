import * as ActionTypeCustomer from "../constant/customerConstant";

const init_state = {
  customers: [],
  customer: [],
};

const CustomerReduce = (state = init_state, action: any) => {
  switch (action.type) {
    case ActionTypeCustomer.GET_CUSTOMER_REQUEST:
      return { ...state };
    case ActionTypeCustomer.GET_CUSTOMER_SUCCESS:
      return GetCustomer(state, action);
    case ActionTypeCustomer.ADD_CUSTOMER_REQUEST:
      return { ...state };
    case ActionTypeCustomer.ADD_CUSTOMER_SUCCESS:
      return AddCustomer(state, action);
    case ActionTypeCustomer.FIND_CUSTOMER_REQUEST:
      return { ...state };
    case ActionTypeCustomer.FIND_CUSTOMER_SUCCESS:
      return FindCustomer(state, action);
    case ActionTypeCustomer.EDIT_CUSTOMER_REQUEST:
      return { ...state };
    case ActionTypeCustomer.EDIT_CUSTOMER_SUCCESS:
      return EditCustomer(state, action);
    case ActionTypeCustomer.DEL_CUSTOMER_REQUEST:
      return { ...state };
    case ActionTypeCustomer.DEL_CUSTOMER_SUCCESS:
      return DeleteCustomer(state, action);
    default:
      return { ...state };
  }
};

const GetCustomer = (state: any, action: any) => {
  return {
    ...state,
    customers: action.payload,
  };
};

const AddCustomer = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    customers: [...state.customers, payload],
  };
};

const FindCustomer = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    customer: payload,
  };
};

const EditCustomer = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DeleteCustomer = (state: any, action: any) => {
  return {
    ...state,
  };
};

export default CustomerReduce;
