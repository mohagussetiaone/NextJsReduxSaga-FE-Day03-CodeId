import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { EditProductsRequest, FindProductsRequest } from "../../redux-saga/action/productAction";

export default function FormikProductsEdit(props: any) {
  const dispatch = useDispatch();
  const { product } = useSelector((state: any) => state.productState);
  const [products, setProducts] = useState<any[]>([]);
  const [previewImg, setPreviewImg] = useState<any>();
  const [upload, setUpload] = useState<boolean>(false);

  useEffect(() => {
    dispatch(FindProductsRequest(props.id));
  }, [props.id, dispatch]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: props.id,
      name: product.name,
      description: product.description,
      category: product.category ? product.category.id : null,
      price: product.price,
      file: product.image,
      updatedat: product.updatedat,
    },
    onSubmit: async (values: any) => {
      let payload = new FormData();
      payload.append("id", values.id);
      payload.append("name", values.name);
      payload.append("description", values.description);
      payload.append("category", values.category);
      payload.append("price", values.price);
      payload.append("file", values.file);
      payload.append("createdat", values.createdat);

      dispatch(EditProductsRequest(payload));
      props.setDisplay(false);
      window.alert("Data Successfully Updated");
      props.setRefresh(true);
    },
  });

  const uploadConfig = (name: any) => (event: any) => {
    let reader = new FileReader();
    const file = event.target.files[0];
    console.log(event.target.files);
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
            <label htmlFor="name" className="mb-1 block text-base font-medium text-[#07074D]">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              defaultValue={formik.values.name}
              onChange={formik.handleChange}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="description" className="mb-1 block text-base font-medium text-[#07074D]">
              Description
            </label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Description"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              defaultValue={formik.values.description}
              onChange={formik.handleChange}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="category" className="mb-1 block text-base font-medium text-[#07074D]">
              Category ID
            </label>
            <input
              type="text"
              name="category"
              id="category"
              placeholder="Category Id"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              defaultValue={formik.values.category}
              onChange={formik.handleChange}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="price" className="mb-1 block text-base font-medium text-[#07074D]">
              Price
            </label>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="Price"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              defaultValue={formik.values.price}
              onChange={formik.handleChange}
            />
          </div>
          {/* Updated Product Photo */}
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
                    <img src={previewImg} alt="img" style={{ width: "160px", height: "160px" }} />
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
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" defaultValue={formik.values.file} onChange={uploadConfig("file")} />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Updated Product Photo */}
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
