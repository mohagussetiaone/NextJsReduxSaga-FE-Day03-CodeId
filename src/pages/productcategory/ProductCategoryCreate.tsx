import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { AddProductCategoryRequest } from "../../redux-saga/action/productCategoryAction";

export default function FormikProductCategoryCreate(props: any) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: undefined,
      description: undefined,
    },
    onSubmit: async (values) => {
      let payload = {
        name: values.name,
        description: values.description,
      };
      dispatch(AddProductCategoryRequest(payload));
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
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="description" className="mb-3 block text-base font-medium text-[#07074D]">
              Description
            </label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Description"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={formik.values.description}
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
