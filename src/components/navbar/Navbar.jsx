import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import { Menu } from 'antd';
import {
  PieChartOutlined,
  DesktopOutlined,
} from '@ant-design/icons';
import './navbar.scss';
import { paths, proutes } from "../../routes";
import Users from "../../pages/users/Users";
import UserForm from "../../pages/user-form/UserForm";

const Navbar = () => {
  return (
    <>
      <Menu
        defaultSelectedKeys={['1']}
        mode="inline"
        theme="dark"
        className="navbar-menu"
      >
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link to='/users'>Users list</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          <Link to='/users/new'>Add User</Link>
        </Menu.Item>
      </Menu>
      <div className="page-container">
        <Switch>
          {proutes.map(({ exact, path, Component }) => (
            <Route exact={exact} key={path} path={path}>
              <Component />
            </Route>
          ))}
          {/*<Route exact key={1} path='/users'>*/}
          {/*  <Users />*/}
          {/*</Route>*/}
          {/*<Route exact key={2} path='/users/new'>*/}
          {/*  <UserForm />*/}
          {/*</Route>*/}

        </Switch>
      </div>
    </>
  )
}

export default Navbar;