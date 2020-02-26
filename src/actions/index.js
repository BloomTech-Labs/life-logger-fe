
import { axiosWithAuth } from '../utils/axiosWithAuth';

// Action Types
export const FETCH_USER_LOADING = "FETCH_USER_LOADING";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

export const CREATE_USER_START = "CREATE_USER_START";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAILURE = "CREATE_USER_FAILURE";

export const DELETE_USER_START = "DELETE_USER_START";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

export const UPDATE_USER_START = "UPDATE_USER_START";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";

const host = `http://localhost:3000`;

// Async action creators

export const fetchUser = () => dispatch => {
  dispatch({ type: FETCH_USER_LOADING });
  axiosWithAuth()
    .get(`${host}/api/users`)
    .then(response => dispatch({ type: FETCH_USER_SUCCESS, payload: response.data }))
    .catch(error => dispatch({ type: FETCH_USER_FAILURE, payload: error }));
};

export const createUser = newUser => dispatch => {
  dispatch({ type: CREATE_USER_START });
  axiosWithAuth()
    .post(`${host}/api/users/new`, newUser)
    .then(response => {
      console.log("Response from POST: ", response);
      dispatch({ type: CREATE_USER_SUCCESS, payload: response.data });
    })
    .catch(error => dispatch({ type: CREATE_USER_FAILURE, payload: error }));
};

export const deleteUser = id => dispatch => {
  console.log("deleteUser passed ID: ", id);
  dispatch({ type: DELETE_USER_START });
  axiosWithAuth()
    .delete(`${host}/api/users/delete/${id}`)
    .then(response => {
      console.log("Delete User Response: ", response);
      dispatch({ type: DELETE_USER_SUCCESS, payload: response });
    })
    .catch(error => dispatch({ type: DELETE_USER_FAILURE, payload: error }));
};

export const updateUser = (editedUser, id) => dispatch => {
  console.log("editedUser getting passed in: ", id);
  dispatch({ type: UPDATE_USER_START });
  axiosWithAuth()
    .put(`${host}/api/users/update/${id}`, editedUser)
    .then(response => {
      console.log("updateUser response: ", response);
      dispatch({ type: UPDATE_USER_SUCCESS, payload: response.data });
    })
    .catch(error => dispatch({ type: UPDATE_USER_FAILURE, payload: error }));
};
