import { call, put } from "redux-saga/effects";
import Products from "../../api/Product";
import {
  GetProductsSuccess,
  GetProductsFailed,
  AddProductsSuccess,
  AddProductsFailed,
  FindProductsSuccess,
  FindProductsFailed,
  EditProductsSuccess,
  EditProductsFailed,
  DeleteProductsSuccess,
  DeleteProductsFailed,
} from "../action/productAction";

function* handleGetProducts(): any {
  try {
    const result = yield call(Products.GetData);
    yield put(GetProductsSuccess(result));
  } catch (error) {
    yield put(GetProductsFailed(error));
  }
}

function* handleAddProducts(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Products.Upload, payload);
    yield put(AddProductsSuccess(result.data));
  } catch (error) {
    yield put(AddProductsFailed(error));
  }
}

function* handleFindProducts(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Products.findData, payload);
    yield put(FindProductsSuccess(result));
  } catch (error) {
    yield put(FindProductsFailed(error));
  }
}

function* handleEditProducts(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Products.UpdatePhoto, payload);
    yield put(EditProductsSuccess(result.data));
  } catch (error) {
    yield put(EditProductsFailed(error));
  }
}

function* handleDeleteProducts(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Products.deleteData, payload);
    yield put(DeleteProductsSuccess(result.data));
  } catch (error) {
    yield put(DeleteProductsFailed(error));
  }
}

export { handleGetProducts, handleAddProducts, handleFindProducts, handleEditProducts, handleDeleteProducts };
