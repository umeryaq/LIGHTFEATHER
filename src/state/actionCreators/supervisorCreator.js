import { handleGet, handlePost } from "../../services/supervisorApi";
export const handleGetData = async () => {
  try {
    const res = await handleGet();
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const handleDataSubmit = async (info) => {
  try {
    const res = await handlePost(info);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
