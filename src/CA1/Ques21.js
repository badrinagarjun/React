import * as React from 'react';
import {Box,Paper} from '@mui/material';

export default function Ques21() {
  return (
    <Box sx={{  '& > : not(style)': {
          m: 1,
          width: 100,
          height: 100,
        },
      }}
    >
      <Paper elevation={3} />
      <Paper elevation={4} />
    </Box>
  );
}
