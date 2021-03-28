import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Controller, useForm } from 'react-hook-form';

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
    Form: {
      margin: theme.spacing(2),
    },
  })
);

interface Props {
  onAdd: (name: string) => void;
}

export const CustomizedInputBase: React.FC<Props> = ({ onAdd }: Props) => {
  const classes = useStyles();

  const { handleSubmit, control, setValue } = useForm();

  const onSubmit = (data: { record: string }) => {
    onAdd(data.record);
    setValue('record', '');
  };

  return (
    <form autoComplete="off" className={classes.Form} noValidate onSubmit={handleSubmit(onSubmit)}>
      <Paper className={classes.Root}>
        <Controller
          control={control}
          defaultValue=""
          name="record"
          render={({ onChange, value }) => (
            <InputBase
              className={classes.Input}
              name="record"
              placeholder="Add Records"
              value={value}
              onChange={onChange}
            />
          )}
        />
        {/**/}
        <Divider className={classes.Divider} orientation="vertical" />
        <IconButton aria-label="directions" className={classes.IconButton} color="primary" type="submit">
          <AddCircleIcon />
        </IconButton>
      </Paper>
    </form>
  );
};
