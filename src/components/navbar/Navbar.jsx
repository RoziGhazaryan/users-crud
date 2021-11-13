import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Menu } from 'antd';
import {
    PieChartOutlined,
    DesktopOutlined,
} from '@ant-design/icons';
import Users from '../../pages/users/Users';
import AddUser from '../../pages/add-user/AddUser';
import './navbar.scss';

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
                    <Link to='/add-user'>Add User</Link>
                </Menu.Item>
            </Menu>
            <div className="page-container">
                <Switch>
                    <Route exact path='/users'>
                        <Users />
                    </Route>
                    <Route exact path="/add-user">
                        <AddUser />
                    </Route>
                </Switch>
            </div>
        </>
    )
}

export default Navbar;