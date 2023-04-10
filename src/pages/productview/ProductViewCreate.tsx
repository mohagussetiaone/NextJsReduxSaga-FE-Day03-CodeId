import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddProductsRequest } from "../../redux-saga/action/productAction";

export default function FormikProductsCreate(props: any) {
  const [previewImg, setPreviewImg] = useState();
  const [upload, setUpload] = useState(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: undefined,
      description: undefined,
      category: undefined,
      price: undefined,
      file: undefined,
    },
    onSubmit: async (values: any) => {
      let payload = new FormData();
      payload.append("name", values.name);
      payload.append("description", values.description);
      payload.append("category", values.category);
      payload.append("price", values.price);
      payload.append("file", values.file);

      dispatch(AddProductsRequest(payload));
      props.setDisplay(false);
      window.alert("Data Successfully Insert");
      props.setRefresh(true);
    },
  });

  const uploadConfig = (name: any) => (event: any) => {
    let reader = new FileReader();
    const file = event.target.files[0];
    reader.onload = () => {
      formik.setFieldValue("file", file);
      setPreviewImg(reader.result);
    };
    reader.readAsDataURL(file);
    setUpload(true);
  };
  const onClear = (event: any) => {
    event.preventDefault();
    setPreviewImg(null);
    setUpload(false);
  };

  return (
    <>
      <div className="flex items-center justify-center mt-12 p-12">
        <div className="mx-auto w-full max-w-[600px]">
          <div className="mb-5">
            <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
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
          <div className="mb-5">
            <label htmlFor="category" className="mb-3 block text-base font-medium text-[#07074D]">
              Category ID
            </label>
            <input
              type="text"
              name="category"
              id="category"
              placeholder="Category"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={formik.values.category ? formik.values.category.id : null}
              onChange={formik.handleChange}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="price" className="mb-3 block text-base font-medium text-[#07074D]">
              Price
            </label>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="Price"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={formik.values.price}
              onChange={formik.handleChange}
            />
          </div>
          {/* Image */}
          <div className="mb-5">
            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Image Product
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                {upload === false ? (
                  <>
                    <span>Kosong</span>
                  </>
                ) : (
                  <>
                    <img src={previewImg} alt="img" style={{ width: "160px", height: "160px" }} preImg={previewImg} />
                    <span onClick={onClear}>Remove</span>
                  </>
                )}
                <div className="text-center">
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={uploadConfig("file")} />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Image */}
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
