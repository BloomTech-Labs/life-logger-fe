/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';

import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import TaskContext from '../../context/TaskContext';
import MenuList from '@material-ui/core/MenuList';

const FilterImg = styled.img`
  height: 30px;
  width: 30px;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: -80px;
  margin-right: 10px;
`;

export default function Search() {
  const { tasks } = React.useContext(TaskContext);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [searchResults, setSearchResults] = React.useState([]);
  const anchorRef = React.useRef(null);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    const results = tasks.filter((task) => task.includes(searchTerm));
    setSearchResults(results);
  }, [searchTerm]);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <div>
      <div>
        <Container>
          <FilterImg
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            src="./search.png"
          ></FilterImg>
          <Popper
            open={open}
            role={undefined}
            transition
            disablePortal
            style={{ marginTop: '85px', marginLeft: '60px', height: '30px' }}
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === 'bottom' ? 'right top' : 'right bottom',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      style={{
                        backgroundColor: 'white',
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                      }}
                      autoFocusItem={open}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      <form>
                        <input
                          type="search"
                          placeholder="Search..."
                          value={searchTerm}
                          onChange={handleChange}
                        />
                      </form>
                      {searchResults.map((item) => item.task)}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Container>
      </div>
    </div>
  );
}
