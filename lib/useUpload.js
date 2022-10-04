import axios from "axios";
import { useState } from "react";

// upload file
export const useUploadFile = async () => {
  const [file, setFile] = useState([]);
  const [uploadingStatus, setUploadingStatus] = useState("");
  const [uploadedFile, setUploadedFile] = useState();

  setUploadingStatus("Uploading the file to AWS S3");

  let { data } = await axios.post("/api/s3", {
    name: file.name,
    type: file.type,
  });

  const url = data.url;
  let { data: newData } = await axios.put(url, file, {
    headers: {
      "Content-type": file.type,
      "Access-Control-Allow-Origin": "*",
    },
  });

  setUploadedFile(`https://tst-buckett.s3.amazonaws.com/tst-objs/` + file.name);
  setFile([]);

  return {
    data,
    newData,
  };
};
