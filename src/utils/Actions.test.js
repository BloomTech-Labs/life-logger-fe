import configureStore from "redux-mock-store";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import thunk from "redux-thunk";
import {
  fetchUser,
  unfetchUser,
  createUser,
  deleteUser,
  updateUser,
  fetchEvents,
  fetchEventsByUserId,
  fetchEvent,
  createEvent,
  deleteEvent,
  updateEvent
} from "../store/actions/index";
import {
  FETCH_USER_SUCCESS,
  UNFETCH_USER_SUCCESS,
  CREATE_USER_SUCCESS,
  DELETE_USER_SUCCESS,
  UPDATE_USER_SUCCESS,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENT_SUCCESS,
  CREATE_EVENT_SUCCESS,
  DELETE_EVENT_SUCCESS,
  UPDATE_EVENT_SUCCESS
} from "../store/actions/index";
// import rootReducer from "../store/reducers/index";

// declare middlewares
const middlewares = [thunk];

// initialize mockStore which is only the configureStore method which take middlesware as its parameters
const mockStore = configureStore(middlewares);

//creating a mock instance from the MockAdapter of axios
const mock = new MockAdapter(axios);

const store = mockStore({});

// firing up the test Suite
describe("Testing fetchUser()", () => {
  beforeEach(() => {
    // Runs before each test in the suite
    store.clearActions();
  });
  it("should get FETCH_USER_SUCCESS", () => {
    mock.onGet("/users").reply(200, {
      data: [{ id: 1, token: "", username: "John Smith" }],
    });

    store
      .dispatch(fetchUser({ username: "demo", password: "demo" }))
      .then(() => {
        let expectedActions = [
          {
            type: FETCH_USER_SUCCESS,
            payload: Response.data,
          },
        ];
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});

describe("Testing unfetchUser()", () => {
  beforeEach(() => {
    // Runs before each test in the suite
    store.clearActions();
  });
  it("should get UNFETCH_USER_SUCCESS", () => {
    mock.onGet("/users").reply(200, {
      data: [{ id: 1, token: "", username: "John Smith" }],
    });

    store
      .dispatch(unfetchUser({ username: "demo", password: "demo" }))
      .then(() => {
        let expectedActions = [
          {
            type: UNFETCH_USER_SUCCESS,
            payload: Response.data,
          },
        ];
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});

describe("Testing createUser()", () => {
  beforeEach(() => {
    // Runs before each test in the suite
    store.clearActions();
  });
  it("should get CREATE_USER_SUCCESS", () => {
    mock.onGet("/users").reply(200, {
      data: [{ id: 1, token: "", username: "John Smith" }],
    });

    store
      .dispatch(createUser({ username: "demo", password: "demo" }))
      .then(() => {
        let expectedActions = [
          {
            type: CREATE_USER_SUCCESS,
            payload: Response.data,
          },
        ];
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});

describe("Testing deleteUser()", () => {
  beforeEach(() => {
    // Runs before each test in the suite
    store.clearActions();
  });
  it("should get DELETE_USER_SUCCESS", () => {
    mock.onGet("/users").reply(200, {
      data: [{ id: 1, token: "", username: "John Smith" }],
    });

    store
      .dispatch(deleteUser({ username: "demo", password: "demo" }))
      .then(() => {
        let expectedActions = [
          {
            type: DELETE_USER_SUCCESS,
            payload: Response.data,
          },
        ];
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});

describe("Testing updateUser()", () => {
  beforeEach(() => {
    // Runs before each test in the suite
    store.clearActions();
  });
  it("should get UPDATE_USER_SUCCESS", () => {
    mock.onGet("/users").reply(200, {
      data: [{ id: 1, token: "", username: "John Smith" }],
    });

    store
      .dispatch(updateUser({ username: "demo", password: "demo" }))
      .then(() => {
        let expectedActions = [
          {
            type: UPDATE_USER_SUCCESS,
            payload: Response.data,
          },
        ];
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});

describe("Testing fetchEvents()", () => {
  beforeEach(() => {
    // Runs before each test in the suite
    store.clearActions();
  });
  it("should get FETCH_EVENTS_SUCCESS", () => {
    mock.onGet("/users").reply(200, {
      data: [{ id: 1, token: "", username: "John Smith" }],
    });

    store
      .dispatch(fetchEvents({ username: "demo", password: "demo" }))
      .then(() => {
        let expectedActions = [
          {
            type: FETCH_EVENTS_SUCCESS,
            payload: Response.data,
          },
        ];
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});


describe("Testing fetchEventsByUserId()", () => {
  beforeEach(() => {
    // Runs before each test in the suite
    store.clearActions();
  });
  it("should get FETCH_EVENTS_SUCCESS", () => {
    mock.onGet("/users").reply(200, {
      data: [{ id: 1, token: "", username: "John Smith" }],
    });

    store
      .dispatch(fetchEventsByUserId({ username: "demo", password: "demo" }))
      .then(() => {
        let expectedActions = [
          {
            type: FETCH_EVENTS_SUCCESS,
            payload: Response.data,
          },
        ];
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});

describe("Testing fetchEvent()", () => {
  beforeEach(() => {
    // Runs before each test in the suite
    store.clearActions();
  });
  it("should get FETCH_EVENTS_SUCCESS", () => {
    mock.onGet("/users").reply(200, {
      data: [{ id: 1, token: "", username: "John Smith" }],
    });

    store
      .dispatch(fetchEvent({ username: "demo", password: "demo" }))
      .then(() => {
        let expectedActions = [
          {
            type: FETCH_EVENT_SUCCESS,
            payload: Response.data,
          },
        ];
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});

//Event action tests need work.

// describe("Testing createEvent()", () => {
//   beforeEach(() => {
//     // Runs before each test in the suite
//     store.clearActions();
//   });
//   it("should get CREATE_EVENT_SUCCESS", () => {
//     mock.onPost("/users").reply(200, {
//       data: [{ id: 1, token: "", username: "John Smith" }],
//     });

//     store
//       .dispatch(createEvent( ))
//       .then(() => {
//         let expectedActions = [
//           {
//             type: CREATE_EVENT_SUCCESS,
//             payload: Response.data,
//           },
//         ];
//         expect(store.getActions()).toEqual(expectedActions);
//       });
//   });
// });

// describe("Testing deleteEvent()", () => {
//   beforeEach(() => {
//     // Runs before each test in the suite
//     store.clearActions();
//   });
//   it("should get DELETE_EVENT_SUCCESS", () => {
//     mock.onGet("/users").reply(200, {
//       data: [{ id: 1, token: "", username: "John Smith" }],
//     });

//     store
//       .dispatch(deleteEvent(props.event.id))
//       .then(() => {
//         let expectedActions = [
//           {
//             type: DELETE_EVENT_SUCCESS,
//             payload: Response.data,
//           },
//         ];
//         expect(store.getActions()).toEqual(expectedActions);
//       });
//   });
// });

// describe("Testing updateEvent()", () => {
//   beforeEach(() => {
//     // Runs before each test in the suite
//     store.clearActions();
//   });
//   it("should get UPDATE_EVENT_SUCCESS", () => {
//     mock.onGet("/users").reply(200, {
//       data: [{ id: 1, token: "", username: "John Smith" }],
//     });

//     store
//       .dispatch(updateEvent(props.event.id))
//       .then(() => {
//         let expectedActions = [
//           {
//             type: UPDATE_EVENT_SUCCESS,
//             payload: Response.data,
//           },
//         ];
//         expect(store.getActions()).toEqual(expectedActions);
//       });
//   });
// });