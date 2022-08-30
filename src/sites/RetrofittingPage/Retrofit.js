import React from "react";
import NavigationBar from "../../components/Navigation/NavigationBar2"; // yellow navbar
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";
import history from "../../utils/history";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import InfoIcon from '@material-ui/icons/Info';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import HouseIcon from '@material-ui/icons/House';
import HighlightIcon from '@material-ui/icons/Highlight';
import BatteryChargingFullIcon from '@material-ui/icons/BatteryChargingFull';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Hidden from '@material-ui/core/Hidden';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import BannerImage from "../../external/images/fullBuilding_or_wideScene/rectors_house_outside1.JPG"
import image1 from "../../external/images/misc/workers0.png"
import image2 from "../../external/images/misc/workers0.png"
import image3 from "../../external/images/misc/house1.png"
import Colors from '../../components/Styles/colors';
import '../../components/Styles/fonts.scss';
import { retrofitLinkButton } from '../../components/Styles/classes';
import './Link.scss'

import { useTranslation } from 'react-i18next';

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
        },
        [theme.breakpoints.up('md')]: {
            height: 500,
        },
        [theme.breakpoints.only('xl')]: {
            height: 700,
        },
        backgroundImage: "url(" + BannerImage + ")",
        backgroundPosition: "center 33%",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        zIndex: -1
    },
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
    paper: {
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
        [theme.breakpoints.up('md')]: {
            width: '75%',
        },
        marginTop: theme.spacing(0),
        marginBottom: theme.spacing(0),
        borderRadius: 0,
    },
    navBox: {
        [theme.breakpoints.down('md')]: {
            width: '0px',
            height: '0px',
            visibility: "hidden"
        },
        [theme.breakpoints.up('lg')]: {
            width: 'auto',
            visibility: "visible"
        },
        "&:hover": {
            cursor: "default"
        }
    },
    tabPanelContainer: {
        width: '100%',
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
            padding: 20,
        },
        borderTop: "4px solid",
        borderTopColor: Colors.primaryColor1,
        backgroundColor: "white",
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
        fontSize: 40,
        textAlign: "center",
    },
    tabTitle: {
        [theme.breakpoints.down('sm')]: {
            fontSize: 18,
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 20,
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: 22,
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
        margin: 0,
        textAlign: "center",
        textTransform: "none",
        lineHeight: "115%"
    },
    tabPanelHeader: {
        [theme.breakpoints.down('md')]: {
            fontSize: 18,
        },
        fontSize: 22,
        color: "black",
        margin: 0,
    },
    tabPanelText2: {
        [theme.breakpoints.only('sm')]: {
            marginLeft: 0,
            marginRight: 0,
        },
        [theme.breakpoints.down('md')]: {
            fontSize: 16,
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        fontSize: 18,
        color: "black",
    },
    carouselBase: {
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
        [theme.breakpoints.only('md')]: {
            //width: '90%',
            width: '95%',
        },
        [theme.breakpoints.only('lg')]: {
            //width: '70%',
            width: '93%',
        },
        [theme.breakpoints.only('xl')]: {
            //width: '70%',
            width: '87%',
        },
        minHeight: 200,
        borderRadius: 15,
        borderTopRightRadius: 0,
        border: "3px solid",
        borderColor: Colors.primaryColor1,
        //borderRadius: 15,
        margin: "0 auto", //centers tab panel horizontally
        marginTop: theme.spacing(-4),
        boxShadow: "0px 10px 10px -5px #00000040",
        backgroundColor: "white",
    },
    carouselImage: {
        [theme.breakpoints.down('md')]: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(3),
            width: "40%",
        },
        [theme.breakpoints.only('xs')]: {
            width: "70%",
        },
        display: "block",
        width: "100%",
        height: "auto",
        margin: "auto",
        //margin: 0,
        //paddingTop: 40,
    },
    carouselHeader: {
        [theme.breakpoints.only('md')]: {
            paddingLeft: theme.spacing(3),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 24,
        },
        fontSize: 20,
        color: Colors.primaryColor1,
        margin: 0,
        padding: 0,
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
    },
    carouselHeaderSecond: {
        [theme.breakpoints.up('md')]: {
            fontSize: 24,
            paddingLeft: theme.spacing(3),
        },
        fontSize: 20,
        color: Colors.primaryColor1,
        margin: 0,
        padding: 0,
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
    },
    carouselTextFirst: {
        [theme.breakpoints.up('md')]: {
            marginLeft: theme.spacing(6),
            fontSize: 18,
        },
        fontSize: 16,
        color: "black",
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
    },
    carouselText: {
        [theme.breakpoints.up('md')]: {
            fontSize: 18,
        },
        fontSize: 16,
        color: "black",
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
    },
    carouselLink: {
        [theme.breakpoints.up('md')]: {
            fontSize: 18,
        },
        fontSize: 16,
        color: Colors.primaryColor1,
        marginLeft: theme.spacing(3),
        textIndent: theme.spacing(-3),
        marginRight: theme.spacing(3),
        fontWeight: "bold",
        margin: 0,
        padding: 0,
        "&:hover": {
            color: Colors.primaryColorHover,
            cursor: "pointer",
            textDecoration: "underline",
        },
    },
    carouselArrowText: {
        [theme.breakpoints.down('sm')]: {
            marginBottom: theme.spacing(3),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 18,
        },
        paddingLeft: theme.spacing(3),
        fontSize: 16,
        marginLeft: theme.spacing(3),
        textIndent: theme.spacing(-3),
        marginRight: theme.spacing(3),
        margin: 0,
        padding: 0,
        "&:link": {
            color: Colors.primaryColor1,
        },
    },
    arrowIcon: {
        [theme.breakpoints.up('md')]: {
            fontSize: 18,
        },
        color: "black",
        fontSize: 16,
        verticalAlign: "middle",
        //borderRadius: 100,
        //backgroundColor: Colors.gray1
    },
    boxGrid: {
        [theme.breakpoints.only('md')]: {
            //width: '90%',
        },
        [theme.breakpoints.only('lg')]: {
            //width: '70%',
        },
        [theme.breakpoints.only('xl')]: {
            //width: '70%',
        },
    },
    boxImage: {
        [theme.breakpoints.down('md')]: {
            marginTop: theme.spacing(5),
            width: "60%",
        },
        [theme.breakpoints.only('xs')]: {
            marginTop: theme.spacing(5),
            width: "90%",
        },
        display: "block",
        width: "75%",
        height: "auto",
        margin: "auto",
        zIndex: -1,
        //margin: 0,
        //paddingTop: 40,
    },
    boxHeader: {
        [theme.breakpoints.up('lg')]: {
            marginLeft: theme.spacing(4),
            marginRight: theme.spacing(4),
            marginTop: theme.spacing(-5),
            fontSize: 24,
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: theme.spacing(4),
            marginRight: theme.spacing(4),
            marginTop: theme.spacing(-3),
            fontSize: 24,
        },
        [theme.breakpoints.only('xs')]: {
            marginLeft: theme.spacing(3),
            marginRight: theme.spacing(3),
            fontSize: 21,
        },
        fontSize: 26,
        color: "black",
        margin: 0,
        padding: 0,
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
    },
    boxText: {
        [theme.breakpoints.down('md')]: {
            marginLeft: theme.spacing(4),
            marginRight: theme.spacing(4),
            fontSize: 16,
        },
        [theme.breakpoints.only('xs')]: {
            marginLeft: theme.spacing(3),
            marginRight: theme.spacing(3),
        },
        fontSize: 18,
        color: "black",
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(5),
    },
    boxLink: {
        [theme.breakpoints.down('md')]: {
            marginLeft: theme.spacing(4),
            marginRight: theme.spacing(4),
            fontSize: 16,
        },
        [theme.breakpoints.only('xs')]: {
            marginLeft: theme.spacing(3),
            marginRight: theme.spacing(3),
        },
        fontSize: 18,
        paddingLeft: theme.spacing(3),
        color: Colors.primaryColor1,
        marginLeft: theme.spacing(3),
        textIndent: theme.spacing(-3),
        marginRight: theme.spacing(3),
        fontWeight: "bold",
        margin: 0,
        padding: 0,
    },
    boxIcon: {
        [theme.breakpoints.up('md')]: {
            fontSize: 18,
        },
        color: Colors.gray1,
        fontSize: 16,
        verticalAlign: "middle",
        //borderRadius: 100,
        //backgroundColor: Colors.gray1,
    },
    retrofitLinkButton: retrofitLinkButton,
}));

