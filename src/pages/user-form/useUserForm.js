import { useEffect, useState } from "react";
import { useParams } from "react-router";

const useUserForm = () => {
  // useState
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [info, setInfo] = useState('');
  const users = localStorage.getItem('users');
  const usersObj = JSON.parse(users);

  //useParams
  const { id } = useParams();
  console.log(id);

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

  const onChangeAge = (e) => {
    setAge(e.target.value);
  };

  const onChangeGender = (e) => {
    setGender(e.target.value);
  };

  const onChangeInfo = (e) => {
    setInfo(e.target.value)
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
    }
  }, [])

  return {
    name,
    surname,
    age,
    gender,
    info,
    onChangeName,
    onChangeSurname,
    onChangeAge,
    onChangeGender,
    onChangeInfo,
    onFinishFailed,
    onFinish,
  }
}

export default useUserForm;