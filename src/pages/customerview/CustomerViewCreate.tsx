import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { AddCustomerRequest } from "../../redux-saga/action/customerAction";

export default function FormikCustomerCreate(props: any) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstname: undefined,
      lastname: undefined,
      user: undefined,
    },
    onSubmit: async (values) => {
      let payload = {
        firstname: values.firstname,
        lastname: values.lastname,
        user: values.user,
      };
      dispatch(AddCustomerRequest(payload));
      props.setDisplay(false);
      window.alert("Data Successfully Insert");
      props.setRefresh(true);
    },
  });

  return (
    <>
      <div className="flex items-center justify-center mt-12 p-12">
        <div className="mx-auto w-full max-w-[600px]">
          <div className="mb-5">
            <label htmlFor="firstname" className="mb-3 block text-base font-medium text-[#07074D]">
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="First Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={formik.values.firstname}
              onChange={formik.handleChange}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="lastname" className="mb-3 block text-base font-medium text-[#07074D]">
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Last Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={formik.values.lastname}
              onChange={formik.handleChange}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="user" className="mb-3 block text-base font-medium text-[#07074D]">
              User ID
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
          <div>
            <button className="hover:shadow-form rounded-md bg-blue-500 hover:bg-blue-700 py-3 px-8 text-base font-semibold text-white outline-none mx-1" type="submit" onClick={formik.handleSubmit}>
              Simpan
            </button>
            <button className="hover:shadow-form rounded-md bg-red-400 hover:bg-red-500 py-3 px-8 text-base font-semibold text-white outline-none" onClick={() => props.setDisplay(false)}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
