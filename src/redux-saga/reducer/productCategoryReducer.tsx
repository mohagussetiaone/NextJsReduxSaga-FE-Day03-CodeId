import * as ActionTypeProductCategory from "../constant/productCategoryConstant";

const init_state = {
  productCategorys: [],
  productCategory: [],
};

const ProductCategoryReduce = (state = init_state, action: any) => {
  switch (action.type) {
    case ActionTypeProductCategory.GET_PRODUCTCATEGORY_REQUEST:
      return { ...state };
    case ActionTypeProductCategory.GET_PRODUCTCATEGORY_SUCCESS:
      return GetProductCategory(state, action);
    case ActionTypeProductCategory.ADD_PRODUCTCATEGORY_REQUEST:
      return { ...state };
    case ActionTypeProductCategory.ADD_PRODUCTCATEGORY_SUCCESS:
      return AddProductCategory(state, action);
    case ActionTypeProductCategory.FIND_PRODUCTCATEGORY_REQUEST:
      return { ...state };
    case ActionTypeProductCategory.FIND_PRODUCTCATEGORY_SUCCESS:
      return FindProductCategory(state, action);
    case ActionTypeProductCategory.EDIT_PRODUCTCATEGORY_REQUEST:
      return { ...state };
    case ActionTypeProductCategory.EDIT_PRODUCTCATEGORY_SUCCESS:
      return EditProductCategory(state, action);
    case ActionTypeProductCategory.DEL_PRODUCTCATEGORY_REQUEST:
      return { ...state };
    case ActionTypeProductCategory.DEL_PRODUCTCATEGORY_SUCCESS:
      return DeleteProductCategory(state, action);
    default:
      return { ...state };
  }
};

const GetProductCategory = (state: any, action: any) => {
  return {
    ...state,
    productCategorys: action.payload,
  };
};

const AddProductCategory = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    productCategorys: [...state.productCategorys, payload],
  };
};

const FindProductCategory = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    productCategory: payload,
  };
};

const EditProductCategory = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DeleteProductCategory = (state: any, action: any) => {
  return {
    ...state,
  };
};

export default ProductCategoryReduce;
