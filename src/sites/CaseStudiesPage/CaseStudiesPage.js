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
import { overviewContainer, overviewIcon, overviewTitleContainer } from '../../components/Styles/classes';

import { useTranslation } from 'react-i18next';
import i18n from "../../i18n";

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

const onMouseOver = event => {
    const el = event.currentTarget;
    el.style.backgroundColor = Colors.themeCaseStudiesLightHover;
    el.style.cursor = "pointer";
};
const onMouseLeave = event => {
    const el = event.currentTarget;
    el.style.backgroundColor = Colors.themeCaseStudiesLight;
};

const CaseStudiesPage = () => {
    const classes = useStyles();
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
                            <p className="bannerText">{t('header1', { ns: 'caseStudiesT' })}</p>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justify="center">
                <Paper className={classes.paper}>
                    <Grid container
                        direction="row"
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
                                        <Grid item className="overviewTitle">
                                            {t('box1Header1', { ns: 'caseStudiesT' })}
                                        </Grid>
                                    </Grid>
                                </React.Fragment>
                                <Typography>
                                    <p className="overviewText">{t('box1Text1', { ns: 'caseStudiesT' })}</p>
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        alignItems="center"
                        spacing={0}
                        justify="center">
                        <Grid item xs={12} sm={10}>
                            <a href="https://ep.interreg-npa.eu/" style={{ textDecoration: "none" }} target="_blank">
                                <Paper
                                    className={classes.themePaper}
                                    onMouseEnter={event => onMouseOver(event)}
                                    onMouseLeave={event => onMouseLeave(event)}>
                                    <Typography className={classes.themePaperTitle}>
                                        {t('box2Header1', { ns: 'caseStudiesT' })}
                                    </Typography>
                                    <Typography className={classes.themePaperText}>
                                        <p>{t('box2Text1', { ns: 'caseStudiesT' })}</p>
                                        <p>{t('box2Text2', { ns: 'caseStudiesT' })}</p>
                                    </Typography>
                                </Paper>
                            </a>
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <a href="https://www.hiberatlas.com/en/welcome-1.html" style={{ textDecoration: "none" }} target="_blank">
                                <Paper
                                    className={classes.themePaper}
                                    onMouseEnter={event => onMouseOver(event)}
                                    onMouseLeave={event => onMouseLeave(event)}>
                                    <Typography className={classes.themePaperTitle}>
                                        {t('box3Header1', { ns: 'caseStudiesT' })}
                                    </Typography>
                                    <Typography className={classes.themePaperText}>
                                        {t('box3Text1', { ns: 'caseStudiesT' })}
                                    </Typography>
                                </Paper>
                            </a>
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <a href="http://responsible-retrofit.org/wheel/" style={{ textDecoration: "none" }} target="_blank">
                                <Paper
                                    className={classes.themePaper}
                                    onMouseEnter={event => onMouseOver(event)}
                                    onMouseLeave={event => onMouseLeave(event)}>
                                    <Typography className={classes.themePaperTitle}>
                                        {t('box4Header1', { ns: 'caseStudiesT' })}
                                    </Typography>
                                    <Typography className={classes.themePaperText}>
                                        {t('box4Text1', { ns: 'caseStudiesT' })}
                                    </Typography>
                                </Paper>
                            </a>
                        </Grid>
                    </Grid>
                    <br></br><br></br>
                </Paper>
            </Grid>
        </div>
    );
}

export default CaseStudiesPage;