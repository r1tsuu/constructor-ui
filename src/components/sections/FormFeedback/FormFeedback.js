import React, { cloneElement, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { CSSTransition } from "react-transition-group";
import { ColorsInjector } from "../../../containers";
import { useTranslation } from "../../../contexts/LanguageContext";
import { useGlobalForms } from "../../../contexts/GlobalFormsContext";
import { useSection } from "../../../contexts/SectionContext";
import { sendForm } from "../../../services/api";
import {
  Button,
  Modal,
  Section,
  Typography,
  ThankYouBlock,
} from "../../shared";
import { ControlledInput } from "../../shared/Input";

import styles from "./FormFeedback.module.scss";
import { useEnvironment } from "../../../contexts/EnvironmentContext";

const THANK_YOU_CLOSE_DELAY = 1500;

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
          submitted={submitted}
          background={settings.formBackground}
          submittedMessageSettings={settings.submittedMessage}
          successMessage={t("FORM_SENDED_SUCCESS")}
          errorMessage={t("FORM_SENDED_ERROR")}
        />

        {onClosePopupButtonClick && (
          <button
            className={styles.popupCloseButton}
            onClick={onClosePopupButtonClick}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L11 10.8209M1 11L11 1.17907"
                stroke="#FCFCFC"
                stroke-width="1.5"
              />
            </svg>
          </button>
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
    <Modal
      {...modal}
      data-theme={section.theme}
      isOpen={isOpen}
      onClose={onClose}
    >
      <FormFeedback
        title={title}
        settings={restSettings}
        onSubmit={onSubmit}
        submitted={submitted}
      />
    </Modal>
  );
};

const FormFeedbackSubmitContainer = ({ children }) => {
  const { SITE_URL } = useEnvironment();
  const [submitted, setSubmitted] = useState(false);
  const timeout = useRef(null);
  const handleSubmit = async (form) => {
    const response = await sendForm({ form, type: "feedback", SITE_URL });

    if (response.status === 200) setSubmitted("success");
    else setSubmitted("error");
  };

  useEffect(() => {
    if (submitted) {
      timeout.current = setTimeout(() => {
        setSubmitted(false);
        if (children.props.onClose) {
          children.props.onClose();
        }
      }, THANK_YOU_CLOSE_DELAY);
    }
  }, [submitted]);

  useEffect(() => {
    return () => clearTimeout(timeout.current);
  }, []);

  return cloneElement(children, {
    ...children.props,
    onSubmit: handleSubmit,
    submitted: submitted,
  });
};

export const FormFeedbackSectionContainer = ({ title, settings }) => {
  return (
    <FormFeedbackSubmitContainer>
      <FormFeedbackSection title={title} settings={settings} />
    </FormFeedbackSubmitContainer>
  );
};

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
