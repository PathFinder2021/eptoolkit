import React, { useState, useEffect } from 'react';
import { Grid, makeStyles, Paper, Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    baseStyle: {
        width: '100%',
        display: "flex",
        flexDirection: "column",
        marginTop: 25,
        marginBottom: 50,
    },
    formControl: {
        margin: "auto",
        display:"flex",
        flexDirection:"row",
    },
  }));

const ShoppingCartMeasures = (props) => {
    const classes = useStyles();

    const [isDisabled1, setIsDisabled1] = useState(false);
    const [isDisabled2, setIsDisabled2] = useState(false);
    const [isDisabled3, setIsDisabled3] = useState(false);
    //const [isDisabled4, setIsDisabled4] = useState(false);

    const handleDisabled = () => {

        setIsDisabled1(false);
        setIsDisabled2(false);
        setIsDisabled3(false);
        //setIsDisabled4(false);

        props.value.map(i => {
            if(i.id !== "placeholder" && i.name != ""){
                if(i.name == "name1"){
                    setIsDisabled1(true);
                }
                else if(i.name == "name2"){
                    setIsDisabled2(true);
                }
                else if(i.name == "name3"){
                    setIsDisabled3(true);
                }
                /*
                else if(i.name == "name4"){
                    setIsDisabled4(true);
                }
                */
            }
        })    
    };

    useEffect(handleDisabled, [props.value]);

    return (
<>
    <Grid container direction="column" justify="center" alignItems="center" style={{ paddingTop: 25, margin: 'auto'}}>  
        <Paper elevation={1}>
            <Button 
            variant="contained"
            disabled = {isDisabled1}
            onClick={() => props.onClick("name1", "description1", "values")}
            >
                Retrofit 1
            </Button>
            <Button 
            variant="contained"
            disabled = {isDisabled2}
            onClick={() => props.onClick("name2", "description2", "values2")}
            >
                Retrofit 2
            </Button>
        </Paper>
        <Paper hidden={isDisabled3} style={{marginTop:25}}>
            <Button 
            variant="contained"
            disabled = {isDisabled3}
            onClick={() => props.onClick("name3", "description3", "values3")}
            >
                Retrofit 3
            </Button>
        </Paper>
        
    </Grid>
</>
);
};
      
export default ShoppingCartMeasures;
