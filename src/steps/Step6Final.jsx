import { useFormContext } from "react-hook-form";
import { useFormUI } from "../context/FormUIContext";
import { useState } from "react";

const Step6Final = ({ onNext, shake }) => {
  const { register, setValue, clearErrors, formState: { errors } } = useFormContext();
  const { showErrors } = useFormUI();

  const [workEnv, setWorkEnv] = useState(0);

  const handleStarClick = (value) => {
    setWorkEnv(value);
    setValue("workenvironment", value);
    clearErrors("workenvironment");
  };

  return (
    <div className="min-h-screen bg-[#000001] text-white overflow-x-hidden">
      
      {/* FORM CONTAINER */}
      <div className="max-w-md sm:max-w-lg px-4 sm:px-6 mx-auto py-8">
        
        <div className={`bg-[#1a1a1a] shadow-lg rounded-md p-6 ${shake ? "shake" : ""}`}>
          
          <h2 className="text-2xl font-semibold mb-8">
            Final Reflection and Feedback
          </h2>

          {/* Biggest Takeaway */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Biggest takeaway <span className="text-red-400">*</span>
            </label>
            <input
              {...register("biggesttakeaway")}
              placeholder="Your answer"
              className="w-full p-3 rounded-md bg-[#0f0f0f] text-white focus:outline-none"
            />
          </div>

          {/* Challenges */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Challenges faced & how you overcame <span className="text-red-400">*</span>
            </label>
            <input
              {...register("challengesface")}
              placeholder="Your answer"
              className="w-full p-3 rounded-md bg-[#0f0f0f] text-white focus:outline-none"
            />
          </div>

          {/* Improvements */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              What would you improve? <span className="text-red-400">*</span>
            </label>
            <input
              {...register("improvementareas")}
              placeholder="Your answer"
              className="w-full p-3 rounded-md bg-[#0f0f0f] text-white focus:outline-none"
            />
          </div>

          {/* Future Collaboration */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Future collaboration? <span className="text-red-400">*</span>
            </label>
            <div className="flex gap-4">
              {["yes", "no", "maybe"].map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <input type="radio" value={item} {...register("futurecollaboration")} />
                  {item.toUpperCase()}
                </label>
              ))}
            </div>
          </div>

          {/* Recommend */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Recommend to others? <span className="text-red-400">*</span>
            </label>
            <div className="flex gap-4">
              {["yes", "no"].map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <input type="radio" value={item} {...register("recommendothers")} />
                  {item.toUpperCase()}
                </label>
              ))}
            </div>
          </div>

          {/* Heard About Us */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              How did you hear about us? <span className="text-red-400">*</span>
            </label>

            <div className="grid grid-cols-2 gap-2">
              {[
                "Facebook","Instagram","LinkedIn","YouTube",
                "WhatsApp Status","WhatsApp Group","College",
                "Faculty","Friend","Google","Workshop","Client","Email"
              ].map((item, i) => (
                <label key={i} className="flex items-center gap-2 bg-[#0f0f0f] p-2 rounded-md">
                  <input type="checkbox" value={item} {...register("heardaboutus")} />
                  <span className="text-sm">{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* ⭐ Work Environment */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Work Environment (1–5) <span className="text-red-400">*</span>
            </label>

            <div className="flex gap-2 text-3xl">
              {[1,2,3,4,5].map((star) => (
                <span
                  key={star}
                  onClick={() => handleStarClick(star)}
                  className={`cursor-pointer ${
                    star <= workEnv ? "text-yellow-400" : "text-gray-500"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>

            {showErrors && errors.workenvironment && (
              <p className="text-red-400 text-sm mt-1">
                * Select rating
              </p>
            )}
          </div>

          {/* Comfortable */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Comfortable asking questions? <span className="text-red-400">*</span>
            </label>
            <div className="flex gap-4">
              {["yes", "no"].map((item) => (
                <label key={item}>
                  <input type="radio" value={item} {...register("comfortableasking")} />
                  {item.toUpperCase()}
                </label>
              ))}
            </div>
          </div>

          {/* Teamwork */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Teamwork & collaboration <span className="text-red-400">*</span>
            </label>
            <input
              {...register("teamwork")}
              placeholder="Your answer"
              className="w-full p-3 rounded-md bg-[#0f0f0f] text-white focus:outline-none"
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

export default Step6Final;