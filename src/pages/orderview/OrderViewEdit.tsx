import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { EditOrdersRequest, FindOrdersRequest } from "../../redux-saga/action/orderAction";

export default function FormikOrderEdit(props: any) {
  const dispatch = useDispatch();
  const { order } = useSelector((state: any) => state.orderState);

  useEffect(() => {
    dispatch(FindOrdersRequest(props.id));
  }, [props.id, dispatch]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: props.id,
      user: order.user ? order.user.id : null,
      totalproduct: order.totalproduct,
      totalprice: order.totalprice,
      updatedat: order.updatedat,
    },
    onSubmit: async (values) => {
      let payload = {
        id: values.id,
        user: values.user,
        totalproduct: values.totalproduct,
        totalprice: values.totalprice,
        updatedat: values.updatedat,
      };
      dispatch(EditOrdersRequest(payload));
      props.setDisplay(false);
      window.alert("Data Successfully Updated");
      props.setRefresh(true);
    },
  });

  return (
    <>
      <div className="flex items-center justify-center mt-12 p-10">
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
            <label htmlFor="user" className="mb-1 block text-base font-medium text-[#07074D]">
              User Id
            </label>
            <input
              type="text"
              name="user"
              id="user"
              placeholder="First Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              defaultValue={formik.values.user}
              onChange={formik.handleChange}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="totalproduct" className="mb-1 block text-base font-medium text-[#07074D]">
              Total Product
            </label>
            <input
              type="text"
              name="totalproduct"
              id="totalproduct"
              placeholder="Total Product"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              defaultValue={formik.values.totalproduct}
              onChange={formik.handleChange}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="totalprice" className="mb-1 block text-base font-medium text-[#07074D]">
              Total Price
            </label>
            <input
              type="text"
              name="totalprice"
              id="totalprice"
              placeholder="Total Price"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              defaultValue={formik.values.totalprice}
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
