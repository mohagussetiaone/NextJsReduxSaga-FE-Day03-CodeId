import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { EditCustomerRequest, FindCustomerRequest } from "../../redux-saga/action/customerAction";

export default function FormikCustomerEdit(props: any) {
  const dispatch = useDispatch();
  const { customer } = useSelector((state: any) => state.customerState);

  useEffect(() => {
    dispatch(FindCustomerRequest(props.id));
  }, [props.id, dispatch]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: props.id,
      firstname: customer.firstname,
      lastname: customer.lastname,
      user: customer.user ? customer.user.id : null,
      updatedat: customer.updatedat,
    },
    onSubmit: async (values) => {
      let payload = {
        id: values.id,
        firstname: values.firstname,
        lastname: values.lastname,
        user: values.user,
        updatedat: values.updatedat,
      };
      dispatch(EditCustomerRequest(payload));
      window.alert("Data Successfully Updated");
      props.setDisplay(false);
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
            <label htmlFor="firstname" className="mb-1 block text-base font-medium text-[#07074D]">
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="First Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              defaultValue={formik.values.firstname}
              onChange={formik.handleChange}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="lastname" className="mb-1 block text-base font-medium text-[#07074D]">
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Last Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              defaultValue={formik.values.lastname}
              onChange={formik.handleChange}
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
              placeholder="User Id"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              defaultValue={formik.values.user}
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
