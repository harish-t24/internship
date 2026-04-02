import { useFormContext } from "react-hook-form";
import { useFormUI } from "../context/FormUIContext";
import { useState } from "react";

const Step7Compliance = ({ onNext, shake }) => {
  const { register, setValue, clearErrors, formState: { errors } } = useFormContext();
  const { showErrors } = useFormUI();

  const [hearts, setHearts] = useState(0);

  const handleHeartClick = (value) => {
    setHearts(value);
    setValue("howmuchenjoyed", value);
    clearErrors("howmuchenjoyed");
  };

  return (
    <div className="min-h-screen bg-[#000001] text-white overflow-x-hidden">

      {/* FORM CONTAINER */}
      <div className="max-w-md sm:max-w-lg px-4 sm:px-6 mx-auto py-8">

        <div className={`bg-[#1a1a1a] shadow-lg rounded-md p-6 ${shake ? "shake" : ""}`}>

          <h2 className="text-2xl font-semibold mb-8">
            Compliance and Exit
          </h2>

          {/* Handover */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Did you hand over all required documents? <span className="text-red-400">*</span>
            </label>
            <div className="flex gap-4">
              {["yes", "no", "notyet"].map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <input type="radio" value={item} {...register("handover")} />
                  {item.toUpperCase()}
                </label>
              ))}
            </div>
          </div>

          {/* Share Knowledge */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Agree to share knowledge with future members? <span className="text-red-400">*</span>
            </label>
            <div className="flex gap-4">
              {["yes", "no"].map((item) => (
                <label key={item}>
                  <input type="radio" value={item} {...register("sharetheknowledge")} />
                  {item.toUpperCase()}
                </label>
              ))}
            </div>
          </div>

          {/* Recommendation */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Need recommendation letter / certificate? <span className="text-red-400">*</span>
            </label>
            <div className="flex gap-4">
              {["yes", "no", "both"].map((item) => (
                <label key={item}>
                  <input type="radio" value={item} {...register("recommendationletter")} />
                  {item.toUpperCase()}
                </label>
              ))}
            </div>
          </div>

          {/* Suggestions */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Suggestions / improvements <span className="text-red-400">*</span>
            </label>
            <textarea
              {...register("improvementneeded")}
              placeholder="Your suggestions..."
              className="w-full p-3 rounded-md bg-[#0f0f0f] text-white focus:outline-none"
              rows={3}
            />
          </div>

          {/* ❤️ Heart Rating */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              How much did you enjoy being part of our team? <span className="text-red-400">*</span>
            </label>

            <div className="flex gap-2 text-3xl">
              {[1,2,3,4,5].map((heart) => (
                <span
                  key={heart}
                  onClick={() => handleHeartClick(heart)}
                  className={`cursor-pointer ${
                    heart <= hearts ? "text-red-500" : "text-gray-500"
                  }`}
                >
                  ♥
                </span>
              ))}
            </div>

            {showErrors && errors.howmuchenjoyed && (
              <p className="text-red-400 text-sm mt-1">
                * Select rating
              </p>
            )}
          </div>

          {/* Overall Feedback */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Overall Internship Experience (1–5) <span className="text-red-400">*</span>
            </label>
            <input
              type="number"
              min="1"
              max="5"
              {...register("overallfeedback")}
              className="w-full p-3 rounded-md bg-[#0f0f0f] text-white"
            />
          </div>

          {/* Like Most */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              What did you like most? <span className="text-red-400">*</span>
            </label>
            <textarea
              {...register("likemost")}
              placeholder="Write here..."
              className="w-full p-3 rounded-md bg-[#0f0f0f] text-white"
              rows={3}
            />
          </div>

          {/* Improve */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              What can we improve? <span className="text-red-400">*</span>
            </label>
            <textarea
              {...register("canimprove")}
              placeholder="Write here..."
              className="w-full p-3 rounded-md bg-[#0f0f0f] text-white"
              rows={3}
            />
          </div>

        </div>

        {/* BUTTON */}
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

export default Step7Compliance;