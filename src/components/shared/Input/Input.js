import clsx from "clsx";
import React, { forwardRef } from "react";
import { useController } from "react-hook-form";
import { Typography } from "../Typography";
import PI from "react-phone-input-2";

import "react-phone-input-2/lib/style.css";
import styles from "./Input.module.scss";

const ReactPhoneInput = PI.default ? PI.default : PI;

export const Input = ({
  type,
  errorMessage = "",
  placeholder,
  isRequired = false,
  hideRequiredLabel = false,
  isTextarea = false,
  className,
  style,
  isPhone,
  value,
  onChange,
  onBlur,
  inputRef,
}) => {
  const Tag = isTextarea ? "textarea" : "input";
  return (
    <div
      data-component="input"
      className={clsx(styles.wrapper, styles[type], className)}
      style={style}
    >
      {isPhone ? (
        <ReactPhoneInput
          placeholder={placeholder}
          country="ua"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          inputProps={{
            ref: inputRef,
            className: clsx(styles.input, styles.phone, className),
            "data-selector": "input-component",
            "data-is-error": Boolean(errorMessage),
            "data-is-textarea": false,
          }}
        />
      ) : (
        <Tag
          data-selector="input-component"
          ref={inputRef}
          placeholder={placeholder}
          data-is-error={Boolean(errorMessage)}
          data-is-textarea={isTextarea}
          className={clsx(styles.input, className)}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}

      {isRequired && !hideRequiredLabel && (
        <Typography
          data-selector="input-required"
          editableInStorybook={false}
          className={styles.required}
          type={"p1"}
          as={"div"}
          color={
            errorMessage ? "var(--input-error-color" : "var(--input-text-color)"
          }
        >
          *
        </Typography>
      )}
    </div>
  );
};

const patterns = {
  default: {
    value: /^.{2,50}$/,
    message: "length default",
  },
  message: {
    value: /^.{2,1000}$/,
    message: "length message",
  },
  email: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "email",
  },
  phone: {
    value:
      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
    message: "phone",
  },
};

export const ControlledInput = ({
  fieldType = "default",
  placeholder,
  control,
  inputType = "default-1",
  isRequired = false,
  hideRequiredLabel = false,
  name,
  order,
  className,
  ...rest
}) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: {
      required: {
        value: isRequired,
        message: "required",
      },
      pattern: patterns[fieldType],
    },
  });

  return (
    <Input
      value={value}
      onChange={onChange}
      name={name}
      onBlur={onBlur}
      inputRef={ref}
      errorMessage={error?.message}
      type={inputType}
      isTextarea={fieldType === "message"}
      isPhone={fieldType === "phone"}
      placeholder={placeholder}
      isRequired={isRequired}
      hideRequiredLabel={hideRequiredLabel}
      style={{
        order,
      }}
      className={className}
      {...rest}
    />
  );
};
