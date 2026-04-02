import { useFormContext } from "react-hook-form";
import { useFormUI } from "../context/FormUIContext";
import { useState } from "react";

const Step4Communication = ({ onNext, shake }) => {
  const {
    register,
    setValue,
    clearErrors,
    formState: { errors },
  } = useFormContext();

  const { showErrors } = useFormUI();

  const [teamRating, setTeamRating] = useState(0);
  const [learningRating, setLearningRating] = useState(0);

  const handleStar = (value, field) => {
    if (field === "coordinationwiththeteam") {
      setTeamRating(value);
    } else if (field === "learningexperience") {
      setLearningRating(value);
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
            Communication and Teamwork
          </h2>

          {/* Communication Encouraged */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Were you encouraged to communicate your ideas? <span className="text-red-400">*</span>
            </label>
            <div className="flex gap-4">
              {["yes", "no"].map((item) => (
                <label key={item}>
                  <input type="radio" value={item} {...register("encouragedtocommunicate")} />
                  {item.toUpperCase()}
                </label>
              ))}
            </div>
          </div>

          {/* Team Feeling */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Did you feel like part of the team? <span className="text-red-400">*</span>
            </label>
            <div className="flex gap-4">
              {["yes", "no"].map((item) => (
                <label key={item}>
                  <input type="radio" value={item} {...register("feellikepartoftheteam")} />
                  {item.toUpperCase()}
                </label>
              ))}
            </div>
          </div>

          {/* ⭐ Team Coordination */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Team Coordination (1–5) <span className="text-red-400">*</span>
            </label>
            <div className="flex gap-2 text-3xl">
              {[1,2,3,4,5].map((star) => (
                <span
                  key={star}
                  onClick={() => handleStar(star, "coordinationwiththeteam")}
                  className={`cursor-pointer ${
                    star <= teamRating ? "text-yellow-400" : "text-gray-500"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>

            {showErrors && errors.coordinationwiththeteam && (
              <p className="text-red-400 text-sm mt-1">
                * Select rating
              </p>
            )}
          </div>

          {/* Practical Knowledge */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Did you gain practical knowledge? <span className="text-red-400">*</span>
            </label>
            <div className="flex gap-4">
              {["yes", "no"].map((item) => (
                <label key={item}>
                  <input type="radio" value={item} {...register("practicalknowledge")} />
                  {item.toUpperCase()}
                </label>
              ))}
            </div>
          </div>

          {/* ⭐ Learning Experience */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Learning Experience (1–5) <span className="text-red-400">*</span>
            </label>
            <div className="flex gap-2 text-3xl">
              {[1,2,3,4,5].map((star) => (
                <span
                  key={star}
                  onClick={() => handleStar(star, "learningexperience")}
                  className={`cursor-pointer ${
                    star <= learningRating ? "text-yellow-400" : "text-gray-500"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>

            {showErrors && errors.learningexperience && (
              <p className="text-red-400 text-sm mt-1">
                * Select rating
              </p>
            )}
          </div>

          {/* Skills */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Skills Improved <span className="text-red-400">*</span>
            </label>

            <div className="flex gap-4">
              {["Technical", "Communication", "Teamwork"].map((skill) => (
                <label key={skill} className="flex items-center gap-2">
                  <input type="checkbox" value={skill} {...register("skillsimprove")} />
                  {skill}
                </label>
              ))}
            </div>
          </div>

          {/* Career Goals */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Did internship align with your career goals? <span className="text-red-400">*</span>
            </label>

            <div className="flex gap-4">
              {["yes", "no", "partially"].map((item) => (
                <label key={item}>
                  <input type="radio" value={item} {...register("careergoals")} />
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

export default Step4Communication;