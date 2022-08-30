import React from 'react';
import { TextField, Grid, MenuItem, makeStyles, Paper, Typography} from '@material-ui/core';
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
    paperStyle:{
        display: "flex",
    },
    formControl: {
        margin: "auto",
        display:"flex",
        flexDirection:"row",
    },
  }));


const selectCountryEN = [
    {value: "DNK", label: "Denmark"},
    {value: "FRO", label: "Faroe Islands"},
    {value: "FIN", label: "Finland"},
    {value: "GRL", label: "Greenland"},
    {value: "IRL", label: "Ireland"},
    {value: "NIR", label: "Northern Ireland"},
    {value: "NOR", label: "Norway"},
    {value: "RUS", label: "Russia"},
    {value: "SCO", label: "Scotland"},
    {value: "SWE", label: "Sweden"},
    {value: "N/A", label: "Other"},
];

const selectCountryFI = [
    {value: "DNK", label: "Tanska"},
    {value: "FRO", label: "Färsaaret"},
    {value: "FIN", label: "Suomi"},
    {value: "GRL", label: "Grönlanti"},
    {value: "IRL", label: "Irlanti"},
    {value: "NIR", label: "Pohjois-Irlanti"}, 
    {value: "NOR", label: "Norja"},
    {value: "RUS", label: "Venäjä"},
    {value: "SCO", label: "Skotlanti"},
    {value: "SWE", label: "Ruotsi"},
    {value: "N/A", label: "Other"},
];

const DefineBuilding = (props) => {
    const classes = useStyles();

    const handleChangeInput = (event) => {
        console.log(i18n.language);
        props.onChange(event.target.name, event.target.value);
    }

    const { t } = useTranslation();

    return (
<>
    <Grid container item xs={12} direction="column" justify="center" alignItems="center" style={{ margin: 'auto'}}>  
        <form className={classes.baseStyle}>
            <Paper elevation={1} className={classes.paperStyle}>          
                <Grid 
                container 
                spacing={3}
                direction="row"
                alignItems="center"
                justify="center"
                style={{ margin: 'auto'}}>

                    <Grid item xs={12} sm={10} md={8}>
                        <Typography variant="h5" component="h2" style={{ paddingTop: 10, paddingLeft: 25,}}>
                        {t('defineBuildingHeader')}
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={10} md={8}>
                        <TextField 
                        name="buildingName"
                        label={t('buildingName')}
                        value={props.value.building.buildingName}
                        fullWidth
                        variant="outlined"
                        onChange={event => handleChangeInput(event)}/>
                    </Grid>
                    <Grid item xs={12} sm={10} md={8}>
                        <TextField 
                        name="buildingAddress"
                        label={t('buildingAddress')}
                        value={props.value.building.buildingAddress}
                        fullWidth
                        variant="outlined"
                        onChange={event => handleChangeInput(event)}/>
                    </Grid>
                    <Grid item xs={12} sm={10} md={8} style={{ marginBottom: 40 }}>
                                           
                        {(() => {
                            switch (i18n.language) {
                                case 'fi':
                                return (
                                    <div>
                                        <TextField
                                        id="select-country"
                                        select
                                        name="country"
                                        label={t('buildingSelectCountry')}
                                        variant="outlined"
                                        fullWidth="true"
                                        value={props.value.building.country}
                                        onChange={event => handleChangeInput(event)}
                                        >
                                            {selectCountryFI.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </div>
                                );
                                case 'en':
                                return (
                                    <div>
                                        <TextField
                                        id="select-country"
                                        select
                                        name="country"
                                        label={t('buildingSelectCountry')}
                                        variant="outlined"
                                        fullWidth="true"
                                        value={props.value.building.country}
                                        onChange={event => handleChangeInput(event)}
                                        >
                                            {selectCountryEN.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </div>
                                );
                                default:
                                return (
                                    <div/>
                                );
                            }
                        })()}                      
                    </Grid>
                </Grid>
            </Paper>
        </form>
    </Grid>
</>
);
};
      
export default DefineBuilding;