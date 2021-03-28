import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Switch from '@material-ui/core/Switch';
import { TimerRecord } from '../TimerRecord.interface';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  })
);

interface Props {
  records: TimerRecord[];
}

export const RecordsList: React.FC<Props> = ({ records }: Props) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(['wifi']);

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List className={classes.root} subheader={<ListSubheader>Records</ListSubheader>}>
      {records.map(({ id, seconds, name, run }) => (
        <ListItem key={id}>
          <ListItemIcon>{seconds}</ListItemIcon>
          <ListItemText id={id} primary={name} />
          <ListItemSecondaryAction>
            <Switch
              checked={run}
              edge="end"
              inputProps={{ 'aria-labelledby': 'switch-list-label-wifi' }}
              onChange={handleToggle('wifi')}
            />
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};
