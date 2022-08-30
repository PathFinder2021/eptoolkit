import React, { useState, useEffect } from 'react';
import NavigationBar from "../../../components/Navigation/NavigationBar2"; // yellow navbar
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Grid, TextField, MenuItem } from "@material-ui/core";
import Colors from '../../../components/Styles/colors';
import history from "../../../utils/history";
import Typography from "@material-ui/core/Typography";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import PropTypes from 'prop-types';
import Hidden from '@material-ui/core/Hidden';
import { Accordion, AccordionSummary, AccordionDetails } from "@material-ui/core/";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EcoIcon from '@material-ui/icons/Eco';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';
import InfoIcon from '@material-ui/icons/Info';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import WarningIcon from '@material-ui/icons/Warning';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Tooltip from '@material-ui/core/Tooltip';
import BannerImage from "../../../external/images/misc/stairs1.JPG"
import Nav from '../NavRetrofitMeasure.js'
import Rating from '@material-ui/lab/Rating';
import '../../../components/Styles/fonts.scss';
import { linkButton } from '../../../components/Styles/classes';
import { heritageRatingLabels, costRatingLabels, energyPerformanceRatingLabels, sustainabilityRatingLabels } from '../../../components/Styles/ratingLabels';

import Products from './Products.jsx';
import CartPage from '../../CartPage/CartPage.js';

import { useTranslation } from 'react-i18next';
import i18n from "../../../i18n"

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
    tabPanelBase: {
        //flexGrow: 1,
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
        border: "3px solid",
        borderColor: Colors.primaryColor1,
        //borderRadius: 15,
        margin: "0 auto", //centers tab panel horizontally
        marginTop: theme.spacing(-4),
        boxShadow: "0px 10px 10px -5px #00000040",
    },
    tabPanel: {
        [theme.breakpoints.up('md')]: {
            paddingLeft: 20,
            paddingRight: 20,
        },
        borderTop: "3px solid",
        borderTopColor: Colors.primaryColor1,
        backgroundColor: Colors.secondaryColor1,
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
    tabStyle: {
        borderLeft: "3px solid",
        borderLeftColor: Colors.primaryColor1,
        '&.Mui-selected': {
            backgroundColor: "white",
            borderLeft: "3px solid",
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
            //for whatever reason, the icon won't be centered here if fontSize is 0
            fontSize: 4,
            lineHeight: "0%",
            visibility: "hidden"
        },
        [theme.breakpoints.down('sm')]: {
            textAlign: "center",
            fontSize: 16,
            textTransform: "none",
            lineHeight: "115%",
        },
        [theme.breakpoints.up('md')]: {
            textAlign: "left",
            textTransform: "none",
            fontSize: 16,
            lineHeight: "115%"
        },
        [theme.breakpoints.up('lg')]: {
            textAlign: "left",
            textTransform: "none",
            fontSize: 18,
            lineHeight: "115%"
        },
        margin: 0,
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
    textInfoIcon: {
        [theme.breakpoints.down('md')]: {
            fontSize: 28,
            marginLeft: theme.spacing(1),
        },
        /* make a separate background, this has a white border
        borderRadius: 100,
        backgroundColor: "white",*/
        fontSize: 32,
        textAlign: "center",
        marginLeft: theme.spacing(2),
        verticalAlign: "middle",
        color: Colors.primaryColor1
    },
    ratingContainer: {
        [theme.breakpoints.down('md')]: {
            marginTop: theme.spacing(-2),
            marginBottom: theme.spacing(1),
        },
        [theme.breakpoints.up('lg')]: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
        },
        backgroundColor: "white",
        textAlign: 'center',
        borderColor: "black",
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 15,
        visibility: "visible"
    },
    textFieldTop: {
        [theme.breakpoints.only('xs')]: {
            marginTop: "20px"
        },
    },
    accordion: {
        [theme.breakpoints.only('sm')]: {
            marginLeft: 0,
            marginRight: 0,
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        marginTop: theme.spacing(2),
        '&.Mui-expanded': {
            [theme.breakpoints.only('sm')]: {
                marginLeft: 0,
                marginRight: 0,
            },
            [theme.breakpoints.down('md')]: {
                marginLeft: theme.spacing(1),
                marginRight: theme.spacing(1),
            },
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
            marginTop: theme.spacing(2),
            marginBottom: 0,
        },
    },
    accordionSummary: {
        backgroundColor: Colors.primaryColor1,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: Colors.border1,
        "&:hover": {
            cursor: "pointer",
            backgroundColor: Colors.primaryColorHover,
        }
    },
    accordionList: {
        [theme.breakpoints.only('sm')]: {
            marginLeft: theme.spacing(1),
            marginRight: 0,
        },
        [theme.breakpoints.down('md')]: {
            fontSize: 14,
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(1),
        },
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(2),
        listStyle: 'disc',
        fontSize: 16,
        color: "black",
    },
    formControl: {
        margin: "auto",
        display: "flex",
        flexDirection: "row",
    },
    linkButton: linkButton,
}));

