import axios from "axios";

const GetData = async () => {
  try {
    const result = await axios.get("http://localhost:3002/products/");
    return result.data;
  } catch (error) {
    return error;
  }
};

const Create = async (payload: any) => {
  try {
    const result = await axios.post("http://localhost:3002/products/", payload);
    return result;
  } catch (error) {
    return error;
  }
};

const Upload = async (payload: any) => {
  try {
    const result = await axios.post("http://localhost:3002/products/upload", payload);
    return result;
  } catch (error) {
    return error;
  }
};

const Update = async (payload: any) => {
  try {
    const result = await axios.put(`http://localhost:3002/products/${payload.id}`, payload);
    return result;
  } catch (error) {
    return error;
  }
};

const UpdatePhoto = async (data: any) => {
  const id = parseInt(data.get("id"));
  try {
    const result = await axios.put(`http://localhost:3002/products/upload/${id}`, data);
    return result;
  } catch (error) {
    return error;
  }
};

const findData = async (id: any) => {
  try {
    const result = await axios.get(`http://localhost:3002/products/${id}`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const deleteData = async (id: any) => {
  try {
    const result = await axios.delete(`http://localhost:3002/products/${id}`);
    return result.data;
  } catch (error) {
    return error;
  }
};

export default {
  GetData,
  Create,
  Upload,
  Update,
  UpdatePhoto,
  findData,
  deleteData,
};
