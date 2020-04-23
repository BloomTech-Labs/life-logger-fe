import configureStore from "redux-mock-store";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import thunk from "redux-thunk";
import { fetchUser } from "../store/actions/index";
import { FETCH_USER_SUCCESS } from "../store/actions/index";
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
      data: [{ id: 1, name: "John Smith" }],
    });

    store
      .dispatch(fetchUser({ username: "demo", password: "demo" }))
      .then(() => {
        let expectedActions = [
          {
            type: FETCH_USER_SUCCESS,
            payload: {
              data: [{ id: 1, name: "John Smith" }],
            },
          },
        ];
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
