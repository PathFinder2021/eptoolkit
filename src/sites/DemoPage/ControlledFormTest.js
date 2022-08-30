import React, { useState } from 'react';
import {useForm, Controller} from 'react-hook-form';
import { TextField, Grid, Button, makeStyles, Typography, Checkbox, FormControl, 
         FormControlLabel, FormLabel, FormGroup} from '@material-ui/core';

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

const AddService = () => {

    const classes = useStyles();
    const [errorText, setErrorText] = useState(null);

    const { control, handleSubmit } = useForm();
   
    const [checkboxGroup1, setCheckboxGroup1] = useState({
      cb1: false,
      cb2: false
    });

    const [checkboxGroup2, setCheckboxGroup2] = useState({
      cb3: false,
      cb4: false
    });

    const { cb1, cb2} = checkboxGroup1;

    const { cb3, cb4} = checkboxGroup2;


    const onSubmit = data => {

        if(checkboxGroup1.cb1 === false){
            checkboxGroup1.cb2 = false;
          }

        console.log(data);
        console.log(checkboxGroup1);
        console.log(checkboxGroup2);
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

        const handleChange = (event) => {

          if(checkboxGroup1.hasOwnProperty(event.target.name) === true){
            setCheckboxGroup1({ ...checkboxGroup1, [event.target.name]: event.target.checked });
          }
          else if(checkboxGroup2.hasOwnProperty(event.target.name) === true){
            setCheckboxGroup2({ ...checkboxGroup2, [event.target.name]: event.target.checked });
          }
          else{
            console.log("error at handleChange")
          }

        };

    return (
    <Grid container item xs={12} direction="column" justify="center" alignItems="center" style={{ paddingTop: 25, margin: 'auto'}}>

        <form className={classes.addService} onSubmit={handleSubmit(onSubmit, onError)}>
            <Grid 
            container 
            spacing={3}
            direction="row"
            alignItems="center"
            justify="center"
            >
                <Typography className="infoText" variant="body1">
                    {errorText}
                </Typography>   
                <Controller
                    name="test1"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Test1 required' }}
                    render={({ field: { onChange, value } }) => (
                        <TextField
                        label="Test1 label"
                        variant="filled"
                        style={{ margin: 8 }}
                        value={value}
                        onChange={onChange}
                        variant="outlined"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        />
                    )}
                />
                <Controller
                    name="test2"
                    control={control}
                    defaultValue=""
                    rules={{                
                    required: "test2 is a required field",
                    minLength: { value: 4, message: "test2 requires 4 numbers as a input" },
                    maxLength: { value: 4, message: "test2 requires 4 numbers as a input" },
                    min: { value: "1900", message: "test 2 value needs to be within 1900 - 2100 range" },
                    max: { value: "2100", message: "test 2 value needs to be within 1900 - 2100 range" },
                    pattern: {
                    value: /[0-9]/,
                    message: "test2 only accepts digits"}
                    }}
                    render={({ field: { onChange, value } }) => (
                        <TextField
                        label="Test2 label"
                        variant="filled"
                        style={{ margin: 8 }}
                        value={value}
                        onChange={onChange}
                        variant="outlined"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        />
                    )}
                />      
                <Controller
                    name="test3"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Test3 required',
                    minLength: { value: 2, message: "Test 3 input needs to be atleast 2 characters long" } }}
                    render={({ field: { onChange, value } }) => (
                        <TextField
                        label="Test3 label"
                        variant="filled"
                        style={{ margin: 8 }}
                        value={value}
                        onChange={onChange}
                        variant="outlined"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        />
                    )}
                />   


                    
                <Grid item xs={12}>
                <FormLabel component="legend"><Typography variant="h6" gutterBottom>Subtitle 1</Typography></FormLabel>
                </Grid>

                <Grid item xs={12} md={6}>
                <FormGroup>
                <FormControlLabel
                control={<Checkbox checked={cb1} onChange={handleChange} name="cb1" />}
                label="checkbox 1"
                />
                </FormGroup>
                </Grid>

                <Grid item xs={12} md={6}>
                <FormGroup>
                <FormControlLabel
                control={<Checkbox disabled={!cb1} checked={cb2} onChange={handleChange} name="cb2" />}
                label={"checkbox 2"}
                />
                </FormGroup>
                </Grid>

                <Grid item xs={12}>
                <FormLabel component="legend"> <Typography variant="h6" gutterBottom> Subtitle 2 </Typography></FormLabel>
                </Grid>

                <Grid item xs={12} md={6}>
                <FormGroup>
                <FormControlLabel
                control={<Checkbox checked={cb3} onChange={handleChange} name="cb3" />}
                label={"checkbox 3"}
                />
                </FormGroup>
                </Grid>
                <Grid item xs={12} md={6}>
                <FormControlLabel
                control={<Checkbox checked={cb4} onChange={handleChange} name="cb4" />}
                label={"checkbox 4"}
                />
                </Grid>

                <Button
                    className={classes.defaultButton}
                    style={{ margin: "auto", marginTop: 25}}
                    type="submit">
                    Submit
                </Button>
            </Grid>
        </form>
    </Grid>
    )
}

export default AddService;