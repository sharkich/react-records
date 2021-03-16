import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  })
);

export const RecordsList: React.FC = () => {
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
      <ListItem>
        <ListItemIcon>1:12</ListItemIcon>
        <ListItemText id="switch-list-label-wifi" primary="Wi-Fi" />
        <ListItemSecondaryAction>
          <Switch
            checked={checked.indexOf('wifi') !== -1}
            edge="end"
            inputProps={{ 'aria-labelledby': 'switch-list-label-wifi' }}
            onChange={handleToggle('wifi')}
          />
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemIcon>2:15</ListItemIcon>
        <ListItemText id="switch-list-label-bluetooth" primary="Bluetooth" />
        <ListItemSecondaryAction>
          <Switch
            checked={checked.indexOf('bluetooth') !== -1}
            edge="end"
            inputProps={{ 'aria-labelledby': 'switch-list-label-bluetooth' }}
            onChange={handleToggle('bluetooth')}
          />
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
};
