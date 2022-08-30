import React, { useState } from 'react';
import NavigationBar from "../../../components/Navigation/NavigationBar2"; // yellow navbar
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import { Grid, TextField, MenuItem } from "@material-ui/core";
import Colors from '../../../components/Styles/colors';
import history from "../../../utils/history";
import Typography from "@material-ui/core/Typography";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Box from '@material-ui/core/Box';
import DoneIcon from '@material-ui/icons/Done';
import EcoIcon from '@material-ui/icons/Eco';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import Tooltip from '@material-ui/core/Tooltip';
import BannerImage from "../../../external/images/windows/window1.JPG"
import BackgroundImage from "../../../external/images/windows/window2.JPG"
import WasteWaterImage from "../../../external/images/hotWater/wasteHeatRecovery.jpeg"
import Rating from '@material-ui/lab/Rating';
import '../../../components/Styles/fonts.scss';
import Nav from './Nav1.js'
import { overviewContainer, overviewTitleContainer, overviewIcon } from '../../../components/Styles/classes';
import { heritageRatingLabels, costRatingLabels, energyPerformanceRatingLabels, sustainabilityRatingLabels } from '../../../components/Styles/ratingLabels';

import { useTranslation } from 'react-i18next';
import i18n from "../../../i18n"

// Put the navigation bar on the side (outside of paper)
 
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
        backgroundPosition: "center 55%",
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
        },
        marginBottom: theme.spacing(4),
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
    ratingContainer2: {
        [theme.breakpoints.down('md')]: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
        [theme.breakpoints.up('lg')]: {
            marginTop: theme.spacing(9),
            marginBottom: theme.spacing(2),
            marginRight: theme.spacing(1),
            zIndex: 200,
            position: "relative",
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
    themePaperContainer: {
        [theme.breakpoints.up('lg')]: {
            alignItems: "flex-end"
        },
    },
    themePaperTitle: {
        [theme.breakpoints.down('sm')]: {
            marginRight: theme.spacing(2),
        },
        fontSize: theme.typography.pxToRem(18),
        fontWeight: "bold",
        color: "black",
        flexShrink: 0,
    },
    themePaperTextBackground: {
        [theme.breakpoints.up('lg')]: {
            boxShadow: "0 -10px 8px 15px #FFFFFFB3",
            marginBottom: 0,
            marginRight: "-20vw",
            transitionDuration: "350ms",
            transitionProperty: "opacity, transform",
            opacity: "0%",
            transitionTimingFunction: "ease-out",
            transform: "translateY(120%)",
            maxHeight: "18vw",
            overflowY: "scroll"
        },
        marginRight: theme.spacing(0),
        marginBottom: theme.spacing(1),
        flexShrink: 0,
        justify: "center",
        backgroundColor: "#FFFFFFB3",
    },
    themePaperText: {
        [theme.breakpoints.down('md')]: {
            opacity: "100%",
        },
        [theme.breakpoints.up('lg')]: {
            marginBottom: 0,
            paddingBottom: theme.spacing(4),
            marginRight: "35%",
            paddingTop: theme.spacing(1),
            opacity: "0%",
            transitionDuration: "350ms",
            transitionProperty: "opacity, transform",
            transitionTimingFunction: "ease-in",
            transform: "translateY(120%)",
        },
        fontSize: theme.typography.pxToRem(16),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        /*overflowWrap: "break-word",
        wordWrap: "break-word",
        hyphens: "auto",*/
        color: "black",
        justify: "center",
    },
    themePaper: {
        [theme.breakpoints.up('lg')]: {
            marginLeft: "2.8rem",
            marginRight: "2.8rem",
        },
        marginBottom: theme.spacing(4),
        height: "auto",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        display: "flex",
        overflow: "hidden",
        flexDirection: "column",
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 15,
        boxShadow: "0px 10px 10px -5px #00000040",
        "&:hover": {
            cursor: "pointer",
            "& $themePaperText, $themePaperTextBackground": {
                transitionDuration: "350ms",
                transitionProperty: "opacity, transform",
                opacity: "100%",
                transitionTimingFunction: "ease-in",
                transform: "translateY(0)",
            }
        }
    },
    infoText2: {
        [theme.breakpoints.down('sm')]: {
            marginLeft: 25,
            marginRight: 25,
            fontSize: 16,
        },
        marginLeft: 50,
        marginRight: 50,
        fontSize: 18,
    },
    topRowBackground: {
        backgroundColor: "#FFFFFFB3",
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        marginLeft: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconBackgroundWhite: {
        width: 32,
        height: 32,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white",
        borderRadius: 100,
    },
    iconBackgroundColor: {
        width: 48,
        height: 48,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        border: '1px solid black'
    },
    iconAdded: {
        fontSize: 32,

        verticalAlign: 'middle',
        color: "green",
    },
    iconWarning: {
        fontSize: 30,
        marginTop: -5,
        verticalAlign: 'middle',
        color: "RED",
    },
    iconBoxText: {
        color: "white",
        fontSize: theme.typography.pxToRem(16),
        alignSelf: "center",
        margin: "0 1px"
    },
    arrowTextContainer: {
        [theme.breakpoints.down('sm')]: {
            marginTop: 0
        },
        marginTop: "2.2rem",
        marginBottom: "2.2rem",
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
        fontWeight: "bold",
        marginBottom: "0.44rem",
        textIndent: theme.spacing(-3),
        marginRight: theme.spacing(3),
        margin: 0,
        padding: 0,
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
    overviewContainer: overviewContainer,
    overviewTitleContainer: overviewTitleContainer,
    overviewIcon: overviewIcon,
}));

const redirectTo = (addr) => {
    history.push("#/"+addr);
    history.go(0);
    window.scrollTo(0, 0);
};

const RetrofittingHotWaterOptions = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const { t } = useTranslation();

    const [heritageValue, setHeritageValue] = React.useState(3);
    const [costValue, setCostValue] = React.useState(4);
    const [performanceValue, setPerformanceValue] = React.useState(5);
    const [sustainabilityValue, setSustainabilityValue] = React.useState(4);

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
                            <p className="bannerText">{t('header1', { ns: 'rHotWater' })}</p>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justify="center">
                <Paper className={classes.paper}>
                    <Grid container
                        direction="column"
                        alignItems="center"
                        justify="center">
                        <Grid item xs={12} sm={11}>
                            <div className={classes.overviewContainer}>
                                <React.Fragment>
                                    <Grid
                                        container
                                        direction="row"
                                        alignItems="center"
                                        spacing={0}
                                        className={classes.overviewTitleContainer}>
                                        <Grid item>
                                            <InfoIcon className={classes.overviewIcon} style={{ color: Colors.primaryColor1 }} />
                                        </Grid>
                                        <Grid item>
                                            <header className="overviewTitle">
                                                {t('box1Header1', { ns: 'rHotWater' })}
                                            </header>
                                        </Grid>
                                    </Grid>
                                </React.Fragment>
                                <Grid
                                    container
                                    direction="row">
                                    <Grid item xs={12} md={8}>
                                        <Typography>
                                            <ul style={{ listStyle: 'disc' }} className="overviewText">
                                                <li className="listItem">
                                                    {t('box1Text1', { ns: 'rHotWater' })}
                                                </li>
                                                <li className="listItem">
                                                    {t('box1Text2', { ns: 'rHotWater' })}
                                                </li>
                                                <li className="listItem">
                                                    {t('box1Text3', { ns: 'rHotWater' })}
                                                </li>
                                            </ul>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} md={4} className={classes.arrowTextContainer}>
                                        <p className={classes.carouselArrowText}> <ArrowForwardIcon className={classes.arrowIcon} />
                                            {t('box1subheader1', { ns: 'rHotWater' })}
                                        </p>
                                        <p className={classes.carouselText}>
                                            <small>
                                                {t('box1Text4', { ns: 'rHotWater' })}
                                            </small></p>
                                        <br></br>
                                        <p className={classes.carouselArrowText}> <ArrowForwardIcon className={classes.arrowIcon} />
                                            {t('box1subheader2', { ns: 'rHotWater' })}
                                        </p>
                                        <p className={classes.carouselText}>
                                            <small>
                                                {t('box1Text5', { ns: 'rHotWater' })}
                                            </small></p>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>

                    <br></br><br></br><br></br>



                    <Grid
                        container direction="row" sm={12}>

                        <Grid item xs={12} style={{ marginTop: "-1.7rem", marginBottom: "1.7rem" }}>
                            <p className={classes.infoText2}>
                                {t('explanationText1', { ns: 'rOptionsGen' })}
                            </p>
                            <p className={classes.infoText2}>
                                <b>
                                    {t('explanationText2', { ns: 'rOptionsGen' })}
                                </b>
                            </p>
                        </Grid>

                        <Grid
                            container direction="row"
                            justify="flex-start">
                            <Grid item md={12} lg={9} xl={10} container direction="column">
                                <Grid
                                    container
                                    alignItems="center"
                                    spacing={0}
                                    justify="center">

                                    <Grid item xs={12} sm={12} id="id1" >
                                        <Paper
                                            className={classes.themePaper}
                                            style={{ backgroundImage: `url(${BackgroundImage})` }}
                                            onClick={() => {
                                                redirectTo("retrofittingHotWaterTankInsulation");
                                            }}>
                                            <Grid
                                                container
                                                direction="row"
                                                spacing={0}
                                                className={classes.topRowBackground}>

                                                <Grid item sm={9}>
                                                    <Typography className={classes.themePaperTitle}>
                                                        {t('box2Header1', { ns: 'rHotWater' })}
                                                    </Typography>
                                                </Grid>

                                                <Grid item sm={3}>
                                                    <div>
                                                        <Grid
                                                            container
                                                            direction="row"
                                                            alignItems="center"
                                                            justify="center"
                                                            spacing={2}>

                                                            <Grid item sm="auto">
                                                                <HtmlTooltip
                                                                    title="[TOOLTIP TEST] This measure has been added to your project"
                                                                    arrow>
                                                                    <Box className={classes.iconBackgroundColor} style={{ backgroundColor: "green" }}>
                                                                        <Box className={classes.iconBackgroundWhite}>
                                                                            <DoneIcon className={classes.iconAdded} />
                                                                        </Box>
                                                                    </Box>
                                                                </HtmlTooltip>
                                                            </Grid>

                                                            <Grid item sm="auto">
                                                                <HtmlTooltip
                                                                    title="[TOOLTIP TEST] Warning message"
                                                                    arrow>
                                                                    <Box className={classes.iconBackgroundColor} style={{ backgroundColor: "red" }}>
                                                                        <Box className={classes.iconBackgroundWhite}>
                                                                            <WarningIcon className={classes.iconWarning} />
                                                                        </Box>
                                                                    </Box>
                                                                </HtmlTooltip>
                                                            </Grid>

                                                        </Grid>
                                                    </div>
                                                </Grid>
                                            </Grid>

                                            <Grid
                                                container
                                                direction="row"
                                                spacing={0}
                                                justify="center"
                                                alignContent="center"
                                                className={classes.themePaperContainer}>

                                                <Grid item sm={12} md={12} lg={9}>
                                                    <div className={classes.themePaperTextBackground}>
                                                        <Typography className={classes.themePaperText} position="absolute">
                                                            {t('box2Text1', { ns: 'rHotWater' })}
                                                        </Typography>
                                                    </div>
                                                </Grid>

                                                <Grid item xs={10} sm={6} md={6} lg={3}>
                                                    <div className={classes.ratingContainer2}>
                                                        <HtmlTooltip
                                                            title={energyPerformanceRatingLabels[5]}
                                                            style={{ textAlign: "center" }}
                                                            arrow>
                                                            <Box className={classes.ratingText} mt={2} mb={1} borderColor="transparent">
                                                                <Typography component="legend">{t('energyPerformanceLabel', { ns: 'rOptionsGen' })}</Typography>
                                                                <Rating value={5} readOnly />
                                                            </Box>
                                                        </HtmlTooltip>
                                                        <HtmlTooltip
                                                            title={heritageRatingLabels[4]}
                                                            style={{ textAlign: "center" }}
                                                            arrow>
                                                            <Box className={classes.ratingText} mb={1} borderColor="transparent">
                                                                <Typography component="legend">{t('heritageLabel', { ns: 'rOptionsGen' })}</Typography>
                                                                <HeritageRating
                                                                    value={4}
                                                                    readOnly
                                                                    icon={<AccountBalanceIcon />} />
                                                            </Box>
                                                        </HtmlTooltip>
                                                        <HtmlTooltip
                                                            title={costRatingLabels[3]}
                                                            style={{ textAlign: "center" }}
                                                            arrow>
                                                            <Box className={classes.ratingText} mb={1} borderColor="transparent">
                                                                <Typography component="legend">{t('costLabel', { ns: 'rOptionsGen' })}</Typography>
                                                                <CostRating value={3} readOnly icon={<AccountBalanceWalletIcon />} /> {/*icon={<EuroSymbolIcon />}*/}
                                                            </Box>
                                                        </HtmlTooltip>
                                                        <HtmlTooltip
                                                            title={sustainabilityRatingLabels[4]}
                                                            style={{ textAlign: "center" }}
                                                            arrow>
                                                            <Box className={classes.ratingText} mb={2} borderColor="transparent">
                                                                <Typography component="legend">{t('sustainabilityLabel', { ns: 'rOptionsGen' })}</Typography>
                                                                <SustainabilityRating
                                                                    value={4}
                                                                    readOnly
                                                                    icon={<EcoIcon />} />
                                                            </Box>
                                                        </HtmlTooltip>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    </Grid>




                                    <Grid item xs={12} sm={12} id="id2" >
                                        <Paper
                                            className={classes.themePaper}
                                            style={{ backgroundImage: `url(${BackgroundImage})` }}
                                            onClick={() => {
                                                redirectTo("retrofittingHotWaterLowFlow");
                                            }}>
                                            <Grid
                                                container
                                                direction="row"
                                                spacing={0}
                                                className={classes.topRowBackground}>

                                                <Grid item sm={9}>
                                                    <Typography className={classes.themePaperTitle}>
                                                        {t('box3Header1', { ns: 'rHotWater' })}
                                                    </Typography>
                                                </Grid>

                                                <Grid item sm={3}>
                                                    <div>
                                                        <Grid
                                                            container
                                                            direction="row"
                                                            alignItems="center"
                                                            justify="center"
                                                            spacing={2}>

                                                            <Grid item sm="auto">
                                                                <HtmlTooltip
                                                                    title="[TOOLTIP TEST] This measure has been added to your project"
                                                                    arrow>
                                                                    <Box className={classes.iconBackgroundColor} style={{ backgroundColor: "green" }}>
                                                                        <Box className={classes.iconBackgroundWhite}>
                                                                            <DoneIcon className={classes.iconAdded} />
                                                                        </Box>
                                                                    </Box>
                                                                </HtmlTooltip>
                                                            </Grid>

                                                            <Grid item sm="auto">
                                                                <HtmlTooltip
                                                                    title="[TOOLTIP TEST] Warning message"
                                                                    arrow>
                                                                    <Box className={classes.iconBackgroundColor} style={{ backgroundColor: "red" }}>
                                                                        <Box className={classes.iconBackgroundWhite}>
                                                                            <WarningIcon className={classes.iconWarning} />
                                                                        </Box>
                                                                    </Box>
                                                                </HtmlTooltip>
                                                            </Grid>

                                                        </Grid>
                                                    </div>
                                                </Grid>
                                            </Grid>

                                            <Grid
                                                container
                                                direction="row"
                                                spacing={0}
                                                justify="center"
                                                alignContent="center"
                                                className={classes.themePaperContainer}>

                                                <Grid item sm={12} md={12} lg={9}>
                                                    <div className={classes.themePaperTextBackground}>
                                                        <Typography className={classes.themePaperText} position="absolute">
                                                            {t('box3Text1', { ns: 'rHotWater' })}
                                                        </Typography>
                                                    </div>
                                                </Grid>

                                                <Grid item xs={10} sm={6} md={6} lg={3}>
                                                    <div className={classes.ratingContainer2}>
                                                        <HtmlTooltip
                                                            title={energyPerformanceRatingLabels[5]}
                                                            style={{ textAlign: "center" }}
                                                            arrow>
                                                            <Box className={classes.ratingText} mt={2} mb={1} borderColor="transparent">
                                                                <Typography component="legend">{t('energyPerformanceLabel', { ns: 'rOptionsGen' })}</Typography>
                                                                <Rating value={5} readOnly />
                                                            </Box>
                                                        </HtmlTooltip>
                                                        <HtmlTooltip
                                                            title={heritageRatingLabels[4]}
                                                            style={{ textAlign: "center" }}
                                                            arrow>
                                                            <Box className={classes.ratingText} mb={1} borderColor="transparent">
                                                                <Typography component="legend">{t('heritageLabel', { ns: 'rOptionsGen' })}</Typography>
                                                                <HeritageRating
                                                                    value={4}
                                                                    readOnly
                                                                    icon={<AccountBalanceIcon />} />
                                                            </Box>
                                                        </HtmlTooltip>
                                                        <HtmlTooltip
                                                            title={costRatingLabels[3]}
                                                            style={{ textAlign: "center" }}
                                                            arrow>
                                                            <Box className={classes.ratingText} mb={1} borderColor="transparent">
                                                                <Typography component="legend">{t('costLabel', { ns: 'rOptionsGen' })}</Typography>
                                                                <CostRating value={3} readOnly icon={<AccountBalanceWalletIcon />} /> {/*icon={<EuroSymbolIcon />}*/}
                                                            </Box>
                                                        </HtmlTooltip>
                                                        <HtmlTooltip
                                                            title={sustainabilityRatingLabels[4]}
                                                            style={{ textAlign: "center" }}
                                                            arrow>
                                                            <Box className={classes.ratingText} mb={2} borderColor="transparent">
                                                                <Typography component="legend">{t('sustainabilityLabel', { ns: 'rOptionsGen' })}</Typography>
                                                                <SustainabilityRating
                                                                    value={4}
                                                                    readOnly
                                                                    icon={<EcoIcon />} />
                                                            </Box>
                                                        </HtmlTooltip>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    </Grid>




                                    <Grid item xs={12} sm={12} id="id3" >
                                        <Paper
                                            className={classes.themePaper}
                                            style={{ backgroundImage: `url(${BackgroundImage})` }}
                                            onClick={() => {
                                                redirectTo("retrofittingHotWaterDistributionPipework");
                                            }}>
                                            <Grid
                                                container
                                                direction="row"
                                                spacing={0}
                                                className={classes.topRowBackground}>

                                                <Grid item sm={9}>
                                                    <Typography className={classes.themePaperTitle}>
                                                        {t('box4Header1', { ns: 'rHotWater' })}
                                                    </Typography>
                                                </Grid>

                                                <Grid item sm={3}>
                                                    <div>
                                                        <Grid
                                                            container
                                                            direction="row"
                                                            alignItems="center"
                                                            justify="center"
                                                            spacing={2}>

                                                            <Grid item sm="auto">
                                                                <HtmlTooltip
                                                                    title="[TOOLTIP TEST] This measure has been added to your project"
                                                                    arrow>
                                                                    <Box className={classes.iconBackgroundColor} style={{ backgroundColor: "green" }}>
                                                                        <Box className={classes.iconBackgroundWhite}>
                                                                            <DoneIcon className={classes.iconAdded} />
                                                                        </Box>
                                                                    </Box>
                                                                </HtmlTooltip>
                                                            </Grid>

                                                            <Grid item sm="auto">
                                                                <HtmlTooltip
                                                                    title="[TOOLTIP TEST] Warning message"
                                                                    arrow>
                                                                    <Box className={classes.iconBackgroundColor} style={{ backgroundColor: "red" }}>
                                                                        <Box className={classes.iconBackgroundWhite}>
                                                                            <WarningIcon className={classes.iconWarning} />
                                                                        </Box>
                                                                    </Box>
                                                                </HtmlTooltip>
                                                            </Grid>

                                                        </Grid>
                                                    </div>
                                                </Grid>
                                            </Grid>

                                            <Grid
                                                container
                                                direction="row"
                                                spacing={0}
                                                justify="center"
                                                alignContent="center"
                                                className={classes.themePaperContainer}>

                                                <Grid item sm={12} md={12} lg={9}>
                                                    <div className={classes.themePaperTextBackground}>
                                                        <Typography className={classes.themePaperText} position="absolute">
                                                            {t('box4Text1', { ns: 'rHotWater' })}
                                                        </Typography>
                                                    </div>
                                                </Grid>

                                                <Grid item xs={10} sm={6} md={6} lg={3}>
                                                    <div className={classes.ratingContainer2}>
                                                        <HtmlTooltip
                                                            title={energyPerformanceRatingLabels[5]}
                                                            style={{ textAlign: "center" }}
                                                            arrow>
                                                            <Box className={classes.ratingText} mt={2} mb={1} borderColor="transparent">
                                                                <Typography component="legend">{t('energyPerformanceLabel', { ns: 'rOptionsGen' })}</Typography>
                                                                <Rating value={5} readOnly />
                                                            </Box>
                                                        </HtmlTooltip>
                                                        <HtmlTooltip
                                                            title={heritageRatingLabels[4]}
                                                            style={{ textAlign: "center" }}
                                                            arrow>
                                                            <Box className={classes.ratingText} mb={1} borderColor="transparent">
                                                                <Typography component="legend">{t('heritageLabel', { ns: 'rOptionsGen' })}</Typography>
                                                                <HeritageRating
                                                                    value={4}
                                                                    readOnly
                                                                    icon={<AccountBalanceIcon />} />
                                                            </Box>
                                                        </HtmlTooltip>
                                                        <HtmlTooltip
                                                            title={costRatingLabels[3]}
                                                            style={{ textAlign: "center" }}
                                                            arrow>
                                                            <Box className={classes.ratingText} mb={1} borderColor="transparent">
                                                                <Typography component="legend">{t('costLabel', { ns: 'rOptionsGen' })}</Typography>
                                                                <CostRating value={3} readOnly icon={<AccountBalanceWalletIcon />} /> {/*icon={<EuroSymbolIcon />}*/}
                                                            </Box>
                                                        </HtmlTooltip>
                                                        <HtmlTooltip
                                                            title={sustainabilityRatingLabels[4]}
                                                            style={{ textAlign: "center" }}
                                                            arrow>
                                                            <Box className={classes.ratingText} mb={2} borderColor="transparent">
                                                                <Typography component="legend">{t('sustainabilityLabel', { ns: 'rOptionsGen' })}</Typography>
                                                                <SustainabilityRating
                                                                    value={4}
                                                                    readOnly
                                                                    icon={<EcoIcon />} />
                                                            </Box>
                                                        </HtmlTooltip>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    </Grid>



                                    <Grid item xs={12} sm={12} id="id4" >
                                        <Paper
                                            className={classes.themePaper}
                                            style={{ backgroundImage: `url(${WasteWaterImage})` }}
                                            onClick={() => {
                                                redirectTo("retrofittingHotWaterWaste");
                                            }}>
                                            <Grid
                                                container
                                                direction="row"
                                                spacing={0}
                                                className={classes.topRowBackground}>

                                                <Grid item sm={9}>
                                                    <Typography className={classes.themePaperTitle}>
                                                        {t('box5Header1', { ns: 'rHotWater' })}
                                                    </Typography>
                                                </Grid>

                                                <Grid item sm={3}>
                                                    <div>
                                                        <Grid
                                                            container
                                                            direction="row"
                                                            alignItems="center"
                                                            justify="center"
                                                            spacing={2}>

                                                            <Grid item sm="auto">
                                                                <HtmlTooltip
                                                                    title="[TOOLTIP TEST] This measure has been added to your project"
                                                                    arrow>
                                                                    <Box className={classes.iconBackgroundColor} style={{ backgroundColor: "green" }}>
                                                                        <Box className={classes.iconBackgroundWhite}>
                                                                            <DoneIcon className={classes.iconAdded} />
                                                                        </Box>
                                                                    </Box>
                                                                </HtmlTooltip>
                                                            </Grid>

                                                            <Grid item sm="auto">
                                                                <HtmlTooltip
                                                                    title="[TOOLTIP TEST] Warning message"
                                                                    arrow>
                                                                    <Box className={classes.iconBackgroundColor} style={{ backgroundColor: "red" }}>
                                                                        <Box className={classes.iconBackgroundWhite}>
                                                                            <WarningIcon className={classes.iconWarning} />
                                                                        </Box>
                                                                    </Box>
                                                                </HtmlTooltip>
                                                            </Grid>

                                                        </Grid>
                                                    </div>
                                                </Grid>
                                            </Grid>

                                            <Grid
                                                container
                                                direction="row"
                                                spacing={0}
                                                justify="center"
                                                alignContent="center"
                                                className={classes.themePaperContainer}>

                                                <Grid item sm={12} md={12} lg={9}>
                                                    <div className={classes.themePaperTextBackground}>
                                                        <Typography className={classes.themePaperText} position="absolute">
                                                            {t('box5Text1', { ns: 'rHotWater' })}
                                                        </Typography>
                                                    </div>
                                                </Grid>

                                                <Grid item xs={10} sm={6} md={6} lg={3}>
                                                    <div className={classes.ratingContainer2}>
                                                        <HtmlTooltip
                                                            title={energyPerformanceRatingLabels[5]}
                                                            style={{ textAlign: "center" }}
                                                            arrow>
                                                            <Box className={classes.ratingText} mt={2} mb={1} borderColor="transparent">
                                                                <Typography component="legend">{t('energyPerformanceLabel', { ns: 'rOptionsGen' })}</Typography>
                                                                <Rating value={5} readOnly />
                                                            </Box>
                                                        </HtmlTooltip>
                                                        <HtmlTooltip
                                                            title={heritageRatingLabels[4]}
                                                            style={{ textAlign: "center" }}
                                                            arrow>
                                                            <Box className={classes.ratingText} mb={1} borderColor="transparent">
                                                                <Typography component="legend">{t('heritageLabel', { ns: 'rOptionsGen' })}</Typography>
                                                                <HeritageRating
                                                                    value={4}
                                                                    readOnly
                                                                    icon={<AccountBalanceIcon />} />
                                                            </Box>
                                                        </HtmlTooltip>
                                                        <HtmlTooltip
                                                            title={costRatingLabels[3]}
                                                            style={{ textAlign: "center" }}
                                                            arrow>
                                                            <Box className={classes.ratingText} mb={1} borderColor="transparent">
                                                                <Typography component="legend">{t('costLabel', { ns: 'rOptionsGen' })}</Typography>
                                                                <CostRating value={3} readOnly icon={<AccountBalanceWalletIcon />} /> {/*icon={<EuroSymbolIcon />}*/}
                                                            </Box>
                                                        </HtmlTooltip>
                                                        <HtmlTooltip
                                                            title={sustainabilityRatingLabels[4]}
                                                            style={{ textAlign: "center" }}
                                                            arrow>
                                                            <Box className={classes.ratingText} mb={2} borderColor="transparent">
                                                                <Typography component="legend">{t('sustainabilityLabel', { ns: 'rOptionsGen' })}</Typography>
                                                                <SustainabilityRating
                                                                    value={4}
                                                                    readOnly
                                                                    icon={<EcoIcon />} />
                                                            </Box>
                                                        </HtmlTooltip>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    </Grid>


                                </Grid>
                            </Grid>
                            <Grid item lg={3} xl={2} className={classes.navBox}>
                                <Nav>
                                </Nav>
                            </Grid>
                        </Grid>
                    </Grid>
                    <br></br>
                </Paper>
            </Grid>
        </div>
    );
}

export default RetrofittingHotWaterOptions;