import * as React from 'react';
import { Redirect, Route, RouteProps, RouteComponentProps } from 'react-router-dom';
import useAuthToken from '../../util/useAuthToken';

interface OwnProps extends RouteProps {
  component: React.ComponentType<RouteComponentProps>;
}

const ProtectedRoute = ({ component: Component, ...rest }: OwnProps) => {
  const { validateToken } = useAuthToken();

  return <Route 
    {...rest}
    render={props => {
      if (!validateToken()) return <Redirect to="/" />;
      return <Component {...props} />
    }}
  />
}

export default ProtectedRoute;