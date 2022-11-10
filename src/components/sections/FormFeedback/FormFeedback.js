import React, { cloneElement, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { CSSTransition } from "react-transition-group";
import { ColorsInjector } from "../../../containers";
import { useTranslation } from "../../../contexts/LanguageContext";
import { useGlobalForms } from "../../../contexts/GlobalFormsContext";
import { useSection } from "../../../contexts/SectionContext";
import { sendForm } from "../../../services/api";
import { Button, Modal, Section, Typography } from "../../shared";
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
        <CSSTransition
          timeout={{
            enter: 250,
            exit: 0,
          }}
          classNames={{
            enter: styles.submittedEnter,
            enterActive: styles.submittedEnterActive,
          }}
          in={submitted}
          unmountOnExit
        >
          {submitted ? (
            <ColorsInjector background={settings.formBackground}>
              <div className={styles.submitted}>
                {submitted === "success" ? (
                  <svg
                    width="100"
                    height="101"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M91.0603 40.8326H67.5677C72.1416 34.5953 74.6359 26.9036 74.6359 19.2111L74.6366 10.6869C74.6366 5.07397 70.2707 0.5 64.6571 0.5C57.5889 0.5 55.5093 6.32099 53.6386 11.3104C51.1436 18.1712 47.4012 28.3581 35.3436 34.1793L27.6512 37.9222V37.5067C27.6512 35.2198 25.7805 33.3491 23.4936 33.3491L10.3956 33.3484C4.57458 33.3484 0.000610352 37.9224 0.000610352 43.7433V88.4417C0.000610352 94.2626 4.57458 98.8366 10.3956 98.8366H23.493C25.7799 98.8366 27.6506 96.9659 27.6506 94.679L43.4512 98.6293C48.4406 99.8765 53.638 100.5 58.8355 100.5H80.8728C85.6549 100.5 89.6044 96.5497 89.6044 91.5603C89.6044 89.4815 88.9808 87.6101 87.7337 86.1548C91.0604 84.9076 93.3466 81.5808 93.3466 77.8386C93.3466 75.7598 92.723 73.8883 91.4759 72.4331C94.8026 71.1859 97.0888 67.8591 97.0888 64.1169C97.0888 61.83 96.2571 59.9593 95.01 58.2959C97.9205 56.8407 99.9994 53.7219 99.9994 50.1878C99.7927 44.783 95.8423 40.8328 91.0612 40.8328L91.0603 40.8326ZM10.3954 94.4706C6.8613 94.4706 4.15805 91.7681 4.15805 88.2332L4.15878 43.5349C4.15878 40.0008 6.86128 37.2976 10.3961 37.2976H23.4936V91.5593V94.2618L10.3956 94.2625L10.3954 94.4706ZM91.0603 54.554H78.7946C77.5474 54.554 76.7158 55.3856 76.7158 56.6328C76.7158 57.8799 77.5475 58.7116 78.7946 58.7116H88.1497C90.6447 58.7116 92.7236 60.7904 92.7236 63.4936C92.7236 66.1961 90.6448 68.2757 88.1497 68.2757H75.0522C73.805 68.2757 72.9734 69.1074 72.9734 70.3545C72.9734 71.6016 73.8051 72.4333 75.0522 72.4333H84.4073C86.9023 72.4333 88.9813 74.5121 88.9813 77.2153C88.9813 79.9178 86.9025 81.9974 84.4073 81.9974H80.6651H71.31C70.0629 81.9974 69.2312 82.8291 69.2312 84.0762C69.2312 85.3233 70.0629 86.155 71.31 86.155H80.6651C83.1601 86.155 85.2391 88.2338 85.2391 90.937C85.2384 93.6395 83.1595 96.1338 80.6651 96.1338H58.6278C53.8458 96.1338 49.0645 95.5102 44.2826 94.2631L27.4429 89.8972V42.4962L37.0063 37.9222C50.5199 31.4775 54.8856 19.8348 57.3804 12.7664C59.0438 8.60807 60.291 4.65835 64.6567 4.65835C67.7754 4.65835 70.4777 7.36086 70.4777 10.6874V19.2109C70.4777 26.0718 68.1908 32.9326 64.2403 38.5455L61.9535 41.6642C61.538 42.0797 61.538 42.704 61.7454 43.5349C61.9535 44.5747 62.9925 44.9902 63.6161 44.9902H91.2667C93.7616 44.9902 95.8406 47.069 95.8406 49.7722C95.8413 52.4747 93.5545 54.5535 91.0601 54.5535L91.0603 54.554Z"
                      fill="#65CD14"
                    />
                  </svg>
                ) : (
                  <svg
                    width="100"
                    height="101"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.93973 60.1674H32.4323C27.8584 66.4047 25.3641 74.0964 25.3641 81.7889L25.3634 90.3131C25.3634 95.926 29.7293 100.5 35.3429 100.5C42.4111 100.5 44.4907 94.679 46.3614 89.6896C48.8564 82.8288 52.5988 72.6419 64.6564 66.8207L72.3488 63.0778V63.4933C72.3488 65.7802 74.2195 67.6509 76.5064 67.6509L89.6044 67.6516C95.4254 67.6516 99.9994 63.0776 99.9994 57.2567V12.5583C99.9994 6.73735 95.4254 2.16338 89.6044 2.16338H76.507C74.2201 2.16338 72.3494 4.0341 72.3494 6.32099L56.5488 2.37072C51.5594 1.12355 46.362 0.499997 41.1645 0.499997H19.1272C14.3451 0.499997 10.3956 4.45028 10.3956 9.43967C10.3956 11.5185 11.0192 13.3899 12.2663 14.8452C8.93956 16.0924 6.65342 19.4192 6.65342 23.1614C6.65342 25.2402 7.27701 27.1117 8.52414 28.5669C5.19738 29.8141 2.91125 33.1409 2.91125 36.8831C2.91125 39.17 3.74292 41.0407 4.99004 42.7041C2.07945 44.1593 0.00064798 47.2781 0.00064798 50.8122C0.207303 56.217 4.1577 60.1672 8.93883 60.1672L8.93973 60.1674ZM89.6046 6.52941C93.1387 6.52941 95.8419 9.23191 95.8419 12.7668L95.8412 57.4651C95.8412 60.9992 93.1387 63.7024 89.6039 63.7024H76.5064V9.44074V6.73824L89.6044 6.73752L89.6046 6.52941ZM8.93973 46.446H21.2054C22.4526 46.446 23.2842 45.6144 23.2842 44.3672C23.2842 43.1201 22.4525 42.2884 21.2054 42.2884H11.8503C9.35534 42.2884 7.27636 40.2096 7.27636 37.5064C7.27636 34.8039 9.35516 32.7243 11.8503 32.7243H24.9478C26.195 32.7243 27.0266 31.8926 27.0266 30.6455C27.0266 29.3984 26.1949 28.5667 24.9478 28.5667H15.5927C13.0977 28.5667 11.0187 26.4879 11.0187 23.7847C11.0187 21.0822 13.0975 19.0026 15.5927 19.0026H19.3349H28.69C29.9371 19.0026 30.7688 18.1709 30.7688 16.9238C30.7688 15.6767 29.9371 14.845 28.69 14.845H19.3349C16.8399 14.845 14.7609 12.7662 14.7609 10.063C14.7616 7.36046 16.8405 4.86621 19.3349 4.86621H41.3722C46.1542 4.86621 50.9355 5.4898 55.7174 6.73694L72.5571 11.1028V58.5038L62.9937 63.0778C49.4801 69.5225 45.1144 81.1652 42.6196 88.2336C40.9562 92.3919 39.709 96.3416 35.3433 96.3416C32.2246 96.3416 29.5223 93.6391 29.5223 90.3126V81.7891C29.5223 74.9282 31.8092 68.0674 35.7597 62.4545L38.0465 59.3358C38.462 58.9203 38.462 58.296 38.2546 57.4651C38.0465 56.4253 37.0075 56.0098 36.3839 56.0098H8.73334C6.23837 56.0098 4.15938 53.931 4.15938 51.2278C4.15866 48.5253 6.44552 46.4465 8.93994 46.4465L8.93973 46.446Z"
                      fill="#D64747"
                    />
                  </svg>
                )}
                <Typography
                  {...settings.submittedMessage}
                  className={styles.submittedMessage}
                  as={"h3"}
                >
                  {t(
                    submitted === "success"
                      ? "FORM_SENDED_SUCCESS"
                      : "FORM_SENDED_ERROR"
                  )}
                </Typography>
              </div>
            </ColorsInjector>
          ) : (
            <div />
          )}
        </CSSTransition>

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
      timeout.current = setTimeout(
        () => setSubmitted(false),
        THANK_YOU_CLOSE_DELAY
      );
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
