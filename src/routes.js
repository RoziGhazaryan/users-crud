import { lazy } from 'react';

const Users = lazy(() => import('./pages/users/Users'));
const UserForm = lazy(() => import('./pages/user-form/UserForm'));

export const paths = {
  users: '/users',
  addUser: '/users/new',
  editUser: '/users/:id',
}

export const routes = [
  {
    path: paths.users,
    Component: Users,
    exact: true,
  },
  {
    path: paths.addUser,
    Component: UserForm,
    exact: true,
  },
  {
    path: paths.editUser,
    Component: UserForm,
    exact: true,
  },
]