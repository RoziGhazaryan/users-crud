import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Input } from "antd";
import Edit from '../../assets/svg/edit.svg';
import Delete from '../../assets/svg/delete.svg';

const useUsers = () => {
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
        const value = e.target.value;
        setName(value);
        const filteredData = data?.filter(entry =>
          entry.name?.includes(value)
        );
        setDataSource(filteredData);
      }}
    />
  );

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

  const FilterBySurnameInput = (
    <Input
      placeholder="Search Surname"
      value={surname}
      onChange={e => {
        const value = e.target.value;
        setSurname(value);
        const filteredData = data?.filter(entry =>
          entry.surname?.includes(value)
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
        const filteredData = data?.filter(entry =>
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
        const filteredData = data?.filter(entry =>
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
        const filteredData = data?.filter(entry =>
          entry.phone?.includes(value)
        );
        setDataSource(filteredData);
      }}
    />
  );

  // table columns
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
          <Link to={`users/${id}`} className="edit-btn">
            <img src={Edit} alt="edit" />
          </Link>
        );
      },
    },
    {
      title: 'Delete',
      dataIndex: 'userId',
      key: '7',
      render: (id) => {
        return (
          <div className="delete-btn" onClick={() => deleteUser(id)}>
            <img src={Delete} alt="delete" />
          </div>
        );
      },
    },
  ];

  return { data, deleteUsers, columns, dataSource };
}

export default useUsers;