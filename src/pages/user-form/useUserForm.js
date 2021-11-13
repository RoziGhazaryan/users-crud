import { useEffect, useCallback } from "react";
import { useHistory, useParams } from "react-router";
import { useFormik } from 'formik';
import { validationSchema } from "./formikValues";

const useUserForm = () => {
  //useParams
  const { id } = useParams();

  //useHistory
  const history = useHistory();

  const users = localStorage.getItem('users');
  const usersObj = JSON.parse(users);
  const user = usersObj?.find((user) => user.userId === id);

  const initialValues = {
    name: user?.name,
    surname: user?.surname,
    email: user?.email,
    address: user?.address,
    phone: user?.phone,
  };

  // useFormik
  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnMount: true,
  });

  const { values, isValid } = formik;

  // functions
  const setFormData = useCallback(
    (field, data) => {
      formik.setFieldValue(field, data);
      setTimeout(() => {
        formik.setFieldTouched(field, true);
      });
    },
    [formik]
  );

  const onChange = useCallback(
    (name, value) => {
      setFormData(name, value);
    },
    [setFormData]
  );

  const onFinish = (values) => {
    if (id) {
      onEditUser(values, id);
    } else {
      onAddUser(values);
    }
    history.push('/users');
  };

  const onEditUser = (values) => {
    const index = usersObj.findIndex(user => user.userId === id);
    values.userId = id;
    usersObj[index] = values;
    localStorage.setItem('users', JSON.stringify(usersObj));
  }

  const onAddUser = (values) => {
    let id = localStorage.getItem('users_id');
    values.userId = String(id);
    localStorage.setItem('users_id', JSON.stringify(++id));
    usersObj.push(values);
    localStorage.setItem('users', JSON.stringify(usersObj));
  }

  useEffect(() => {
    if (!usersObj) {
      localStorage.setItem('users', JSON.stringify([]));
      localStorage.setItem('users_id', JSON.stringify(1));
    }
  }, [])

  return {
    onFinish,
    onChange,
    values,
    isValid,
    initialValues,
    id,
  }
}

export default useUserForm;