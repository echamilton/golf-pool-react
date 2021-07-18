import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import GolfCourseIcon from "@material-ui/icons/GolfCourse";
import AccountCircle from "@material-ui/icons/AccountCircle";
import RefreshIcon from "@material-ui/icons/Refresh";
import EditIcon from "@material-ui/icons/Edit";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    backgroundColor: "#3598b6",
  },
  title: {
    flexGrow: 1,
    fontWeight: 600,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleRefresh = (event) => {
    console.log("refresh clicked", event);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            443 Fantasy Golf
          </Typography>
          {
            <div>
              <IconButton
                aria-label="refresh golf scores"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleRefresh}
                component={Link}
                to="/leaderboard"
                color="inherit"
              >
                <RefreshIcon />
              </IconButton>
              <IconButton
                aria-label="navigate to dashboard"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                component={Link}
                to="/leaderboard"
                color="inherit"
              >
                <GolfCourseIcon />
              </IconButton>
              <IconButton
                aria-label="navigate to user picks"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                component={Link}
                to="/picks"
                color="inherit"
              >
                <EditIcon />
              </IconButton>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem component={Link} to="/login" onClick={handleClose}>
                  Login
                </MenuItem>
                <MenuItem component={Link} to="/sign-up" onClick={handleClose}>
                  Sign Up
                </MenuItem>
                <MenuItem component={Link} to="/reset" onClick={handleClose}>
                  Reset Password
                </MenuItem>
              </Menu>
            </div>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}
