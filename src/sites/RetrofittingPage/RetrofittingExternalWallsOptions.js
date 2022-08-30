import React from "react";
import NavigationBar from "../../components/Navigation/NavigationBar";
import Container from "@material-ui/core/Container";
import BuildingsTable from "../../components/Buildings/BuildingsTable";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import InputBase from '@material-ui/core/InputBase';
import Colors from '../../components/Styles/colors';
import history from "../../utils/history";
import Typography from '@material-ui/core/Typography';
import WarningIcon from '@material-ui/icons/Warning';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import image1 from "../../external/images/fullBuilding_or_wideScene/TEST1.jpg";
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import DoneIcon from '@material-ui/icons/Done';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';
import EcoIcon from '@material-ui/icons/Eco';
import InfoIcon from '@material-ui/icons/Info';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import CloseIcon from '@material-ui/icons/Close';
import BannerImage from "../../external/images/fullBuilding_or_wideScene/wall2.JPG"
import BackgroundImage from "../../external/images/fullBuilding_or_wideScene/wall1.JPG"
import '../../components/Styles/fonts.scss';
import { overviewContainer, overviewTitleContainer, overviewIcon } from '../../components/Styles/classes';
import { heritageRatingLabels, costRatingLabels, energyPerformanceRatingLabels, sustainabilityRatingLabels } from '../../components/Styles/ratingLabels';

