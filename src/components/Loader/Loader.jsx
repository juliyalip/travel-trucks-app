import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';


export default function Loader() {
  return (
   <Stack spacing={2} direction="row" alignItems="center" justifyContent="center" marginTop={5}>
      <CircularProgress size={40} />
      <CircularProgress size={50} />
      <CircularProgress size={60} />
    </Stack>
  );
}
