import React, { useState } from 'react';
import { createStyles, Grid, makeStyles, Paper, Theme, Typography } from '@material-ui/core';
import { CustomizedInputBase } from './CustomizedInputBase/CustomizedInputBase';
import { RecordsList } from './RecordsList/RecordsList';
import { TimerRecord } from './TimerRecord.interface';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Box: {
      margin: `${theme.spacing(2)}px auto`,
    },
    Header: {
      textAlign: 'center',
    },
  })
);

export const App: React.FC = () => {
  const classes = useStyles();
  const [records, setRecords] = useState<TimerRecord[]>([]);

  const addRecordHandler = (name: string) => {
    setRecords([
      ...records,
      {
        id: name,
        name,
        run: false,
        seconds: 0,
      },
    ]);
  };

  return (
    <Grid container spacing={3}>
      <Grid className={classes.Box} item xs={6}>
        <Paper>
          <>
            <Typography className={classes.Header} variant="h1">
              React Records
            </Typography>
            <CustomizedInputBase onAdd={addRecordHandler} />
            <RecordsList records={records} />
          </>
        </Paper>
      </Grid>
    </Grid>
  );
};
