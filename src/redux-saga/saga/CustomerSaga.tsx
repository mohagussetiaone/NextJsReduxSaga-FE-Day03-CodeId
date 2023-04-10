import { call, put } from "redux-saga/effects";
import Customer from "../../api/Customer";
import {
  GetCustomerSuccess,
  GetCustomerFailed,
  AddCustomerSuccess,
  AddCustomerFailed,
  FindCustomerSuccess,
  FindCustomerFailed,
  EditCustomerSuccess,
  EditCustomerFailed,
  DeleteCustomerSuccess,
  DeleteCustomerFailed,
} from "../action/customerAction";

function* handleGetCustomer(): any {
  try {
    const result = yield call(Customer.GetData);
    yield put(GetCustomerSuccess(result));
  } catch (error) {
    yield put(GetCustomerFailed(error));
  }
}

function* handleAddCustomer(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Customer.Create, payload);
    yield put(AddCustomerSuccess(result.data));
  } catch (error) {
    yield put(AddCustomerFailed(error));
  }
}

function* handleFindCustomer(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Customer.findData, payload);
    yield put(FindCustomerSuccess(result));
  } catch (error) {
    yield put(FindCustomerFailed(error));
  }
}

function* handleEditCustomer(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Customer.Update, payload);
    yield put(EditCustomerSuccess(result.data));
  } catch (error) {
    yield put(EditCustomerFailed(error));
  }
}

function* handleDeleteCustomer(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Customer.deleteData, payload);
    yield put(DeleteCustomerSuccess(result.data));
  } catch (error) {
    yield put(DeleteCustomerFailed(error));
  }
}

export { handleGetCustomer, handleAddCustomer, handleFindCustomer, handleEditCustomer, handleDeleteCustomer };
