import React, { useState } from 'react';
import { Bar, Radar } from 'react-chartjs-2';
import {  Grid, makeStyles, Button } from '@material-ui/core';


/*
To do:
  page scrolls up each time chart gets redrawn. Find out why.
*/

const useStyles = makeStyles({
  addService: {
    display: "flex",
    flexDirection: "column",
    marginTop: 25,
    marginBottom: 50
  },
  formControl: {
    margin: 10,
  },
});

const defaultData = () => ({
  labels: ['', '', '', '', ''],
  datasets: [
    {
      label: '',
      data: [0, 0, 0, 0, 0],
      borderWidth: 1,
    },
  ],
});


const newRadarData = (propLabels, propValues) => ({
  labels: propLabels,
  datasets: [
    {
      label: "Building condition",
      data: propValues,
      backgroundColor: 'rgba(135, 211, 124, 0.2)',
      borderColor:'rgba(255, 99, 132, 1)',
      borderWidth: 2,
    },
  ],
});


const optionsRadar = {
  scale: {
    ticks: {
      min: 0,
      max: 7,
      stepSize: 1,
      showLabelBackdrop: false,
      backdropColor: "rgba(203, 197, 11, 1)"
    },
    angleLines: {
      color: "rgba(0, 0, 0, .2)",
      lineWidth: 1
    },
    gridLines: {
      color: "rgba(0, 0, 0, .2)",
      circular: false
    }
  }
};

const ChartBuildingCondition = (props) => {
  const classes = useStyles();
  const titles = ["Yard","Foundation","Floor","Outer Wall","Inner Wall", "Doors / Windows", "Ceiling", "Roof", "Interior"];
  const valuesOnly = Object.values(props.value.condition);
  //const valuesOnly = [props.value.condition.conditionYard]
  //console.log(valuesOnly);

 
  const [dataRadar, setRadarData] = useState(newRadarData(titles, valuesOnly));

  return (
        <Grid container item xs={12} direction="row" justify="center" alignItems="center" style={{ paddingTop: 25, margin: 'auto'}}>


                <Radar data={dataRadar} options={optionsRadar}/>
                <Button onClick={() => { setRadarData(newRadarData(titles,valuesOnly)) }}>Refresh chart</Button>
        </Grid>
  );
};

export default ChartBuildingCondition;