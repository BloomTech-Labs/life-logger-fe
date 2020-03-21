import createAStore from './testStore.js';

describe('Events Reducer', () => {
  const expectedState = {
    title: 'Example title'
  };
  const store =  createAStore();
  let newState = store.getState();
   
  /// FETCH EVENTS LOADING
  it('FETCH EVENTS LOADING', () => {
    
    store.dispatch({ type: 'FETCH_EVENTS_LOADING' });
    newState = store.getState();
    expect(newState.events.isFetching).toBe(true);
    expect(newState.events.error).toBe(null);
  });
  
  /// FETCH EVENTS SUCCESS
  it('FETCH EVENTS SUCCESS', () => {
    
    store.dispatch({ type: 'FETCH_EVENTS_SUCCESS' });
    newState = store.getState();
    expect(newState.events.isFetching).toBe(false);
    expect(newState.events.error).toBe(null);
  });

  /// FETCH EVENT LOADING
  it('FETCH EVENT LOADING', () => {
    
    store.dispatch({ type: 'FETCH_EVENT_LOADING' });
    newState = store.getState();
    expect(newState.events.isFetching).toBe(false);
    expect(newState.events.error).toBe(null);
  });

});
