import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import Launch from "@material-ui/icons/Launch";
import { useBackend } from "../../utils/BackendProvider";
import history from "../../utils/history";
import InputBase from '@material-ui/core/InputBase';
import Colors from '../Styles/colors';
import '../../components/Styles/fonts.scss';

import ImageWithModal from "../reusable/ImageWithModal";

import { useAuth0 } from "../../utils/react-auth0-spa"

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: Colors.baseColor1,
  },
  paper: {
    width: '75%',
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(0),
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  headerRow: {
    height: 75,
  },
  row: {
    height: 110
  },
  card: {
    maxWidth: 90
  },
  cardMedia: {
    height: 90,
    maxWidth: 90,
    "&:hover": {
      cursor: "pointer"
    }
  },
  newProjectGrid: {
    display: "flex",
    padding: 0,
    margin: 0,
    flexWrap: "nowrap",
  },
}));

const Registration = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Paper className={classes.paper}>
          <Grid
            container direction="row"
            alignItems="center"
            justify="flex-start"
          >
            <header className={classes.headerBar}>
              |
        </header>
            <header className={classes.header}>
              User registration
        </header>
          </Grid>
          <Grid
            container direction="row"
            alignItems="center"
            justify="center"
            spacing={2}
            className={classes.newProjectGrid}
          >
            <Grid item>
              <div className="baseText">
                Email address
                    </div>
            </Grid>
            <Grid item xs={8}>
              <div>
                <InputBase
                  className="input"
                  placeholder="TEST"
                />
              </div>
            </Grid>
          </Grid>
          <Button  justify="flex-end">
            Sign in / register
                    </Button>
        </Paper>
      </Grid>
    </div>
  );
}

export default Registration;