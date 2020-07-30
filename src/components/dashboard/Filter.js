/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';

import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';

const FilterImg = styled.img `
    height: 40px;
    width: 40px;
`

const Container = styled.div `
    // border: red solid 1px;
    display: flex;
    justify-content: flex-end;
    margin-top: -70px;
    margin-right: 10px;
`

const Items = styled.h2 `
    font-size: 20px;
    margin: 0 auto;
`

export default function Nav(props) {

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

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
                src="./filtergrey.png"
               >
            </FilterImg>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal style={{width: '12rem', margin: '0 auto'}}>
            {({ TransitionProps, placement }) => (
                <Grow 
                {...TransitionProps}
                style={{ transformOrigin: placement === 'bottom' ? 'right top' : 'right bottom' }}
                >
                <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                    <MenuList style={{ backgroundColor: "white", display: 'flex', justifyContent: 'center', flexDirection: 'column'}} autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                        <Items to="/"><p style={{ backgroundColor: "white"}} onClick={handleClose}>completed tasks</p></Items>
                        <Items to="/"><p style={{ backgroundColor: "white"}} onClick={handleClose}>incompleted tasks</p></Items>
                        <Items to="/"><p style={{ backgroundColor: "white"}} onClick={handleClose}>view all tasks</p></Items>
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