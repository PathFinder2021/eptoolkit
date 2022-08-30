import React, { useState } from 'react';
import { Bar, Radar } from 'react-chartjs-2';
import {  Grid, Hidden, makeStyles, Switch } from '@material-ui/core';


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

const newBarData = (propLabels, propPerformance, propInterior,  propExterior) => ({
  labels: propLabels,
  datasets: [
    {
      label: "Performance",
      data: propPerformance,
      backgroundColor: 'rgba(0, 0, 255, 0.2)',
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 2,
    },

    {
      label: "Significance, Interior",
      data: propInterior,
      backgroundColor: 'rgba(0, 255, 0, 0.2)',
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 2,
    },
    {
      label: "Significance, Exterior",
      data: propExterior,
      backgroundColor: 'rgba(255, 0, 0, 0.2)',
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 2,
    },
  ],
});
const newRadarData = (propLabels, propPerformance, propInterior,  propExterior) => ({
  labels: propLabels,
  datasets: [
    {
      label: "Performance",
      data: propPerformance,
      backgroundColor: 'rgba(135, 211, 124, 0.2)',
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 2,
    },
    {
      label: "Significance, Interior",
      data: propInterior,
      backgroundColor: ' rgba(0, 181, 204, 0.2',
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 2,
    },
    {
      label: "Significance, Exterior",
      data: propExterior,
      backgroundColor: 'rgba(65, 131, 215, 0.2)',
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 2,
    },
  ],
});

const optionsBar = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          min: 0,
          max: 7,
          stepSize: 2,
        },
      },
    ],
  },
};

const optionsRadar = {
  scale: {
    ticks: {
      min: 0,
      max: 7,
      stepSize: 2,
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

const ChartWithProps = (props) => {
  const classes = useStyles();
  const titles = props.value.doors.map(x=>x.doorDescription);
  const performance = props.value.doors.map(x=>x.doorPerformance);
  const interior = props.value.doors.map(x=>x.doorInternalImportance);
  const exterior = props.value.doors.map(x=>x.doorExternalImportance);

  const [dataBar, setBarData] = useState(newBarData(titles,performance,interior, exterior));
  const [dataRadar, setRadarData] = useState(newRadarData(titles,performance,interior, exterior));
  const [chartType, setChartType] = useState(0);

  //setBarData(newBarData(titles,values));
  //setRadarData(newRadarData(titles,values));

  return (
        <Grid container item xs={12} direction="row" justify="center" alignItems="center" style={{ paddingTop: 25, margin: 'auto'}}>
        
          {!(props.value.doors.length >= 3) ? (
            <Grid item xs={12} md={8}>
              <Bar data={dataBar} options={optionsBar} />
            </Grid>
          ) : (
            <Grid item xs={12} md={8}>
              {!chartType ? (
                  <Radar data={dataRadar} options={optionsRadar}/>
              ) : (
                  <Bar data={dataBar} options={optionsBar}/>
              )}
            </Grid>
          )}
          <Grid item xs={12} md={8}>
            <Switch
            checked={chartType}
            onChange={() => { setChartType(chartType => !chartType) }}
            disabled={!(props.value.doors.length >= 3)}
            name="chartSelectorSwitch"
            color="default"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          </Grid>
        </Grid>
  );
};

export default ChartWithProps;