import {
  CREATE_EVENT_FAILURE,
  CREATE_EVENT_START,
  CREATE_EVENT_SUCCESS,
  DELETE_EVENT_FAILURE,
  DELETE_EVENT_START,
  DELETE_EVENT_SUCCESS,
  FETCH_EVENTS_FAILURE,
  FETCH_EVENTS_LOADING,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENT_FAILURE,
  FETCH_EVENT_LOADING,
  FETCH_EVENT_SUCCESS,
  UPDATE_EVENT_FAILURE,
  UPDATE_EVENT_START,
  UPDATE_EVENT_SUCCESS
} from '../actions/index';

const initialState = {
  eventData: [],
  currentEvent: null,
  error: null,
  isFetching: false
};

// comment

function EventReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_EVENTS_LOADING:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        eventData: action.payload,
        error: null
      };
    case FETCH_EVENTS_FAILURE:
      return {
        ...state,
        eventData: [],
        isFetching: false,
        error: action.payload
      };
    case FETCH_EVENT_LOADING:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case FETCH_EVENT_SUCCESS:
      return {
        ...state,
        currentEvent: action.payload,
        error: null
      };
    case FETCH_EVENT_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case CREATE_EVENT_START:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case CREATE_EVENT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        eventData: action.payload,
        error: null
      };
    case CREATE_EVENT_FAILURE:
      return {
        ...state,
        isFetching: false,
        eventData: [],
        error: action.payload
      };
    case DELETE_EVENT_START:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case DELETE_EVENT_SUCCESS:
      return {
        ...state,
        currentEvent: action.payload,
        error: null
      };
    case DELETE_EVENT_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case UPDATE_EVENT_START:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case UPDATE_EVENT_SUCCESS:
      return {
        ...state,
        currentEvent: action.payload,
        error: null
      };
    case UPDATE_EVENT_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

export default EventReducer;
