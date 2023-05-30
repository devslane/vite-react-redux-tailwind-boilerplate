import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// services
import { localStorageService } from 'services/LocalStorageService';
// actions
import { authFetchMeAction } from 'store/actions/auth.action';
// selectors
import {
  isAuthLoadingSelector,
  isAuthenticatedSelector,
} from 'store/selectors/auth.selector';

const AuthenticatedRouteHOC = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P> => {
  const AuthenticatedRoute: React.FC<P> = ({ ...props }) => {
    const dispatch = useDispatch();

    const isAuthenticated = useSelector(isAuthenticatedSelector);
    const isLoading = useSelector(isAuthLoadingSelector);

    useEffect(() => {
      const token = localStorageService.getAuthToken();
      if (token && !isAuthenticated && !isLoading) {
        dispatch(authFetchMeAction());
      }
    }, [dispatch, isAuthenticated, isLoading]);

    return isAuthenticated ? (
      <Component {...(props as P)} />
    ) : (
      <Navigate to='/login' />
    );
  };

  return AuthenticatedRoute;
};

export default AuthenticatedRouteHOC;
