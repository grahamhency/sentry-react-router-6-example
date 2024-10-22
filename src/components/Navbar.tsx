import styled from '@emotion/styled';
import { Button, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

const NavMenu = styled.ul`
  display: flex;
  gap: 1.25rem;
  justify-content: center;
  list-style: none;
  margin: 0 0 2.5rem 0;
  padding: 0;
`;

export function Navbar() {
  return (
    <>
      <NavMenu>
        <li>
          <Link to="/">
            <Button variant="contained">Home</Button>
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <Button variant="contained">Profile</Button>
          </Link>
        </li>
        <li>
          <Link to="/param-page/123">
            <Button variant="contained">Param Page</Button>
          </Link>
        </li>
      </NavMenu>
      <Divider style={{ marginBottom: '1.25rem' }} />
    </>
  );
}
