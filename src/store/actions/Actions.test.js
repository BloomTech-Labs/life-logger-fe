import expect from 'expect'; // You can use any testing library
import moxios from 'moxios';
import { makeMockStore } from '../../../__mocks__/mockStore';
import {
    createUser,
    deleteEvent,
    deleteUser,
    createEvent,
    fetchEvent,
    fetchEvents,
    fetchEventsByUserId,
    fetchUser,
    unfetchUser,
    updateEvent,
    updateUser,
} from './index.js';

let store = makeMockStore({
    users: {
        userData: {
            user_id: 1,
        },
    },
});

let mockSuccess;

describe('actions', () => {
    beforeEach(() => moxios.install());
    afterEach(() => moxios.uninstall());

    test('successful api request calls fetchUser action', () => {
        const user = {
            username: 'username',
            password: 'password',
        };

        mockSuccess = () => ({
            message: 'Login successful',
            token: 'token',
            user_id: 1,
            username: 'user',
        });

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith(mockSuccess(user));
        });

        const expected = [fetchUser(user)];

        store.dispatch(fetchUser(user)).then(() => {
            const actionsCalled = store.getActions();
            expect(actionsCalled).toEqual(expected);
        });
    });

    test('successful api request calls unfetchUser action', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith(mockSuccess());
        });

        const expected = [unfetchUser()];

        store.dispatch(unfetchUser()).then(() => {
            const actionsCalled = store.getActions();
            expect(actionsCalled).toEqual(expected);
        });
    });

    test('successful api request calls createUser action', () => {
        const user = {
            username: 'username',
            password: 'password',
            email: 'email@email.com',
        };

        mockSuccess = () => ({
            message: 'User registration complete',
            id: 2,
        });

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith(mockSuccess());
        });

        const expected = [createUser(user)];

        store.dispatch(createUser(user)).then(() => {
            const actionsCalled = store.getActions();
            expect(actionsCalled).toEqual(expected);
        });
    });

    test('successful api request calls deleteUser action', () => {
        const user_id = 1;

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith(mockSuccess());
        });

        const expected = [deleteUser(user_id)];

        store.dispatch(deleteUser(user_id)).then(() => {
            const actionsCalled = store.getActions();
            expect(actionsCalled).toEqual(expected);
        });
    });

    test('successful api request calls updateUser action', () => {
        const user = {
            username: 'username2',
            password: 'password2',
            email: 'email2@email.com',
        };

        const user_id = 1;

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith(mockSuccess());
        });

        const expected = [updateUser(user, user_id)];

        store.dispatch(updateUser(user, user_id)).then(() => {
            const actionsCalled = store.getActions();
            expect(actionsCalled).toEqual(expected);
        });
    });

    test('successful creation of new event', () => {
        moxios.wait(() => {
            const request = moxios.request.mostRecent();
            request.respondWith(mockSuccess());
        });

        const expected = [createEvent()];

        store.dispatch(createEvent()).then(() => {
            const actionsCalled = store.getActions();
            expect(actionsCalled).toEqual(expected);
        });
    });

    test('successful api request calls fetchEvents action', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith(mockSuccess());
        });

        const expected = [fetchEvents()];

        store.dispatch(fetchEvents()).then(() => {
            const actionsCalled = store.getActions();
            expect(actionsCalled).toEqual(expected);
        });
    });

    test('successful api request calls fetchEventsByUserId action', () => {
        const user_id = 1;

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith(mockSuccess());
        });

        const expected = [fetchEventsByUserId(user_id)];

        store.dispatch(fetchEventsByUserId(user_id)).then(() => {
            const actionsCalled = store.getActions();
            expect(actionsCalled).toEqual(expected);
        });
    });

    test('successful api request calls fetchEvent action', () => {
        const event_id = 1;

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith(mockSuccess());
        });

        const expected = [fetchEvent(event_id)];

        store.dispatch(fetchEvent(event_id)).then(() => {
            const actionsCalled = store.getActions();
            expect(actionsCalled).toEqual(expected);
        });
    });

    test('successful api request calls deleteEvent action', () => {
        const event = {};
        const user_id = {};

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith(mockSuccess());
        });

        const expected = [deleteEvent(event), fetchEventsByUserId(user_id)];

        store.dispatch(deleteEvent(event)).then(() => {
            const actionsCalled = store.getActions();
            expect(actionsCalled).toEqual(expected);
        });
    });

    test('successful api request calls updateEvent action', () => {
        const event = {};
        const user_id = {};

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith(mockSuccess());
        });

        const expected = [updateEvent(event), fetchEventsByUserId(user_id)];

        store.dispatch(updateEvent(event)).then(() => {
            const actionsCalled = store.getActions();
            expect(actionsCalled).toEqual(expected);
        });
    });

    // it('successful api request calls fetchUser action', () => {
    //   fetchMock.post('/users', {
    //     body: { username: 'username', password: 'password' },
    //     headers: { 'content-type': 'application/json' }
    //   });

    //   const expectedActions = [
    //     { type: FETCH_USER_LOADING },
    //     {
    //       type: FETCH_USER_SUCCESS,
    //       payload: {
    //         message: 'Login successful!',
    //         token: '1234',
    //         user_id: 1,
    //         username: 'user'
    //       }
    //     }
    //   ];
    //   const store = mockStore({ todos: [] });

    //   store.dispatch(fetchUser({ username: 'user', password: 'password' }));

    //   expect(store.getActions()).toEqual(expectedActions);
    // });
});
