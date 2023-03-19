/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-unresolved */
import { Outlet } from 'react-router-dom';

function AuthLayout() {
  return (
    <div>
      <h1>header</h1>
      {Outlet}
    </div>
  );
}

export default AuthLayout;
