import * as ActionProductCategory from "../constant/productCategoryConstant";

export const GetProductCategoryRequest = () => ({
  type: ActionProductCategory.GET_PRODUCTCATEGORY_REQUEST,
});

export const GetProductCategorySuccess = (payload: any) => ({
  type: ActionProductCategory.GET_PRODUCTCATEGORY_SUCCESS,
  payload,
});

export const GetProductCategoryFailed = (payload: any) => ({
  type: ActionProductCategory.GET_PRODUCTCATEGORY_FAILED,
  payload,
});

export const AddProductCategoryRequest = (payload: any) => ({
  type: ActionProductCategory.ADD_PRODUCTCATEGORY_REQUEST,
  payload,
});

export const AddProductCategorySuccess = (payload: any) => ({
  type: ActionProductCategory.ADD_PRODUCTCATEGORY_SUCCESS,
  payload,
});

export const AddProductCategoryFailed = (payload: any) => ({
  type: ActionProductCategory.ADD_PRODUCTCATEGORY_FAILED,
  payload,
});

export const FindProductCategoryRequest = (payload: any) => ({
  type: ActionProductCategory.FIND_PRODUCTCATEGORY_REQUEST,
  payload,
});

export const FindProductCategorySuccess = (payload: any) => ({
  type: ActionProductCategory.FIND_PRODUCTCATEGORY_SUCCESS,
  payload,
});

export const FindProductCategoryFailed = (payload: any) => ({
  type: ActionProductCategory.FIND_PRODUCTCATEGORY_FAILED,
  payload,
});

export const EditProductCategoryRequest = (payload: any) => ({
  type: ActionProductCategory.EDIT_PRODUCTCATEGORY_REQUEST,
  payload,
});

export const EditProductCategorySuccess = (payload: any) => ({
  type: ActionProductCategory.EDIT_PRODUCTCATEGORY_SUCCESS,
  payload,
});

export const EditProductCategoryFailed = (payload: any) => ({
  type: ActionProductCategory.EDIT_PRODUCTCATEGORY_FAILED,
  payload,
});

export const DeleteProductCategoryRequest = (payload: any) => ({
  type: ActionProductCategory.DEL_PRODUCTCATEGORY_REQUEST,
  payload,
});

export const DeleteProductCategorySuccess = (payload: any) => ({
  type: ActionProductCategory.DEL_PRODUCTCATEGORY_SUCCESS,
  payload,
});

export const DeleteProductCategoryFailed = (payload: any) => ({
  type: ActionProductCategory.DEL_PRODUCTCATEGORY_FAILED,
  payload,
});
