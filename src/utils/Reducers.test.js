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
  
  /// FETCH EVENT SUCCESS
  it('FETCH EVENT SUCCESS', () => {
    
    store.dispatch({ type: 'FETCH_EVENT_SUCCESS' });
    newState = store.getState();
    expect(newState.events.error).toBe(null);
  });

  /// FETCH EVENT LOADING
  it('FETCH EVENT LOADING', () => {
    
    store.dispatch({ type: 'FETCH_EVENT_LOADING' });
    newState = store.getState();
    expect(newState.events.isFetching).toBe(true);
    expect(newState.events.error).toBe(null);
  });

  /// CREATE EVENT START
  it('CREATE EVENT START', () => {
    
    store.dispatch({ type: 'CREATE_EVENT_START' });
    newState = store.getState();
    expect(newState.events.isFetching).toBe(true);
    expect(newState.events.error).toBe(null);
  });
  
  /// CREATE EVENT SUCCESS
  it('CREATE EVENT SUCCESS', () => {
    
    store.dispatch({ type: 'CREATE_EVENT_SUCCESS' });
    newState = store.getState();
    expect(newState.events.isFetching).toBe(false);
    expect(newState.events.error).toBe(null);
  });

  /// CREATE EVENT FAILURE
  it('CREATE EVENT FAILURE', () => {
    
    store.dispatch({ type: 'CREATE_EVENT_FAILURE' });
    newState = store.getState();
    expect(newState.events.isFetching).toBe(false);
    
  });

  /// DELETE EVENT START
  it('DELETE EVENT START', () => {
    
    store.dispatch({ type: 'DELETE_EVENT_START' });
    newState = store.getState();
    expect(newState.events.isFetching).toBe(true);
    expect(newState.events.error).toBe(null);
  });

  /// DELETE EVENT SUCCESS
  it('DELETE EVENT SUCCESS', () => {
    
    store.dispatch({ type: 'DELETE_EVENT_SUCCESS' });
    newState = store.getState();
    expect(newState.events.error).toBe(null);
  });

  /// DELETE EVENT FAILURE
  it('DELETE EVENT FAILURE', () => {
    
    store.dispatch({ type: 'DELETE_EVENT_FAILURE' });
    newState = store.getState();   
  });

  /// UPDATE EVENT START
  it('UPDATE EVENT START', () => {
    
    store.dispatch({ type: 'UPDATE_EVENT_START' });
    newState = store.getState();
    expect(newState.events.isFetching).toBe(true);
    expect(newState.events.error).toBe(null);
  });

  /// UPDATE EVENT SUCCESS
  it('UPDATE EVENT SUCCESS', () => {
    
    store.dispatch({ type: 'UPDATE_EVENT_SUCCESS' });
    newState = store.getState();
    expect(newState.events.error).toBe(null);
  });
      
  /// FETCH USER LOADING is fetching
  it('FETCH USER LOADING', () => {
    
    store.dispatch({ type: 'FETCH_USER_LOADING' });
    newState = store.getState();
    expect(newState.users.isFetching).toBe(true);
    expect(newState.events.error).toBe(null);
  });

  /// FETCH USER LOADING islogged in
  it('FETCH USER LOADING', () => {
    
    store.dispatch({ type: 'FETCH_USER_LOADING' });
    newState = store.getState();
    expect(newState.users.isLoggedIn).toBe(false);
    expect(newState.events.error).toBe(null);
  });

  /// FETCH_USER_SUCCESS
  it('FETCH USER SUCCESS', () => {
    
    store.dispatch({ type: 'FETCH_USER_SUCCESS' });
    newState = store.getState();
    expect(newState.users.isLoggedIn).toBe(true);
    expect(newState.users.error).toBe(null);
  });

  /// FETCH USER FAILURE isLoggedIn
  it('FETCH USER FAILURE', () => {
    
    store.dispatch({ type: 'FETCH_USER_FAILURE' });
    newState = store.getState();
    expect(newState.users.isLoggedIn).toBe(false);
    
  });

  /// FETCH USER FAILURE isFetching
  it('FETCH USER FAILURE', () => {
    
    store.dispatch({ type: 'FETCH_USER_FAILURE' });
    newState = store.getState();
    expect(newState.users.isFetching).toBe(false);
    
  });
  
  /// UNFETCH USER LOADING
  it('UNFETCH_USER_LOADING', () => {
    
    store.dispatch({ type: 'UNFETCH_USER_LOADING' });
    newState = store.getState();
    expect(newState.users.isLoggedIn).toBe(true);
    expect(newState.users.isFetching).toBe(true);
    expect(newState.users.error).toBe(null);
  });
 
  /// UNFETCH USER SUCCESS
  it('UNFETCH USER SUCCESS', () => {
    
    store.dispatch({ type: 'UNFETCH_USER_SUCCESS' });
    newState = store.getState();
    expect(newState.users.isLoggedIn).toBe(false);
    expect(newState.users.isFetching).toBe(false);
    expect(newState.users.error).toBe(null);
  });

  /// UNFETCH USER FAILURE
  it('UNFETCH USER FAILURE', () => {
    
    store.dispatch({ type: 'UNFETCH_USER_FAILURE' });
    newState = store.getState();
    expect(newState.users.isLoggedIn).toBe(true);
    expect(newState.users.isFetching).toBe(false);
    
  });

  /// CREATE USER START
  it('CREATE USER START', () => {
    
    store.dispatch({ type: 'CREATE_USER_START' });
    newState = store.getState();
   
    expect(newState.users.isFetching).toBe(true);
    expect(newState.users.error).toBe(null);
  });

});
