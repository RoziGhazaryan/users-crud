import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  surname: Yup.string().required(),
  email: Yup.string().required(),
  address: Yup.string().required(),
  phone: Yup.number().required(),
});
