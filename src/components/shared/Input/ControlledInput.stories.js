import React from "react";
import { useForm } from "react-hook-form";
import { UiKitContainerDecorator } from "../../../stories-decorators/UiKitContainerDecorator";
import { ControlledInput } from "./Input";

export default {
  title: "UI KIT/Controlled Input",
  component: ControlledInput,
  decorators: [UiKitContainerDecorator],
  argTypes: {
    dataTheme: {
      options: ["dark", "light", "custom"],
      control: {
        type: "radio",
      },
    },
    inputType: {
      options: ["default-1", "default-2", "primary", "secondary", "tertiary"],
      control: {
        type: "radio",
      },
    },
    fieldType: {
      options: ["default", "message", "phone", "email"],
      control: {
        type: "radio",
      },
    },
  },
  args: {
    isRequired: false,
    dataTheme: "dark",
    inputType: "default-1",
    fieldType: "default",
  },
};

export const Default = ({ dataTheme, ...args }) => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      someValue: "",
    },
  });

  const onSubmit = handleSubmit((form) => {
    reset();
  });

  return (
    <div
      data-theme={dataTheme}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "500px",
        padding: "0 200px",
        backgroundColor: "var(--color-background)",
      }}
    >
      <form autoComplete="off" noValidate onSubmit={onSubmit}>
        <ControlledInput name={"someValue"} control={control} {...args} />
        <button style={{ marginTop: "50px" }} type={"submit"}>
          Submit!
        </button>
      </form>
    </div>
  );
};
