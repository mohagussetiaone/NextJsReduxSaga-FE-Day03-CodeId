import * as ActionTypeProduct from "../constant/productConstant";

const init_state = {
  products: [],
  product: [],
};

const ProductReduce = (state = init_state, action: any) => {
  switch (action.type) {
    case ActionTypeProduct.GET_PRODUCT_REQUEST:
      return { ...state };
    case ActionTypeProduct.GET_PRODUCT_SUCCESS:
      return GetProduct(state, action);
    case ActionTypeProduct.ADD_PRODUCT_REQUEST:
      return { ...state };
    case ActionTypeProduct.ADD_PRODUCT_SUCCESS:
      return AddProduct(state, action);
    case ActionTypeProduct.FIND_PRODUCT_REQUEST:
      return { ...state };
    case ActionTypeProduct.FIND_PRODUCT_SUCCESS:
      return FindProduct(state, action);
    case ActionTypeProduct.EDIT_PRODUCT_REQUEST:
      return { ...state };
    case ActionTypeProduct.EDIT_PRODUCT_SUCCESS:
      return EditProduct(state, action);
    case ActionTypeProduct.DEL_PRODUCT_REQUEST:
      return { ...state };
    case ActionTypeProduct.DEL_PRODUCT_SUCCESS:
      return DeleteProduct(state, action);
    default:
      return { ...state };
  }
};

const GetProduct = (state: any, action: any) => {
  return {
    ...state,
    products: action.payload,
  };
};

const AddProduct = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    products: [...state.products, payload],
  };
};

const FindProduct = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    product: payload,
  };
};

const EditProduct = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DeleteProduct = (state: any, action: any) => {
  return {
    ...state,
  };
};

export default ProductReduce;