const RetrofittingTest1 = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const [expanded, setExpanded] = React.useState(false);
    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeInput = (event) => {
        console.log(i18n.language);
        props.onChange(event.target.name, event.target.value);
    }

    const { t } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };



  

    //for star ratings:
    const [heritageValue, setHeritageValue] = React.useState(5);
    const [costValue, setCostValue] = React.useState(4);
    const [performanceValue, setPerformanceValue] = React.useState(5);
    const [sustainabilityValue, setSustainabilityValue] = React.useState(5);


const redirectTo = (addr) => {
    history.push("#/"+addr);
    history.go(0);
    window.scrollTo(0, 0);
};

 

    const SustainabilityRating = withStyles({
        iconFilled: {
            color: "LimeGreen"
        },
    })(Rating);

    const CostRating = withStyles({
        iconFilled: {
            //color: 'green',
            color: 'SaddleBrown',
        },
    })(Rating);

    const HeritageRating = withStyles({
        icon: {
            margin: "0 1px",
        },
        iconFilled: {
            color: Colors.gray2,
        },
    })(Rating);

    const HtmlTooltip = withStyles((theme) => ({
        tooltip: {
            backgroundColor: Colors.baseColor1,
            padding: theme.spacing(2),
            color: 'black',
            textAlign: 'center',
            maxWidth: 220,
            fontSize: theme.typography.pxToRem(16),
            border: '3px solid #6f6f70',
        },
    }))(Tooltip);




    // !!!NEW!!!
    const [isDisabled1, setIsDisabled1] = useState(false);
    const [isDisabled2, setIsDisabled2] = useState(false);
    const [isDisabled3, setIsDisabled3] = useState(false);
    //const [isDisabled4, setIsDisabled4] = useState(false);

    /*const handleDisabled = () => {

        setIsDisabled1(false);
        setIsDisabled2(false);
        setIsDisabled3(false);
        //setIsDisabled4(false);

        props.value.map(i => {
            if (i.id !== "placeholder" && i.name != "") {
                if (i.name == "name1") {
                    setIsDisabled1(true);
                }
                else if (i.name == "name2") {
                    setIsDisabled2(true);
                }
                else if (i.name == "name3") {
                    setIsDisabled3(true);
                }
                //else if(i.name == "name4"){
                //    setIsDisabled4(true);
                //}
            }
        })
    };

    useEffect(handleDisabled, [props.value]);*/

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
                            <p className="bannerText">Neutral retrofit measure</p>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justify="center">
                <Paper className={classes.paper}>
                    <div className={classes.tabPanelBase}>
                        <AppBar position="static" color="default">
                            <Tabs
                                centered
                                variant="fullWidth"
                                value={value}
                                onChange={handleChange}
                                TabIndicatorProps={{ style: { background: Colors.primaryColor1, height: "4px" } }}>
                                <Tab className={classes.tabStyle} style={{ borderLeft: "0px solid" }} label={
                                    <React.Fragment>
                                        <Grid
                                            container
                                            direction="row"
                                            spacing={0}
                                            className={classes.tabContainer}>
                                            <Grid item sm={10} md={5} lg={3}>
                                                <InfoIcon className={classes.tabIcon} style={{ color: Colors.primaryColor1 }} />
                                            </Grid>
                                            <Grid item sm={11} md={7} lg={9}>
                                                <p className={classes.tabTitle}> Retrofit measure at a glance </p>
                                            </Grid>
                                        </Grid>
                                    </React.Fragment>} {...a11yProps(0)} />
                                <Tab className={classes.tabStyle} label={
                                    <React.Fragment>
                                        <Grid
                                            container
                                            direction="row"
                                            spacing={0}
                                            className={classes.tabContainer}>
                                            <Grid item sm={10} md={5} lg={3}>
                                                <WarningIcon className={classes.tabIcon} style={{ color: "red" }} />
                                            </Grid>
                                            <Grid item sm={11} md={7} lg={9}>
                                                <p className={classes.tabTitle}>{t('tab2', { ns: 'rOptionsGen' })}</p>
                                            </Grid>
                                        </Grid>
                                    </React.Fragment>} {...a11yProps(1)} />
                                <Tab className={classes.tabStyle} style={{ borderRight: "0px solid" }} label={
                                    <React.Fragment>
                                        <Grid
                                            container
                                            direction="row"
                                            spacing={0}
                                            className={classes.tabContainer}>
                                            <Grid item sm={10} md={5} lg={3}>
                                                <AddCircleIcon className={classes.tabIcon} style={{ color: "orange" }} />
                                            </Grid>
                                            <Grid item sm={11} md={7} lg={9}>
                                                <p className={classes.tabTitle}> Add retrofit measure to your project </p>
                                            </Grid>
                                        </Grid>
                                    </React.Fragment>} {...a11yProps(2)} />
                            </Tabs>
                        </AppBar>
                        <TabPanel className={classes.tabPanel} value={value} index={0}>
                            <Grid
                                container
                                direction="row"
                                justify="center"
                                alignContent="center"
                                verticalAlign="middle"
                                spacing={4}>
                                <Grid item sm={11} lg={9}>
                                    <p>{t('lorem1', { ns: 'frontpageT' })}</p>
                                    <p>{t('lorem2', { ns: 'frontpageT' })}</p>
                                </Grid>
                                <Grid item xs={10} sm={6} lg={3}>
                                    <div className={classes.ratingContainer}>
                                        <HtmlTooltip
                                            title={energyPerformanceRatingLabels[performanceValue]}
                                            style={{ textAlign: "center" }}
                                            arrow>
                                            <Box className={classes.ratingText} mt={2} mb={1} borderColor="transparent">
                                                <Typography component="legend">{t('energyPerformanceLabel', { ns: 'rOptionsGen' })}</Typography>
                                                <Rating value={performanceValue} readOnly />
                                            </Box>
                                        </HtmlTooltip>
                                        <HtmlTooltip
                                            title={heritageRatingLabels[heritageValue]}
                                            style={{ textAlign: "center" }}
                                            arrow>
                                            <Box className={classes.ratingText} mb={1} borderColor="transparent">
                                                <Typography component="legend">{t('heritageLabel', { ns: 'rOptionsGen' })}</Typography>
                                                <HeritageRating
                                                    value={heritageValue}
                                                    readOnly
                                                    icon={<AccountBalanceIcon />} />
                                            </Box>
                                        </HtmlTooltip>
                                        <HtmlTooltip
                                            title={costRatingLabels[costValue]}
                                            style={{ textAlign: "center" }}
                                            arrow>
                                            <Box className={classes.ratingText} mb={1} borderColor="transparent">
                                                <Typography component="legend">{t('costLabel', { ns: 'rOptionsGen' })}</Typography>
                                                <CostRating value={costValue} readOnly icon={<AccountBalanceWalletIcon />} /> {/*icon={<EuroSymbolIcon />}*/}
                                            </Box>
                                        </HtmlTooltip>
                                        <HtmlTooltip
                                            title={sustainabilityRatingLabels[sustainabilityValue]}
                                            style={{ textAlign: "center" }}
                                            arrow>
                                            <Box className={classes.ratingText} mb={2} borderColor="transparent">
                                                <Typography component="legend">{t('sustainabilityLabel', { ns: 'rOptionsGen' })}</Typography>
                                                <SustainabilityRating
                                                    value={sustainabilityValue}
                                                    readOnly
                                                    icon={<EcoIcon />} />
                                            </Box>
                                        </HtmlTooltip>
                                    </div>
                                </Grid>
                            </Grid>
                        </TabPanel>
                        <TabPanel className={classes.tabPanel} value={value} index={1}>
                            <p className="baseText">
                                 
                            </p>
                        </TabPanel>
                        <TabPanel className={classes.tabPanel} value={value} index={2}>
                            <Grid
                                container
                                direction="row"
                                justify="center"
                                alignContent="center"
                                verticalAlign="middle"
                                spacing={4}>
                                <Grid item xs={12} className="baseText">
                                    {t('tab3text1', { ns: 'rOptionsGen' })}
                                </Grid>
                                <Grid item xs={12} className="baseText" align="right">
                                    <button className={classes.linkButton}>
                                        {t('tab3button1', { ns: 'rOptionsGen' })}
                                    </button>
                                </Grid>
                            </Grid>
                        </TabPanel>
                    </div>

                    <br></br><br></br><br></br>


                    {/* Cart test stuff here */}
                    <Grid container direction="column" justify="center" alignItems="center" style={{ paddingTop: 25, margin: 'auto' }}>
                        <Paper elevation={1}>
                            <Button
                                variant="contained"
                                disabled={isDisabled1}
                                onClick={() => props.onClick("name1", "description1", "values")}
                            >
                                Retrofit 1
                            </Button>
                            <Button
                                variant="contained"
                                disabled={isDisabled2}
                                onClick={() => props.onClick("name2", "description2", "values2")}
                            >
                                Retrofit 2
                            </Button>
                        </Paper>
                        <Paper hidden={isDisabled3} style={{ marginTop: 25 }}>
                            <Button
                                variant="contained"
                                disabled={isDisabled3}
                                onClick={() => props.onClick("name3", "description3", "values3")}
                            >
                                Retrofit 3
                            </Button>
                        </Paper>
                    </Grid>

                    <br></br><br></br><br></br>

                    <Grid
                        container direction="row"
                        justify="flex-start">
                        <Grid item md={12} lg={9} xl={10} container direction="column">
                            <Grid item id="id1">
                                <header className="retrofitHeader">
                                    <b>How this retrofit measure works</b>
                                </header>
                            </Grid>
                            <Grid item>
                                <p className="overviewText">
                                     
                                     
                                       
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </Grid>
                            <Grid item id="id2">
                                <header className="retrofitHeader">
                                    <b>Cost effectiveness and impact on energy performance</b>
                                </header>
                                <p className="overviewText">
                                     
                                     
                                       
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </Grid>

                            <Grid item id="id3">
                                <header className="retrofitHeader">
                                    <b>User comfort, side effects and sustainability</b>
                                </header>
                                <p className="overviewText">
                                     
                                     
                                       
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </Grid>

                            <Grid item id="id4">
                                <header className="retrofitHeader">
                                    <b>Heritage suitability and design options</b>
                                </header>
                                <p className="overviewText">
                                     
                                     
                                       
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </Grid>

                            <Grid item id="id5">
                                <header className="retrofitHeader">
                                    <b>Related retrofit measures</b>
                                </header>
                                <p className="overviewText">
                                    The following retrofit measure(s) might also be of interest to you as alternatives to the
                                    retrofit measure described above, to complement it or to compensate for or investigate any
                                    possible side effects it might cause.
                                </p>
                                <p className="overviewText">
                                    <b>ADD LINKS LATER!!</b>
                                </p>
                            </Grid>
                        </Grid>
                        <Grid item lg={3} xl={2} className={classes.navBox}>
                            <Nav>
                            </Nav>
                        </Grid>
                    </Grid>
                    <br></br>
                </Paper>
            </Grid >
        </div >
    );
}

export default RetrofittingTest1;