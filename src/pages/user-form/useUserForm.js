import { useEffect, useState } from "react";
import { useParams } from "react-router";

const useUserForm = () => {
  // useState
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const users = localStorage.getItem('users');
  const usersObj = JSON.parse(users);

  //useParams
  const { id } = useParams();

  //functions
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onChangeName = (e) => {
    setName(e.target.value)
  };

  const onChangeSurname = (e) => {
    setSurname(e.target.value)
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const onChangePhone = (e) => {
    setPhone(e.target.value)
  };

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
    } else if (id) {
      const users = localStorage.getItem('users');
      const user = JSON.parse(users).find((user) => user.id = id);
    }
  }, [])

  return {
    name,
    surname,
    email,
    address,
    phone,
    onChangeName,
    onChangeSurname,
    onChangeEmail,
    onChangeAddress,
    onChangePhone,
    onFinishFailed,
    onFinish,
  }
}

export default useUserForm;