import React from 'react';
import { Table, Button, PageHeader } from 'antd';
import useUsers from './useUsers';
import './style.scss';
import './responsive.scss';

const Users = () => {
  const { data, deleteUsers, columns, dataSource } = useUsers();

  const btnDeleteAll = () => {
    if (data?.length) {
      return (
        <Button onClick={deleteUsers}>delete all users</Button>
      )
    }
  }

  return (
    <div className="users">
      <div className="container">
        <PageHeader title="Users List" />
        <div className="users-list page-cnt">
          <Table rowKey="id" columns={columns} dataSource={dataSource} pagination={{ pageSize: 5 }} />
          {btnDeleteAll}
        </div>
      </div>
    </div>
  )
}

export default Users;