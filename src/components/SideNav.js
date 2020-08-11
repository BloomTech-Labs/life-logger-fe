/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  a {
    text-decoration: none;
    color: white;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const SideNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><a href="/">Home</a></li>
      <li><a href="/">About Us</a></li>
      <li><a href="/">Log Out</a></li>
    </Ul>
  )
}

export default SideNav;