import { useFormContext } from "react-hook-form";
import { useFormUI } from "../context/FormUIContext";
import { useState } from "react";

const Step2Internship = ({ onNext, shake }) => {
  const {
    register,
    clearErrors,
    setValue,
    formState: { errors },
  } = useFormContext();

  const { showErrors } = useFormUI();

  const [rating, setRating] = useState(0);

  const toolsList = [
    "AI","ML and DL","Chatbot","Flutter","React","Three.js",
    "Node/Express","Blender 3D Design","Arduino/ESP","Angular",
    "SolidWorks","Firebase","Python applications",
    "UI, Posters, Video and Logo designing"
  ];

  const handleStarClick = (value) => {
    setRating(value);
    setValue("ratethetechnicalknowledge", value);
    clearErrors("ratethetechnicalknowledge");
  };

  return (
    <div className="min-h-screen bg-[#000001] text-white overflow-x-hidden">

      {/* FORM CONTAINER */}
      <div className="max-w-md sm:max-w-lg px-4 sm:px-6 mx-auto py-8">

        <div className={`bg-[#1a1a1a] shadow-lg rounded-md p-6 ${shake ? "shake" : ""}`}>

          <h2 className="text-2xl font-semibold mb-8">
            Internship Activities and Learning
          </h2>

          {/* PROJECT */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Describe your project <span className="text-red-400">*</span>
            </label>
            <textarea
              {...register("describeproject")}
              className="w-full p-3 rounded-md bg-[#0f0f0f] text-white"
            />
          </div>

          {/* ROLE */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Roles & Responsibilities <span className="text-red-400">*</span>
            </label>
            <textarea
              {...register("role")}
              className="w-full p-3 rounded-md bg-[#0f0f0f] text-white"
            />
          </div>

          {/* TOOLS */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Tools / Technologies Used <span className="text-red-400">*</span>
            </label>

            <div className="grid grid-cols-2 gap-2">
              {toolsList.map((tool, i) => (
                <label key={i} className="flex items-center gap-2 bg-[#0f0f0f] p-2 rounded-md">
                  <input
                    type="checkbox"
                    value={tool}
                    {...register("toolsandtechnologies")}
                  />
                  <span className="text-sm">{tool}</span>
                </label>
              ))}
            </div>

            <input
              type="text"
              placeholder="Other..."
              {...register("otherTools")}
              className="mt-3 w-full p-3 rounded-md bg-[#0f0f0f] text-white"
            />
          </div>

          {/* LEARNING RESOURCES */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Were you given enough learning resources? <span className="text-red-400">*</span>
            </label>

            <div className="flex gap-4">
              {["yes", "no"].map((item) => (
                <label key={item}>
                  <input
                    type="radio"
                    value={item}
                    {...register("learningresources")}
                  />
                  {item.toUpperCase()}
                </label>
              ))}
            </div>
          </div>

          {/* ⭐ RATING */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Rate Technical Knowledge (1–5) <span className="text-red-400">*</span>
            </label>

            <div className="flex gap-2 text-3xl">
              {[1,2,3,4,5].map((star) => (
                <span
                  key={star}
                  onClick={() => handleStarClick(star)}
                  className={`cursor-pointer ${
                    star <= rating ? "text-yellow-400" : "text-gray-500"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>

            {showErrors && errors.ratethetechnicalknowledge && (
              <p className="text-red-400 text-sm mt-1">
                * Select rating
              </p>
            )}
          </div>

        </div>

        {/* NEXT BUTTON */}
        <div className="mt-5 mb-8">
          <button
            type="button"
            onClick={onNext}
            className="w-full py-4 rounded-full bg-white text-black text-lg font-bold hover:bg-gray-200 transition"
          >
            Next
          </button>
        </div>

      </div>
    </div>
  );
};

export default Step2Internship;