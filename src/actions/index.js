
import { axiosWithAuth } from '../utils/axiosWithAuth';

// User Actions
export const FETCH_USER_LOADING = "FETCH_USER_LOADING";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

export const UNFETCH_USER_LOADING = "UNFETCH_USER_LOADING";
export const UNFETCH_USER_SUCCESS = "UNFETCH_USER_SUCCESS";
export const UNFETCH_USER_FAILURE = "UNFETCH_USER_FAILURE";

export const CREATE_USER_START = "CREATE_USER_START";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAILURE = "CREATE_USER_FAILURE";

export const DELETE_USER_START = "DELETE_USER_START";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

export const UPDATE_USER_START = "UPDATE_USER_START";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";

// Event Actions
export const FETCH_EVENTS_LOADING = "FETCH_EVENTS_LOADING";
export const FETCH_EVENTS_SUCCESS = "FETCH_EVENTS_SUCCESS";
export const FETCH_EVENTS_FAILURE = "FETCH_EVENTS_FAILURE";

export const FETCH_EVENT_LOADING = "FETCH_EVENT_LOADING";
export const FETCH_EVENT_SUCCESS = "FETCH_EVENT_SUCCESS";
export const FETCH_EVENT_FAILURE = "FETCH_EVENT_FAILURE";

export const CREATE_EVENT_START = "CREATE_EVENT_START";
export const CREATE_EVENT_SUCCESS = "CREATE_EVENT_SUCCESS";
export const CREATE_EVENT_FAILURE = "CREATE_EVENT_FAILURE";

export const DELETE_EVENT_START = "DELETE_EVENT_START";
export const DELETE_EVENT_SUCCESS = "DELETE_EVENT_SUCCESS";
export const DELETE_EVENT_FAILURE = "DELETE_EVENT_FAILURE";

export const UPDATE_EVENT_START = "UPDATE_EVENT_START";
export const UPDATE_EVENT_SUCCESS = "UPDATE_EVENT_SUCCESS";
export const UPDATE_EVENT_FAILURE = "UPDATE_EVENT_FAILURE";


//Landing Page Actions
export const TOGGLE_IS_USER = "TOGGLE_IS_USER";


const host = `http://localhost:5011`;

// Async action creators for users

export const fetchUser = user => dispatch => {
  dispatch({ type: FETCH_USER_LOADING });
  axiosWithAuth()
    .post(`${host}/api/auth/login`, user)
    .then(response => {
      window.localStorage.setItem("token", response.data.token);
      dispatch({ type: FETCH_USER_SUCCESS, payload: response.data })
    })
    .catch(error => dispatch({ type: FETCH_USER_FAILURE, payload: error }));
};

export const unfetchUser = () => dispatch => {
  dispatch({ type: UNFETCH_USER_LOADING });
  axiosWithAuth()
    .get(`${host}`)
    .then(response => {
      window.localStorage.clear("token");
      dispatch({ type: UNFETCH_USER_SUCCESS, payload: response.data })
    })
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

// Async Action Creators for Eventd

export const fetchEvents = () => dispatch => {
  dispatch({ type: FETCH_EVENTS_LOADING });
  axiosWithAuth()
    .get(`${host}/api/events/`)
    .then(response => dispatch({ type: FETCH_EVENTS_SUCCESS, payload: response.data }))
    .catch(error => dispatch({ type: FETCH_EVENTS_FAILURE, payload: error }));
};

export const fetchEvent = id => dispatch => {
  dispatch({ type: FETCH_EVENT_LOADING });
  axiosWithAuth()
    .get(`${host}/api/events/${id}`)
    .then(response => dispatch({ type: FETCH_EVENT_SUCCESS, payload: response.data }))
    .catch(error => dispatch({ type: FETCH_EVENT_FAILURE, payload: error }));
};

export const createEvent = newEvent => dispatch => {
  dispatch({ type: CREATE_EVENT_START });
  axiosWithAuth()
    .post(`${host}/api/events/new`, newEvent)
    .then(response => dispatch({ type: CREATE_EVENT_SUCCESS, payload: response.data }))
    .catch(error => dispatch({ type: CREATE_EVENT_FAILURE, payload: error }));
};

export const deleteEvent = id => dispatch => {
  dispatch({ type: DELETE_EVENT_START });
  axiosWithAuth()
    .delete(`${host}/api/events/delete/${id}`)
    .then(response => dispatch({ type: DELETE_EVENT_SUCCESS, payload: response }))
    .catch(error => dispatch({ type: DELETE_EVENT_FAILURE, payload: error }));
};

export const updateEvent = (editedEvent, id) => dispatch => {
  dispatch({ type: UPDATE_EVENT_START });
  axiosWithAuth()
    .put(`${host}/api/events/update/${id}`, editedEvent)
    .then(response => dispatch({ type: UPDATE_EVENT_SUCCESS, payload: response.data }))
    .catch(error => dispatch({ type: UPDATE_EVENT_FAILURE, payload: error }));
};
