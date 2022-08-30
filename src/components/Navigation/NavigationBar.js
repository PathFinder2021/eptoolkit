import React, { useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LanguageIcon from '@material-ui/icons/Language';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import MuiAlert from "@material-ui/lab/Alert";

import { TextField, Menu, MenuItem, Grid, Button, makeStyles, AppBar, Card, CardMedia, Toolbar, Snackbar, InputAdornment, Hidden, } from '@material-ui/core';

import history from "../../utils/history";

import { useAuth0 } from "../../utils/react-auth0-spa";

import PathfinderLogo from "../../external/images/logos/energypathfinder.png";
import NPA from "../../external/images/logos/NPA.png";
import NorthernPeriferyLogo from "../../external/images/logos/northernperiphery.jpg";
import EuropeanUnionLogo from "../../external/images/logos/europeanunion.jpg";
import Colors from '../Styles/colors';
import '../../components/Styles/fonts.scss';

import { useTranslation } from 'react-i18next';
import i18next from "i18next";
import 'flag-icon-css/css/flag-icons.css';
import cookies from 'js-cookie';

const languages = [
  {
    code: 'en',
    name: 'English',
    country_code: 'gb'
  },
  {
    code: 'fi',
    name: 'Suomi',
    country_code: 'fi'
  }
];

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  navbar: {
    [theme.breakpoints.down('sm')]: {
      height: "6vh",
    },
    [theme.breakpoints.only('md')]: {
      height: "8vh",
    },
    [theme.breakpoints.up('lg')]: {
      height: "12vh",
    },
    boxShadow: "0px 1px 0px #00000040",
    backgroundColor: Colors.primaryColor1,
    //color: "#000000D9"
  },
  navButton: {
    [theme.breakpoints.down('sm')]: {
      marginRight: "-7vw",
    },
    [theme.breakpoints.only('sm')]: {
      marginRight: "-6.2vw",
      marginLeft: "0.5vw",
    },
    width: "75%",
    "&:hover": {
      backgroundColor: Colors.primaryColorHover,
    },
  },
  navIcon: {
    fontSize: 55
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.pxToRem(22),
    },
    [theme.breakpoints.up('md')]: {
      fontSize: theme.typography.pxToRem(26),
    },
    cursor: "pointer",
    fontFamily: 'Trebuchet MS',
    //fontSize: "2.5em",
    letterSpacing: theme.spacing(-0.1),
    marginRight: theme.spacing(1.5),
  },
  logoContainer: {
    [theme.breakpoints.up('lg')]: {
      marginRight: theme.spacing(8),
    },
    [theme.breakpoints.only('md')]: {
      marginRight: theme.spacing(4),
    },
    marginRight: theme.spacing(2),
  },
  languageDropdownContainer: {
    [theme.breakpoints.up('lg')]: {
      marginRight: theme.spacing(4),
    },
    width: "auto",
    marginRight: theme.spacing(2),
  },
  logo: {
    margin: theme.spacing(1),
    padding: theme.spacing(0.5),
    maxHeight: "10vh"
  },
  image: {
    [theme.breakpoints.only('xs')]: {
      height: "0vh",
    },
    [theme.breakpoints.only('sm')]: {
      //height: "0vh",
      height: "6vh",
      //marginLeft: "14vw",
      //paddingRight: 0,
    },
    [theme.breakpoints.only('md')]: {
      height: "7vh",
      //marginLeft: "18vw",
    },
    [theme.breakpoints.up('lg')]: {
      height: "9vh",
      //marginLeft: "30vw",
    },
  },
  EPlogo: {
    [theme.breakpoints.down('sm')]: {
      left: "2vw",
      top: "1vh",
      position: "absolute",
    },
    [theme.breakpoints.only('md')]: {
      left: "4vw",
      top: "1.5vh",
      position: "absolute",
    },
    [theme.breakpoints.up('lg')]: {
      left: "5vw",
      top: "2vh",
      position: "absolute",
    },
    borderRadius: 15,
    boxShadow: "0px 0px 10px 1px rgba(0, 0, 0, 0.5)",
    "&:hover": {
      cursor: "pointer",
    },
  },
  image1: {
    [theme.breakpoints.down('sm')]: {
      height: "10vh",
    },
    [theme.breakpoints.only('md')]: {
      height: "14vh",
    },
    [theme.breakpoints.only('lg')]: {
      height: "18vh",
    },
    [theme.breakpoints.only('xl')]: {
      height: "17vh",
    },
    width: "auto",
    objectFit: "contain"
  },
}));