import { useTranslation } from 'react-i18next';

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
        backgroundPosition: "center 60%",
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
    themePaperContainer: {
        [theme.breakpoints.up('lg')]: {
            alignItems: "flex-end"
        },
    },
    themePaperTitle: {
        [theme.breakpoints.down('sm')]: {
            fontSize: theme.typography.pxToRem(18),
            marginRight: theme.spacing(2),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: theme.typography.pxToRem(24),
        },
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
        [theme.breakpoints.down('sm')]: {
            fontSize: theme.typography.pxToRem(16),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: theme.typography.pxToRem(18),
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
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        /*overflowWrap: "break-word",
        wordWrap: "break-word",
        hyphens: "auto",*/
        color: "black",
        //flexBasis: "33.33%",
        justify: "center",
    },
    themePaper: {
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(2),
        },
        [theme.breakpoints.up('md')]: {
            marginTop: theme.spacing(4),
        },
        height: "auto",
        backgroundImage: "url(" + (BackgroundImage) + ")",
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
            marginTop: theme.spacing(3),
            marginLeft: 25,
            marginRight: 25,
            marginBottom: theme.spacing(1),
            fontSize: 16,
        },
        marginTop: theme.spacing(6),
        marginLeft: 50,
        marginRight: 50,
        marginBottom: theme.spacing(2),
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
    iconBackgroundColor: {
        [theme.breakpoints.down('md')]: {
            width: 48,
            height: 48,
        },
        [theme.breakpoints.up('lg')]: {
            width: 56,
            height: 56,
        },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        border: '1px solid black'
    },
    iconBackgroundWhite: {
        [theme.breakpoints.down('md')]: {
            width: 32,
            height: 32,
        },
        [theme.breakpoints.up('lg')]: {
            width: 38,
            height: 38,
        },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white",
        borderRadius: 100,
    },
    iconAdded: {
        [theme.breakpoints.down('md')]: {
            fontSize: 32
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: 38
        },
        verticalAlign: 'middle',
        color: "green",
    },
    iconWarning: {
        [theme.breakpoints.down('md')]: {
            fontSize: 30,
            marginTop: -5
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: 35,
            marginTop: -7
        },
        verticalAlign: 'middle',
        color: "RED",
    },
    ratingText: {
        "&:hover": {
            cursor: "default"
        }
    },
    backgroundImage1: {
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(2),
            marginLeft: "auto",
            marginRight: "auto",
            height: "auto",
        },
        [theme.breakpoints.up('md')]: {
            marginTop: theme.spacing(4),
            marginLeft: theme.spacing(1.5),
            marginRight: theme.spacing(1.5),
            height: "auto",
        },
        backgroundPosition: "center 25%",
        //backgroundPosition: "center 25%",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        //backgroundSize: "100% 200%",
        //backgroundRepeat: "no-repeat",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: Colors.border1,
        borderLeftWidth: 12,
        borderLeftColor: Colors.themeRetrofitting,
        borderRadius: 0,
        visibility: "visible"
    },
    ratingContainer: {
        [theme.breakpoints.down('md')]: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
        [theme.breakpoints.up('lg')]: {
            marginTop: theme.spacing(9),
            marginBottom: theme.spacing(2),
            marginRight: theme.spacing(2),
            zIndex: 200,
            position: "relative",
        },
        backgroundColor: "white",
        textAlign: 'center',
        borderColor: "black",
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 15,
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

const RetrofittingExternalWallsOptions = () => {
    const classes = useStyles();

    const { t } = useTranslation();

    //for star ratings:
    const [heritageValue, setHeritageValue] = React.useState(3);
    const [costValue, setCostValue] = React.useState(4);
    const [performanceValue, setPerformanceValue] = React.useState(5);
    const [sustainabilityValue, setSustainabilityValue] = React.useState(4);

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
                            <p className="bannerText" variant="h1">Insulating external walls</p>
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

                        <Grid item xs={12} sm={10}>
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
                                            <header className="overviewTitle">Overview</header>
                                        </Grid>
                                    </Grid>
                                </React.Fragment>
                                <Typography>
                                    <ul style={{ listStyle: 'disc' }} className="overviewText">
                                        <li className="listItem">Walls can be insulated externally and internally. If the wall has a continuous cavity, this can be filled with insulation also.</li>
                                        <li className="listItem">Fitting insulation externally or internally has a major visual impact.
                                        Choosing where to use which insulation measure will depend on the cultural significance of the building elements.
                                        Often internal insulation is used when the external facades have significant features.
                                        If external insulation is not acceptable on front faccades, it might still be applicable at rear elevation.</li>
                                        <li className="listItem">Understanding the impact of wall insulation on moisture transfer can be critical to prevent mould growth and fabric deteriation
                                        as a consequence on condensation, moisture damage due to wind driven rain or problems with rising damp due to XXXXX.
                                        </li>
                                    </ul>
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={11}>
                            <div className={classes.infoText2}>
                                 
                                 
                                   
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                 
                                 
                                   
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </Grid>
                    </Grid>


                    <Grid
                        container
                        alignItems="center"
                        spacing={0}
                        justify="center">

                        <Grid item xs={12} lg={10}>
                            <Paper
                                className={classes.themePaper}>
                                <Grid
                                    container
                                    direction="row"
                                    spacing={0}
                                    className={classes.topRowBackground}>

                                    <Grid item sm={9}>
                                        <Typography className={classes.themePaperTitle}>
                                            High-performance wall insulation systems for external application
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
                                    verticalAlign="middle"
                                    className={classes.themePaperContainer}>

                                    <Grid item xs={12} lg={9}>
                                        <div className={classes.themePaperTextBackground}>
                                            <Typography className={classes.themePaperText}>
                                                High-performance insulation systems, such as aerogel, PIR and vacuum panels, offer advanced thermal resistance.
                                                They insulate a building better than conventional insulation of the same thickness.
                                                This means also that thinner high-performance systems have a smaller visual impact and can be installed where space is limited.
                                                The outside face of the insulation can be boarded, clad or rendered.
                                            </Typography>
                                        </div>
                                    </Grid>

                                    <Grid item xs={10} sm={6} md={6} lg={3}>
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
                            </Paper>
                        </Grid>
                    </Grid>
                    <br></br><br></br>
                </Paper>
            </Grid>
        </div >
    );
}

export default RetrofittingExternalWallsOptions;