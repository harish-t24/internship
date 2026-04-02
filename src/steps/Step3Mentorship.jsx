import { useFormContext } from "react-hook-form";
import { useFormUI } from "../context/FormUIContext";
import { useState } from "react";

const Step3Mentorship = ({ onNext, shake }) => {
  const {
    register,
    setValue,
    clearErrors,
    formState: { errors },
  } = useFormContext();

  const { showErrors } = useFormUI();

  const [mentorRating, setMentorRating] = useState(0);
  const [communicationRating, setCommunicationRating] = useState(0);
  const [supportRating, setSupportRating] = useState(0);

  const handleStar = (value, field) => {
    if (field === "mentorguidance") {
      setMentorRating(value);
    } else if (field === "ratecommunication") {
      setCommunicationRating(value);
    } else if (field === "supportivementor") {
      setSupportRating(value);
    }

    setValue(field, value);
    clearErrors(field);
  };

  return (
    <div className="min-h-screen bg-[#000001] text-white overflow-x-hidden">

      {/* FORM CONTAINER */}
      <div className="max-w-md sm:max-w-lg px-4 sm:px-6 mx-auto py-8">

        <div className={`bg-[#1a1a1a] shadow-lg rounded-md p-6 ${shake ? "shake" : ""}`}>

          <h2 className="text-2xl font-semibold mb-8">
            Mentorship and Guidance
          </h2>

          {/* Mentor Accessible */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Was your mentor accessible and helpful? <span className="text-red-400">*</span>
            </label>
            <div className="flex flex-wrap gap-4">
              {["Always", "Usually", "Occasionally", "Rarely"].map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <input type="radio" value={item} {...register("mentoraccessible")} />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Constructive Feedback */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Did you receive constructive feedback? <span className="text-red-400">*</span>
            </label>
            <div className="flex gap-4">
              {["yes", "no"].map((item) => (
                <label key={item}>
                  <input type="radio" value={item} {...register("receiveconstructive")} />
                  {item.toUpperCase()}
                </label>
              ))}
            </div>
          </div>

          {/* ⭐ Mentor Guidance */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Rate mentor guidance (1–5) <span className="text-red-400">*</span>
            </label>
            <div className="flex gap-2 text-3xl">
              {[1,2,3,4,5].map((star) => (
                <span
                  key={star}
                  onClick={() => handleStar(star, "mentorguidance")}
                  className={`cursor-pointer ${
                    star <= mentorRating ? "text-yellow-400" : "text-gray-500"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            {showErrors && errors.mentorguidance && (
              <p className="text-red-400 text-sm mt-1">* Select rating</p>
            )}
          </div>

          {/* ⭐ Communication */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Rate communication (1–5) <span className="text-red-400">*</span>
            </label>
            <div className="flex gap-2 text-3xl">
              {[1,2,3,4,5].map((star) => (
                <span
                  key={star}
                  onClick={() => handleStar(star, "ratecommunication")}
                  className={`cursor-pointer ${
                    star <= communicationRating ? "text-yellow-400" : "text-gray-500"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            {showErrors && errors.ratecommunication && (
              <p className="text-red-400 text-sm mt-1">* Select rating</p>
            )}
          </div>

          {/* Response Timely */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Were responses timely? <span className="text-red-400">*</span>
            </label>
            <div className="flex gap-4">
              {["yes", "no", "sometimes"].map((item) => (
                <label key={item}>
                  <input type="radio" value={item} {...register("responsetimely")} />
                  {item.toUpperCase()}
                </label>
              ))}
            </div>
          </div>

          {/* ⭐ Supportive Mentor */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              How supportive was your mentor? (1–5) <span className="text-red-400">*</span>
            </label>
            <div className="flex gap-2 text-3xl">
              {[1,2,3,4,5].map((star) => (
                <span
                  key={star}
                  onClick={() => handleStar(star, "supportivementor")}
                  className={`cursor-pointer ${
                    star <= supportRating ? "text-yellow-400" : "text-gray-500"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            {showErrors && errors.supportivementor && (
              <p className="text-red-400 text-sm mt-1">* Select rating</p>
            )}
          </div>

          {/* Mentor Feedback */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Did mentor provide regular feedback? <span className="text-red-400">*</span>
            </label>
            <div className="flex gap-4">
              {["yes", "no"].map((item) => (
                <label key={item}>
                  <input type="radio" value={item} {...register("mentorfeedback")} />
                  {item.toUpperCase()}
                </label>
              ))}
            </div>
          </div>

          {/* Doubts Resolved */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Were your doubts resolved properly? <span className="text-red-400">*</span>
            </label>
            <div className="flex gap-4">
              {["yes", "no"].map((item) => (
                <label key={item}>
                  <input type="radio" value={item} {...register("doubtsresolved")} />
                  {item.toUpperCase()}
                </label>
              ))}
            </div>
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

export default Step3Mentorship;