import React from 'react';
import { createStyles, Grid, makeStyles, Paper, Theme, Typography } from '@material-ui/core';
import { CustomizedInputBase } from './CustomizedInputBase/CustomizedInputBase';
import { RecordsList } from './RecordsList/RecordsList';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Box: {
      margin: `${theme.spacing(2)}px auto`,
    },
    Header: {
      textAlign: 'center',
    },
    Form: {
      margin: theme.spacing(2),
    },
  })
);

export const App: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid className={classes.Box} item xs={6}>
        <Paper>
          <Typography className={classes.Header} variant="h1">
            React Records
          </Typography>
          <form autoComplete="off" className={classes.Form} noValidate>
            <CustomizedInputBase />
          </form>
          <RecordsList />
        </Paper>
      </Grid>
    </Grid>
  );
};
