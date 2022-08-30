import React, { useState } from 'react';
import NavigationBar from '../../components/Navigation/NavigationBar';
import Container from '@material-ui/core/Container';
import BannerImage from "../../external/images/fullBuilding_or_wideScene/wide1.JPG"
import BannerImage2 from "../../external/images/fullBuilding_or_wideScene/wide0.JPG"
import Colors from '../../components/Styles/colors';
import '../../components/Styles/fonts.scss';
import history from "../../utils/history";
import { Grid, Box, Tab, Tabs, makeStyles, AppBar, Typography, Hidden, Card, CardMedia } from '@material-ui/core';
import PropTypes from 'prop-types';
import InfoIcon from '@material-ui/icons/Info';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import CreateIcon from '@material-ui/icons/Create';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import NPA from "../../external/images/logos/NPA-color2.jpg";
import { linkButton } from '../../components/Styles/classes';

import { useTranslation } from 'react-i18next';
import i18n from "../../i18n";
import ReactGA from 'react-ga';
const TRACKING_ID = "G-5XZ1MYR9NS"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}>
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down('md')]: {
            overflowX: "hidden",    // needs to be hidden to display everything correctly, but sticky elements won't work when hidden
        },
        padding: 0,
        width: '100%',
        margin: "auto",
        flexGrow: 1,
        width: '100%',
    },
    banner: {
        [theme.breakpoints.down('sm')]: {
            height: 270,
            backgroundImage: "url(" + BannerImage2 + ")",
        },
        [theme.breakpoints.up('md')]: {
            height: 500,
            backgroundImage: "url(" + BannerImage + ")",
        },
        [theme.breakpoints.only('xl')]: {
            height: 700,
            backgroundImage: "url(" + BannerImage + ")",
        },
        backgroundPosition: "center 75%",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        zIndex: -1
        //backgroundSize: "100% 200%",
        //backgroundRepeat: "no-repeat",
    },
    /*bannerOverlay: {
      [theme.breakpoints.down('sm')]: {
        height: 270,
        backgroundImage: "url(" + overlayImageBottom + ")",
      },
      [theme.breakpoints.up('md')]: {
        height: 500,
        backgroundImage: "url(" + overlayImageBottom + ")",
      },
      //backgroundImage: "url(" + frontPageImage + ")",
      backgroundPosition: "center bottom",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      display: "flex",
      flexDirection: "column",
    },*/
    titleGrid: {
        [theme.breakpoints.down('sm')]: {
            height: "auto",
            maxWidth: "100%",
            borderLeft: "0px solid",
        },
        [theme.breakpoints.up('md')]: {
            height: "auto",
            maxWidth: "50%",
        },
        [theme.breakpoints.only('xl')]: {
            height: "auto",
            maxWidth: "35%",
        },
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "auto",
        marginBottom: theme.spacing(4),
        backgroundColor: "#000000D9",
        borderLeft: "7px solid",
        borderColor: Colors.primaryColor1,
        "&:hover": {
            cursor: "default"
        }
    },
    bannerHeader1: {
        [theme.breakpoints.down('sm')]: {
            fontSize: "1.5em",
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "3.2em",
        },
        marginTop: "auto",
        marginTop: theme.spacing(3),
        paddingLeft: theme.spacing(2),
        marginBottom: theme.spacing(2),
        fontFamily: 'Trebuchet MS',
        textTransform: "uppercase",
        letterSpacing: theme.spacing(-0.1),
        lineHeight: "90%",
        //textShadow:
        //    "-0.03em 0 black, 0 0.03em black, 0.03em 0 black, 0 -0.03em black",
        color: "white",
    },
    bannerHeader2: {
        [theme.breakpoints.down('sm')]: {
            fontSize: "1.2em",
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "2.2em",
        },
        marginTop: "auto",
        marginTop: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        marginBottom: theme.spacing(3),
        fontFamily: 'Trebuchet MS',
        textTransform: "none",
        letterSpacing: theme.spacing(0),
        lineHeight: "90%",
        //textShadow:
        //    "-0.03em 0 black, 0 0.03em black, 0.03em 0 black, 0 -0.03em black",
        color: "white",
    },
    interactiveImage: {
        //backgroundSize: "cover",
        //display: "flex",
        width: "100%",
        maxHeight: "20%",
        "&:hover": {
            cursor: "pointer",
            //scale: 1.5,
            //the image gets enlarged with firefox
            //nothing happens with chrome
        },
    },
    tabPanelContainer: {
        //flexGrow: 1,
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
        [theme.breakpoints.only('md')]: {
            //width: '90%',
            width: '85%',
        },
        [theme.breakpoints.only('lg')]: {
            //width: '70%',
            width: '70%',
        },
        [theme.breakpoints.only('xl')]: {
            //width: '70%',
            width: '65%',
        },
        margin: "0 auto", //centers tab panel horizontally
    },
    tabPanelBase: {
        marginTop: theme.spacing(-4),
        border: "4px solid",
        borderColor: Colors.primaryColor1,
        //borderRadius: 15,
        boxShadow: "0px 10px 10px -5px #00000040",
    },
    tabPanel: {
        [theme.breakpoints.up('md')]: {
            paddingLeft: 20,
            paddingRight: 20,
        },
        borderTop: "4px solid",
        borderTopColor: Colors.primaryColor1,
        backgroundColor: Colors.secondaryColor1,
    },
    tabStyle: {
        borderLeft: "4px solid",
        borderLeftColor: Colors.primaryColor1,
        opacity: "100%",
        '&.Mui-selected': {
            //backgroundColor: "white",
            borderLeft: "4px solid",
            borderLeftColor: Colors.primaryColor1,
        },
    },
    tabContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabIcon: {
        verticalAlign: 'middle',
        fontSize: 50,
        textAlign: "center",
    },
    tabTitle: {
        [theme.breakpoints.only('xs')]: {
            fontSize: 0,
            lineHeight: "0%"
        },
        [theme.breakpoints.only('sm')]: {
            textAlign: "center",
            fontSize: 20,
            textTransform: "none",
            lineHeight: "115%",
        },
        [theme.breakpoints.up('md')]: {
            textAlign: "left",
            textTransform: "none",
            fontSize: 22,
            lineHeight: "115%"
        },
        [theme.breakpoints.up('lg')]: {
            textAlign: "left",
            textTransform: "none",
            fontSize: 24,
            lineHeight: "115%"
        },
        margin: 0,
    },
    logo: {
        margin: theme.spacing(1),
        marginTop: theme.spacing(-1),
        marginBottom: theme.spacing(-1),
        padding: theme.spacing(2),
    },
    image: {
        width: "95%",
        display: "block",
        margin: "auto"
    },
    linkButton: linkButton,
}));

