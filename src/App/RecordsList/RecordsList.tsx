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
  onToggle: (id: string) => void;
  records: TimerRecord[];
}

export const RecordsList: React.FC<Props> = ({ onToggle, records }: Props) => {
  const classes = useStyles();

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
              onChange={() => onToggle(id)}
            />
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};
