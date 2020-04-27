import { axiosWithAuth } from '../../utils/axiosWithAuth';

// User Actions
export const FETCH_USER_LOADING = 'FETCH_USER_LOADING';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export const UNFETCH_USER_LOADING = 'UNFETCH_USER_LOADING';
export const UNFETCH_USER_SUCCESS = 'UNFETCH_USER_SUCCESS';
export const UNFETCH_USER_FAILURE = 'UNFETCH_USER_FAILURE';

export const CREATE_USER_START = 'CREATE_USER_START';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';

export const DELETE_USER_START = 'DELETE_USER_START';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE';

export const UPDATE_USER_START = 'UPDATE_USER_START';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

// Event Actions
export const FETCH_EVENTS_LOADING = 'FETCH_EVENTS_LOADING';
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
export const FETCH_EVENTS_FAILURE = 'FETCH_EVENTS_FAILURE';

export const FETCH_EVENT_LOADING = 'FETCH_EVENT_LOADING';
export const FETCH_EVENT_SUCCESS = 'FETCH_EVENT_SUCCESS';
export const FETCH_EVENT_FAILURE = 'FETCH_EVENT_FAILURE';

export const CREATE_EVENT_START = 'CREATE_EVENT_START';
export const CREATE_EVENT_SUCCESS = 'CREATE_EVENT_SUCCESS';
export const CREATE_EVENT_FAILURE = 'CREATE_EVENT_FAILURE';

export const DELETE_EVENT_START = 'DELETE_EVENT_START';
export const DELETE_EVENT_SUCCESS = 'DELETE_EVENT_SUCCESS';
export const DELETE_EVENT_FAILURE = 'DELETE_EVENT_FAILURE';

export const UPDATE_EVENT_START = 'UPDATE_EVENT_START';
export const UPDATE_EVENT_SUCCESS = 'UPDATE_EVENT_SUCCESS';
export const UPDATE_EVENT_FAILURE = 'UPDATE_EVENT_FAILURE';

//Landing Page Actions
export const TOGGLE_IS_USER = 'TOGGLE_IS_USER';

const host = `https://lyfe-logger-be.herokuapp.com`;

// this host for local development before pushing to master:
// const host = `http://localhost:5000`;

// Async action creators for users

