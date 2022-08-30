import React, { useState } from 'react';
import { TextField, Grid, Button, MenuItem, Checkbox, makeStyles, Paper, Typography,Switch, FormControl, FormControlLabel, FormGroup} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/RemoveCircleOutlineSharp';
import { useTranslation } from 'react-i18next';
import i18n from "../../i18n"


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

const HeritageValues = (props) => {
    const classes = useStyles();

    const handleChangeInput = (id, event) => {
            //console.log(event.target);
            props.onChange(id,event.target.name, event.target.value, event.target.type, event.target.checked);
    }

    const { t } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
<>
    <Grid container direction="column" justify="center" alignItems="center" style={{ paddingTop: 25, margin: 'auto'}}> 
    <div className={classes.baseStyle}>

    {props.value.values.length <= 1 ? (
                        <div/>
        ) : (
    
            <Paper elevation={1}>
                <Typography variant="h5" component="h2" style={{ paddingTop: 50, paddingLeft: 25,}}>
                {t('heritageValuesHeader')}
                </Typography>
                {props.value.values.map((inputElement)=>(
                    <div key={inputElement.id}> 
                        <Grid 
                        container 
                        spacing={3}
                        direction="row"
                        alignItems="center"
                        justify="center"
                        style={{ margin: 'auto'}}
                        >

                        {inputElement.heritageValueType == "" ? (
                            <div style={{ paddingTop: 25}}/>
                        ) : (
                            <>
                                <Grid xs={10}>
                                <Typography variant="h5" component="h2" style={{ paddingTop: 25, paddingLeft: 25,}}>
                                {inputElement.heritageValueType}
                                </Typography>
                                </Grid>
                                
                                <Grid container item xs={10} 
                                direction="row"
                                alignItems="center"
                                justify="center"
                                style={{ margin: 'auto'}}>
                                    <Grid item xs={12} md={8}>
                                        <TextField
                                        name="heritageValueDescription"
                                        label={t('heritageValuesDescription')}
                                        variant="outlined"
                                        fullWidth
                                        value={inputElement.heritageValueDescription}
                                        onChange={event => handleChangeInput(inputElement.id, event)}
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                        />
                                    </Grid>

                                    <Grid item xs={12} md={8} style={{ paddingTop: 25}}>
                                        <TextField
                                            name="heritageValueMaterial"
                                            label={t('heritageValuesElements')}
                                            variant="outlined"
                                            fullWidth
                                            value={inputElement.heritageValueMaterial}
                                            onChange={event => handleChangeInput(inputElement.id, event)}
                                            InputLabelProps={{
                                            shrink: true,
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container item xs={12}>
                                        <IconButton 
                                        disabled={props.value.values.length === 0}  
                                        onClick={() => props.onClick(inputElement.id)}>
                                            <RemoveIcon />
                                        </IconButton>
                                </Grid>
                            </>
                        )}

                        

                        </Grid>
                    </div>
                ))}
            </Paper>
        )}
    </div>
    </Grid>
</>
);
};
      
export default HeritageValues;