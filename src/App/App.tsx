import React from 'react';
import { createStyles, Grid, makeStyles, Paper, Theme, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Box: {
      margin: `${theme.spacing(2)}px auto`,
    },
  })
);

export const App: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid className={classes.Box} item xs={6}>
        <Paper>
          <Typography variant="h1">React Records</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};
