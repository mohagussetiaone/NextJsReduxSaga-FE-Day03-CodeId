import * as ActionOrderDetail from "../constant/orderDetailConstant";

export const GetOrderDetailRequest = () => ({
  type: ActionOrderDetail.GET_ORDERDETAIL_REQUEST,
});

export const GetOrderDetailSuccess = (payload: any) => ({
  type: ActionOrderDetail.GET_ORDERDETAIL_SUCCESS,
  payload,
});

export const GetOrderDetailFailed = (payload: any) => ({
  type: ActionOrderDetail.GET_ORDERDETAIL_FAILED,
  payload,
});

export const AddOrderDetailRequest = (payload: any) => ({
  type: ActionOrderDetail.ADD_ORDERDETAIL_REQUEST,
  payload,
});

export const AddOrderDetailSuccess = (payload: any) => ({
  type: ActionOrderDetail.ADD_ORDERDETAIL_SUCCESS,
  payload,
});

export const AddOrderDetailFailed = (payload: any) => ({
  type: ActionOrderDetail.ADD_ORDERDETAIL_FAILED,
  payload,
});

export const FindOrderDetailRequest = (payload: any) => ({
  type: ActionOrderDetail.FIND_ORDERDETAIL_REQUEST,
  payload,
});

export const FindOrderDetailSuccess = (payload: any) => ({
  type: ActionOrderDetail.FIND_ORDERDETAIL_SUCCESS,
  payload,
});

export const FindOrderDetailFailed = (payload: any) => ({
  type: ActionOrderDetail.FIND_ORDERDETAIL_FAILED,
  payload,
});

export const EditOrderDetailRequest = (payload: any) => ({
  type: ActionOrderDetail.EDIT_ORDERDETAIL_REQUEST,
  payload,
});

export const EditOrderDetailSuccess = (payload: any) => ({
  type: ActionOrderDetail.EDIT_ORDERDETAIL_SUCCESS,
  payload,
});

export const EditOrderDetailFailed = (payload: any) => ({
  type: ActionOrderDetail.EDIT_ORDERDETAIL_FAILED,
  payload,
});

export const DeleteOrderDetailRequest = (payload: any) => ({
  type: ActionOrderDetail.DEL_ORDERDETAIL_REQUEST,
  payload,
});

export const DeleteOrderDetailSuccess = (payload: any) => ({
  type: ActionOrderDetail.DEL_ORDERDETAIL_SUCCESS,
  payload,
});

export const DeleteOrderDetailFailed = (payload: any) => ({
  type: ActionOrderDetail.DEL_ORDERDETAIL_FAILED,
  payload,
});
