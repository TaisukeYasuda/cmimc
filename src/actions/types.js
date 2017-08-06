/* initialization */
export const INIT_APP = 'init_app'; // fetch initialization data from server

/* authorization */
export const AUTH_USER = 'auth_user', // set user to be authenticated
             UNAUTH_USER = 'unauth_user', // set user to be unauthenticated
             AUTH_ERROR = 'auth_error'; // notify an authentication error

/* problem proposals */
export const FETCH_MY_PROPOSALS = 'fetch_my_proposals'; // fetch proposals written by user
