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
import clsx from "clsx";

const FormFeedback = ({
  title,
  settings,
  onSubmit,
  submitted, // false, "error", "success"
  onClosePopupButtonClick,
  className,
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
        data-selector="wrapper"
        className={clsx(styles.wrapper, className)}
      >
        <ThankYouBlock
          // borderRadius={settings.formBorderRadius}
          submitted={submitted}
          {...settings.submittedModal}
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
          <Typography
            data-selector="title"
            className={styles.title}
            {...settings.title}
            as={"h2"}
          >
            {title}
          </Typography>
          <div data-selector="input-list" className={styles.inputFields}>
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
          <div data-selector="privacy" className={styles.privacy}>
            <Typography
              data-selector="privacy-1"
              as={"span"}
              {...settings.privacy.first}
            >
              {t("FORM_PRIVACY_1")}
            </Typography>
            <Typography
              data-selector="privacy-2"
              as={"span"}
              {...settings.privacy.second}
            >
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
  css,
  componentName,
  id,
}) => {
  return (
    <Modal
      id={id}
      css={css}
      data-component={componentName}
      data-theme={section.theme}
      isOpen={isOpen}
      onClose={onClose}
    >
      <FormFeedback
        className={styles.modal}
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
  const { globalFormIndex, id, css, componentName } = useSection();
  const {
    openedForm: { index, queryParams },
    handleCloseForm,
  } = useGlobalForms();

  return (
    <FormFeedbackSubmitContainer id={id} queryParams={queryParams}>
      <FormFeedbackModal
        id={id}
        css={css}
        componentName={componentName}
        title={title}
        settings={settings}
        isOpen={index === globalFormIndex}
        onClose={handleCloseForm}
      />
    </FormFeedbackSubmitContainer>
  );
};
