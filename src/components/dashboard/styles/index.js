import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 1200px;

  // border: 1px solid black;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  margin-top: 30px;

  @media (max-width: 1200px) {
    width: 80vw;
  }
`;

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 30px;
  border-bottom: 0.1px solid #9033df;
  margin-left: 5px;
  // background-color: #9033DF;
  // color: white;
  margin: 5px 0 12px;

  div.task-title {
    margin-left: 10px;
    font-size: 20px;
    font-weight: bold;
  }

  div.task-due-date {
    display: flex;
    justify-content: space-around;
    width: 36%;
    font-size: 20px;
    font-weight: bold;
  }
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 30px;
  // border-bottom: 1px solid #9033df;
  // border-left: 15px solid #53dc98;
  margin: 5px 0;

  div.task-title {
    margin-left: 10px;
    cursor: pointer;
  }

  div.task-due-date {
    span:first-child {
      cursor: pointer
    }
    display: flex;
    justify-content: space-between;
    width: 32%;
  }
  
  img:hover {
    transform: rotate(-25deg);
    transition-duration: 0.5s;
    cursor: pointer;
  }

`;

export const NewTaskForm = styled.form`
  display: flex;
  flex-flow: column nowrap;

  width: 100%;

  padding-top: 60px;

  @media (max-width: 1200px) {
    width: 60vw;
  }

  input {
    height: 30px;
    border: 1px solid #82d1f1;
    margin-bottom: 20px;
  }

  button {
    align-self: flex-end;
    width: 220px;
    height: 40px;
    background-color: #0abcf9;
    background-image: linear-gradient(315deg, #0abcf9 0%, #2c69d1 74%);
    color: white;
  }

  div.task-input-title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;

    input {
      width: 100%;
    }
  }

  div.task-input-info {
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      flex-direction: column;
      width: 30%;
      margin-bottom: 5px;
    }
  }

  textarea {
    width: 100%;
    height: 70px;
    margin-bottom: 10px;
  }

  div.task-form-buttons {
    display: flex;
    justify-content: flex-end;
    align-self: flex-end;
    width: 30%;

    button {
      width: 100px;
    }

    button.delete-button {
      background: light-red;
    }

    button.confirm-button {
      background: light-green;
    }
  }
`;

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 30px;
  padding-top: 60px;
  height: 80vh;
  width: 80%;
  margin-top: 40px;

  h1 {
    font-size: 3rem;
    margin: 10px;
  }

  .category {
    width: 100px;
    background: '#a0a0a0';
    border: 0.5px solid #0abcf9;
  }

  .task-title-edit {
    font-size: 32px;
    font-weight: bold;
    border: none;
    width: 100%;
  }

  input:focus {
    outline: none;
  }

  input {
    width: 220px;
    height: 30px;
  }

  .task-info {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      justify-content: space-between;
      width: 550px;
      margin: 10px;
    }
  }

  .description {
    vertical-align: text-top;
    width: 100%;
    height: 250px;
    margin-top: 20px;
    border: 0.5px solid #0abcf9;
    padding: 5px;
  }

  textarea {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
  }

  .back-button-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    button {
      margin: 10px 10px;
      width: 220px;
      height: 40px;
      background-color: #0abcf9;
      background-image: linear-gradient(315deg, #0abcf9 0%, #2c69d1 74%);
      color: white;
    }
  }

  .button-container {
    display: flex;
    justify-content: flex-end;
    width: 100%;

    button {
      margin: 20px 10px;
      align-self: flex-end;
      width: 220px;
      height: 40px;
      background-color: #0abcf9;
      background-image: linear-gradient(315deg, #0abcf9 0%, #2c69d1 74%);
      color: white;
    }
  }
`;
