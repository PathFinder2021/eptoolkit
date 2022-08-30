import React, { useEffect, useState } from 'react';
import { Bar, Radar } from 'react-chartjs-2';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Grid, Button, makeStyles, Typography, Select, MenuItem, Switch } from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';


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

const rand = () => Math.round(Math.random() * 10);

const defaultData = () => ({
  labels: ['Walls', '', 'Doors', '', 'Windows', '', 'Roofs', '', 'Floors', ''],
  datasets: [
    {
      label: '',
      data: [6, 3, 7, 3, 10, 3, 8, 3, 7, 3],
      borderWidth: 1,
    },
  ],
});

const newData = (propLabels, propData) => ({
  labels: propLabels,
  datasets: [
    {
      label: 'Data',
      data: propData,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
});
const newRadarData = (propLabels, propData) => ({
  labels: propLabels,
  datasets: [
    {
      label: 'Data',
      data: propData,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',

      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
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
          max: 10,
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
      max: 10,
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
      circular: true
    }
  }
};

const TestChart = () => {
  const classes = useStyles();
  const [data, setData] = useState(defaultData());
  const [dataRadar, setRadarData] = useState(defaultData());
  const [data2, setData2] = useState(defaultData());
  const [chartType, setChartType] = useState(0);
  const [errorText, setErrorText] = useState(null);
  const { control, handleSubmit } = useForm();

  const [valueSelection, setValueSelection] = React.useState();

  const handleValueChange = (event, newValue) => {
    setValueSelection(newValue);
  };

  const onSubmit = submitData => {
    // placeholder
    console.log(submitData);
    const score = "3";

    setData(newData(["test1", "test2", "test3", "selector", "togglebutton"], [submitData.test1, submitData.test2, submitData.test3, submitData.selector, valueSelection]));
    setRadarData(newRadarData(["test1", "test2", "test3", "selector", "togglebutton"], [submitData.test1, submitData.test2, submitData.test3, submitData.selector, valueSelection]));
    setData(newData(["test1", "test2", "test3", "selector", "togglebutton"], [submitData.test1, submitData.test2, submitData.test3, submitData.selector, valueSelection]));
    setData2(newData(["test1", "", "test2", "", "test3", "", "selector", "", "togglebutton", ""], [submitData.test1, score, submitData.test2, score, submitData.test3, score, submitData.selector, score, valueSelection, score,]));
    setErrorText(null);
    // placeholder
  };

  const onError = (errors, e) => {

    setErrorText(null);
    if (errors.test1 != null) {
      setErrorText(errors.test1.message);
    }

    else if (errors.test2 != null) {
      setErrorText(errors.test2.message);
    }

    else if (errors.test3 != null) {
      setErrorText(errors.test3.message);
    }

  };
  /*
    useEffect(() => {
      const interval = setInterval(() => setData(genData()), 5000);
  
      return () => clearInterval(interval);
    }, []);
  */
  return (
    <>
      <Grid container item xs={12} direction="column" justify="center" alignItems="center" style={{ paddingTop: 25, margin: 'auto' }}>
        <form className={classes.addService} onSubmit={handleSubmit(onSubmit, onError)}>
          <Grid
            container
            spacing={3}
            direction="row"
            alignItems="center"
            justify="center"
            style={{ margin: 'auto' }}
          >
            <Grid item xs={12}>
              <Typography className="infoText" variant="body1">
                {errorText}
              </Typography>
            </Grid>
          </Grid>

          <Grid container
            direction="row"
            alignItems="center"
            justify="center"
            style={{ margin: 'auto' }}>
            <Grid item xs={12} md={10}>
              {!chartType ? (
                <Radar data={dataRadar} options={optionsRadar} />
              ) : (
                <Bar data={data} options={optionsBar} />
              )}
            </Grid>

            <Grid item md={6}>
              {!chartType ? (
                <Radar data={data2} options={optionsRadar} />
              ) : (
                <Bar data={data} options={optionsBar} />
              )}
            </Grid>
          </Grid>
        </form>

        <Switch
          checked={chartType}
          onChange={() => { setChartType(chartType => !chartType) }}
          name="chartSelectorSwitch"
          color="default"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
      </Grid>
    </>
  );
};

export default TestChart;