export const fetchUser = user => dispatch => {
  dispatch({ type: FETCH_USER_LOADING });
  
  return axiosWithAuth()
    .post(`${host}/api/auth/login`, user)
    .then(response => {
      window.localStorage.setItem('id', response.data.user_id);
      window.localStorage.setItem('token', response.data.token);
      window.localStorage.setItem('username', response.data.username);
      dispatch({
        type: FETCH_USER_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => dispatch({ type: FETCH_USER_FAILURE, payload: error }));
};

export const unfetchUser = () => dispatch => {
  dispatch({ type: UNFETCH_USER_LOADING });
  return axiosWithAuth()
    .get(`${host}`)
    .then(response => {
      window.localStorage.clear();
      dispatch({
        type: UNFETCH_USER_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => dispatch({ type: FETCH_USER_FAILURE, payload: error }));
};

export const createUser = newUser => dispatch => {
  dispatch({ type: CREATE_USER_START });
  return axiosWithAuth()
    .post(`${host}/api/auth/register`, newUser)
    .then(response => {
      dispatch({
        type: CREATE_USER_SUCCESS,
        payload: response.data
      });
    })
    .catch(error =>
      dispatch({
        type: CREATE_USER_FAILURE,
        payload: error
      })
    );
};

export const deleteUser = id => dispatch => {
  dispatch({ type: DELETE_USER_START });
  return axiosWithAuth()
    .delete(`${host}/api/users/delete/${id}`)
    .then(response => {
      dispatch({
        type: DELETE_USER_SUCCESS,
        payload: response
      });
    })
    .catch(error =>
      dispatch({
        type: DELETE_USER_FAILURE,
        payload: error
      })
    );
};

export const updateUser = (editedUser, id) => dispatch => {
  dispatch({ type: UPDATE_USER_START });
  return axiosWithAuth()
    .put(`${host}/api/users/update/${id}`, editedUser)
    .then(response => {
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: response.data
      });
    })
    .catch(error =>
      dispatch({
        type: UPDATE_USER_FAILURE,
        payload: error
      })
    );
};

// Async Action Creators for Event

export const fetchEvents = () => dispatch => {
  dispatch({ type: FETCH_EVENTS_LOADING });
  return axiosWithAuth()
    .get(`${host}/api/events/`)
    .then(response =>
      dispatch({
        type: FETCH_EVENTS_SUCCESS,
        payload: response.data
      })
    )
    .catch(error =>
      dispatch({
        type: FETCH_EVENTS_FAILURE,
        payload: error
      })
    );
};

export const fetchEventsByUserId = user_id => dispatch => {
  dispatch({ type: FETCH_EVENTS_LOADING });
  return axiosWithAuth()
    .get(`${host}/api/events/byuserid/${user_id}`)
    .then(response => {
      let events = response.data;
      // console.log('events', events);
      events.sort((event1, event2) => {
        if (new Date(event1.event_et_tm) < new Date(event2.event_et_tm)) {
          return -1;
        }

        if (new Date(event1.event_et_tm) > new Date(event2.event_et_tm)) {
          return 1;
        }

        return 0;
      });

      // console.log('events after', events);

      dispatch({
        type: FETCH_EVENTS_SUCCESS,
        payload: events
      });
    })
    .catch(error =>
      dispatch({
        type: FETCH_EVENTS_FAILURE,
        payload: error
      })
    );
};

export const fetchEvent = id => dispatch => {
  dispatch({ type: FETCH_EVENT_LOADING });
  return axiosWithAuth()
    .get(`${host}/api/events/findbyid/${id}`)
    .then(response =>
      dispatch({
        type: FETCH_EVENT_SUCCESS,
        payload: response.data
      })
    )
    .catch(error =>
      dispatch({
        type: FETCH_EVENT_FAILURE,
        payload: error
      })
    );
};
// `${host}/api/events/byuserid/${user_id}`
// fetchEventsByUserId(userData.user_id)
export const createEvent = newEvent => (dispatch, state) => {
  const user_id = state().users.userData.user_id;

  dispatch({ type: CREATE_EVENT_START });
  return axiosWithAuth()
    .post(`${host}/api/events/insertevents`, newEvent)
    .then(response =>
      dispatch({
        type: CREATE_EVENT_SUCCESS,
        payload: response.data
      })
    )
    .then(() => {
      dispatch(fetchEventsByUserId(user_id));
    })
    .catch(error =>
      dispatch({
        type: CREATE_EVENT_FAILURE,
        payload: error
      })
    );
};

export const deleteEvent = id => (dispatch, state) => {
  const user_id = state().users.userData.user_id;
  dispatch({ type: DELETE_EVENT_START });
  return axiosWithAuth()
    .delete(`${host}/api/events/deleteevent/${id}`)
    .then(response =>
      dispatch({
        type: DELETE_EVENT_SUCCESS,
        payload: response
      })
    )
    .then(() => {
      dispatch(fetchEventsByUserId(user_id));
    })
    .catch(error =>
      dispatch({
        type: DELETE_EVENT_FAILURE,
        payload: error
      })
    );
};

export const updateEvent = (editedEvent, id) => (dispatch, state) => {
  const user_id = state().users.userData.user_id;
  dispatch({ type: UPDATE_EVENT_START });
  return axiosWithAuth()
    .put(`${host}/api/events/updateevent/${id}`, editedEvent)
    .then(response =>
      dispatch({
        type: UPDATE_EVENT_SUCCESS,
        payload: response.data
      })
    )
    .then(() => {
      dispatch(fetchEventsByUserId(user_id));
    })
    .catch(error =>
      dispatch({
        type: UPDATE_EVENT_FAILURE,
        payload: error
      })
    );
};
