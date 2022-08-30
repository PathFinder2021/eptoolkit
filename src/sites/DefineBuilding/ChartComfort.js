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

const ChartComfort = (props) => {
  const classes = useStyles();

  const titles = ["Stuffiness", "Draughtiness", "Condensation", "Outside noise", "Overheating", "Inadequate heating"];
  const values = [props.value.comfort.comfortAirQuality, props.value.comfort.comfortDraughts, props.value.comfort.comfortHumidity, props.value.comfort.comfortNoise, props.value.comfort.comfortTempSummer, props.value.comfort.comfortTempWinter]
  const [colors, setColors] = useState(['rgba(0, 0, 255, 0.2)', 'rgba(0, 0, 255, 0.2)', 'rgba(0, 0, 255, 0.2)', 'rgba(0, 0, 255, 0.2)', 'rgba(0, 0, 255, 0.2)', 'rgba(0, 0, 255, 0.2)']);

  const [dataBar, setBarData] = useState(newBarData(titles,values, colors));
  const [dataRadar, setRadarData] = useState(newRadarData(titles,values));
  const [chartType, setChartType] = useState(0);

  const handleColor = () => {
      if(props.value.comfort.comfortAirQuality < 3 || props.value.comfort.comfortHumidity < 3 || props.value.comfort.comfortTempSummer < 3){     
        // 1, 3, 5, arvosta riippuen
        if(props.value.comfort.comfortAirQuality <3){
          colors[0] = 'rgba(255, 0, 0, 0.2)';
        }
        if(props.value.comfort.comfortHumidity <3){
          colors[2] = 'rgba(255, 0, 0, 0.2)';
        }
        if(props.value.comfort.comfortTempSummer <3){
          colors[4] = 'rgba(255, 0, 0, 0.2)';
        }
        
      }
      if(props.value.comfort.comfortDraughts < 3 && props.value.comfort.comfortTempWinter < 5){
          //2 + 6 punaiseksi
          colors[1] = 'rgba(255, 0, 0, 0.2)';
          colors[5] = 'rgba(255, 0, 0, 0.2)';
      }
      if(props.value.comfort.comfortHumidity <3 && props.value.comfort.comfortTempWinter < 5 && props.value.comfort.comfortDraughts > 3){    
          //3 + 6 punaiseksi
          colors[2] = 'rgba(255, 0, 0, 0.2)';
          colors[5] = 'rgba(255, 0, 0, 0.2)';
      }
      if(props.value.comfort.comfortNoise <3){
          // 4 punaiseksi
          colors[3] = 'rgba(255, 0, 0, 0.2)';
      }
      setBarData(newBarData(titles,values, colors));   
  }

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

export default ChartComfort;