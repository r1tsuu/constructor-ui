import {
  FormFeedbackSection,
  FormFeedbackSubmitContainer,
} from "./FormFeedback";

export const FormFeedbackSectionContainer = ({ title, settings }) => {
  return (
    <FormFeedbackSubmitContainer>
      <FormFeedbackSection title={title} settings={settings} />
    </FormFeedbackSubmitContainer>
  );
};

export default FormFeedbackSectionContainer;
