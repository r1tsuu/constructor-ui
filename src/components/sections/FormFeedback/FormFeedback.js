import React from "react";
import { useForm } from "react-hook-form";
import { ColorsInjector } from "../../../containers";
import { useTranslation } from "../../../contexts/LanguageContext";
import { Button, Section, Typography } from "../../shared";
import { ControlledInput } from "../../shared/Input";

import styles from "./FormFeedback.module.scss";

const FormFeedback = ({
  title,
  settings,
  onSubmit,
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
            console.log(form);
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
                name="name"
                fieldType="default"
                placeholder={t("FORM_NAME")}
              />
            )}
            <ControlledInput
              {...baseInputProps}
              name="phone"
              isRequired
              fieldType="phone"
              placeholder={t("FORM_PHONE")}
            />
            {settings.enableEmail && (
              <ControlledInput
                {...baseInputProps}
                name="email"
                fieldType="email"
                placeholder={t("FORM_EMAIL")}
              />
            )}
            {settings.enableMessage && (
              <ControlledInput
                {...baseInputProps}
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
}) => {
  return (
    <Section {...section}>
      <FormFeedback title={title} settings={restSettings} onSubmit={onSubmit} />
    </Section>
  );
};

export const FormFeedbackModal = ({
  title,
  settings: { section, ...restSettings },
  onSubmit,
}) => {};
