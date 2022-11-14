import React from "react";
import { useForm } from "react-hook-form";
import { ColorsInjector, FormContainer } from "../../../containers";
import { useTranslation } from "../../../contexts/LanguageContext";
import { useGlobalForms } from "../../../contexts/GlobalFormsContext";
import { useSection } from "../../../contexts/SectionContext";
import {
  Button,
  Modal,
  Section,
  Typography,
  ThankYouBlock,
  PopupCloseButton,
} from "../../shared";
import { ControlledInput } from "../../shared/Input";

import styles from "./FormFeedback.module.scss";

const FormFeedback = ({
  title,
  settings,
  onSubmit,
  submitted, // false, "error", "success"
  onClosePopupButtonClick,
}) => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });
  const t = useTranslation();

  const baseInputProps = {
    control,
    inputType: settings.inputType,
  };

  return (
    <ColorsInjector
      borderColor={settings.formBorderColor}
      background={settings.formBackground}
    >
      <div
        style={{
          borderRadius: settings.formBorderRadius,
        }}
        className={styles.wrapper}
      >
        <ThankYouBlock
          // borderRadius={settings.formBorderRadius}
          submitted={submitted}
          submittedMessageSettings={settings.submittedMessage}
          background={settings.formBackground}
        />

        {onClosePopupButtonClick && (
          <PopupCloseButton
            borderRadius={settings.formBorderRadius}
            onClick={onClosePopupButtonClick}
          />
        )}
        <form
          autoComplete="off"
          noValidate
          onSubmit={handleSubmit((form) => {
            reset();
            if (onSubmit) {
              onSubmit(form);
            }
          })}
        >
          <Typography className={styles.title} {...settings.title} as={"h2"}>
            {title}
          </Typography>
          <div className={styles.inputFields}>
            {settings.enableName && (
              <ControlledInput
                {...baseInputProps}
                {...settings.name}
                name="name"
                fieldType="default"
                placeholder={t("FORM_NAME")}
              />
            )}
            {settings.enablePhone && (
              <ControlledInput
                {...baseInputProps}
                {...settings.phone}
                name="phone"
                fieldType="phone"
                placeholder={t("FORM_PHONE")}
              />
            )}
            {settings.enableEmail && (
              <ControlledInput
                {...baseInputProps}
                {...settings.email}
                name="email"
                fieldType="email"
                placeholder={t("FORM_EMAIL")}
              />
            )}
            {settings.enableMessage && (
              <ControlledInput
                {...baseInputProps}
                {...settings.message}
                name="message"
                fieldType="message"
                placeholder={t("FORM_MESSAGE")}
              />
            )}
          </div>
          <Button
            fullWidth
            htmlType={"submit"}
            label={t("FORM_SEND")}
            type={settings.buttonType}
          />
          <div className={styles.privacy}>
            <Typography as={"span"} {...settings.privacy.first}>
              {t("FORM_PRIVACY_1")}
            </Typography>
            <Typography as={"span"} {...settings.privacy.second}>
              {t("FORM_PRIVACY_2")}
            </Typography>
          </div>
        </form>
      </div>
    </ColorsInjector>
  );
};

export const FormFeedbackSection = ({
  title,
  settings: { section, ...restSettings },
  onSubmit,
  submitted,
}) => {
  return (
    <Section {...section}>
      <FormFeedback
        title={title}
        settings={restSettings}
        onSubmit={onSubmit}
        submitted={submitted}
      />
    </Section>
  );
};

export const FormFeedbackModal = ({
  title,
  settings: { section, modal, ...restSettings },
  onSubmit,
  onClose,
  submitted,
  isOpen,
}) => {
  return (
    <Modal data-theme={section.theme} isOpen={isOpen} onClose={onClose}>
      <FormFeedback
        title={title}
        settings={restSettings}
        onSubmit={onSubmit}
        submitted={submitted}
        onClosePopupButtonClick={onClose}
      />
    </Modal>
  );
};

export const FormFeedbackSubmitContainer = ({
  children,
  id: sectionId,
  queryParams,
}) => {
  return (
    <FormContainer
      sectionId={sectionId}
      queryParams={queryParams}
      type={"feedback"}
    >
      {children}
    </FormContainer>
  );
};

export const FormFeedbackSectionContainer = ({ title, settings }) => {
  const { id } = useSection();
  return (
    <FormFeedbackSubmitContainer id={id}>
      <FormFeedbackSection title={title} settings={settings} />
    </FormFeedbackSubmitContainer>
  );
};

export const FormFeedbackModalContainer = ({ title, settings }) => {
  const { globalFormIndex, id } = useSection();
  const {
    openedForm: { index, queryParams },
    handleCloseForm,
  } = useGlobalForms();

  return (
    <FormFeedbackSubmitContainer id={id} queryParams={queryParams}>
      <FormFeedbackModal
        title={title}
        settings={settings}
        isOpen={index === globalFormIndex}
        onClose={handleCloseForm}
      />
    </FormFeedbackSubmitContainer>
  );
};
