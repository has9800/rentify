import { useState } from "react";
import { SecondaryBtn } from "./Btn";
import { uploadFile } from "@/lib/s3Handlers";

const Form = () => {
  const [file, setFile] = useState([]);

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="bg-blue-50 w-full md:w-1/3 flex flex-col items-center">
      <div>
        <h2 className="text-xl">Upload photos</h2>
        <p>Maximum size is 8mb</p>
      </div>
      <div>
        <form
          onSubmit={(e) => uploadFile(e, file)}
          method="POST"
          className="flex flex-col items-center"
        >
          <label htmlFor="img-input">Upload</label>
          <input
            id="img-input"
            type="file"
            className=""
            onChange={(e) => selectFile(e)}
            required
          />
          <SecondaryBtn title="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Form;

/**
 * ISSUE: component too bloated, can remove handler to another file, DONE
 * also, handler shouldn't use state, DONE
 * how to fetch data from s3 (individual and all), IN PROGRESS
 * how to know which listing it's for
 */
