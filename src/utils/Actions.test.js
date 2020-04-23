import createAStore from './testStore.js';
import { fetchUser } from '../store/actions/index.js';

describe('dataloader Actions', () => {
    // const expectedState = {
    //   title: 'Example title'
    // };
    const store =  createAStore();
    let newState = store.getState();

    test("dataRequested", () => {
      const payload = {
        user_id: "01",
        token: "some random string",
        username: "bob"
      };
      const action = fetchUser.dispatch(payload);
      expect(action).toEqual({
        payload: payload,
        type: "FETCH_USER_SUCCESS"
      });
    });

});