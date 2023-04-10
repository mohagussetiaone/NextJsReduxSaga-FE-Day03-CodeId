import { combineReducers } from "redux";
import CustomerReduce from "./customerReducer";
import UserReducer from "./userReducer";
import OrdersReduce from "./orderReducer";
import OrderDetailReduce from "./orderDetailReducer";
import ProductReduce from "./productReducer";
import ProductCategoryReduce from "./productCategoryReducer";

const rootReducer = combineReducers({
  userState: UserReducer,
  customerState: CustomerReduce,
  orderState: OrdersReduce,
  orderDetailState: OrderDetailReduce,
  productState: ProductReduce,
  productCategoryState: ProductCategoryReduce,
});

export default rootReducer;
