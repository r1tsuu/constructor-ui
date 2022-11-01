import * as fieldUtils from "../../../utils/fields-utils";

export const advantagesContentResolver = ({ subTitle, title, items }) => ({
  subTitle: fieldUtils.baseResolver({ field: subTitle }),
  title: fieldUtils.baseResolver({ field: title }),
  items: fieldUtils.repeatx1Resolver({
    field: items,
    keyResolvers: {
      title: {
        resolver: fieldUtils.baseResolver,
      },
      subTitle: {
        resolver: fieldUtils.baseResolver,
      },
    },
  }),
});
