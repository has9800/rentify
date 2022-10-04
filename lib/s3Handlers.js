import axios from "axios";

// upload a file
export const uploadFile = async (e, file) => {
  e.preventDefault();
  let uploadedFile;

  let { data } = await axios.post("/api/s3", {
    name: file?.name,
    type: file?.type,
  });

  const url = data.url;

  let { data: newData } = await axios.put(url, file, {
    headers: {
      "Content-type": file.type,
      "Access-Control-Allow-Origin": "*",
    },
  });

  uploadedFile = `https://tst-buckett.s3.amazonaws.com/tst-objs/` + file.name;

  console.log(uploadedFile);

  return { uploadedFile };
};
