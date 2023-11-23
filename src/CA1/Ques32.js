import React from 'react'
import { Grid, styled, Paper} from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  }));
export const Ques32 = () => {
  return (
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <Item>xs=8</Item>
            </Grid>
            <Grid item xs={4}>
                <Item>xs=4</Item>
            </Grid>
        </Grid>
  )
}
