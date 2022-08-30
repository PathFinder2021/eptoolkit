import React from 'react';
import { Grid, makeStyles, Paper, Typography,Switch, FormControlLabel, FormGroup} from '@material-ui/core';
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

const BuildingEnergyPotential = (props) => {
    //props.value.values.conditionYard
    const classes = useStyles();

    const handleChangeInput = (event) => {
        console.log(event.target.name, event.target.checked);
        props.onChange(event.target.name, event.target.checked);
    }

    const { t } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
<>
    <Grid container direction="column" justify="center" alignItems="center" style={{ paddingTop: 25, margin: 'auto'}}>  

        <Paper elevation={1} style={{width: "100%", display: "flex"}}>
            
            <Grid container item xs={11} sm={10} lg={8} spacing={3} direction="column" alignItems="start" justify="center" style={{ margin: 'auto', paddingBottom: 50}}>
              
                <Grid xs={12}>
                    <Typography variant="h5" component="h2" style={{ paddingTop: 50, paddingBottom: "1rem" }}>
                    {t('buildingEnergyHeader')}
                    </Typography>

                    <Typography variant="body1" style={{ paddingBottom: 10}}>
                    {t('buildingEnergySubtitle')}
                    </Typography>

                </Grid>           

                <Grid xs={12}>
                <Typography variant="h6" component="h2" style={{paddingRight: 25, marginTop: "1rem" }}>
                {t('buildingEnergyGasHeat')}
                </Typography>
                </Grid>

                <Grid item xs={11} sm={10} md={8}>
                    <FormGroup>
                        <FormControlLabel
                        label={t('buildingEnergyLabelGas')}
                        labelPlacement="start"
                        style={{ marginBottom: "1rem" }}
                        control={
                                <Switch 
                                name="buildingEnergyGas" 
                                checked={props.value.values.buildingEnergyGas} 
                                onChange={event => handleChangeInput(event)}  />
                        }/>

                        <FormControlLabel
                        label={t('buildingEnergyLabelDistrict')}
                        labelPlacement="start"
                        style={{ marginBottom: "1rem" }}
                        control={
                            <Switch 
                            name="buildingEnergyDistrictHeating" 
                            checked={props.value.values.buildingEnergyDistrictHeating} 
                            onChange={event => handleChangeInput(event)}  />
                        }
                        />        
                    </FormGroup>
                   
                </Grid>

                <Grid xs={12}>
                <Typography variant="h6" component="h2" style={{paddingRight: 25, marginTop: "1rem" }}>
                {t('buildingEnergyRenewable')}
                </Typography>
                </Grid>

                <Grid item xs={11} sm={10} md={8}>
                    <FormGroup>
                        <FormControlLabel
                        label={t('buildingEnergyLabelSun')}
                        labelPlacement="start"
                        style={{ marginBottom: "1rem" }}
                        control={
                                <Switch 
                                name="buildingEnergySun" 
                                checked={props.value.values.buildingEnergySun} 
                                onChange={event => handleChangeInput(event)}  />
                        }/>

                        <FormControlLabel
                        label={t('buildingEnergyLabelWater')}
                        labelPlacement="start"
                        style={{ marginBottom: "1rem" }}
                        control={
                            <Switch 
                            name="buildingEnergyWater" 
                            checked={props.value.values.buildingEnergyWater} 
                            onChange={event => handleChangeInput(event)}  />
                        }
                        />
                        <FormControlLabel
                        label={t('buildingEnergyLabelFlowingWater')}
                        labelPlacement="start"
                        control={
                            <Switch 
                            name="buildingEnergyWaterFlow" 
                            checked={props.value.values.buildingEnergyWaterFlow} 
                            onChange={event => handleChangeInput(event)}  />
                        }
                        />        
                    </FormGroup>
                </Grid>
            </Grid>
        </Paper>
    </Grid>
</>
);
};
      
export default BuildingEnergyPotential;