import React from 'react';
import { Table, Button } from 'antd';
import useUsers from './useUsers';
import './users.scss';

const Users = () => {
  const { data, deleteUsers, columns, dataSource } = useUsers();

  return (
    <div className="users">
      <div className="container">
        <div className="users-list">
          <Table rowKey="id" columns={columns} dataSource={dataSource} />
          {data?.length ? <Button onClick={deleteUsers}>delete all users</Button> : <h1>There isn't any user</h1>}
        </div>
      </div>
    </div>
  )
}

export default Users;