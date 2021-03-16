import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      margin: '0 auto',
    },
    Input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    IconButton: {
      padding: 10,
    },
    Divider: {
      height: 28,
      margin: 4,
    },
  })
);

export const CustomizedInputBase: React.FC = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.Root} component="form">
      <InputBase className={classes.Input} placeholder="Add Records" />
      <Divider className={classes.Divider} orientation="vertical" />
      <IconButton aria-label="directions" className={classes.IconButton} color="primary">
        <AddCircleIcon />
      </IconButton>
    </Paper>
  );
};
