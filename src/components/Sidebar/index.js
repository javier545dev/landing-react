import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({

  iconClose: {
    cursor: "pointer",
    padding: 10,
    right: 0,
    position: "absolute",
  },
  listRoot: {
    margin: '0 50px',
    width: 300,
    paddingTop: 100,
  },
  iconColor: {
      color: "white",
  },
  paperAnchorRight: {
    background: '#000000 !important'
  },
  listItem: {
      color: 'white',
      '@media screen and (max-width: 400px)': {
        fontSize: 25,
    },
  }
});

export default function Sidebar({toggleDrawer, open}) {
  const classes = useStyles();

  const list = () => (
    <div
      role="presentation"
      className={classes.list}
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
        <div onClick={toggleDrawer(false)} className={classes.iconClose} >
            <CloseIcon fontSize="large" color="primary" classes={{colorPrimary: classes.iconColor}}/>
        </div>
        
      <List className={classes.listRoot}>
          <ListItem>
            <SubdirectoryArrowRightIcon color="primary" classes={{colorPrimary: classes.iconColor}}/>
            <ListItemText classes={{primary: classes.listItem}} primary='Home' />
          </ListItem>
          <ListItem>
            <ListItemText classes={{primary: classes.listItem}} primary='About' />
          </ListItem>
          <ListItem>
            <ListItemText classes={{primary: classes.listItem}} primary='Work' />
          </ListItem>
      </List>
    </div>
  );

  return (
    <div>
        <React.Fragment>
          <Drawer classes={{paperAnchorRight: classes.paperAnchorRight
      }} anchor='right' open={open} onClose={toggleDrawer(false)}>
            {list()}
          </Drawer>
        </React.Fragment>
    </div>
  );
}