import { FormFeedbackModal, FormFeedbackSubmitContainer } from "./FormFeedback";

export const FormFeedbackModalContainer = ({ title, settings }) => {
  const { globalFormIndex } = useSection();
  const { openedFormIndex, handleCloseForm } = useGlobalForms();

  return (
    <FormFeedbackSubmitContainer>
      <FormFeedbackModal
        title={title}
        settings={settings}
        isOpen={openedFormIndex === globalFormIndex}
        onClose={handleCloseForm}
      />
    </FormFeedbackSubmitContainer>
  );
};

export default FormFeedbackModalContainer;
