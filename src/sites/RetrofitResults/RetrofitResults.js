import React from "react";
import NavigationBar from "../../components/Navigation/NavigationBar";
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";
import InfoIcon from '@material-ui/icons/Info';
import Colors from '../../components/Styles/colors';
import history from "../../utils/history";
import Typography from "@material-ui/core/Typography";
import BannerImage from "../../external/images/fullBuilding_or_wideScene/wide2.JPG"
import '../../components/Styles/fonts.scss';
import { overviewContainer, overviewIcon, overviewTitleContainer, stepperBottomContainer } from '../../components/Styles/classes';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { TabList } from 'react-tabs';
import { Tabs as TabsV } from 'react-tabs'; // Vertical
import { Tab as TabV } from 'react-tabs'; // Vertical
import { TabPanel as TabPanelV } from 'react-tabs'; // Vertical
import Tabs from '@material-ui/core/Tabs';  // Horizontal
import Tab from '@material-ui/core/Tab';    // Horizontal
import AppBar from '@material-ui/core/AppBar';
import './verticalTabsResults.scss';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import TestChart from './TestChart';

import { useTranslation } from 'react-i18next';
import i18n from "../../i18n";

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
        backgroundPosition: "center 65%",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        zIndex: -1
        //backgroundSize: "100% 200%",
        //backgroundRepeat: "no-repeat",
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
        marginBottom: theme.spacing(3),
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
    themePaper: {
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(2),
            marginLeft: "auto",
            marginRight: "auto",
            height: "auto",
        },
        [theme.breakpoints.up('md')]: {
            marginTop: theme.spacing(4),
            height: "auto",
        },
        display: "flex",
        flexDirection: "column",
        borderStyle: "solid",
        borderWidth: 1,
        backgroundColor: Colors.themeCaseStudiesLight,
        borderColor: Colors.border1,
        borderLeftWidth: 12,
        borderLeftColor: Colors.themeCaseStudies,
        borderRadius: 0,
        visibility: "visible"
    },
    themePaperTitle: {
        [theme.breakpoints.down('sm')]: {
            fontSize: theme.typography.pxToRem(18),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: theme.typography.pxToRem(24),
        },
        paddingTop: theme.spacing(4),
        paddingLeft: theme.spacing(4),
        marginLeft: theme.spacing(2),
        fontWeight: "bold",
        color: "black",
        flexShrink: 0,
        visibility: "visible"
    },
    themePaperText: {
        [theme.breakpoints.down('sm')]: {
            fontSize: theme.typography.pxToRem(16),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: theme.typography.pxToRem(18),
        },
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        marginTop: theme.spacing(1),
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        color: "black",
        //flexBasis: "33.33%",
        flexShrink: 0,
        visibility: "visible"
    },
    arrowIcon: {
        [theme.breakpoints.up('md')]: {
            fontSize: 18,
        },
        color: Colors.secondaryColor1,
        fontSize: 16,
        verticalAlign: "middle",
        borderRadius: 100,
        backgroundColor: Colors.primaryColorHover
    },
    carouselArrowText: {
        [theme.breakpoints.up('md')]: {
            fontSize: 18,
            marginLeft: theme.spacing(2),
            paddingLeft: theme.spacing(2),
        },
        color: Colors.primaryColorHover,
        fontSize: 16,
        marginLeft: theme.spacing(3),
        paddingLeft: theme.spacing(3),
        marginTop: "1.7rem",
        fontWeight: "bold",
        textIndent: theme.spacing(-3),
        marginRight: theme.spacing(3),
        margin: 0,
        padding: 0,
    },
    arrowIconLink: {
        [theme.breakpoints.up('md')]: {
            fontSize: 18,
        },
        color: "white",
        fontSize: 16,
        verticalAlign: "middle",
        borderRadius: 100,
        backgroundColor: Colors.arrowLink
    },
    arrowLinkContainer: {
        borderRadius: 15,
        backgroundColor: "white",
        marginTop: "1rem",
        padding: "0.5rem 0"
    },
    carouselArrowTextLink: {
        [theme.breakpoints.up('md')]: {
            fontSize: 18,
            marginLeft: theme.spacing(2),
            paddingLeft: theme.spacing(2),
        },
        color: Colors.arrowLink,
        fontSize: 16,
        marginLeft: theme.spacing(3),
        paddingLeft: theme.spacing(3),
        marginTop: "0.7rem",
        marginBottom: "0.7rem",
        fontWeight: "bold",
        textIndent: theme.spacing(-3),
        marginRight: theme.spacing(3),
        margin: 0,
        padding: 0,
        "&:hover": {
            cursor: "pointer",
            color: Colors.arrowLinkHover,
            textDecoration: "underline",
        }
    },
    carouselText: {
        [theme.breakpoints.up('md')]: {
            fontSize: 18,
            marginLeft: theme.spacing(2),
            paddingLeft: theme.spacing(2),
        },
        marginLeft: theme.spacing(3),
        paddingLeft: theme.spacing(3),
        fontSize: 16,
        marginRight: theme.spacing(3),
        margin: 0,
        padding: 0,
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
        margin: 0,
        padding: 0,
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
        marginTop: -15,
        marginBottom: -15,
    },
    overviewContainer: overviewContainer,
    overviewTitleContainer: overviewTitleContainer,
    overviewIcon: overviewIcon,
    stepperBottomContainer: stepperBottomContainer
}));

