/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';

const Floater = styled.button`
  ${({ theme: t }) => `
    width: 80px;
    border-radius: 100%;
    height: 80px;
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #82D1FF;
    border: none;
  `}
`;



export default function FloatingActionButtons() {

  return (
    <div sx={{ display: "flex", justifyContent: "flex-end", marginRight: "50px" }}>
      <Floater 
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: "center",
            position: "absolute",
            }}>
            +
        </Floater>
    </div>
  );
}