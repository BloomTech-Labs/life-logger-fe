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
  justify-content: flex-start
  width: 100%;
  border-bottom: 1px solid black;
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
