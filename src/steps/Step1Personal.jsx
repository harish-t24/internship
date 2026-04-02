import { useState } from "react";
import { useFormUI } from "../context/FormUIContext";
import {
  ChevronDown,
  Phone,
  Globe,
  Mail,
  MapPin,
  CalendarDays,
  X,
  Upload,
} from "lucide-react";
import { useFormContext, useWatch } from "react-hook-form";
import CompanyLogo from "../../public/images/FINAL.svg";
import CompanyName from "../../public/images/LogotextwithMotto.svg";
import { isFileTooLarge, MAX_FILE_MB } from "@/utils/fileValidation";



const Step1Personal = ({ onNext, shake }) => {
  const {
    register,
    control,
    setValue,
    clearErrors,
    watch,
    formState: { errors },
  } = useFormContext();

  const { showErrors, setShowErrors } = useFormUI();
  
  const [isUploading, setIsUploading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  
  const watchedProof = useWatch({ control, name: "proof" });
  const uploadedFiles = selectedFiles; // ← Use component state
  const fullName = watch("fullName");
  
  const removeFile = (indexToRemove) => {
    const updatedFiles = selectedFiles.filter(
      (_, index) => index !== indexToRemove,
    );
    setSelectedFiles(updatedFiles);
    setValue("proof", updatedFiles, { shouldValidate: true });
  };


  return (
    <div className="min-h-screen bg-[#000001] text-white overflow-x-hidden">
      {/* HEADER BOX */}
      <div
        className="-mx-6 bg-gray-800 py-11 pb-7 px-6 bg-cover bg-no-repeat relative"
        style={{ backgroundImage: "url('/images/bg-2.jpg')" }}
      >
        <div className="max-w-md sm:max-w-lg mx-auto p-5">
          <div className="flex justify-start items-center gap-3 mt-0 mb-10">
            <div>
              <img
                src={CompanyLogo}
                alt="Company Logo"
                className="h-19.75 sm:h-20 md:h-28 w-auto object-contain"
              />
            </div>

            <div>
              <img
                src={CompanyName}
                alt="Company Name"
                className="h-16 sm:h-20 md:h-20 w-auto object-contain"
              />
            </div>
          </div>

          <h1 className="text-[27px] sm:text-3xl md:text-4xl font-bold mb-4">
            Submit your Feedback
          </h1>

          <p className="text-lg sm:text-xl leading-relaxed mb-8">
            Please fill out the form below to complete your feedback.
          </p>

          <div className="space-y-4">
            <div className="text-lg sm:text-xl flex items-center gap-2">
              <Phone /> +91 7200353789
            </div>
            <div className="text-lg sm:text-xl flex items-center gap-2">
              <Mail />
              shinecrafttech@gmail.com
            </div>
            <div className="text-lg sm:text-xl flex items-center gap-2">
              <Globe />
              www.shinecrafttechnologies.com
            </div>
            <div className="text-lg sm:text-xl flex items-center gap-2">
              <MapPin />
              Puducherry
            </div>
          </div>
        </div>
      </div>

      {/* FORM CONTAINER */}
      <div className="max-w-md sm:max-w-lg px-4 sm:px-6 mx-auto py-8">
        <div
          className={`bg-[#1a1a1a] shadow-lg rounded-md p-6 ${shake ? "shake" : ""}`}
        >
          <h2 className="text-2xl font-semibold mb-8">Personal Information</h2>

          {/* FULL NAME */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Full Name <span className="text-red-400">*</span>
            </label>
            <input
              {...register("fullName", {
                onChange: () => clearErrors("fullName"),
              })}
              placeholder="e.g. John Doe"
              className="w-full p-3 sm:p-4 rounded-md bg-[#0f0f0f] text-white placeholder-gray-400 focus:outline-none"
            />
            {showErrors && errors.fullName && (
              <p className="mt-1 text-sm text-red-400">
                * {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Phone Number <span className="text-red-400">*</span>
            </label>
            <input
              {...register("phonenumber", {
                onChange: () => clearErrors("phonenumber"),
              })}
              placeholder="e.g. 7890123456"
              className="w-full p-3 sm:p-4 rounded-md bg-[#0f0f0f] text-white placeholder-gray-400 focus:outline-none"
            />
            {showErrors && errors.phonenumber && (
              <p className="mt-1 text-sm text-red-400">
                * {errors.phonenumber.message}
              </p>
            )}
          </div>

          {/* College Name */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              College Name <span className="text-red-400">*</span>
            </label>
            <input
              {...register("collegename", { onChange: () => clearErrors("collegename") })}
              placeholder="e.g. ABC University"
              className="w-full p-3 sm:p-4 rounded-md bg-[#0f0f0f] text-white placeholder-gray-400 focus:outline-none"
            />
            {showErrors && errors.collegename && (
              <p className="mt-1 text-sm text-red-400">
                * {errors.collegename.message}
              </p>
            )}
          </div>

          {/* Department */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Department <span className="text-red-400">*</span>
            </label>
            <input
              {...register("department", {
                onChange: () => clearErrors("department"),
              })}
               placeholder="e.g. Computer Science and Engineering"
              className="w-full p-3 sm:p-4 rounded-md bg-[#0f0f0f] text-white placeholder-gray-400 focus:outline-none"
            />
            {showErrors && errors.department && (
              <p className="mt-1 text-sm text-red-400">
                * {errors.department.message}
              </p>
            )}
          </div>

          {/* Start Date */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Start Date <span className="text-red-400">*</span>
            </label>
            <input
              {...register("startdate", {
                onChange: () => clearErrors("startdate"),
              })}
              type="date"
              className="w-full p-3 sm:p-4 rounded-md bg-[#0f0f0f] text-white placeholder-gray-400 focus:outline-none"
            />
            {showErrors && errors.startdate && (
              <p className="mt-1 text-sm text-red-400">
                * {errors.startdate.message}
              </p>
            )}
          </div>

          {/* End Date */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              End Date <span className="text-red-400">*</span>
            </label>
            <input
              {...register("enddate", {
                onChange: () => clearErrors("enddate"),
              })}
              type="date"
              className="w-full p-3 sm:p-4 rounded-md bg-[#0f0f0f] text-white placeholder-gray-400 focus:outline-none"
            />
            {showErrors && errors.enddate && (
              <p className="mt-1 text-sm text-red-400">
                * {errors.enddate.message}
              </p>
            )}
          </div>

          {/* Mode */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Internship Mode <span className="text-red-400">*</span>
            </label>

            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="online"
                  {...register("mode", {
                    onChange: () => clearErrors("mode"),
                  })}
                />
                Online
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="offline"
                  {...register("mode")}
                />
                Offline
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="hybrid"
                  {...register("mode")}
                />
                Hybrid
              </label>
            </div>

            {showErrors && errors.mode && (
              <p className="mt-1 text-sm text-red-400">
                * {errors.mode.message}
              </p>
            )}
            </div>
        </div>

        {/* NEXT BUTTON */}
        <div className="mt-5 mb-8">
          <button
            type="button"
            onClick={onNext}
            className="max-w-lg w-full py-4 rounded-full bg-white text-black text-lg font-bold hover:bg-gray-200 transition-colors  duration-200"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step1Personal;
