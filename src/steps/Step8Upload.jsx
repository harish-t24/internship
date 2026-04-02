import { useFormContext } from "react-hook-form";
import { useState } from "react";

const MAX_FILES = 10;
const MAX_SIZE = 100 * 1024 * 1024; // 100MB

const Step8Upload = ({ onNext, shake }) => {
  const { setValue } = useFormContext();

  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    let updatedFiles = [...files, ...selectedFiles];

    // Max files
    if (updatedFiles.length > MAX_FILES) {
      setError(`Maximum ${MAX_FILES} files allowed`);
      return;
    }

    // File size check
    for (let file of selectedFiles) {
      if (file.size > MAX_SIZE) {
        setError(`${file.name} exceeds 100MB`);
        return;
      }
    }

    setError("");
    setFiles(updatedFiles);
    setValue("uploadfile", updatedFiles);
  };

  const removeFile = (index) => {
    const updated = files.filter((_, i) => i !== index);
    setFiles(updated);
    setValue("uploadfile", updated);
  };

  return (
    <div className="min-h-screen bg-[#000001] text-white overflow-x-hidden">

      {/* FORM CONTAINER */}
      <div className="max-w-md sm:max-w-lg px-4 sm:px-6 mx-auto py-8">

        <div className={`bg-[#1a1a1a] shadow-lg rounded-md p-6 ${shake ? "shake" : ""}`}>

          <h2 className="text-2xl font-semibold mb-6">
            Upload Internship Documents
          </h2>

          <p className="block mb-2 font-medium">
            Upload final presentation, reports, diagrams, or related documents. <span className="text-red-400">*</span>
          </p>

          {/* FILE INPUT */}
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="w-full p-3 bg-[#0f0f0f] rounded-md cursor-pointer"
          />

          {/* ERROR */}
          {error && (
            <p className="text-red-400 mt-2 text-sm">{error}</p>
          )}

          {/* FILE LIST */}
          <div className="mt-4 space-y-2">
            {files.map((file, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-[#0f0f0f] p-3 rounded-md"
              >
                <span className="text-sm truncate">
                  {file.name}
                </span>

                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="text-red-400 hover:text-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* INFO */}
          <p className="text-sm text-gray-500 mt-3">
            Max 10 files • 100MB per file
          </p>

        </div>

        {/* SUBMIT BUTTON */}
        <div className="mt-5 mb-8">
          <button
            type="button"
            onClick={onNext}
            className="w-full py-4 rounded-full bg-white text-black text-lg font-bold hover:bg-gray-200 transition"
          >
            Submit
          </button>
        </div>

      </div>
    </div>
  );
};

export default Step8Upload;