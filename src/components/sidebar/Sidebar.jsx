import React from 'react';
import { Switch, Link, Route, useLocation } from 'react-router-dom';
import { paths, routes } from "../../routes";
import { Menu } from 'antd';
import { TeamOutlined, UserAddOutlined } from '@ant-design/icons';
import './style.scss';
import './responsive.scss';

const Sidebar = () => {
  return (
    <>
      <Menu mode="inline" theme="dark" selectedKeys={[useLocation().pathname]}>
        <Menu.Item key={paths.users} icon={<TeamOutlined />}>
          <Link to={paths.users}>Users list</Link>
        </Menu.Item>
        <Menu.Item key={paths.addUser} icon={<UserAddOutlined />}>
          <Link to={paths.addUser}>Add User</Link>
        </Menu.Item>
      </Menu>
      <div className="page">
        <Switch>
          {routes.map(({ exact, path, Component }) => (
            <Route exact={exact} key={path} path={path}>
              <Component />
            </Route>
          ))}
        </Switch>
      </div>
    </>
  )
}

export default Sidebar;