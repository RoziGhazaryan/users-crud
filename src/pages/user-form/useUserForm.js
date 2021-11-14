import { useState, useEffect, useCallback } from "react";
import { useHistory, useParams } from "react-router";
import { useFormik } from 'formik';
import { validationSchema } from "./formikValues";
import { message } from "antd";

const useUserForm = () => {
  //useParams
  const { id } = useParams();

  //useHistory
  const history = useHistory();

  const users = localStorage.getItem('users');
  const usersData = JSON.parse(users);
  const user = usersData?.find((user) => user.userId === id);

  // initialValues
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

  const onChangeValue = useCallback(
    (name, value) => {
      setFormData(name, value);
    },
    [setFormData]
  );

  const onFinish = (values) => {
    if (id) {
      onEditUser(values, id);
      message.success('User info successfully edited');
    } else {
      onAddUser(values);
      message.success('User successfully added');
    }
    history.push('/users');
  };

  const onEditUser = (values) => {
    const index = usersData.findIndex(user => user.userId === id);
    values.userId = id;
    usersData[index] = values;
    localStorage.setItem('users', JSON.stringify(usersData));
  }

  const onAddUser = (values) => {
    let id = localStorage.getItem('users_id');
    values.userId = String(id);
    localStorage.setItem('users_id', JSON.stringify(++id));
    usersData.push(values);
    localStorage.setItem('users', JSON.stringify(usersData));
  }

  // useEffect
  useEffect(() => {
    if (!usersData) {
      localStorage.setItem('users', JSON.stringify([]));
      localStorage.setItem('users_id', JSON.stringify(1));
    }
  }, [])

  return {
    onFinish,
    onChangeValue,
    values,
    isValid,
    initialValues,
    id,
    history,
  }
}

export default useUserForm;