const redirectTo = (addr) => {
    history.push("#/"+addr);
    history.go(0);
    window.scrollTo(0, 0);
};

const onMouseOver = event => {
    const el = event.currentTarget;
    el.style.backgroundColor = Colors.themeCaseStudiesLightHover;
    el.style.cursor = "pointer";
};
const onMouseLeave = event => {
    const el = event.currentTarget;
    el.style.backgroundColor = Colors.themeCaseStudiesLight;
};

const RetrofitResults = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const { t } = useTranslation();

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
                        <Typography align="left">
                            <p className="bannerText">Retrofit results</p>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justify="center">
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
                                                <ShowChartIcon className={classes.tabIcon} style={{ color: Colors.primaryColor1 }} />
                                            </Grid>
                                            <Grid item sm={11} md={7} lg={9} style={{ color: Colors.primaryColor1 }} className={classes.tabTitle}>
                                                <p>Performance of retrofitted building</p>
                                            </Grid>
                                        </Grid>
                                    </React.Fragment>} {...a11yProps(0)} />
                                <Tab className={classes.tabStyle} style={{ backgroundColor: Colors.themeProjects }} label={
                                    <React.Fragment>
                                        <Grid
                                            container
                                            direction="row"
                                            spacing={0}
                                            className={classes.tabContainer}>
                                            <Grid item sm={10} md={5} lg={3}>
                                                <LocationCityIcon className={classes.tabIcon} style={{ color: "white" }} />
                                            </Grid>
                                            <Grid item sm={11} md={7} lg={9} style={{ color: "white" }} className={classes.tabTitle}>
                                                <p>Summary of planned retrofit</p>
                                            </Grid>
                                        </Grid>
                                    </React.Fragment>} {...a11yProps(1)} />
                                <Tab className={classes.tabStyle} style={{ backgroundColor: Colors.themeCaseStudies, borderRight: "0px solid" }} label={
                                    <React.Fragment>
                                        <Grid
                                            container
                                            direction="row"
                                            spacing={0}
                                            className={classes.tabContainer}>
                                            <Grid item sm={10} md={5} lg={3}>
                                                <FormatListBulletedIcon className={classes.tabIcon} style={{ color: "white" }} />
                                            </Grid>
                                            <Grid item sm={11} md={7} lg={9} style={{ color: "white" }} className={classes.tabTitle}>
                                                <p>Selected retrofit measures</p>
                                            </Grid>
                                        </Grid>
                                    </React.Fragment>} {...a11yProps(2)} />
                            </Tabs>
                        </AppBar>

                        <TabPanel className={classes.tabPanel} value={value} index={0} id="verticalResults">
                            <TabsV>
                                <TabList>
                                    <TabV>
                                        <p>Evaluation overview</p>
                                    </TabV>
                                    <TabV>
                                        <p>Efficiency analysis</p>
                                    </TabV>
                                    <TabV>
                                        <p>Building fabric</p>
                                    </TabV>
                                    <TabV>
                                        <p>Technical building systems</p>
                                    </TabV>
                                </TabList>

                                <TabPanelV>
                                    <div className="panel-content">
                                        <TestChart />
                                    </div>
                                </TabPanelV>

                                <TabPanelV>
                                    <div className="panel-content">
                                        <p className="baseText">
                                            {t('box1Text1', { ns: 'rLighting' })}
                                        </p>
                                        <p className="baseText">
                                            {t('box1Text2', { ns: 'rLighting' })}
                                        </p>
                                    </div>
                                </TabPanelV>
                                <TabPanelV>
                                    <div className="panel-content">
                                        <p className="baseText">
                                            {t('box1Text1', { ns: 'rLighting' })}
                                        </p>
                                        <p className="baseText">
                                            {t('box1Text2', { ns: 'rLighting' })}
                                        </p>
                                    </div>
                                </TabPanelV>
                                <TabPanelV>
                                    <div className="panel-content">
                                        <p className="baseText">
                                            {t('box1Text1', { ns: 'rLighting' })}
                                        </p>
                                        <p className="baseText">
                                            {t('box1Text2', { ns: 'rLighting' })}
                                        </p>
                                    </div>
                                </TabPanelV>
                            </TabsV>
                        </TabPanel>


                        <TabPanel className={classes.tabPanel} value={value} index={1} id="verticalResults">
                            <TabsV>
                                <TabList>
                                    <TabV>
                                        <p>Human Comfort</p>
                                    </TabV>
                                    <TabV>
                                        <p>Cost &#38; Sustainability</p>
                                    </TabV>
                                    <TabV>
                                        <p>{t('heritageLabel', { ns: 'rOptionsGen' })}</p>
                                    </TabV>
                                </TabList>

                                <TabPanelV>
                                    <div className="panel-content">
                                        <p className="baseText">
                                            <p>
                                                In your assessment of the building, you've identified the following comfort types as insufficient:
                                            </p>
                                            <ul style={{ listStyle: 'disc', listStylePosition: "inside", margin: 0 }}>
                                                <li className="listItem">
                                                    <b>
                                                        Draughtiness:
                                                    </b> Often draughty
                                                </li>

                                                <li className="listItem">
                                                    <b>
                                                        Overheating of spaces:
                                                    </b> Very often very hot
                                                </li>
                                                <li className="listItem">
                                                    <b>
                                                        Stuffiness:
                                                    </b> Very often very stuffy
                                                </li>
                                            </ul>
                                        </p>
                                    </div>
                                </TabPanelV>
                                <TabPanelV>
                                    <div className="panel-content">
                                        <p className="baseText">
                                            {t('box1Text1', { ns: 'rLighting' })}
                                        </p>
                                        <p className="baseText">
                                            {t('box1Text2', { ns: 'rLighting' })}
                                        </p>
                                    </div>
                                </TabPanelV>
                                <TabPanelV>
                                    <div className="panel-content">
                                        <p className="baseText">
                                            {t('box1Text1', { ns: 'rLighting' })}
                                        </p>
                                        <p className="baseText">
                                            {t('box1Text2', { ns: 'rLighting' })}
                                        </p>
                                    </div>
                                </TabPanelV>
                            </TabsV>
                        </TabPanel>


                        <TabPanel className={classes.tabPanel} value={value} index={2} id="verticalResults">
                            <TabsV>
                                <TabList>
                                    <TabV>
                                        <p>Designing retrofits</p>
                                    </TabV>
                                    <TabV>
                                        <p>Retrofitting building fabric</p>
                                    </TabV>
                                    <TabV>
                                        <p>Upgrading technical building services</p>
                                    </TabV>
                                    <TabV>
                                        <p>Improving energy management</p>
                                    </TabV>
                                </TabList>

                                <TabPanelV>
                                    <div className="panel-content">
                                        <p className="baseText">
                                            {t('box1Text1', { ns: 'rLighting' })}
                                        </p>
                                        <p className="baseText">
                                            {t('box1Text2', { ns: 'rLighting' })}
                                        </p>
                                    </div>
                                </TabPanelV>
                                <TabPanelV>
                                    <div className="panel-content">
                                        <p className="baseText">
                                            {t('box1Text1', { ns: 'rLighting' })}
                                        </p>
                                        <p className="baseText">
                                            {t('box1Text2', { ns: 'rLighting' })}
                                        </p>
                                    </div>
                                </TabPanelV>
                                <TabPanelV>
                                    <div className="panel-content">
                                        <p className="baseText">
                                            {t('box1Text1', { ns: 'rLighting' })}
                                        </p>
                                        <p className="baseText">
                                            {t('box1Text2', { ns: 'rLighting' })}
                                        </p>
                                    </div>
                                </TabPanelV>
                                <TabPanelV>
                                    <div className="panel-content">
                                        <p className="baseText">
                                            {t('box1Text1', { ns: 'rLighting' })}
                                        </p>
                                        <p className="baseText">
                                            {t('box1Text2', { ns: 'rLighting' })}
                                        </p>
                                    </div>
                                </TabPanelV>
                            </TabsV>
                        </TabPanel>


                    </div>
                    <div className={classes.stepperBottomContainer}>
                        <Typography>
                            <div className="overviewText">
                                <p>Options to improve your building's energy performance are plentiful. You can continue to browse our catalogue
                                    of retrofit measures. To help you explore them, we'll recommend some which might be particularly useful for
                                    you to explore. In the catalogue you can also select one or more retrofit measures as you see fit and once
                                    you've completed your selection, we'll evaluate your building again to compare its current condition to what
                                    improvements your retrofit of choice might achieve.
                                </p>

                                <Grid
                                    container
                                    direction="row"
                                    spacing={3}
                                    style={{ marginTop: "-1rem" }}>

                                    <Grid item sm={12} md={6}>
                                        <div className={classes.arrowLinkContainer}>
                                            <p className={classes.carouselArrowTextLink}>
                                                <ArrowForwardIcon className={classes.arrowIconLink} /> Make changes to the retrofit measures you've selected </p>
                                        </div>
                                    </Grid>
                                    <Grid item sm={12} md={6}
                                        onClick={() => {
                                            redirectTo("retrofit");
                                        }}>
                                        <div className={classes.arrowLinkContainer}>
                                            <p className={classes.carouselArrowTextLink}>
                                                <ArrowForwardIcon className={classes.arrowIconLink} /> Print or save the retrofit plan you've developed </p>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </Typography>
                    </div>
                </div>
            </Grid>
            <br></br><br></br>
        </div>
    );
}

export default RetrofitResults;