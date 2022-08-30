import React, { useState, useEffect } from 'react';
import { Bar, Radar } from 'react-chartjs-2';
import {  Grid, makeStyles, Switch} from '@material-ui/core';


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

const newBarData = (propLabels, propPerformance, colors) => ({
  labels: propLabels,
  datasets: [
    {
      label: "Performance",
      data: propPerformance,
      backgroundColor: colors,
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

const newRadarData = (propLabels, propPerformance) => ({
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
          stepSize: 1,
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

const SimpleChart = (props) => {
  const classes = useStyles();

  const titles = Object.keys(props.value);
  const values = [props.value.doors[0].doorValue, props.value.windows[0].windowValue, props.value.roof[0].roofValue, props.value.floor[0].floorValue, props.value.exterior[0].exteriorValue]
  const status = [props.value.doors[0].doorStatus, props.value.windows[0].windowStatus, props.value.roof[0].roofStatus, props.value.floor[0].floorStatus, props.value.exterior[0].exteriorStatus]
  const [colors, setColors] = useState(['rgba(0, 255, 0, 0.2)', 'rgba(255, 0, 0, 0.2)', 'rgba(0, 0, 255, 0.2)', 'rgba(0, 0, 255, 0.2)', 'rgba(0, 0, 255, 0.2)']);

  const [dataBar, setBarData] = useState(newBarData(titles,values, colors));
  const [dataRadar, setRadarData] = useState(newRadarData(titles,values));
  const [chartType, setChartType] = useState(0);

  
  const handleColor = () => {
    const newColors = status.map(i => {

      if(i === "Maintained"){
        i = 'rgba(0, 255, 0, 0.2)'
      }

      else if (i === "Protected"){
        i = 'rgba(255, 0, 0, 0.2)'
      }

      else{
        i = 'rgba(0, 0, 255, 0.2)'
      }

      return i
    });
    
    setBarData(newBarData(titles,values, newColors));    
  }


/*
  const updateCharts = () => {
    setBarData(titles,values);
    setRadarData(titles,values);
  };

  useEffect(updateCharts, [props.value]);
*/
  useEffect(handleColor, []);


  return (
        <Grid container item xs={12} direction="row" justify="center" alignItems="center" style={{ paddingTop: 25, margin: 'auto'}}>

              <Grid item xs={12} md={8}>
                  {!chartType ? (
                      <Radar data={dataRadar} options={optionsRadar}/>
                  ) : (
                      <Bar data={dataBar} options={optionsBar}/>
                  )}
              </Grid>

              <Grid item xs={12} md={8}>
                  <Switch
                  checked={chartType}
                  onChange={() => { setChartType(chartType => !chartType) }}
                  name="chartSelectorSwitch"
                  color="default"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                  />
              </Grid>

        </Grid>
  );
};

export default SimpleChart;