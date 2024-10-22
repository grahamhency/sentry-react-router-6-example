import { Button } from '@mui/material';
import { Link, Outlet, useParams } from 'react-router-dom';
import { AppTitle } from '../components/AppTitle';
import { OutletContainer } from '../components/OutletContainer';

export function ParamPage() {
  const params = useParams();
  const { id } = params ?? {};

  return (
    <>
      {id ? (
        <>
          <AppTitle>Param</AppTitle>
          <strong>ID:</strong> {id}
        </>
      ) : (
        <>No id found.</>
      )}{' '}
      <br />
      <br />
      <Link to="details" style={{ marginRight: '.5rem' }}>
        <Button variant="contained">Details</Button>
      </Link>
      <Link to="../..">
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
