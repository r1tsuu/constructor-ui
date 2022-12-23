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
import { ColorsInjector, FormContainer } from "../../../containers";

const FormSubscribeContent = ({
  onSubmit,
  title,
  submitted,
  onThankYouModalClose,
  settings,
  themeThankYou,
}) => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      phone: "",
    },
  });
  console.log(settings);
  const t = useTranslation();
  return (
    <ColorsInjector background={settings.backgroundColor}>
      <div
        data-style-type={settings.styleType}
        className={styles.wrapper}
        style={{
          borderRadius: settings.borderRadius,
        }}
      >
        <ThankYouBlock
          isModal
          theme={themeThankYou}
          background={"background"}
          submitted={submitted}
          onModalClose={onThankYouModalClose}
          {...settings.submittedModal}
          errorMessage="asd"
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
              isRequired
              hideRequiredLabel
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
    </ColorsInjector>
  );
};

export const FormSubscribe = ({
  isSection,
  onSubmit,
  title,
  submitted,
  onThankYouModalClose,
  settings,
  themeThankYou,
}) => {
  const formSubcsribeElement = (
    <FormSubscribeContent
      themeThankYou={settings.theme ?? themeThankYou}
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
  isSection = true,
  title,
  settings,
}) => {
  return (
    <FormContainer type={"subscribe"}>
      <FormSubscribe isSection={isSection} title={title} settings={settings} />
    </FormContainer>
  );
};

export default FormSubscribeContainer;
