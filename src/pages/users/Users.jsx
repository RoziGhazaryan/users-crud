import { Button } from 'antd';
import React from 'react';
import useUsers from './useUsers';
import './users.scss';

const Users = () => {
  const { data, deleteUsers, deleteUser, editUser } = useUsers();
  return (
    <div className="users">
      {data?.length ? <Button onClick={deleteUsers}>delete all users</Button> : <h1>There isn't any user</h1>}
      <div className="container">
        <div className="users-list">
          {data?.map((el) => (
            <div className="user-block" key={el?.id}>
              <div className="user-info">
                <h3>{el?.name}</h3>
                <h4>{el?.age}</h4>
                <h5>{el?.gender}</h5>
                <p>{el?.info}</p>
              </div>
              <Button onClick={() => deleteUser(el?.id)}>delete user</Button>
              <Button onClick={() => editUser(el?.id)}>edit user</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Users;