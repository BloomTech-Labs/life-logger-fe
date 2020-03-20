import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 1200px;

  border: 1px solid black;
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
  width: 100%;
  border-bottom: 1px solid black;
  cursor: pointer;
`;

export const NewTaskForm = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;

  border: 1px solid black;

  padding-top: 60px;

  button {
    align-self: flex-end;
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

  .task-title-edit {
    font-size:32px;
    font-weight: bold;
    border: none;
    width:100%
  }

  input:focus {
    outline:none;
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
    vertical-align: text-top;
    width: 100%;
    height: 250px;

    border: 1px solid black;
    padding: 5px;
  }
  
  .event-text-edit {
    border: none;
    width:100%
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
