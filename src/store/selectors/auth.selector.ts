import { createSelector } from 'reselect';
import { AppState } from 'store/reducers';
import { AuthState } from 'store/reducers/auth.reducer';

const authState = (state: AppState) => state.auth;

export const isAuthenticatedSelector = createSelector(
  [authState],
  (state: AuthState) => Boolean(state.userID)
);

export const isAuthLoadingSelector = createSelector(
  [authState],
  (state: AuthState) => Boolean(state.loading)
);
