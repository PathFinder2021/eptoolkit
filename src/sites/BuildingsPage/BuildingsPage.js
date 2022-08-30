import React from "react";
import NavigationBar from "../../components/Navigation/NavigationBar";
import Container from "@material-ui/core/Container";
import BuildingsTable from "../../components/Buildings/BuildingsTable";
import { makeStyles } from "@material-ui/core/styles";
import Colors from '../../components/Styles/colors';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    width: '100%',
    margin: "auto",
    flexGrow: 1,
    overflowX: "hidden"
  },
}));

const BuildingsPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavigationBar />
      <BuildingsTable />
    </div>
  );
};

export default BuildingsPage;