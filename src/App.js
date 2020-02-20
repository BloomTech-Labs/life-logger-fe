import React from 'react';
import logo from './logo.svg';
import './App.css';

//These are examples for setting up redux
// import { connect } from 'react-redux';
// import { addTodo } from './actions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1> Hello World </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


//This is an example of how to setup a map state to props.
// const mapStateToProps = (state) => {
//   return {
//     todos: state.todos
//   };
// };

// export default connect(mapStateToProps, { addTodo })(App);
