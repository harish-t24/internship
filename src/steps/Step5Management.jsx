import { useFormContext } from "react-hook-form";
import { useFormUI } from "../context/FormUIContext";
import { useState } from "react";

const Step5Management = ({ onNext, shake, isSubmitting }) => {
  const {
    register,
    setValue,
    clearErrors,
    formState: { errors },
  } = useFormContext();

  const { showErrors } = useFormUI();

  const [rating, setRating] = useState(0);

  const handleStarClick = (value) => {
    setRating(value);
    setValue("wellstructured", value);
    clearErrors("wellstructured");
  };

  return (
    <div className="min-h-screen bg-[#000001] text-white overflow-x-hidden">

      {/* FORM CONTAINER */}
      <div className="max-w-md sm:max-w-lg px-4 sm:px-6 mx-auto py-8">

        <div className={`bg-[#1a1a1a] shadow-lg rounded-md p-6 ${shake ? "shake" : ""}`}>

          <h2 className="text-2xl font-semibold mb-8">
            Internship Management
          </h2>

          {/* ⭐ Well Structured */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              How well-structured was the internship program? <span className="text-red-400">*</span>
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

            {showErrors && errors.wellstructured && (
              <p className="text-red-400 text-sm mt-1">
                * Select rating
              </p>
            )}
          </div>

          {/* Meet Deadlines */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Did you meet deadlines and expectations? <span className="text-red-400">*</span>
            </label>

            <div className="flex gap-4">
              {["yes", "no", "partially"].map((item) => (
                <label key={item}>
                  <input type="radio" value={item} {...register("meetdeadlines")} />
                  {item.toUpperCase()}
                </label>
              ))}
            </div>
          </div>

          {/* Project Goals */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Were project goals clearly defined? <span className="text-red-400">*</span>
            </label>

            <div className="flex gap-4">
              {["yes", "no", "somewhat"].map((item) => (
                <label key={item}>
                  <input type="radio" value={item} {...register("projectgoalsclearlydefined")} />
                  {item.toUpperCase()}
                </label>
              ))}
            </div>
          </div>

          {/* GitHub */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Did you maintain GitHub and documentation? <span className="text-red-400">*</span>
            </label>

            <div className="flex gap-4">
              {["yes", "no"].map((item) => (
                <label key={item}>
                  <input type="radio" value={item} {...register("maintaingithub")} />
                  {item.toUpperCase()}
                </label>
              ))}
            </div>
          </div>

          {/* TASK EXPERIENCE */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-3">
              Task Experience
            </h3>

            {/* Tasks Explained */}
            <div className="mb-3">
              <label className="block mb-2">
                Were tasks clearly explained? <span className="text-red-400">*</span>
              </label>
              <div className="flex gap-4">
                {["yes", "no"].map((item) => (
                  <label key={item}>
                    <input type="radio" value={item} {...register("tasksclearlyexplained")} />
                    {item.toUpperCase()}
                  </label>
                ))}
              </div>
            </div>

            {/* Tasks Meaningful */}
            <div className="mb-3">
              <label className="block mb-2">
                Were tasks meaningful? (1–5) <span className="text-red-400">*</span>
              </label>
              <input
                type="number"
                min="1"
                max="5"
                {...register("tasksmeaningful")}
                className="w-full p-3 rounded-md bg-[#0f0f0f] text-white"
              />
            </div>

            {/* Challenges */}
            <div className="mb-3">
              <label className="block mb-2">
                Did you face any challenges? <span className="text-red-400">*</span>
              </label>
              <textarea
                {...register("faceanychallenges")}
                rows={3}
                className="w-full p-3 rounded-md bg-[#0f0f0f] text-white"
              />
            </div>

          </div>

        </div>

        {/* NEXT BUTTON */}
        <div className="mt-5 mb-8">
          <button
            type="button"
            onClick={onNext}
            disabled={isSubmitting}
            className="w-full py-4 rounded-full bg-white text-black text-lg font-bold hover:bg-gray-200 transition"
          >
            {isSubmitting ? "Submitting..." : "Next"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default Step5Management;