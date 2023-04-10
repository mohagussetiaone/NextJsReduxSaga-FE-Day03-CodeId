import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { AddOrderDetailRequest } from "../../redux-saga/action/orderDetailAction";

export default function FormikOrderDetailCreate(props: any) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      order: undefined,
      product: undefined,
      quantity: undefined,
    },
    onSubmit: async (values) => {
      let payload = {
        order: values.order,
        product: values.product,
        quantity: values.quantity,
      };
      dispatch(AddOrderDetailRequest(payload));
      props.setDisplay(false);
      window.alert("Data Successfully Insert");
      props.setRefresh(true);
    },
  });

  return (
    <>
      <div className="flex items-center justify-center mt-12 p-12">
        <form onSubmit={formik.handleSubmit}>
          <div className="mx-auto w-full max-w-[600px]">
            <div className="mb-5">
              <label htmlFor="order" className="mb-3 block text-base font-medium text-[#07074D]">
                Order ID
              </label>
              <input
                type="text"
                name="order"
                id="order"
                placeholder="Order Id"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={formik.values.order}
                onChange={formik.handleChange}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="product" className="mb-3 block text-base font-medium text-[#07074D]">
                Product
              </label>
              <input
                type="text"
                name="product"
                id="product"
                placeholder="Product"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={formik.values.product}
                onChange={formik.handleChange}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="quantity" className="mb-3 block text-base font-medium text-[#07074D]">
                Quantity
              </label>
              <input
                type="text"
                name="quantity"
                id="quantity"
                placeholder="Quantity"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={formik.values.quantity}
                onChange={formik.handleChange}
              />
            </div>
            <div>
              <button className="hover:shadow-form rounded-md bg-blue-500 hover:bg-blue-700 py-3 px-8 text-base font-semibold text-white outline-none mx-1" type="submit">
                Simpan
              </button>
              <button className="hover:shadow-form rounded-md bg-red-400 hover:bg-red-500 py-3 px-8 text-base font-semibold text-white outline-none" onClick={() => props.setDisplay(false)}>
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
