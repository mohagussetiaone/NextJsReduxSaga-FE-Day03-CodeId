import { call, put } from "redux-saga/effects";
import ProductCategory from "../../api/ProductCategory";
import {
  GetProductCategorySuccess,
  GetProductCategoryFailed,
  AddProductCategorySuccess,
  AddProductCategoryFailed,
  FindProductCategorySuccess,
  FindProductCategoryFailed,
  EditProductCategorySuccess,
  EditProductCategoryFailed,
  DeleteProductCategorySuccess,
  DeleteProductCategoryFailed,
} from "../action/productCategoryAction";

function* handleGetProductCategory(): any {
  try {
    const result = yield call(ProductCategory.GetData);
    yield put(GetProductCategorySuccess(result));
  } catch (error) {
    yield put(GetProductCategoryFailed(error));
  }
}

function* handleAddProductCategory(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(ProductCategory.Create, payload);
    yield put(AddProductCategorySuccess(result.data));
  } catch (error) {
    yield put(AddProductCategoryFailed(error));
  }
}

function* handleFindProductCategory(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(ProductCategory.findData, payload);
    yield put(FindProductCategorySuccess(result));
  } catch (error) {
    yield put(FindProductCategoryFailed(error));
  }
}

function* handleEditProductCategory(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(ProductCategory.Update, payload);
    yield put(EditProductCategorySuccess(result.data));
  } catch (error) {
    yield put(EditProductCategoryFailed(error));
  }
}

function* handleDeleteProductCategory(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(ProductCategory.deleteData, payload);
    yield put(DeleteProductCategorySuccess(result.data));
  } catch (error) {
    yield put(DeleteProductCategoryFailed(error));
  }
}

export { handleGetProductCategory, handleAddProductCategory, handleFindProductCategory, handleEditProductCategory, handleDeleteProductCategory };
