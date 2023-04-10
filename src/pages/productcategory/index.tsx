import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteProductCategoryRequest, GetProductCategoryRequest } from "../../redux-saga/action/productCategoryAction";
import FormikProductCategoryCreate from "./ProductCategoryCreate";
import FormikProductCategoryEdit from "./ProductCategoryEdit";
import Layout from "@/component/layout";

export default function ProductCategorySaga() {
  const dispatch = useDispatch();
  const { productCategorys } = useSelector((state: any) => state.productCategoryState);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [display, setDisplay] = useState<boolean>(false);
  const [displayEdit, setDisplayEdit] = useState<boolean>(false);
  const [id, setId] = useState();

  useEffect(() => {
    dispatch(GetProductCategoryRequest());
  }, [refresh, dispatch]);

  const onClick = (id: any) => {
    setDisplayEdit(true);
    setId(id);
  };

  const onDelete = async (id: any) => {
    dispatch(DeleteProductCategoryRequest(id));
    window.alert("Delete Successfully");
    setDisplay(false);
    setRefresh(true);
  };

  return (
    <div>
      <Layout>
        <>
          {displayEdit ? (
            <FormikProductCategoryEdit setRefresh={setRefresh} setDisplay={setDisplayEdit} id={id} />
          ) : display ? (
            <FormikProductCategoryCreate setRefresh={setRefresh} setDisplay={setDisplay} />
          ) : (
            <>
              <h2 className="mt-20 pb-4 ml-6">List Product Category</h2>
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-6 mb-4" onClick={() => setDisplay(true)}>
                Add Products Category
              </button>
              <div className="relative shadow-md sm:rounded-lg h-auto">
                <table className="w-[98%] text-sm text-left text-gray-500 dark:text-black sm:bg-white rounded-md overflow-x-hidden sm:shadow-lg ml-4 mr-4 mb-4">
                  <thead className="text-xs text-black uppercase dark:text-black">
                    <tr>
                      <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-500">
                        ID
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-500">
                        Description
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Created At
                      </th>
                      <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-500">
                        Updated
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {productCategorys &&
                      productCategorys.map((item: any) => {
                        return (
                          <>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                              <th scope="row" className="px-4 py-4 bg-gray-50 dark:bg-gray-300">
                                {item.id}
                              </th>
                              <td className="px-4 py-4">{item.name}</td>
                              <td className="px-4 py-4 bg-gray-50 dark:bg-gray-300">{item.description}</td>
                              <td className="px-4 py-4 ">{item.createdat}</td>
                              <td className="px-4 py-4 bg-gray-50 dark:bg-gray-300">{item.updatedat}</td>
                              <td className="px-4 py-4 cursor-pointer">
                                <div className="flex items-center justify-center">
                                  <button onClick={() => onClick(item.id)} className="group h-10 w-[80px] border border-green-500 rounded-md hover:bg-green-600 px-4 py-2 m-2 bg-green-500 text-white relative overflow-hidden">
                                    Edit
                                  </button>
                                  <button onClick={() => onDelete(item.id)} className="border border-red-500 bg-red-500 text-white rounded-md h-10 w-[80px] px-4 py-2 m-2  hover:bg-red-600 focus:outline-none focus:shadow-outline">
                                    Delete
                                  </button>
                                </div>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </>
      </Layout>
    </div>
  );
}
