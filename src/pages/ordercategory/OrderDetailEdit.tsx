import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { EditOrderDetailRequest, FindOrderDetailRequest } from "../../redux-saga/action/orderDetailAction";

export default function FormikOrderDetailEdit(props: any) {
  const dispatch = useDispatch();
  const { orderDetail } = useSelector((state: any) => state.orderDetailState);

  useEffect(() => {
    dispatch(FindOrderDetailRequest(props.id));
  }, [props.id, dispatch]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: props.id,
      order: orderDetail.order ? orderDetail.order.id : null,
      product: orderDetail.product ? orderDetail.product.id : null,
      quantity: orderDetail.quantity,
      updatedat: orderDetail.updatedat,
    },
    onSubmit: async (values) => {
      let payload = {
        id: values.id,
        order: values.order,
        product: values.product,
        quantity: values.quantity,
        updatedat: values.updatedat,
      };
      dispatch(EditOrderDetailRequest(payload));
      props.setDisplay(false);
      window.alert("Data Successfully Updated");
      props.setRefresh(true);
    },
  });

  return (
    <>
      <div className="flex items-center justify-center p-10 mt-12">
        <form onSubmit={formik.handleSubmit} className="mx-auto w-full max-w-[600px]">
          <div className="mb-5">
            <label htmlFor="id" className="mb-1 block text-base font-medium text-[#07074D]">
              ID
            </label>
            <input
              type="text"
              name="id"
              id="id"
              placeholder="Id"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              defaultValue={formik.values.id}
              onChange={formik.handleChange}
              disabled
            />
          </div>
          <div className="mb-5">
            <label htmlFor="order" className="mb-1 block text-base font-medium text-[#07074D]">
              Order ID
            </label>
            <input
              type="text"
              name="order"
              id="order"
              placeholder="Order Id"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              defaultValue={formik.values.order}
              onChange={formik.handleChange}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="product" className="mb-1 block text-base font-medium text-[#07074D]">
              Product Id
            </label>
            <input
              type="text"
              name="product"
              id="product"
              placeholder="Product Id"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              defaultValue={formik.values.product}
              onChange={formik.handleChange}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="quantity" className="mb-1 block text-base font-medium text-[#07074D]">
              Quantity
            </label>
            <input
              type="text"
              name="quantity"
              id="quantity"
              placeholder="Quantity"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              defaultValue={formik.values.quantity}
              onChange={formik.handleChange}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="updatedat" className="mb-1 block text-base font-medium text-[#07074D]">
              Updated At
            </label>
            <input
              type="text"
              name="updatedat"
              id="updatedat"
              placeholder="Updated At"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              defaultValue={formik.values.updatedat}
              onChange={formik.handleChange}
              disabled
            />
          </div>
          <div>
            <button className="hover:shadow-form rounded-md bg-blue-500 hover:bg-blue-600 py-3 px-8 text-base font-semibold text-white outline-none mx-1" type="submit">
              Simpan
            </button>
            <button className="hover:shadow-form rounded-md bg-red-400 hover:bg-red-500 py-3 px-8 text-base font-semibold text-white outline-none" onClick={() => props.setDisplay(false)}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
