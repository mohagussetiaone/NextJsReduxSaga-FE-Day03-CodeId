import * as ActionProducts from "../constant/productConstant";

export const GetProductsRequest = () => ({
  type: ActionProducts.GET_PRODUCT_REQUEST,
});

export const GetProductsSuccess = (payload: any) => ({
  type: ActionProducts.GET_PRODUCT_SUCCESS,
  payload,
});

export const GetProductsFailed = (payload: any) => ({
  type: ActionProducts.GET_PRODUCT_FAILED,
  payload,
});

export const AddProductsRequest = (payload: any) => ({
  type: ActionProducts.ADD_PRODUCT_REQUEST,
  payload,
});

export const AddProductsSuccess = (payload: any) => ({
  type: ActionProducts.ADD_PRODUCT_SUCCESS,
  payload,
});

export const AddProductsFailed = (payload: any) => ({
  type: ActionProducts.ADD_PRODUCT_FAILED,
  payload,
});

export const FindProductsRequest = (payload: any) => ({
  type: ActionProducts.FIND_PRODUCT_REQUEST,
  payload,
});

export const FindProductsSuccess = (payload: any) => ({
  type: ActionProducts.FIND_PRODUCT_SUCCESS,
  payload,
});

export const FindProductsFailed = (payload: any) => ({
  type: ActionProducts.FIND_PRODUCT_FAILED,
  payload,
});

export const EditProductsRequest = (payload: any) => ({
  type: ActionProducts.EDIT_PRODUCT_REQUEST,
  payload,
});

export const EditProductsSuccess = (payload: any) => ({
  type: ActionProducts.EDIT_PRODUCT_SUCCESS,
  payload,
});

export const EditProductsFailed = (payload: any) => ({
  type: ActionProducts.EDIT_PRODUCT_FAILED,
  payload,
});

export const DeleteProductsRequest = (payload: any) => ({
  type: ActionProducts.DEL_PRODUCT_REQUEST,
  payload,
});

export const DeleteProductsSuccess = (payload: any) => ({
  type: ActionProducts.DEL_PRODUCT_SUCCESS,
  payload,
});

export const DeleteProductsFailed = (payload: any) => ({
  type: ActionProducts.DEL_PRODUCT_FAILED,
  payload,
});
