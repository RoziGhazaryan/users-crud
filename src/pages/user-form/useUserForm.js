import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router";
import { useFormik } from 'formik';
import { initialValues, validationSchema } from "./formikValues";

const useUserForm = () => {
  const users = localStorage.getItem('users');
  const usersObj = JSON.parse(users);

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
      console.log(name, 'name', value, 'value');
      setFormData(name, value);
    },
    [setFormData]
  );

  //useParams
  const { id } = useParams();

  const onFinish = (values) => {
    console.log('Success:', values);
    let id = localStorage.getItem('users_id');
    values.id = id;
    localStorage.setItem('users_id', JSON.stringify(++id));
    const usersArr = [users];
    usersArr.push(values);
    console.log("users object", usersObj);
    usersObj.push(values);
    localStorage.setItem('users', JSON.stringify(usersObj));
  };

  useEffect(() => {
    if (!usersObj) {
      localStorage.setItem('users', JSON.stringify([]));
      localStorage.setItem('users_id', JSON.stringify(1));
    }
    // else if (id) {
    //   const users = localStorage.getItem('users');
    //   const user = JSON.parse(users).find((user) => user.id = id);
    // }
  }, [])

  return {
    onFinish,
    onChange,
    values,
    isValid,
  }
}

export default useUserForm;