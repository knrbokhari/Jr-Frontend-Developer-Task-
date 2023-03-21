/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import AuthLayout from '../layouts/AuthLayout/index';

// render Pages
const AuthRoutes = {
  path: '/',
  element: <AuthLayout />,
  children: [
    {
      path: '/',
      element: '',
    },
  ],
};

export default AuthRoutes;
