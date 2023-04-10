import * as ActionOrders from "../constant/orderConstant";

export const GetOrdersRequest = () => ({
  type: ActionOrders.GET_ORDER_REQUEST,
});

export const GetOrdersSuccess = (payload: any) => ({
  type: ActionOrders.GET_ORDER_SUCCESS,
  payload,
});

export const GetOrdersFailed = (payload: any) => ({
  type: ActionOrders.GET_ORDER_FAILED,
  payload,
});

export const AddOrdersRequest = (payload: any) => ({
  type: ActionOrders.ADD_ORDER_REQUEST,
  payload,
});

export const AddOrdersSuccess = (payload: any) => ({
  type: ActionOrders.ADD_ORDER_SUCCESS,
  payload,
});

export const AddOrdersFailed = (payload: any) => ({
  type: ActionOrders.ADD_ORDER_FAILED,
  payload,
});

export const FindOrdersRequest = (payload: any) => ({
  type: ActionOrders.FIND_ORDER_REQUEST,
  payload,
});

export const FindOrdersSuccess = (payload: any) => ({
  type: ActionOrders.FIND_ORDER_SUCCESS,
  payload,
});

export const FindOrdersFailed = (payload: any) => ({
  type: ActionOrders.FIND_ORDER_FAILED,
  payload,
});

export const EditOrdersRequest = (payload: any) => ({
  type: ActionOrders.EDIT_ORDER_REQUEST,
  payload,
});

export const EditOrdersSuccess = (payload: any) => ({
  type: ActionOrders.EDIT_ORDER_SUCCESS,
  payload,
});

export const EditOrdersFailed = (payload: any) => ({
  type: ActionOrders.EDIT_ORDER_FAILED,
  payload,
});

export const DeleteOrdersRequest = (payload: any) => ({
  type: ActionOrders.DEL_ORDER_REQUEST,
  payload,
});

export const DeleteOrdersSuccess = (payload: any) => ({
  type: ActionOrders.DEL_ORDER_SUCCESS,
  payload,
});

export const DeleteOrdersFailed = (payload: any) => ({
  type: ActionOrders.DEL_ORDER_FAILED,
  payload,
});
