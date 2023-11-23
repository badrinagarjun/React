import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function RatingSize() {
  return (
    <Stack spacing={1} alignItems="center">
      <Rating name="size-large" defaultValue={2} size="large"  />
    </Stack>
  );
}