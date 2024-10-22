import { Button } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { AppTitle } from '../components/AppTitle';

export function SuperParamDetailsPage() {
  const params = useParams();
  const { superId } = params ?? {};

  return (
    <>
      <AppTitle>Super Param Details</AppTitle>
      {superId ? (
        <>
          <strong>Super ID:</strong> {superId}
        </>
      ) : (
        <>No id found.</>
      )}{' '}
      <br />
      <br />
      <Link to="..">
        <Button variant="contained">Back</Button>
      </Link>
    </>
  );
}
