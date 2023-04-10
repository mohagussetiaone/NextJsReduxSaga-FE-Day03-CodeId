import { call, put } from "redux-saga/effects";
import Orders from "../../api/Order";
import { GetOrdersSuccess, GetOrdersFailed, AddOrdersSuccess, AddOrdersFailed, FindOrdersSuccess, FindOrdersFailed, EditOrdersSuccess, EditOrdersFailed, DeleteOrdersSuccess, DeleteOrdersFailed } from "../action/orderAction";

function* handleGetOrders(): any {
  try {
    const result = yield call(Orders.GetData);
    yield put(GetOrdersSuccess(result));
  } catch (error) {
    yield put(GetOrdersFailed(error));
  }
}

function* handleAddOrders(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Orders.Create, payload);
    yield put(AddOrdersSuccess(result.data));
  } catch (error) {
    yield put(AddOrdersFailed(error));
  }
}

function* handleFindOrders(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Orders.findData, payload);
    yield put(FindOrdersSuccess(result));
  } catch (error) {
    yield put(FindOrdersFailed(error));
  }
}

function* handleEditOrders(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Orders.Update, payload);
    yield put(EditOrdersSuccess(result.data));
  } catch (error) {
    yield put(EditOrdersFailed(error));
  }
}

function* handleDeleteOrders(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Orders.deleteData, payload);
    yield put(DeleteOrdersSuccess(result.data));
  } catch (error) {
    yield put(DeleteOrdersFailed(error));
  }
}

export { handleGetOrders, handleAddOrders, handleFindOrders, handleEditOrders, handleDeleteOrders };
