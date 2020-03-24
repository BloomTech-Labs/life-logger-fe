import testStore from '../../utils/testStore';

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
    expect(newState.events.isFetching).toBe(true);
    expect(newState.events.error).toBe(null);
  });
});
