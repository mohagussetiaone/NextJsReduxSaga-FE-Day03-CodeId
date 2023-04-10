import { call, put } from "redux-saga/effects";
import OrderDetail from "../../api/OrderDetail";
import {
  GetOrderDetailSuccess,
  GetOrderDetailFailed,
  AddOrderDetailSuccess,
  AddOrderDetailFailed,
  FindOrderDetailSuccess,
  FindOrderDetailFailed,
  EditOrderDetailSuccess,
  EditOrderDetailFailed,
  DeleteOrderDetailSuccess,
  DeleteOrderDetailFailed,
} from "../action/orderDetailAction";

function* handleGetOrderDetail(): any {
  try {
    const result = yield call(OrderDetail.GetData);
    yield put(GetOrderDetailSuccess(result));
  } catch (error) {
    yield put(GetOrderDetailFailed(error));
  }
}

function* handleAddOrderDetail(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(OrderDetail.Create, payload);
    yield put(AddOrderDetailSuccess(result.data));
  } catch (error) {
    yield put(AddOrderDetailFailed(error));
  }
}

function* handleFindOrderDetail(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(OrderDetail.findData, payload);
    yield put(FindOrderDetailSuccess(result));
  } catch (error) {
    yield put(FindOrderDetailFailed(error));
  }
}

function* handleEditOrderDetail(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(OrderDetail.Update, payload);
    yield put(EditOrderDetailSuccess(result.data));
  } catch (error) {
    yield put(EditOrderDetailFailed(error));
  }
}

function* handleDeleteOrderDetail(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(OrderDetail.deleteData, payload);
    yield put(DeleteOrderDetailSuccess(result.data));
  } catch (error) {
    yield put(DeleteOrderDetailFailed(error));
  }
}

export { handleGetOrderDetail, handleAddOrderDetail, handleFindOrderDetail, handleEditOrderDetail, handleDeleteOrderDetail };