const FrontPage = () => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

const redirectTo = (addr) => {
    history.push("#/"+addr);
    history.go(0);
    window.scrollTo(0, 0);
};

    const { t } = useTranslation();

    const onMouseOverButton = event => {
        const el = event.currentTarget;
        el.style.cursor = "pointer";
    };

    return (<Container maxWidth={false} className={classes.root}>
        <NavigationBar />
        <Grid container justify="center">
            <Grid item xs={12} className={classes.banner}>
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justify="center"
                    className={classes.titleGrid}>
                    <Typography align="left">
                        <p className={classes.bannerHeader1} variant="h1">{t('header1', { ns: 'frontpageT' })}</p>
                        <p className={classes.bannerHeader2} variant="h1">{t('subheader1', { ns: 'frontpageT' })}</p>
                    </Typography>
                </Grid>
                <div className={classes.bannerOverlay}>
                </div>
            </Grid>
        </Grid>
        <div className={classes.tabPanelContainer}>
            <div className={classes.tabPanelBase}>
                <AppBar position="static" color="default">
                    <Tabs
                        centered
                        variant="fullWidth"
                        value={value}
                        onChange={handleChange}
                        TabIndicatorProps={{ style: { background: Colors.primaryColor1, height: "4px" } }}>
                        <Tab className={classes.tabStyle} style={{ backgroundColor: "white", borderLeft: "0px solid" }} label={
                            <React.Fragment>
                                <Grid
                                    container
                                    direction="row"
                                    spacing={0}
                                    className={classes.tabContainer}>
                                    <Grid item sm={10} md={5} lg={3}>
                                        <InfoIcon className={classes.tabIcon} style={{ color: Colors.primaryColor1 }} />
                                    </Grid>
                                    <Grid item sm={11} md={7} lg={9} style={{ color: Colors.primaryColor1 }} className={classes.tabTitle}>
                                        {t('tab1', { ns: 'frontpageT' })}
                                    </Grid>
                                </Grid>
                            </React.Fragment>} {...a11yProps(0)} />
                        <Tab className={classes.tabStyle} style={{ backgroundColor: Colors.themeRetrofitting }} label={
                            <React.Fragment>
                                <Grid
                                    container
                                    direction="row"
                                    spacing={0}
                                    className={classes.tabContainer}>
                                    <Grid item sm={10} md={5} lg={3}>
                                        <LibraryBooksIcon className={classes.tabIcon} style={{ color: Colors.themeCaseStudies }} />
                                    </Grid>
                                    <Grid item sm={11} md={7} lg={9} style={{ color: Colors.themeCaseStudies }} className={classes.tabTitle}>
                                        {t('tab2', { ns: 'frontpageT' })}
                                    </Grid>
                                </Grid>
                            </React.Fragment>} {...a11yProps(1)} />
                        <Tab className={classes.tabStyle} style={{ backgroundColor: Colors.themeProjects }} label={
                            <React.Fragment>
                                <Grid
                                    container
                                    direction="row"
                                    spacing={0}
                                    className={classes.tabContainer}>
                                    <Grid item sm={10} md={5} lg={3}>
                                        <CreateIcon className={classes.tabIcon} style={{ color: "white" }} />
                                    </Grid>
                                    <Grid item sm={11} md={7} lg={9} style={{ color: "white" }} className={classes.tabTitle}>
                                        {t('tab3', { ns: 'frontpageT' })}
                                    </Grid>
                                </Grid>
                            </React.Fragment>} {...a11yProps(2)} />
                        <Tab className={classes.tabStyle} style={{ backgroundColor: Colors.themeCaseStudies, borderRight: "0px solid" }} label={
                            <React.Fragment>
                                <Grid
                                    container
                                    direction="row"
                                    spacing={0}
                                    className={classes.tabContainer}>
                                    <Grid item sm={10} md={5} lg={3}>
                                        <HomeWorkIcon className={classes.tabIcon} style={{ color: "white" }} />
                                    </Grid>
                                    <Grid item sm={11} md={7} lg={9} style={{ color: "white" }} className={classes.tabTitle}>
                                        {t('tab4', { ns: 'frontpageT' })}
                                    </Grid>
                                </Grid>
                            </React.Fragment>} {...a11yProps(3)} />
                    </Tabs>
                </AppBar>
                <TabPanel className={classes.tabPanel} value={value} index={0}>
                    <p className="baseText"> {t('tab1text1', { ns: 'frontpageT' })}</p>
                    <p className="baseText"> {t('tab1text2', { ns: 'frontpageT' })}</p>
                    <p className="baseText">
                        {t('tab1text3', { ns: 'frontpageT' })}
                        <ul style={{ listStyle: 'disc', listStylePosition: "inside", margin: 0 }}>
                            <li className="listItem">
                                <b>{t('tab1text4', { ns: 'frontpageT' })}</b>
                                {t('tab1text5', { ns: 'frontpageT' })}
                            </li>

                            <li className="listItem">
                                <b>{t('tab1text6', { ns: 'frontpageT' })}</b>
                                {t('tab1text7', { ns: 'frontpageT' })}
                            </li>
                            <li className="listItem">
                                <b>{t('tab1text8', { ns: 'frontpageT' })}</b>
                                {t('tab1text9', { ns: 'frontpageT' })}
                            </li>
                        </ul>
                    </p>
                    <p className="baseText" style={{ fontSize: 16 }}> {t('tab1text10', { ns: 'frontpageT' })}</p>
                    <p> <a href="./rmanual.pdf" target="_blank">Renovation Manual</a> </p>
                    <p className="baseText" style={{ fontSize: 16, marginTop: "2.2rem" }}> {t('tab1text11', { ns: 'frontpageT' })}</p>
                   

                </TabPanel>
                <TabPanel className={classes.tabPanel} value={value} index={1}>
                    <Grid container direction="column">
                        <Grid item>
                            <p className="baseText">
                                {t('tab2text1', { ns: 'frontpageT' })}
                                <i>
                                    {t('tab2text2', { ns: 'frontpageT' })}
                                </i>
                                {t('tab2text3', { ns: 'frontpageT' })}
                                <i>
                                    {t('tab2text4', { ns: 'frontpageT' })}
                                </i>
                            </p>
                            <p className="baseText"> {t('tab2text5', { ns: 'frontpageT' })}</p>
                        </Grid>
                        <Grid item
                            container justify="flex-end">
                            <button className={classes.linkButton}
                                onMouseEnter={event => onMouseOverButton(event)}
                                onClick={() => {
                                    redirectTo("retrofit");
                                }}>
                                {t('tab2button', { ns: 'frontpageT' })}
                            </button>
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel className={classes.tabPanel} value={value} index={2}>
                    <Grid container direction="column">
                        <Grid item>
                            <p className="baseText">{t('tab3text1', { ns: 'frontpageT' })}</p>
                            <p className="baseText">{t('tab3text2', { ns: 'frontpageT' })}</p>
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            alignItems="center"
                            justify="flex-end">

                            <Grid item>
                                <button className={classes.linkButton}
                                    onMouseEnter={event => onMouseOverButton(event)}
                                    onClick={() => {
                                        redirectTo("stepperForm");
                                    }}>
                                    {t('tab3button1', { ns: 'frontpageT' })}
                                </button>
                            </Grid>


                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel className={classes.tabPanel} value={value} index={3}>
                    <Grid container direction="column">
                        <Grid item className="baseText">
                            {t('tab2text1', { ns: 'frontpageT' })}
                        </Grid>
                        <Grid item
                            container justify="flex-end">
                            <button className={classes.linkButton}
                                onMouseEnter={event => onMouseOverButton(event)}
                                onClick={() => {
                                    redirectTo("caseStudies");
                                }}>
                                {t('tab4button', { ns: 'frontpageT' })}
                            </button>
                        </Grid>
                    </Grid>
                </TabPanel>
            </div>
        </div>
        <br></br>
        <Hidden smUp>
            <Card className={classes.logo}>
                <CardMedia>
                    <img src={NPA} className={classes.image} />
                </CardMedia>
            </Card>
        </Hidden>
        <br></br>
    </Container>
    );
};

export default FrontPage;