import React from 'react';
import { paths, routes } from "../../routes";
import { Switch, Link, Route } from 'react-router-dom';
import { Menu } from 'antd';
import { PieChartOutlined, DesktopOutlined } from '@ant-design/icons';
import './sidebar.scss';

const Sidebar = () => {
  return (
    <>
      <Menu mode="inline" theme="dark">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link to={paths.users}>Users list</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          <Link to={paths.addUser}>Add User</Link>
        </Menu.Item>
      </Menu>
      <div className="page-cnt">
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