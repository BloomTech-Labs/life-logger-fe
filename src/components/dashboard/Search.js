/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';

import React from 'react';
import TaskContext from '../../context/TaskContext';

const SearchForm = styled.form`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 1s;
  width: 50px;
  height: 50px;
  background: white;
  box-sizing: border-box;
  border-radius: 25px;
  border: 4px solid white;
  padding: 5px;

  &:hover {
    width: 200px;
    cursor: pointer;
  }
`;

const InputForm = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 42.5px;
  line-height: 30px;
  outline: 0;
  border: 0;
  font-size: 1em;
  border-radius: 20px;

  &:hover {
    display: block;
  }
`;

const SearchImg = styled.img`
  box-sizing: border-box;
  background: white;
  padding: 5px;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 50%;
  color: #07051a;
  text-align: center;
  font-size: 1.2em;
  transition: all 1s;

  &:hover {
    color: white;
  }
`;

export default function Search() {
  const { searchTerm, editSearch } = React.useContext(TaskContext);

  const handleChange = (event) => {
    editSearch(event.target.value);
  };

  return (
    <div
      sx={{
        marginTop: '-240px',
      }}
    >
      <SearchForm>
        <InputForm
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        />
        <SearchImg src="/search.png" />
      </SearchForm>
    </div>
  );
}
