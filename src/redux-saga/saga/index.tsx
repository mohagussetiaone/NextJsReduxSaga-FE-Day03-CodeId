import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeCustomers from "../constant/customerConstant";
import { handleAddCustomer, handleGetCustomer, handleFindCustomer, handleEditCustomer, handleDeleteCustomer } from "./CustomerSaga";
import * as ActionTypeUser from "../constant/userConstant";
import { handleSignin, handleSignout, handleSignup } from "./UserSaga";
import * as ActionTypeOrders from "../constant/orderConstant";
import { handleAddOrders, handleGetOrders, handleFindOrders, handleEditOrders, handleDeleteOrders } from "./OrderSaga";
import * as ActionTypeOrderDetail from "../constant/orderDetailConstant";
import { handleAddOrderDetail, handleGetOrderDetail, handleFindOrderDetail, handleEditOrderDetail, handleDeleteOrderDetail } from "./OrderDetailSaga";
import * as ActionTypeProducts from "../constant/productConstant";
import { handleAddProducts, handleGetProducts, handleFindProducts, handleEditProducts, handleDeleteProducts } from "./ProductsSaga";
import * as ActionTypeProductCategory from "../constant/productCategoryConstant";
import { handleAddProductCategory, handleGetProductCategory, handleFindProductCategory, handleEditProductCategory, handleDeleteProductCategory } from "./ProductCategorySaga";

function* watchAll() {
  yield all([
    // Users
    takeEvery(ActionTypeUser.USER_SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionTypeUser.USER_SIGNOUT_REQUEST, handleSignout),
    takeEvery(ActionTypeUser.USER_SIGNUP_REQUEST, handleSignup),
    // Customers
    takeEvery(ActionTypeCustomers.GET_CUSTOMER_REQUEST, handleGetCustomer),
    takeEvery(ActionTypeCustomers.ADD_CUSTOMER_REQUEST, handleAddCustomer),
    takeEvery(ActionTypeCustomers.FIND_CUSTOMER_REQUEST, handleFindCustomer),
    takeEvery(ActionTypeCustomers.EDIT_CUSTOMER_REQUEST, handleEditCustomer),
    takeEvery(ActionTypeCustomers.DEL_CUSTOMER_REQUEST, handleDeleteCustomer),
    // Orders
    takeEvery(ActionTypeOrders.GET_ORDER_REQUEST, handleGetOrders),
    takeEvery(ActionTypeOrders.ADD_ORDER_REQUEST, handleAddOrders),
    takeEvery(ActionTypeOrders.FIND_ORDER_REQUEST, handleFindOrders),
    takeEvery(ActionTypeOrders.EDIT_ORDER_REQUEST, handleEditOrders),
    takeEvery(ActionTypeOrders.DEL_ORDER_REQUEST, handleDeleteOrders),
    // Order Details
    takeEvery(ActionTypeOrderDetail.GET_ORDERDETAIL_REQUEST, handleGetOrderDetail),
    takeEvery(ActionTypeOrderDetail.ADD_ORDERDETAIL_REQUEST, handleAddOrderDetail),
    takeEvery(ActionTypeOrderDetail.FIND_ORDERDETAIL_REQUEST, handleFindOrderDetail),
    takeEvery(ActionTypeOrderDetail.EDIT_ORDERDETAIL_REQUEST, handleEditOrderDetail),
    takeEvery(ActionTypeOrderDetail.DEL_ORDERDETAIL_REQUEST, handleDeleteOrderDetail),
    // Products
    takeEvery(ActionTypeProducts.GET_PRODUCT_REQUEST, handleGetProducts),
    takeEvery(ActionTypeProducts.ADD_PRODUCT_REQUEST, handleAddProducts),
    takeEvery(ActionTypeProducts.FIND_PRODUCT_REQUEST, handleFindProducts),
    takeEvery(ActionTypeProducts.EDIT_PRODUCT_REQUEST, handleEditProducts),
    takeEvery(ActionTypeProducts.DEL_PRODUCT_REQUEST, handleDeleteProducts),
    // Product Category
    takeEvery(ActionTypeProductCategory.GET_PRODUCTCATEGORY_REQUEST, handleGetProductCategory),
    takeEvery(ActionTypeProductCategory.ADD_PRODUCTCATEGORY_REQUEST, handleAddProductCategory),
    takeEvery(ActionTypeProductCategory.FIND_PRODUCTCATEGORY_REQUEST, handleFindProductCategory),
    takeEvery(ActionTypeProductCategory.EDIT_PRODUCTCATEGORY_REQUEST, handleEditProductCategory),
    takeEvery(ActionTypeProductCategory.DEL_PRODUCTCATEGORY_REQUEST, handleDeleteProductCategory),
  ]);
}

export default watchAll;
