import {
  FETCH_USER_LOADING,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  DELETE_USER_START,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  UNFETCH_USER_LOADING,
  UNFETCH_USER_SUCCESS,
  UNFETCH_USER_FAILURE
} from "../actions/index";

const initialState = {
  userData: [],
  error: null,
  isFetching: false
};

function RegisterReducer(state = initialState, action) {
  console.log("Reducer Firing", action);
  switch (action.type) {
    case FETCH_USER_LOADING:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        error: null
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        userData: [],
        isFetching: false,
        error: action.payload
      };
    case UNFETCH_USER_LOADING:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case UNFETCH_USER_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        error: null
      };
    case UNFETCH_USER_FAILURE:
      return {
        ...state,
        userData: [],
        isFetching: false,
        error: action.payload
      };
    case CREATE_USER_START:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        userData: [...state, action.payload],
        error: null
      };
    case CREATE_USER_FAILURE:
      return {
        ...state,
        userData: [],
        error: action.payload
      };
    case DELETE_USER_START:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        userData: [...state, action.payload],
        error: null
      };
    case DELETE_USER_FAILURE:
      return {
        ...state,
        userData: [],
        error: action.payload
      };
    case UPDATE_USER_START:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        userData: [...state, action.payload],
        error: null
      };
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        userData: [],
        error: action.payload
      };
    default:
      return state;
  }
}

export default RegisterReducer;
