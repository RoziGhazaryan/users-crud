import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Is Required'),
  surname: Yup.string(),
  email: Yup.string(),
  address: Yup.string(),
  phone: Yup.number(),
});
