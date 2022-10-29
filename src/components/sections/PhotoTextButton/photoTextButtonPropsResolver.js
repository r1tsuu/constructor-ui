import { parseArgs } from "../../../utils";
import { baseResolver, fileResolver } from "../../../utils/fields-utils";

export const photoTextButtonPropsResolver = ({
  title,
  subTitle,
  photoSource,
  description,
  env,
  args,
}) => {
  const { settings } = parseArgs(args);
  return {
    title: baseResolver({ field: title }),
    subTitle: baseResolver({ field: subTitle }),
    photoSource: fileResolver({ field: photoSource, env }),
    description: baseResolver({ field: description }),
    settings,
  };
};
