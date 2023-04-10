import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { AddOrdersRequest } from "../../redux-saga/action/orderAction";

export default function FormikOrderCreate(props: any) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      user: undefined,
      totalproduct: undefined,
      totalprice: undefined,
    },
    onSubmit: async (values) => {
      let payload = {
        user: values.user,
        totalproduct: values.totalproduct,
        totalprice: values.totalprice,
      };
      dispatch(AddOrdersRequest(payload));
      props.setDisplay(false);
      window.alert("Data Successfully Insert");
      props.setRefresh(true);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex items-center justify-center mt-12 p-12">
          <div className="mx-auto w-full max-w-[600px]">
            <div className="mb-5">
              <label htmlFor="user" className="mb-3 block text-base font-medium text-[#07074D]">
                User Id
              </label>
              <input
                type="text"
                name="user"
                id="user"
                placeholder="User Id"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={formik.values.user}
                onChange={formik.handleChange}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="totalproduct" className="mb-3 block text-base font-medium text-[#07074D]">
                Total Product
              </label>
              <input
                type="text"
                name="totalproduct"
                id="totalproduct"
                placeholder="Total Product"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={formik.values.totalproduct}
                onChange={formik.handleChange}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="totalprice" className="mb-3 block text-base font-medium text-[#07074D]">
                Total Price
              </label>
              <input
                type="text"
                name="totalprice"
                id="totalprice"
                placeholder="Total Price"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={formik.values.totalprice}
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
        </div>
      </form>
    </>
  );
}
