// import expect from 'expect'; // You can use any testing library
// import moxios from 'moxios';
// import { makeMockStore } from '../../../__mocks__/mockStore';
// import { fetchUser } from './index.js';

// const store = makeMockStore({});

// const mockSuccess = data => ({
//   message: 'Login successful',
//   token: 'token',
//   user_id: 1,
//   username: 'user'
// });
// const mockError = error => ({ message: 'Password Incorrect!' });

// describe('actions', () => {
//   beforeEach(() => moxios.install());
//   afterEach(() => moxios.uninstall());

//   test('successful api request calls fetchUser action', () => {
//     const user = {
//       username: 'username',
//       password: 'password'
//     };

//     moxios.wait(() => {
//       const request = moxios.requests.mostRecent();
//       request.respondWith(mockSuccess(user));
//     });

//     const expected = [fetchUser(user)];

//     store.dispatch(fetchUser(user)).then(() => {
//       const actionsCalled = store.getActions();
//       expect(actionsCalled).toEqual(expected);
//     });
//   });

//   test('failed api request calls getErrors action', () => {
//     const user = {
//       username: 'username',
//       password: 'invalidpassword'
//     };

//     const errors = {
//       message: 'Password Incorrect!'
//     };

//     moxios.wait(() => {
//       const request = moxios.requests.mostRecent();
//       request.respondWith(mockError(errors));
//     });

//     const expected = [fetchUser(user)];

//     store.dispatch(fetchUser(user)).then(() => {
//       const actionsCalled = store.getActions();
//       expect(actionsCalled).toEqual(expected);
//     });
//   });

//   it('successful api request calls fetchUser action', () => {
//     fetchMock.post('/users', {
//       body: { username: 'username', password: 'password' },
//       headers: { 'content-type': 'application/json' }
//     });

//     const expectedActions = [
//       { type: FETCH_USER_LOADING },
//       {
//         type: FETCH_USER_SUCCESS,
//         payload: {
//           message: 'Login successful!',
//           token: '1234',
//           user_id: 1,
//           username: 'user'
//         }
//       }
//     ];
//     const store = mockStore({ todos: [] });

//     store.dispatch(fetchUser({ username: 'user', password: 'password' }));

//     expect(store.getActions()).toEqual(expectedActions);
//   });
// });
