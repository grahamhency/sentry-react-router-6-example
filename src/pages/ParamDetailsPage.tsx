import { Button } from '@mui/material';
import { Link, Outlet, useParams } from 'react-router-dom';
import { AppTitle } from '../components/AppTitle';
import { OutletContainer } from '../components/OutletContainer';

export function ParamDetailsPage() {
  const params = useParams();
  const { id } = params ?? {};

  return (
    <>
      <AppTitle>Param Details</AppTitle>
      {id ? (
        <>
          <strong>ID:</strong> {id}
        </>
      ) : (
        <>No id found.</>
      )}{' '}
      <br />
      <br />
      <Link to="456" style={{ marginRight: '0.5rem' }}>
        <Button variant="contained">Super Details</Button>
      </Link>
      <Link to="..">
        <Button variant="contained">Back</Button>
      </Link>
      <br />
      <br />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </>
  );
}
