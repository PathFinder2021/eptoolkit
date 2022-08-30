import React from "react";
import NavigationBar from "../../components/Navigation/NavigationBar";
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";
import Colors from '../../components/Styles/colors';
import history from "../../utils/history";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Hidden from '@material-ui/core/Hidden';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import BannerImage from "../../external/images/windows/window1.JPG"
import image1 from "../../external/images/misc/house1.png"
import Nav from './Nav2.js'
import '../../components/Styles/fonts.scss';
import { retrofitLinkButton } from '../../components/Styles/classes';

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
    boxBase: {
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
        minHeight: 300,
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

const BuildingFabric = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

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
                            <p className="bannerText">The fabric of historic buildings</p>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justify="center">
                <Paper className={classes.paper}>

                    <div className={classes.boxBase}>
                        <Grid
                            container
                            direction="row"
                            alignItems="center"
                            justifyContent="center"
                            spacing={1}
                            className={classes.boxGrid}>

                            <Grid item xs={12} lg={5} container>
                                <div style={{ position: "relative" }}>
                                    <img src={image1} className={classes.boxImage}>
                                    </img>

                                    <Hidden smUp>
                                        <button disabled className={classes.retrofitLinkButton}
                                            style={{
                                                left: "50%",
                                                transform: "translateX(-50%)",
                                                top: "7%",
                                                position: "absolute"
                                            }}
                                            onMouseEnter={event => onMouseOverButton(event)}
                                            onClick={() => {
                                                redirectTo();
                                            }}>
                                            Roofs
                                            </button>
                                        <button disabled className={classes.retrofitLinkButton}
                                            style={{
                                                right: "2%",
                                                top: "50%",
                                                position: "absolute"
                                            }}
                                            onMouseEnter={event => onMouseOverButton(event)}
                                            onClick={() => {
                                                redirectTo();
                                            }}>
                                            Windows
                                            </button>
                                        <button disabled className={classes.retrofitLinkButton}
                                            style={{
                                                left: "2%",
                                                bottom: "4%",
                                                position: "absolute"
                                            }}
                                            onMouseEnter={event => onMouseOverButton(event)}
                                            onClick={() => {
                                                redirectTo();
                                            }}>
                                            Floors
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
                                            Doors
                                        </button>
                                        <button disabled className={classes.retrofitLinkButton}
                                            style={{
                                                left: "2%",
                                                top: "50%",
                                                position: "absolute"
                                            }}
                                            onMouseEnter={event => onMouseOverButton(event)}
                                            onClick={() => {
                                                redirectTo();
                                            }}>
                                            Walls
                                    </button>
                                    </Hidden>

                                    <Hidden lgUp xsDown>
                                        <button disabled className={classes.retrofitLinkButton}
                                            style={{
                                                left: "50%",
                                                transform: "translateX(-50%)",
                                                top: "7%",
                                                position: "absolute"
                                            }}
                                            onMouseEnter={event => onMouseOverButton(event)}
                                            onClick={() => {
                                                redirectTo();
                                            }}>
                                            Roofs
                                            </button>
                                        <button disabled className={classes.retrofitLinkButton}
                                            style={{
                                                right: "20%",
                                                top: "50%",
                                                position: "absolute"
                                            }}
                                            onMouseEnter={event => onMouseOverButton(event)}
                                            onClick={() => {
                                                redirectTo();
                                            }}>
                                            Windows
                                            </button>
                                        <button disabled className={classes.retrofitLinkButton}
                                            style={{
                                                left: "20%",
                                                bottom: "2%",
                                                position: "absolute"
                                            }}
                                            onMouseEnter={event => onMouseOverButton(event)}
                                            onClick={() => {
                                                redirectTo();
                                            }}>
                                            Floors
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
                                            Doors
                                    </button>
                                        <button disabled className={classes.retrofitLinkButton}
                                            style={{
                                                left: "12%",
                                                top: "50%",
                                                position: "absolute"
                                            }}
                                            onMouseEnter={event => onMouseOverButton(event)}
                                            onClick={() => {
                                                redirectTo();
                                            }}>
                                            Walls
                                    </button>
                                    </Hidden>

                                    <Hidden mdDown>
                                        <button disabled className={classes.retrofitLinkButton}
                                            style={{
                                                left: "50%",
                                                transform: "translateX(-50%)",
                                                top: "-10%",
                                                position: "absolute"
                                            }}
                                            onMouseEnter={event => onMouseOverButton(event)}
                                            onClick={() => {
                                                redirectTo();
                                            }}>
                                            Roofs
                                            </button>
                                        <button disabled className={classes.retrofitLinkButton}
                                            style={{
                                                right: "10%",
                                                top: "42%",
                                                position: "absolute"
                                            }}
                                            onMouseEnter={event => onMouseOverButton(event)}
                                            onClick={() => {
                                                redirectTo();
                                            }}>
                                            Windows
                                            </button>
                                        <button disabled className={classes.retrofitLinkButton}
                                            style={{
                                                left: "10%",
                                                bottom: "2%",
                                                position: "absolute"
                                            }}
                                            onMouseEnter={event => onMouseOverButton(event)}
                                            onClick={() => {
                                                redirectTo();
                                            }}>
                                            Floors
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
                                            Doors
                                    </button>
                                        <button disabled className={classes.retrofitLinkButton}
                                            style={{
                                                left: "3%",
                                                top: "42%",
                                                position: "absolute"
                                            }}
                                            onMouseEnter={event => onMouseOverButton(event)}
                                            onClick={() => {
                                                redirectTo();
                                            }}>
                                            Walls
                                    </button>
                                    </Hidden>
                                </div>
                            </Grid>
                            <Grid item xs={12} lg={7}>
                                <br></br><br></br>
                                <p className={classes.boxHeader}>Doors, floors, roofs, windows &#38; walls</p>
                                <p className={classes.boxText}>
                                    Most external elements of the building fabric can be thermally improved, either from the outside or
                                    the inside. Where cavities exist within the fabric, these can also be utilised.
                                    </p>
                                <p className={classes.boxText}>
                                    Some elements are easier to improve than others, both for technical reasons and in order to respect the
                                    value they add to the cultural significance of the building.
                                    </p>

                                <p className={classes.boxLink}>
                                    <Hidden lgUp>
                                        <ArrowUpwardIcon className={classes.boxIcon} /></Hidden>
                                    <Hidden mdDown><ArrowBackIcon className={classes.boxIcon} /></Hidden> Click on a
                                    fabric element of the house for options</p>

                                <br></br>

                                <p className={classes.boxLink}> <ArrowDownwardIcon className={classes.boxIcon} /> Explore
                                    which building elements to prioritise when planning a retrofit</p>
                                <br></br><br></br>

                            </Grid>
                        </Grid>
                    </div>

                    <br></br><br></br><br></br>

                    <Grid
                        container direction="row"
                        justify="flex-start">
                        <Grid item md={12} lg={9} xl={10} container direction="column">
                            <Grid item id="how">
                                <header className="retrofitHeader">
                                    <b>Retrofitting buildings is a balancing act</b>
                                </header>
                            </Grid>
                            <Grid item>
                                <p className="listedInfoText">
                                     
                                     
                                       
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                     
                            </p>
                            </Grid>
                            <Grid item id="cultural">
                                <header className="retrofitHeader">
                                    <b>Effects on the building's cultural significance</b>
                                </header>
                                <p className="listedInfoText">
                                     
                                     
                                       
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                     
                            </p>
                            </Grid>

                            <Grid item id="sideEffects">
                                <header className="retrofitHeader">
                                    <b>Possible technical side effects</b>
                                </header>
                                <p className="listedInfoText">
                                     
                                     
                                       
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                     
                            </p>
                            </Grid>

                            <Grid item id="options">
                                <header className="retrofitHeader">
                                    <b>Options for designing this retrofit measure</b>
                                </header>
                                <p className="listedInfoText">
                                     
                                     
                                       
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                     
                            </p>
                            </Grid>

                            <Grid item id="info">
                                <header className="retrofitHeader">
                                    <b>Further information</b>
                                </header>
                                <p className="listedInfoText">
                                     
                                     
                                       
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                     
                            </p>
                            </Grid>

                            <Grid item>
                                <header className="retrofitHeader">
                                    <b>These retrofit measures might also interest you</b>
                                </header>
                            </Grid>
                            <Grid item>
                                <p className="listedInfoText">
                                     
                                     
                                       
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                     
                            </p>
                            </Grid>
                        </Grid>
                        <Grid item lg={3} xl={2} className={classes.navBox}>
                            <Nav>
                            </Nav>
                        </Grid>
                    </Grid>
                    <br></br><br></br>
                </Paper>
            </Grid>
        </div>
    );
}

export default BuildingFabric;