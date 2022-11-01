import { baseResolver, fileResolver } from "../../../utils/fields-utils";

export const photoTextButtonContentResolver = ({
  title,
  subTitle,
  photoSource,
  description,
  buttonName,
  env,
}) => ({
  title: baseResolver({ field: title }),
  subTitle: baseResolver({ field: subTitle }),
  photoSource: fileResolver({ field: photoSource, env }),
  description: baseResolver({ field: description }),
  buttonName: baseResolver({ field: buttonName }),
});
