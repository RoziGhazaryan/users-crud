import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Input } from "antd";

const useUsers = () => {
  // useHistory
  const history = useHistory();

  // localStorage
  const users = localStorage.getItem('users');
  const data = JSON.parse(users);

  // useState
  const [dataSource, setDataSource] = useState(data);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  // functions
  const FilterByNameInput = (
    <Input
      placeholder="Search Name"
      value={name}
      onChange={e => {
        const currValue = e.target.value;
        setName(currValue);
        const filteredData = data.filter(entry =>
          entry.name?.includes(currValue)
        );
        setDataSource(filteredData);
      }}
    />
  );

  const FilterBySurnameInput = (
    <Input
      placeholder="Search Surname"
      value={surname}
      onChange={e => {
        const currValue = e.target.value;
        setSurname(currValue);
        const filteredData = data.filter(entry =>
          entry.surname?.includes(currValue)
        );
        setDataSource(filteredData);
      }}
    />
  );

  const FilterByEmailInput = (
    <Input
      placeholder="Search Email"
      value={email}
      onChange={e => {
        const value = e.target.value;
        setEmail(value);
        const filteredData = data.filter(entry =>
          entry.email?.includes(value)
        );
        setDataSource(filteredData);
      }}
    />
  );

  const FilterByAddressInput = (
    <Input
      placeholder="Search Address"
      value={address}
      onChange={e => {
        const value = e.target.value;
        setAddress(value);
        const filteredData = data.filter(entry =>
          entry.address?.includes(value)
        );
        setDataSource(filteredData);
      }}
    />
  );

  const FilterByPhoneInput = (
    <Input
      placeholder="Search Address"
      value={phone}
      onChange={e => {
        const value = e.target.value;
        setPhone(value);
        const filteredData = data.filter(entry =>
          entry.phone?.includes(value)
        );
        setDataSource(filteredData);
      }}
    />
  );

  const columns = [
    {
      title: FilterByNameInput,
      dataIndex: 'name',
      key: '1'
    },
    {
      title: FilterBySurnameInput,
      dataIndex: 'surname',
      key: '2'
    },
    {
      title: FilterByEmailInput,
      dataIndex: 'email',
      key: '3'
    },
    {
      title: FilterByAddressInput,
      dataIndex: 'address',
      key: '4'
    },
    {
      title: FilterByPhoneInput,
      dataIndex: 'phone',
      key: '5'
    },
    {
      title: 'Edit',
      dataIndex: 'userId',
      key: '6',
      render: (id) => {
        return (
          <button className="edit-btn" onClick={() => editUser(id)}>
            edit
          </button>
        );
      },
    },
    {
      title: 'Delete',
      dataIndex: 'userId',
      key: '7',
      render: (id) => {
        return (
          <button className="edit-btn" onClick={() => deleteUser(id)}>
            delete
          </button>
        );
      },
    },
  ];

  const deleteUsers = () => {
    localStorage.removeItem("users");
    window.location.reload();
  }

  const deleteUser = (id) => {
    let allUsers = localStorage.getItem("users");
    allUsers = JSON.parse(allUsers).filter((user) => {
      return user.userId !== id;
    });
    localStorage.setItem("users", JSON.stringify(allUsers));
    window.location.reload();
  }

  const editUser = (id) => {
    history.push(`/users/${id}`);
  }

  return { data, deleteUsers, columns, dataSource };
}

export default useUsers;