const NavigationBar = (props) => {
  const { loading, isAuthenticated, loginWithRedirect, logout, isAdmin } = useAuth0();

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [logoutAlert, setLogoutAlert] = useState(false);

  const handleMenuClose = (event) => {
    setAnchorEl(null);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const redirectTo = (addr) => {
    history.push("#/"+addr);
    history.go(0);
    window.scrollTo(0, 0);
};

  const currentLanguageCode = cookies.get('i18next') || 'en';

  const { t } = useTranslation();

  const _logoutAlertClose = () => {
    setLogoutAlert(false);
  };

  return (
    <AppBar position="static">
      <Toolbar className={classes.navbar}>

        <Card className={classes.EPlogo}
          onClick={() => {
            redirectTo("");
            history.go(0);
          }}>

          <CardMedia>
            <img src={PathfinderLogo} className={classes.image1} />
          </CardMedia>
        </Card>

        <Grid className={classes.logoContainer}
          container
          direction="row"
          alignItems="flex-end"
          justify="flex-end">
          <img src={NPA} className={classes.image} />
        </Grid>

        <Hidden lgUp>
          <Grid className={classes.languageDropdownContainer}
            container
            direction="row"
            alignItems="flex-end"
            justify="flex-end">
            <div>
              <TextField style={{ backgroundColor: "white", borderRadius: "5px" }}
                id="select-language"
                select
                name="country"
                value={currentLanguageCode}
                variant="outlined"
                fullWidth="false"
                size="small"
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  },
                  renderValue: option => currentLanguageCode // Having this prevents the selection + flag from showing
                }}
              >
                {languages.map((option) => (
                  <MenuItem key={option.country_code} value={option.code}
                    onClick={() => i18next.changeLanguage(option.code)}
                    disabled={option.code === currentLanguageCode}>
                    <span className={`flag-icon flag-icon-${option.country_code}`} style={{ marginRight: "10px", opacity: option.code === currentLanguageCode ? 0.5 : 1 }}></span>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </Grid>
        </Hidden>

        <Hidden mdDown>
          <Grid className={classes.languageDropdownContainer}
            container
            direction="row"
            alignItems="flex-end"
            justify="flex-end">
            <div>
              <TextField style={{ backgroundColor: "white", borderRadius: "5px" }}
                id="select-language"
                select
                name="country"
                value={currentLanguageCode}
                variant="outlined"
                fullWidth="false"
                size="small"
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  },
                  renderValue: option => currentLanguageCode // Having this prevents the selection + flag from showing
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LanguageIcon style={{ color: "dodgerblue" }} />
                    </InputAdornment>
                  ),
                }}
              >
                {languages.map((option) => (
                  <MenuItem key={option.country_code} value={option.code}
                    onClick={() => i18next.changeLanguage(option.code)}
                    disabled={option.code === currentLanguageCode}>
                    <span className={`flag-icon flag-icon-${option.country_code}`} style={{ marginRight: "10px", opacity: option.code === currentLanguageCode ? 0.5 : 1 }}></span>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </Grid>
        </Hidden>

        {isAdmin && <IconButton
          onClick={() => {
            redirectTo("/admin");
          }}
          color="inherit"
          className={classes.navButton}>
          <VpnKeyIcon />
        </IconButton>
        }

        
      </Toolbar>


    </AppBar>
  );
};

export default NavigationBar;