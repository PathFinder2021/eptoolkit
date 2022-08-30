import React, { useState, useEffect } from 'react';
import { TextField, Grid, Button, MenuItem, makeStyles, Paper, Typography,Switch, FormControl, FormControlLabel, FormGroup, Checkbox} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/RemoveCircleOutlineSharp';
import { useTranslation } from 'react-i18next';
import i18n from "../../i18n"

/*
TODO:

Implement other building fabric elements;

*/

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

const selectExternalImportanceEN = [
    {
        value: '1',
        label: 'Neutral/negative external importance',
    },
    {
        value: '3',
        label: 'Minor external importance',
    },
    {
        value: '5',
        label: 'Moderate external importance',
    },
    {
        value: '7',
        label: 'Major external importance',
    },
];

const selectInternalImportanceEN = [
    {
        value: '1',
        label: 'Neutral/negative internal importance',
    },
    {
        value: '3',
        label: 'Minor internal importance',
    },
    {
        value: '5',
        label: 'Moderate internal importance',
    },
    {
        value: '7',
        label: 'Major internal importance',
    },
];

const selectExternalImportanceFI = [
    {
        value: '1',
        label: 'FI Neutral/negative external importance',
    },
    {
        value: '3',
        label: 'FI Minor external importance',
    },
    {
        value: '5',
        label: 'FI Moderate external importance',
    },
    {
        value: '7',
        label: 'FI Major external importance',
    },
];

const selectInternalImportanceFI = [
    {
        value: '1',
        label: 'FI Neutral/negative internal importance',
    },
    {
        value: '3',
        label: 'FI Minor internal importance',
    },
    {
        value: '5',
        label: 'FI Moderate internal importance',
    },
    {
        value: '7',
        label: 'FI Major internal importance',
    },
];



const Heritage = (props) => {
    const classes = useStyles();

    const [languageData, setData] = useState({
        selectExternalImportance: selectExternalImportanceEN,
        selectInternalImportance: selectInternalImportanceEN,
      });

    const { selectExternalImportance, selectInternalImportance} = languageData;

    const handleChangeInput = (id, event) => {
            props.onChange(id,event.target.name, event.target.value, event.target.type, event.target.checked);
    }
    
    const { t } = useTranslation();

    const getLanguageVersions = (event) =>{ 
        switch (i18n.language) {
            case 'fi':
            return (
                setData(
                    {
                        selectExternalImportance: selectExternalImportanceFI,
                        selectInternalImportance: selectInternalImportanceFI,
                    }
                )
            );
            case 'en':
            return (
                setData(
                    {
                        selectExternalImportance: selectExternalImportanceEN,
                        selectInternalImportance: selectInternalImportanceEN,
                    }
                )
            );
            default:
            return (
                setData(
                    {
                        selectExternalImportance: selectExternalImportanceEN,
                        selectInternalImportance: selectInternalImportanceEN,
                    }
                )
            );
        }
    }

    useEffect(getLanguageVersions, []);

    return (
<>
    <form className={classes.baseStyle}>
        <Paper elevation={1}>
            <Grid container item xs={12} direction="row" justify="center" alignItems="center" style={{ paddingTop: 25, margin: 'auto'}}>  

                <Grid item xs={8}>
                    <Typography hidden={props.value.doors.length === 1} variant="h5" component="h2" style={{ paddingTop: 25, paddingBotton: 50,}}>
                    {t('heritageHeader')}
                    </Typography>

                    <Typography hidden={props.value.doors.length !== 1} variant="h5" component="h2" style={{ paddingTop: 25, paddingBotton: 50,}}>
                    {t('heritageNoElements')}
                    </Typography>

                    {props.value.doors.map((inputElement)=>(
                        <div key={inputElement.id}> 

                            {inputElement.id === "placeholder" ? (
                                <div/>
                            ) : (
                                <div>
                                    <Typography style={{ paddingLeft: 25,}}>{t('heritageDoorDoor') + (props.value.doors.indexOf(inputElement)) + ": "+ inputElement.doorDescription}</Typography>

                                    <Grid container item xs={12} direction="row" justify="center" alignItems="center" style={{ paddingTop: 25, margin: 'auto'}}>
                                        <Grid item xs={4}>
                                            <TextField
                                                id="select-external-importance"
                                                select
                                                name="doorExternalImportance"
                                                label={t('heritageDoorExternal')}
                                                variant="outlined"
                                                fullWidth
                                                style={{marginTop: 25}}
                                                value={inputElement.doorExternalImportance}
                                                onChange={event => handleChangeInput(inputElement.id, event)}
                                                >
                                                {selectExternalImportance.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <TextField
                                                id="select-internal-importance"
                                                select
                                                name="doorInternalImportance"
                                                label={t('heritageDoorInternal')}
                                                variant="outlined"
                                                fullWidth
                                                style={{marginTop: 25}}
                                                value={inputElement.doorInternalImportance}
                                                onChange={event => handleChangeInput(inputElement.id, event)}
                                                >
                                                {selectInternalImportance.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button
                                            style={{marginTop: 25, float: "right"}}
                                            onClick={() => props.onClick(inputElement.id)}
                                            variant="contained"
                                            >
                                                Split
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </div>
                            )}
                        </div>
                    ))}
                    {props.value.windows.map((inputElement)=>(
                        <div key={inputElement.id}> 

                            {inputElement.id === "placeholder" ? (
                                <div/>
                            ) : (
                                <div>

                                    <Typography style={{ paddingLeft: 25}}>{t('heritageWindowWindow') + (props.value.windows.indexOf(inputElement)) + ": "+ inputElement.windowDescription}</Typography>

                                    <Grid container item xs={12} direction="row" justify="center" alignItems="center" style={{ paddingTop: 25, margin: 'auto'}}>

                                        <Grid item xs={4}>
                                            <TextField
                                                    id="select-external-importance"
                                                    select
                                                    name="windowExternalImportance"
                                                    label={t('heritageWindowExternal')}
                                                    variant="outlined"
                                                    fullWidth
                                                    style={{marginTop: 25,}}
                                                    value={inputElement.windowExternalImportance}
                                                    onChange={event => handleChangeInput(inputElement.id, event)}
                                                    >
                                                    {selectExternalImportance.map((option) => (
                                                        <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                        </MenuItem>
                                                    ))}
                                            </TextField>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <TextField
                                                id="select-internal-importance"
                                                select
                                                name="windowInternalImportance"
                                                label={t('heritageWindowInternal')}
                                                variant="outlined"
                                                fullWidth
                                                style={{marginTop: 25,}}
                                                value={inputElement.windowInternalImportance}
                                                onChange={event => handleChangeInput(inputElement.id, event)}
                                                >
                                                {selectInternalImportance.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button
                                            style={{marginTop: 25, float: "right"}}
                                            onClick={() => props.onClick(inputElement.id)}
                                            variant="contained"
                                            >
                                                Split
                                            </Button>
                                        </Grid>
                                            
                                    </Grid>
                                </div>
                            )}
                        </div>
                    ))}
                </Grid>
            </Grid>
        </Paper>
    </form>   
</>
);
};
      
export default Heritage;