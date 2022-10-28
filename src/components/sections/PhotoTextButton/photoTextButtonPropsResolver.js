import { parseArgs } from "../../../utils";
import { baseResolver, fileResolver } from "../../../utils/fields-utils";

export const photoTextButtonPropsResolver = ({
  title,
  subTitle,
  photoSource,
  description,
  env,
  settings,
}) => {
  return {
    title: baseResolver({ field: title }),
    subTitle: baseResolver({ field: subTitle }),
    photoSource: fileResolver({ field: photoSource, env }),
    description: baseResolver({ field: description }),
    ...parseArgs(settings),
  };
};
