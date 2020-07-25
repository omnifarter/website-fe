import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import BookmarksRoundedIcon from '@material-ui/icons/BookmarksRounded';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import MainBody from '../Components/Body';
import ProfileCard from '../Components/ProfileCard';
import LogoName from '../Components/LogoName';

const drawerWidth = 240;
const yankeesBlue = '#183040';
const fontColor = '#FFFFFF';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    // backgroundColor: yankeesBlue,
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor: yankeesBlue,
    [theme.breakpoints.up('sm')]: {
      alignItems: 'center',
    },
  },
  menuButton: {
    marginRight: "auto",
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  moreButton: {
    marginLeft: "auto",
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },

  toolbar: theme.mixins.toolbar,

  drawerPaper: {
    backgroundColor: yankeesBlue,
    width: drawerWidth,
    
  },
  content: {
    // backgroundColor: yankeesBlue,
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));



function PageFrame(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [leftmobileOpen, setMobileOpen] = React.useState(false);

  const handleLeftDrawerToggle = () => {
    setMobileOpen(!leftmobileOpen);
  };

  const leftDrawer = (
    <div style={{ color: fontColor }} >
      <div className={classes.toolbar}>
        <ProfileCard/>
      </div>
      <Divider />
      <List>
          <ListItem>
            <ListItemIcon><HomeRoundedIcon htmlColor="white" /></ListItemIcon>
            <ListItemText  primary="Home"/>
          </ListItem>
          <ListItem>
            <ListItemIcon><SearchRoundedIcon htmlColor="white" /></ListItemIcon>
            <ListItemText  primary="Discover" />
          </ListItem>
          <ListItem>
            <ListItemIcon><BookmarksRoundedIcon htmlColor="white" /></ListItemIcon>
            <ListItemText  primary="Saved" />
          </ListItem>
      </List>
    </div>
  );

  const rightDrawer = (
    <div style={{ color: fontColor }}>
      <Divider />
      <List>
          <ListItem>
            <ListItemText style={{ color: '#FFFFFF' }} primary="Suggested Follows" />
          </ListItem>
          <ListItem>
            <ListItemText style={{ color: '#FFFFFF' }} primary="Add specific card details"/>
          </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div >
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleLeftDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography 
          variant="h6"
          noWrap 
          anchor={theme.direction = 'center'}
          >
          <LogoName/>
          </Typography>
        </Toolbar>
      </AppBar>
      <nav>  
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction = 'left'}
            open={leftmobileOpen}
            onClose={handleLeftDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {leftDrawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
            anchor={theme.direction = 'left'}
          >
            {leftDrawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
            anchor={theme.direction = 'right'}
          >
            {rightDrawer}
          </Drawer>
        </Hidden>
      </nav>
      <div className={classes.toolbar} />
      <MainBody/>
    </div>
  );
}


export default PageFrame;
