import React from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  ContentContainer,
  Section,
  ThankYouBlock,
  Typography,
} from "../../shared";
import { useTranslation } from "../../../contexts/LanguageContext";

import styles from "./FormSubscribe.module.scss";
import { ControlledInput } from "../../shared/Input";

const FormSubscribeContent = ({
  onSubmit,
  title,
  submitted,
  onThankYouModalClose,
  settings,
}) => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      phone: "",
    },
  });
  const t = useTranslation();
  return (
    <div className={styles.wrapper}>
      <ThankYouBlock
        isModal
        background={settings.thankYouBackground}
        submitted={submitted}
        onModalClose={onThankYouModalClose}
        successMessage={t("FORM_SENDED_SUCCESS")}
        errorMessage={t("FORM_SENDED_ERROR")}
        submittedMessageSettings={settings.submittedMessage}
      />
      <Typography {...settings.title} as={"h2"}>
        {title}
      </Typography>
      <form
        onSubmit={handleSubmit((form) => {
          reset();
          if (onSubmit) {
            onSubmit(form);
          }
        })}
        noValidate
        autoComplete="off"
        className={styles.form}
      >
        <div className={styles.formInputButtonWrapper}>
          <ControlledInput
            name={"phone"}
            inputType={settings.inputType}
            fieldType={"phone"}
            control={control}
            placeholder={t("FORM_PHONE")}
          />
          <Button htmlType={"submit"} label={t("FORM_SEND")} />
        </div>
        <div>
          <Typography as={"span"} {...settings.privacy.first}>
            {t("FORM_PRIVACY_1")}
          </Typography>
          <Typography as={"span"} {...settings.privacy.second}>
            {t("FORM_PRIVACY_2")}
          </Typography>
        </div>
      </form>
    </div>
  );
};

export const FormSubscribe = ({
  isSection,
  onSubmit,
  title,
  submitted,
  onThankYouModalClose,
  settings,
  isSection,
}) => {
  const formSubcsribeElement = (
    <FormSubscribeContent
      onSubmit={onSubmit}
      title={title}
      submitted={submitted}
      settings={settings}
      onThankYouModalClose={onThankYouModalClose}
    />
  );

  if (isSection) {
    return (
      <Section {...settings.section}>
        <ContentContainer>{formSubcsribeElement}</ContentContainer>
      </Section>
    );
  }

  return formSubcsribeElement;
};

export const FormSubscribeContainer = ({
  isSection,
  title,
  settings,
  isSection,
}) => {};
