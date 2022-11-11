import { cloneElement, useState, useRef } from "react";
import { useEnvironment } from "../../contexts/EnvironmentContext";
import { sendForm } from "../../services/api";

const FormFeedbackSubmitContainer = ({ children, closeDelay = 1500 }) => {
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
      }, closeDelay);
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
