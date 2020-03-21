import testStore from './testStore';

describe('Events Reducer', () => {
    const expectedState = {
      title: 'Example title'
    };
    const store = testStore();
    let newState = store.getState();
    it('FETCH EVENTS', () => {
      /// FETCH EVENTS LOADING
      store.dispatch({ type: 'FETCH_EVENTS_LOADING' });
      newState = store.getState();
      expect(newState.EventReducer.isFetching).toBe(true);
      expect(newState.EventReducer.error).toBe(null);
    
    });
    
});
