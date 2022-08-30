import React, { useState } from 'react';
import NavigationBar from "../../components/Navigation/NavigationBar2"; // yellow navbar
import { makeStyles } from "@material-ui/core/styles";
import { v4 as uuidv4 } from 'uuid';
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";
import InfoIcon from '@material-ui/icons/Info';
import Colors from '../../components/Styles/colors';
import history from "../../utils/history";
import Typography from "@material-ui/core/Typography";
import BannerImage from "../../external/images/fullBuilding_or_wideScene/wide2.JPG"
import '../../components/Styles/fonts.scss';
import { overviewContainer, overviewIcon, overviewTitleContainer } from '../../components/Styles/classes';

import ShoppingCartExample from './ShoppingCartExample';
import ShoppingCartMeasures from './ShoppingCartMeasures';

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
    overviewContainer: overviewContainer,
    overviewTitleContainer: overviewTitleContainer,
    overviewIcon: overviewIcon,
}));

const redirectTo = (addr) => {
    history.push("#/"+addr);
    history.go(0);
    window.scrollTo(0, 0);
};

const CartPage = (props) => {
    const classes = useStyles();
    
    const [inputRetrofits, setInputRetrofits] = useState([
        { id: "placeholder", name: "", description: "", values: "" },
    ]);
    
    const handleAddFields = (newName, newDescription, newValues) => {
        setInputRetrofits([...inputRetrofits, { id: uuidv4(), name: newName, description: newDescription, values: newValues }])
    }
    
    const handleRemoveFields = (id) => {
        inputRetrofits.map(i => {
            if (id === i.id) {
                const values = [...inputRetrofits];
                values.splice(values.findIndex(value => value.id === id), 1);
                setInputRetrofits(values);
            }
        })
    }

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
                            <p className="bannerText">Cart</p>
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
                                        <Grid item>
                                            <header className="overviewTitle">Overview</header>
                                        </Grid>
                                    </Grid>
                                </React.Fragment>
                                <Typography>
                                    <div className="overviewText">
                                        <p> Cart </p>
                                    </div>
                                </Typography>
                            </div>
                        </Grid>
                        <Grid container direction="column" item xs={12} sm={10}>

                            <Paper elevation={1} className={classes.baseStyle}>
                                <ShoppingCartMeasures
                                    value={inputRetrofits}
                                    onClick={handleAddFields}
                                />
                                <ShoppingCartExample
                                    value={inputRetrofits}
                                    onChange={inputRetrofits}
                                    onClick={handleRemoveFields}
                                />
                            </Paper>

                        </Grid>
                    </Grid>
                    <br></br><br></br>
                </Paper>
            </Grid>
        </div>
    );
}

export default CartPage;