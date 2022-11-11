import { cloneElement, useState, useEffect, useRef } from "react";
import { useEnvironment } from "../../contexts/EnvironmentContext";
import { sendForm } from "../../services/api";

export const FormContainer = ({
  children,
  closeThankYouDelay = 1500,
  type,
}) => {
  const { SITE_URL } = useEnvironment();
  const [submitted, setSubmitted] = useState(false);
  const timeout = useRef(null);
  const handleSubmit = async (form) => {
    const response = await sendForm({ form, type, SITE_URL });

    if (response.status === 200) setSubmitted("success");
    else setSubmitted("error");
  };

  useEffect(() => {
    if (submitted) {
      timeout.current = setTimeout(() => {
        if (submitted) {
          setSubmitted(false);
        }
        if (children.props.onClose) {
          children.props.onClose();
        }
      }, closeThankYouDelay);
    }
  }, [submitted]);

  useEffect(() => {
    return () => clearTimeout(timeout.current);
  }, []);

  return cloneElement(children, {
    ...children.props,
    onSubmit: handleSubmit,
    submitted: submitted,
    onClosePopupButtonClick: () => setSubmitted(false),
    onThankYouModalClose: () => setSubmitted(false),
  });
};
