import { useState, useEffect } from "react";
import { FormProvider } from "react-hook-form";
import useEnrollmentForm from "./form/useEnrollmentForm";

import Step1Personal from "./steps/Step1Personal";
import Step2Internship from "./steps/Step2Internship";
import Step3Mentorship from "./steps/Step3Mentorship";
import Step4Communication from "./steps/Step4Communication";
import Step5Management from "./steps/Step5Management";
import Step6Final from "./steps/Step6Final";
import Step7Compliance from "./steps/Step7Compliance";
import Step8Upload from "./steps/Step8Upload";
import SuccessCompletion from "./steps/SuccessCompletion";
import TopBar from "./components/navigations/TopBar";
import ProgressBar from "./components/navigations/ProgressBar";
import { FormUIContext } from "./context/FormUIContext";
import BackgroundFileUploader from "./components/fileupload/BackgroundFileUploader";
import { Toaster } from "./components/ui/toaster";

const stepFields = {
  1: [
    "fullName",
    "phonenumber",
    "collegename",
    "department",
    "startdate",
    "enddate",
    "mode",
  ],

  2: [
    "describeproject",
    "role",
    "toolsandtechnologies",
    "learningresources",
    "ratethetechnicalknowledge",
  ],

  3: [
    "mentoraccessible",
    "receiveconstructive",
    "mentorguidance",
    "ratecommunication",
    "responsetimely",
    "supportivementor",
    "mentorfeedback",
    "doubtsresolved",
  ],

  4: [
    "encouragedtocommunicate",
    "feellikepartoftheteam",
    "coordinationwiththeteam",
    "practicalknowledge",
    "learningexperience",
    "skillsimprove",
    "careergoals",
  ],

  5: [
    "wellstructured",
    "meetdeadlines",
    "projectgoalsclearlydefined",
    "maintaingithub",
    "tasksclearlyexplained",
    "tasksmeaningful",
    "faceanychallenges",
  ],

  6: [
    "biggesttakeaway",
    "challengesface",
    "improvementareas",
    "futurecollaboration",
    "recommendothers",
    "heardaboutus",
    "workenvironment",
    "comfortableasking",
    "teamwork",
  ],

  7: [
    "handover",
    "sharetheknowledge",
    "recommendationletter",
    "improvementneeded",
    "howmuchenjoyed",
    "overallfeedback",
    "likemost",
    "canimprove",
  ],

  8: [
    "uploadfile",
  ],
};



function App() {
  const [step, setStep] = useState(1);
  const form = useEnrollmentForm(setStep);
  const [shakeForm, setShakeForm] = useState(false);

  const nextStep = async () => {
    form.setShowErrors(true);

    const fieldsToValidate =
      typeof stepFields[step] === "function"
        ? stepFields[step](form.getValues())
        : stepFields[step];

    const valid = await form.trigger(fieldsToValidate, {
      shouldFocus: false,
    });

    if (!valid) {
      //  trigger shake
      setShakeForm(true);

      // remove shake class after animation
      setTimeout(() => setShakeForm(false), 400);
      return;
    }

    form.setShowErrors(false);

    if (step === 8) {
      await form.onSubmit(form.getValues());
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div>
      <FormUIContext.Provider value={{ showErrors: form.showErrors }}>
        <FormProvider {...form}>
          {/* TOP BAR */}
          {step > 1 && step < 9 && <TopBar onBack={() => setStep(step - 1)} />}
          {step > 1 && step < 9 && (
            <ProgressBar currentStep={step} setStep={setStep} />
          )}

          <BackgroundFileUploader currentStep={step} />

          {/* STEP CONTENT */}
          <form onSubmit={form.handleSubmit(form.onSubmit)}>
            {step === 1 && (
              <Step1Personal onNext={nextStep} shake={shakeForm} />
            )}
            {step === 2 && (
              <Step2Internship onNext={nextStep} shake={shakeForm} />
            )}
            {step === 3 && (
              <Step3Mentorship onNext={nextStep} shake={shakeForm} />
            )}
            {step === 4 && (
              <Step4Communication onNext={nextStep} shake={shakeForm} />
            )}
            {step === 5 && (
              <Step5Management
                onNext={nextStep}
                shake={shakeForm}
                isSubmitting={form.isSubmitting}
              />
            )}
            {step === 6 && (
              <Step6Final onNext={nextStep} shake={shakeForm} />
            )}
            {step === 7 && (
              <Step7Compliance onNext={nextStep} shake={shakeForm} />
            )}
            {step === 8 && (
              <Step8Upload
                onNext={nextStep}
                shake={shakeForm}
                isSubmitting={form.isSubmitting}
              />
            )}
            {step === 9 && <SuccessCompletion />}
          </form>
        </FormProvider>
      </FormUIContext.Provider>
      <Toaster />
    </div>
  );
}

export default App;
