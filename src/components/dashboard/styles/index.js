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
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  height: 30px;
  border-bottom: 1px solid #9033DF;
  border-left: 3px solid green;
  
  // background-color: #9033DF;
  // color: white;
  cursor: pointer;
  margin: 5px 0;
`;

export const NewTaskForm = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;

  padding-top: 60px;

  input {
    height: 30px;
    margin: 10px;
    border: 1px solid #82D1F1;
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
    }
  }

  textarea {
    width: 100%;
    height: 50px;
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
  padding: 0 30px;
  padding-top: 60px;
  height: 100vh;
  width: 1200px;

  .category {
    width: 100px;
    background: '#a0a0a0';
    border: 1px solid black;
  }

  .task-info {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      justify-content: space-between;
      width: 400px;

      margin-bottom: 10px;
    }
  }

  .description {
    width: 100%;
    height: 250px;

    border: 1px solid black;
    padding: 5px;
  }

  .button-container {
    display: flex;
    justify-content: flex-end;

    width: 100%;

    button {
      width: 100px;
      height: 20px;
      margin-left: 10px;
    }
  }
`;