const redirectTo = (addr) => {
    history.push("#/"+addr);
    history.go(0);
    window.scrollTo(0, 0);
};

const onMouseOverButton = event => {
    const el = event.currentTarget;
    el.style.cursor = "pointer";
};

const Retrofit = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const { t } = useTranslation();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
            <NavigationBar />
            <Grid container justify="center">
                <Grid item xs={12} className={classes.banner}>
                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                        justify="center"
                        className={classes.titleGrid}>
                        <Typography align="left" >
                            <p className="bannerText">{t('header1', { ns: 'rMain' })}</p>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justify="center">
                <Paper className={classes.paper}>
                    <div className={classes.tabPanelContainer}>
                        <div className={classes.tabPanelBase}>
                            <AppBar position="static" color="default">
                                <Hidden smUp>
                                    <Tabs
                                        centered
                                        variant="fullWidth"
                                        value={value}
                                        onChange={handleChange}
                                        TabIndicatorProps={{ style: { background: Colors.primaryColor1, height: "4px" } }}>
                                        <Tab className={classes.tabStyle} style={{ backgroundColor: "white", borderLeft: "0px solid" }} label={
                                            <InfoIcon className={classes.tabIcon} style={{ color: Colors.primaryColor1 }} />}
                                            {...a11yProps(0)} />
                                        <Tab className={classes.tabStyle} style={{ backgroundColor: Colors.themeRetrofitting }} label={
                                            <PeopleAltIcon className={classes.tabIcon} style={{ color: Colors.themeCaseStudies }} />}
                                            {...a11yProps(1)} />
                                        <Tab className={classes.tabStyle} style={{ backgroundColor: Colors.themeProjects }} label={
                                            <HouseIcon className={classes.tabIcon} style={{ color: "white" }} />}
                                            {...a11yProps(2)} />
                                        <Tab className={classes.tabStyle} style={{ backgroundColor: Colors.themeCaseStudies }} label={
                                            <HighlightIcon className={classes.tabIcon} style={{ color: "white" }} />}
                                            {...a11yProps(3)} />
                                        <Tab className={classes.tabStyle} style={{ backgroundColor: Colors.themeImproving, borderRight: "0px solid" }} label={
                                            <BatteryChargingFullIcon className={classes.tabIcon} style={{ color: "white" }} />}
                                            {...a11yProps(4)} />
                                    </Tabs>
                                </Hidden>
                                <Hidden xsDown>
                                    <Tabs
                                        centered
                                        variant="fullWidth"
                                        value={value}
                                        onChange={handleChange}
                                        TabIndicatorProps={{ style: { background: Colors.primaryColor1, height: "4px" } }}>
                                        <Tab className={classes.tabStyle} style={{ backgroundColor: "white", borderLeft: "0px solid" }} label={
                                            <React.Fragment>
                                                <Grid item lg={11}>
                                                    <p className={classes.tabTitle} style={{ color: Colors.primaryColor1 }}>
                                                        {t('tab1', { ns: 'rMain' })}
                                                    </p>
                                                </Grid>
                                            </React.Fragment>} {...a11yProps(0)} />
                                        <Tab className={classes.tabStyle} style={{ backgroundColor: Colors.themeRetrofitting }} label={
                                            <React.Fragment>
                                                <Grid item lg={11}>
                                                    <p className={classes.tabTitle} style={{ color: Colors.themeCaseStudies }}>
                                                        {t('tab2', { ns: 'rMain' })}
                                                    </p>
                                                </Grid>
                                            </React.Fragment>} {...a11yProps(1)} />
                                        <Tab className={classes.tabStyle} style={{ backgroundColor: Colors.themeProjects }} label={
                                            <React.Fragment>
                                                <Grid item lg={11}>
                                                    <p className={classes.tabTitle} style={{ color: "white" }}>
                                                        {t('tab3', { ns: 'rMain' })}
                                                    </p>
                                                </Grid>
                                            </React.Fragment>} {...a11yProps(2)} />
                                        <Tab className={classes.tabStyle} style={{ backgroundColor: Colors.themeCaseStudies }} label={
                                            <React.Fragment>
                                                <Grid item lg={11}>
                                                    <p className={classes.tabTitle} style={{ color: "white" }}>
                                                        {t('tab4', { ns: 'rMain' })}
                                                    </p>
                                                </Grid>
                                            </React.Fragment>} {...a11yProps(3)} />
                                        <Tab className={classes.tabStyle} style={{ backgroundColor: Colors.themeImproving, borderRight: "0px solid" }} label={
                                            <React.Fragment>
                                                <Grid item lg={11}>
                                                    <p className={classes.tabTitle} style={{ color: "white" }}>
                                                        {t('tab5', { ns: 'rMain' })}
                                                    </p>
                                                </Grid>
                                            </React.Fragment>} {...a11yProps(4)} />
                                    </Tabs>
                                </Hidden>
                            </AppBar>
                            <TabPanel className={classes.tabPanel} value={value} index={0}>
                                <Grid
                                    container
                                    direction="column">
                                    <Grid
                                        container
                                        direction="row"
                                        alignItems="start"
                                        justifyContent="center">
                                        <Grid item md={0} lg={3}>
                                            <img src={image1} className={classes.carouselImage}>
                                            </img>
                                        </Grid>
                                        <Grid item lg={9}>

                                            <p className={classes.carouselHeader}>
                                                {t('tab1header1', { ns: 'rMain' })}
                                            </p>
                                            <p className={classes.carouselHeaderSecond}>
                                                {t('tab1header2', { ns: 'rMain' })}
                                            </p>
                                            <p className={classes.carouselTextFirst}>{t('tab1text1', { ns: 'rMain' })}</p>
                                            <p className={classes.carouselTextFirst}>
                                                {t('tab1text2', { ns: 'rMain' })}
                                                <i>
                                                    {t('tab1text3', { ns: 'rMain' })}
                                                </i>
                                                {t('tab1text4', { ns: 'rMain' })}
                                                <i>
                                                    {t('tab1text5', { ns: 'rMain' })}
                                                </i>
                                            </p>
                                        </Grid>
                                    </Grid>
                                    <br></br>
                                    <Grid
                                        container
                                        direction="row"
                                        alignItems="start"
                                        justifyContent="center">
                                        <Grid item md={6}>
                                            <Grid item xs={12}
                                                direction="row"
                                                align="left"
                                                justify="flex-start">
                                                <p className={classes.carouselArrowText}> <ArrowForwardIcon className={classes.arrowIcon} />
                                                    <b>
                                                        {t('tab1text6', { ns: 'rMain' })}
                                                    </b>
                                                    {t('tab1text7', { ns: 'rMain' })}
                                                    <br></br><br></br>
                                                    <small>
                                                        {t('tab1text8', { ns: 'rMain' })}
                                                    </small>
                                                </p>
                                            </Grid>
                                        </Grid>
                                        <Grid item md={6}>
                                            <Grid item xs={12}
                                                direction="row"
                                                align="left"
                                                justify="flex-start">
                                                <p className={classes.carouselArrowText}> <ArrowForwardIcon className={classes.arrowIcon} />
                                                    {t('tab1text9', { ns: 'rMain' })}
                                                    <b>
                                                        {t('tab1text10', { ns: 'rMain' })}
                                                    </b>
                                                    {t('tab1text11', { ns: 'rMain' })}
                                                    <br></br><br></br>
                                                    <small>
                                                        {t('tab1text12', { ns: 'rMain' })}
                                                        <a className="s_link" href="#stepperForm">
                                                            {t('tab1text13', { ns: 'rMain' })}
                                                        </a></small></p>

                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </TabPanel>

                            <TabPanel className={classes.tabPanel} value={value} index={1}>
                                <Grid
                                    container
                                    direction="column">
                                    <Grid
                                        container
                                        direction="row"
                                        alignItems="start"
                                        justifyContent="center">
                                        <Grid item md={0} lg={3}>
                                            <img src={image2} className={classes.carouselImage}>
                                            </img>
                                        </Grid>
                                        <Grid item md={12} lg={9}>
                                            <p className={classes.carouselHeader} style={{ color: Colors.themeCaseStudies }}>
                                                {t('tab2header1', { ns: 'rMain' })}</p>
                                            <p className={classes.carouselHeaderSecond} style={{ color: Colors.themeCaseStudies }}>
                                                {t('tab2header2', { ns: 'rMain' })}</p>
                                            <p className={classes.carouselTextFirst}>
                                                {t('tab2text1', { ns: 'rMain' })}</p>
                                            <p className={classes.carouselTextFirst}>
                                                {t('tab2text2', { ns: 'rMain' })}</p>
                                        </Grid>
                                    </Grid>

                                    <p className={classes.carouselText}>
                                        <b>
                                            {t('tab2subheader1', { ns: 'rMain' })}
                                        </b>
                                    </p>

                                    <Grid
                                        container
                                        direction="row"
                                        alignItems="start"
                                        justifyContent="center">
                                        <Grid
                                            container
                                            direction="column"
                                            item md={6}>

                                            <div
                                                onClick={() => {
                                                    redirectTo("retrofittingTestOptions");
                                                }}>
                                                <Grid item xs={12}
                                                    direction="row"
                                                    align="left"
                                                    justify="flex-start">
                                                    <p className={classes.carouselLink}> <ArrowForwardIcon className={classes.arrowIcon} />
                                                        {t('tab2subheader2', { ns: 'rMain' })}
                                                    </p>
                                                </Grid>
                                            </div>
                                            <p className={classes.carouselText} style={{ marginTop: "0.2rem" }}>
                                                {t('tab2BCtext1', { ns: 'rMain' })}
                                            </p>

                                            <div
                                                onClick={() => {
                                                    redirectTo("retrofittingCommunityOptions");
                                                }}>
                                                <Grid item xs={12}
                                                    direction="row"
                                                    align="left"
                                                    justify="flex-start">
                                                    <p className={classes.carouselLink}> <ArrowForwardIcon className={classes.arrowIcon} />
                                                        {t('tab2subheader3', { ns: 'rMain' })}
                                                    </p>
                                                </Grid>
                                            </div>
                                            <p className={classes.carouselText} style={{ marginTop: "0.2rem" }}>
                                                {t('tab2CEEtext1', { ns: 'rMain' })}
                                            </p>
                                        </Grid>
                                        <Grid
                                            container
                                            direction="column"
                                            item md={6}>
                                            <div
                                                onClick={() => {
                                                    redirectTo("retrofitMeasure1");
                                                }}>
                                                <Grid item xs={12}
                                                    direction="row"
                                                    align="left"
                                                    justify="flex-start">
                                                    <p className={classes.carouselLink}> <ArrowForwardIcon className={classes.arrowIcon} />
                                                        {t('tab2subheader4', { ns: 'rMain' })}
                                                    </p>
                                                </Grid>
                                            </div>
                                            <p className={classes.carouselText} style={{ marginTop: "0.2rem" }}>
                                                {t('tab2BPtext1', { ns: 'rMain' })}
                                            </p>

                                            <div
                                                onClick={() => {
                                                    redirectTo("retrofittingExternalWallsOptions");
                                                }}>
                                                <Grid item xs={12}
                                                    direction="row"
                                                    align="left"
                                                    justify="flex-start">
                                                    <p className={classes.carouselLink}> <ArrowForwardIcon className={classes.arrowIcon} />
                                                        {t('tab2subheader5', { ns: 'rMain' })}</p>
                                                </Grid>
                                            </div>
                                            <p className={classes.carouselText} style={{ marginTop: "0.2rem" }}>
                                                {t('tab2Htext1', { ns: 'rMain' })}
                                            </p>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </TabPanel>

                            <TabPanel className={classes.tabPanel} value={value} index={2}>
                                <Grid
                                    container
                                    direction="row"
                                    alignItems="center"
                                    justifyContent="center"
                                    spacing={1}
                                    className={classes.boxGrid}>

                                    <Grid item xs={12} lg={5} container>
                                        <div style={{ position: "relative" }}>
                                            <img src={image3} className={classes.boxImage}>
                                            </img>

                                            <Hidden smUp>
                                                <button className={classes.retrofitLinkButton}
                                                    style={{
                                                        left: "50%",
                                                        transform: "translateX(-50%)",
                                                        top: "7%",
                                                        position: "absolute"
                                                    }}
                                                    onMouseEnter={event => onMouseOverButton(event)}
                                                    onClick={() => {
                                                        redirectTo("retrofittingRoofsOptions");
                                                    }}>
                                                    {t('tab3button1', { ns: 'rMain' })}
                                                </button>
                                                <button className={classes.retrofitLinkButton}
                                                    style={{
                                                        right: "2%",
                                                        top: "50%",
                                                        position: "absolute"
                                                    }}
                                                    onMouseEnter={event => onMouseOverButton(event)}
                                                    onClick={() => {
                                                        redirectTo("retrofittingWindowsOptions");
                                                    }}>
                                                    {t('tab3button2', { ns: 'rMain' })}
                                                </button>
                                                <button className={classes.retrofitLinkButton}
                                                    style={{
                                                        left: "2%",
                                                        bottom: "4%",
                                                        position: "absolute"
                                                    }}
                                                    onMouseEnter={event => onMouseOverButton(event)}
                                                    onClick={() => {
                                                        redirectTo("retrofittingFloorsOptions");
                                                    }}>
                                                    {t('tab3button3', { ns: 'rMain' })}
                                                </button>
                                                <button className={classes.retrofitLinkButton}
                                                    style={{
                                                        left: "50%",
                                                        transform: "translateX(-50%)",
                                                        bottom: "-2%",
                                                        position: "absolute"
                                                    }}
                                                    onMouseEnter={event => onMouseOverButton(event)}
                                                    onClick={() => {
                                                        redirectTo("retrofittingDoorsOptions");
                                                    }}>
                                                    {t('tab3button4', { ns: 'rMain' })}
                                                </button>
                                                <button className={classes.retrofitLinkButton}
                                                    style={{
                                                        left: "2%",
                                                        top: "50%",
                                                        position: "absolute"
                                                    }}
                                                    onMouseEnter={event => onMouseOverButton(event)}
                                                    onClick={() => {
                                                        redirectTo("retrofittingWallsOptions");
                                                    }}>
                                                    {t('tab3button5', { ns: 'rMain' })}
                                                </button>
                                            </Hidden>

                                            <Hidden lgUp xsDown>
                                                <button className={classes.retrofitLinkButton}
                                                    style={{
                                                        left: "50%",
                                                        transform: "translateX(-50%)",
                                                        top: "7%",
                                                        position: "absolute"
                                                    }}
                                                    onMouseEnter={event => onMouseOverButton(event)}
                                                    onClick={() => {
                                                        redirectTo("retrofittingRoofsOptions");
                                                    }}>
                                                    {t('tab3button1', { ns: 'rMain' })}
                                                </button>
                                                <button className={classes.retrofitLinkButton}
                                                    style={{
                                                        right: "20%",
                                                        top: "50%",
                                                        position: "absolute"
                                                    }}
                                                    onMouseEnter={event => onMouseOverButton(event)}
                                                    onClick={() => {
                                                        redirectTo("retrofittingWindowsOptions");
                                                    }}>
                                                    {t('tab3button2', { ns: 'rMain' })}
                                                </button>
                                                <button className={classes.retrofitLinkButton}
                                                    style={{
                                                        left: "20%",
                                                        bottom: "2%",
                                                        position: "absolute"
                                                    }}
                                                    onMouseEnter={event => onMouseOverButton(event)}
                                                    onClick={() => {
                                                        redirectTo("retrofittingFloorsOptions");
                                                    }}>
                                                    {t('tab3button3', { ns: 'rMain' })}
                                                </button>
                                                <button className={classes.retrofitLinkButton}
                                                    style={{
                                                        left: "50%",
                                                        transform: "translateX(-50%)",
                                                        bottom: "-2%",
                                                        position: "absolute"
                                                    }}
                                                    onMouseEnter={event => onMouseOverButton(event)}
                                                    onClick={() => {
                                                        redirectTo("retrofittingDoorsOptions");
                                                    }}>
                                                    {t('tab3button4', { ns: 'rMain' })}
                                                </button>
                                                <button className={classes.retrofitLinkButton}
                                                    style={{
                                                        left: "12%",
                                                        top: "50%",
                                                        position: "absolute"
                                                    }}
                                                    onMouseEnter={event => onMouseOverButton(event)}
                                                    onClick={() => {
                                                        redirectTo("retrofittingWallsOptions");
                                                    }}>
                                                    {t('tab3button5', { ns: 'rMain' })}
                                                </button>
                                            </Hidden>

                                            <Hidden mdDown>
                                                <button className={classes.retrofitLinkButton}
                                                    style={{
                                                        left: "50%",
                                                        transform: "translateX(-50%)",
                                                        top: "-10%",
                                                        position: "absolute"
                                                    }}
                                                    onMouseEnter={event => onMouseOverButton(event)}
                                                    onClick={() => {
                                                        redirectTo("retrofittingRoofsOptions");
                                                    }}>
                                                    {t('tab3button1', { ns: 'rMain' })}
                                                </button>
                                                <button className={classes.retrofitLinkButton}
                                                    style={{
                                                        right: "10%",
                                                        top: "42%",
                                                        position: "absolute"
                                                    }}
                                                    onMouseEnter={event => onMouseOverButton(event)}
                                                    onClick={() => {
                                                        redirectTo("retrofittingWindowsOptions");
                                                    }}>
                                                    {t('tab3button2', { ns: 'rMain' })}
                                                </button>
                                                <button className={classes.retrofitLinkButton}
                                                    style={{
                                                        left: "10%",
                                                        bottom: "2%",
                                                        position: "absolute"
                                                    }}
                                                    onMouseEnter={event => onMouseOverButton(event)}
                                                    onClick={() => {
                                                        redirectTo("retrofittingFloorsOptions");
                                                    }}>
                                                    {t('tab3button3', { ns: 'rMain' })}
                                                </button>
                                                <button className={classes.retrofitLinkButton}
                                                    style={{
                                                        left: "50%",
                                                        transform: "translateX(-50%)",
                                                        bottom: "-10%",
                                                        position: "absolute"
                                                    }}
                                                    onMouseEnter={event => onMouseOverButton(event)}
                                                    onClick={() => {
                                                        redirectTo("retrofittingDoorsOptions");
                                                    }}>
                                                    {t('tab3button4', { ns: 'rMain' })}
                                                </button>
                                                <button className={classes.retrofitLinkButton}
                                                    style={{
                                                        left: "3%",
                                                        top: "42%",
                                                        position: "absolute"
                                                    }}
                                                    onMouseEnter={event => onMouseOverButton(event)}
                                                    onClick={() => {
                                                        redirectTo("retrofittingWallsOptions");
                                                    }}>
                                                    {t('tab3button5', { ns: 'rMain' })}
                                                </button>
                                            </Hidden>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} lg={7}>
                                        <br></br><br></br>
                                        <p className={classes.boxHeader} style={{ color: Colors.themeProjects }}>
                                            {t('tab3header1', { ns: 'rMain' })}
                                            <br></br>
                                            {t('tab3header2', { ns: 'rMain' })}
                                        </p>
                                        <p className={classes.boxText}>
                                            {t('tab3text1', { ns: 'rMain' })}
                                        </p>
                                        <p className={classes.boxText}>
                                            {t('tab3text2', { ns: 'rMain' })}
                                        </p>

                                        <p className={classes.boxLink}>
                                            <Hidden lgUp>
                                                <ArrowUpwardIcon className={classes.boxIcon} /></Hidden>
                                            <Hidden mdDown><ArrowBackIcon className={classes.boxIcon} /></Hidden>
                                            {t('tab3text3', { ns: 'rMain' })}</p>
                                        <br></br><br></br>

                                    </Grid>
                                </Grid>
                            </TabPanel>

                            <TabPanel className={classes.tabPanel} value={value} index={3}>
                                <Grid
                                    container
                                    direction="column">
                                    <Grid
                                        container
                                        direction="row"
                                        alignItems="start"
                                        justifyContent="center">
                                        <Grid item md={0} lg={3}>
                                            <img src={image2} className={classes.carouselImage}>
                                            </img>
                                        </Grid>
                                        <Grid item md={12} lg={9}>

                                            <p className={classes.carouselHeader} style={{ color: Colors.themeCaseStudies }}>
                                                {t('tab4header1', { ns: 'rMain' })}</p>
                                            <p className={classes.carouselHeaderSecond} style={{ color: Colors.themeCaseStudies }}>
                                                {t('tab4header2', { ns: 'rMain' })}</p>
                                            <p className={classes.carouselTextFirst}>
                                                {t('tab4text1', { ns: 'rMain' })}</p>
                                        </Grid>
                                    </Grid>

                                    <p className={classes.carouselText}>
                                        <b>
                                            {t('tab4subheader1', { ns: 'rMain' })}
                                        </b>
                                    </p>

                                    <Grid
                                        container
                                        direction="row"
                                        alignItems="start"
                                        justifyContent="center">
                                        <Grid
                                            container
                                            direction="column"
                                            item md={6}>

                                            <div
                                                onClick={() => {
                                                    redirectTo("retrofittingHotWaterOptions");
                                                }}>
                                                <Grid item xs={12}
                                                    direction="row"
                                                    align="left"
                                                    justify="flex-start">
                                                    <p className={classes.carouselLink}> <ArrowForwardIcon className={classes.arrowIcon} />
                                                        {t('tab4subheader2', { ns: 'rMain' })}
                                                    </p>
                                                </Grid>
                                            </div>
                                            <p className={classes.carouselText} style={{ marginTop: "0.2rem" }}>
                                                {t('tab4text3', { ns: 'rMain' })}
                                            </p>

                                            <div
                                                onClick={() => {
                                                    redirectTo("retrofit");
                                                }}>
                                                <Grid item xs={12}
                                                    direction="row"
                                                    align="left"
                                                    justify="flex-start">
                                                    <p className={classes.carouselLink}> <ArrowForwardIcon className={classes.arrowIcon} />
                                                        {t('tab4subheader3', { ns: 'rMain' })}
                                                    </p>
                                                </Grid>
                                            </div>
                                            <p className={classes.carouselText} style={{ marginTop: "0.2rem" }}>
                                                {t('tab4SCtext1', { ns: 'rMain' })}
                                            </p>

                                            <div
                                                onClick={() => {
                                                    redirectTo("retrofittingVentilationOptions");
                                                }}>
                                                <Grid item xs={12}
                                                    direction="row"
                                                    align="left"
                                                    justify="flex-start">
                                                    <p className={classes.carouselLink}> <ArrowForwardIcon className={classes.arrowIcon} />
                                                        {t('tab4subheader6', { ns: 'rMain' })}
                                                    </p>
                                                </Grid>
                                            </div>
                                            <p className={classes.carouselText} style={{ marginTop: "0.2rem" }}>
                                                {t('tab4text7', { ns: 'rMain' })}
                                            </p>
                                        </Grid>
                                        <Grid
                                            container
                                            direction="column"
                                            item md={6}>
                                            <div
                                                onClick={() => {
                                                    redirectTo("retrofittingLightingOptions");
                                                }}>
                                                <Grid item xs={12}
                                                    direction="row"
                                                    align="left"
                                                    justify="flex-start">
                                                    <p className={classes.carouselLink}> <ArrowForwardIcon className={classes.arrowIcon} />
                                                        {t('tab4subheader4', { ns: 'rMain' })}
                                                    </p>
                                                </Grid>
                                            </div>
                                            <p className={classes.carouselText} style={{ marginTop: "0.2rem" }}>
                                                {t('tab4Ltext1', { ns: 'rMain' })}</p>
                                            <p className={classes.carouselText} style={{ marginTop: "-0.2rem" }}>
                                                {t('tab4Ltext2', { ns: 'rMain' })}</p>
                                            <p className={classes.carouselText} style={{ marginTop: "-0.2rem" }}>
                                                {t('tab4Ltext3', { ns: 'rMain' })}</p>
                                            <div
                                                onClick={() => {
                                                    redirectTo("retrofittingSpaceHeatingOptions");
                                                }}>
                                                <Grid item xs={12}
                                                    direction="row"
                                                    align="left"
                                                    justify="flex-start">
                                                    <p className={classes.carouselLink}> <ArrowForwardIcon className={classes.arrowIcon} />
                                                        {t('tab4subheader5', { ns: 'rMain' })}
                                                    </p>
                                                </Grid>
                                            </div>
                                            <p className={classes.carouselText} style={{ marginTop: "0.2rem" }}>
                                                {t('tab4SHtext1', { ns: 'rMain' })}</p>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </TabPanel>


                            <TabPanel className={classes.tabPanel} value={value} index={4}>
                                <Grid
                                    container
                                    direction="column">
                                    <Grid
                                        container
                                        direction="row"
                                        alignItems="start"
                                        justifyContent="center">
                                        <Grid item md={0} lg={3}>
                                            <img src={image3} className={classes.carouselImage}>
                                            </img>
                                        </Grid>
                                        <Grid item md={12} lg={9}>
                                            <p className={classes.carouselHeader} style={{ color: Colors.themeImproving }}>
                                                {t('tab5header1', { ns: 'rMain' })}</p>
                                            <p className={classes.carouselHeaderSecond} style={{ color: Colors.themeImproving }}>
                                                {t('tab5header2', { ns: 'rMain' })}</p>
                                            <p className={classes.carouselTextFirst}>
                                                {t('tab5text1', { ns: 'rMain' })}</p>
                                        </Grid>
                                    </Grid>

                                    <p className={classes.carouselText}>
                                        <b>
                                            {t('tab5subheader1', { ns: 'rMain' })}
                                        </b>
                                    </p>

                                    <Grid
                                        container
                                        direction="row"
                                        alignItems="start"
                                        justifyContent="center">

                                        <Grid item lg={4}>
                                            <div
                                                onClick={() => {
                                                    redirectTo("retrofittingEnergyGenerationOptions");
                                                }}>
                                                <Grid item xs={12}
                                                    direction="row"
                                                    align="left"
                                                    justify="flex-start">
                                                    <p className={classes.carouselLink}> <ArrowForwardIcon className={classes.arrowIcon} />
                                                        {t('tab5subheader2', { ns: 'rMain' })}
                                                    </p>
                                                </Grid>
                                            </div>
                                            <p className={classes.carouselText} style={{ marginTop: "0.2rem" }}>
                                                {t('tab5EGtext1', { ns: 'rMain' })}</p>
                                            <p className={classes.carouselText} style={{ marginTop: "-0.2rem" }}>
                                                {t('tab5EGtext2', { ns: 'rMain' })}</p>
                                        </Grid>

                                        <Grid item lg={4}>
                                            <div
                                                onClick={() => {
                                                    redirectTo("retrofittingEnergyStorageOptions");
                                                }}>
                                                <Grid item xs={12}
                                                    direction="row"
                                                    align="left"
                                                    justify="flex-start">
                                                    <p className={classes.carouselLink}> <ArrowForwardIcon className={classes.arrowIcon} />
                                                        {t('tab5subheader3', { ns: 'rMain' })}
                                                    </p>
                                                </Grid>
                                            </div>
                                            <p className={classes.carouselText} style={{ marginTop: "0.2rem" }}>
                                                {t('tab5ESTOtext1', { ns: 'rMain' })}</p>
                                            <p className={classes.carouselText} style={{ marginTop: "-0.2rem" }}>
                                                {t('tab5ESTOtext2', { ns: 'rMain' })}</p>
                                        </Grid>

                                        <Grid item lg={4}>
                                            <div
                                                onClick={() => {
                                                    redirectTo("retrofittingEnergySupplyOptions");
                                                }}>
                                                <Grid item xs={12}
                                                    direction="row"
                                                    align="left"
                                                    justify="flex-start">
                                                    <p className={classes.carouselLink}> <ArrowForwardIcon className={classes.arrowIcon} />
                                                        {t('tab5subheader4', { ns: 'rMain' })}
                                                    </p>
                                                </Grid>
                                            </div>
                                            <p className={classes.carouselText} style={{ marginTop: "0.2rem" }}>
                                                {t('tab5ESUtext1', { ns: 'rMain' })}
                                            </p>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </TabPanel>
                        </div>
                    </div>
                    <br></br>
                </Paper>
            </Grid>
        </div >
    );
}

export default Retrofit;