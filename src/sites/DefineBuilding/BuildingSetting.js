import React, { useState, useEffect } from 'react';
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
    formControl: {
        margin: "auto",
        display:"flex",
        flexDirection:"row",
    },
  }));



const selectLandscapeEN = [
    {
        value: '1',
        label: "Rural",
    },
    {
        value: '2',
        label: "Semi-urban",
    },
    {
        value: '3',
        label: "Urban",
    },
    ];

const selectGroupEN = [
    {
        value: '1',
        label: "property is in a setting with no particular location-specific characteristics",
    },
    {
        value: '2',
        label: "property is in setting with particular locations-specific characteristics",
    },
    {
        value: '3',
        label: "property is part of a well-legible architectural ensemble or uniformly planned setting",
    },
    ];

const selectPropertyTypeEN = [
    {
        value: '1',
        label: "detached building",
    },
    {
        value: '2',
        label: "semi-detached building",
    },
    {
        value: '3',
        label: "multi-occupancy building",
    },
    ];

const selectOutdoorSpacesEN = [
    {
        value: '1',
        label: "No outdoor spaces",
    },
    {
        value: '2',
        label: "Outdoor spaces of less than 1 hectares",
    },
    {
        value: '3',
        label: "Outdoor spaces of 1 or more hectares",
    },
    ];

const selectLandscapeFI = [
    {
        value: '1',
        label: "Maaseutu",
    },
    {
        value: '2',
        label: "Esikaupunki tai vastaava",
    },
    {
        value: '3',
        label: "Kaupunki",
    },
    ];

const selectGroupFI = [
    {
        value: '1',
        label: "Rakennetussa ympäristössä ei ole huomattavia piirteitä",
    },
    {
        value: '2',
        label: "Lähellä olevat rakennukset edustavat alueen rakennustyyliä",
    },
    {
        value: '3',
        label: "Rakennus on osa selkeästi määriteltyä kokonaisuutta",
    },
    ];

const selectPropertyTypeFI = [
    {
        value: '1',
        label: "Omakoti- tai erillistalo",
    },
    {
        value: '2',
        label: "Paritalo tai vastaava",
    },
    {
        value: '3',
        label: "Kerrostalo tai vastaava",
    },
    ];

const selectOutdoorSpacesFI = [
    {
        value: '1',
        label: "Ei tonttia",
    },
    {
        value: '2',
        label: "Tonttia alle yksi hehtaari",
    },
    {
        value: '3',
        label: "Tonttia enemmän kuin yksi hehtaari",
    },
    ];
    




const BuildingSetting = (props) => {
    //props.value.values.conditionYard
    const classes = useStyles();

    const [languageData, setData] = useState({
        selectLandscape: selectLandscapeEN,
        selectGroup: selectGroupEN,
        selectPropertyType: selectPropertyTypeEN,
        selectOutdoorSpaces: selectOutdoorSpacesEN
      });
    
    const { selectLandscape, selectGroup, selectPropertyType, selectOutdoorSpaces} = languageData;

    const handleChangeInput = (event) => {
        props.onChange(event.target.name, event.target.value);
    }

    const { t } = useTranslation();

    const getLanguageVersions = (event) =>{ 
        switch (i18n.language) {
            case 'fi':
            return (
                setData(
                    {
                        selectLandscape: selectLandscapeFI,
                        selectGroup: selectGroupFI,
                        selectPropertyType: selectPropertyTypeFI,
                        selectOutdoorSpaces: selectOutdoorSpacesFI
                    }
                )
            );
            case 'en':
            return (
                setData(
                    {
                        selectLandscape: selectLandscapeEN,
                        selectGroup: selectGroupEN,
                        selectPropertyType: selectPropertyTypeEN,
                        selectOutdoorSpaces: selectOutdoorSpacesEN
                    }
                )
            );
            default:
            return (
                setData(
                    {
                        selectLandscape: selectLandscapeEN,
                        selectGroup: selectGroupEN,
                        selectPropertyType: selectPropertyTypeEN,
                        selectOutdoorSpaces: selectOutdoorSpacesEN
                    }
                )
            );
        }
    }

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        getLanguageVersions();
    };

    useEffect(getLanguageVersions, []);
    

    return (
<>
    <Grid container direction="column" justify="center" alignItems="center" style={{ paddingTop: 25, margin: 'auto'}}>  



    {(() => {
                            switch (i18n.language) {
                                case 'fi':
                                return (
                                    <div>

                                    </div>
                                );
                                case 'en':
                                return (
                                    <div>

                                    </div>
                                );
                                default:
                                return (
                                    <div/>
                                );
                            }
                        })()}                    



        <Paper elevation={1}>
            
            <Grid container item xs={11} sm={10} lg={8} spacing={3} direction="row" alignItems="center" justify="center" style={{ margin: 'auto', paddingBottom: 50}}>
              
                <Grid xs={12}>

                    <Typography variant="h5" component="h2" style={{ paddingTop: 50, paddingBottom: "1rem" }}>
                    {t('buildingSettingHeader')}
                    </Typography>

                    <Typography variant="body1" style={{ paddingBottom: "1rem" }}>
                    {t('buildingSettingBT')} 
                    </Typography>

                </Grid>           

                <Grid xs={12} sm={3} lg={4}>
                <Typography variant="h6" component="h2" style={{paddingRight: 25,}}>
                {t('buildingSettingLandscape')} 
                </Typography>
                </Grid>
                <Grid item xs={12} sm={9} lg={8}>
                    <TextField 
                    id="select-landscape"
                    select
                    name="buildingSettingLandscape"
                    label={t('buildingSettingLabelLandscape')}
                    variant="outlined"
                    fullWidth
                    value={props.value.values.buildingSettingLandscape}
                    onChange={event => handleChangeInput(event)}
                    >
                    {selectLandscape.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                    </TextField>
                </Grid>

                <Grid xs={12} sm={3} lg={4}>
                <Typography variant="h6" component="h2" style={{paddingRight: 25,}}>
                {t('buildingSettingGroup')}
                </Typography>
                </Grid>
                <Grid item xs={12} sm={9} lg={8}>
                    <TextField
                    id="select-group-setting"
                    select
                    name="buildingSettingGroup"
                    label={t('buildingSettingLabelSetting')}
                    variant="outlined"
                    fullWidth
                    value={props.value.values.buildingSettingGroup}
                    onChange={event => handleChangeInput(event)}
                    >
                    {selectGroup.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                    </TextField>
                </Grid>

                <Grid xs={12} sm={3} lg={4}>
                <Typography variant="h6" component="h2" style={{paddingRight: 25,}}>
                {t('buildingSettingProperty')}
                </Typography>
                </Grid>
                <Grid item xs={12} sm={9} lg={8}>
                    <TextField
                    id="select-property-type"
                    select
                    name="buildingSettingProperty"
                    label={t('buildingSettingLabelPropertyType')}
                    variant="outlined"
                    fullWidth
                    value={props.value.values.buildingSettingProperty}
                    onChange={event => handleChangeInput(event)}
                    >
                    {selectPropertyType.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                    </TextField>
                </Grid>

                <Grid xs={12} sm={3} lg={4}>
                <Typography variant="h6" component="h2" style={{paddingRight: 25,}}>
                {t('buildingSettingOutdoor')}
                </Typography>
                </Grid>
                <Grid item xs={12} sm={9} lg={8}>
                    <TextField
                    id="select-outdoor-spaces"
                    select
                    name="buildingSettingOutdoor"
                    label={t('buildingSettingLabelOutdoor')}
                    variant="outlined"
                    fullWidth
                    value={props.value.values.buildingSettingOutdoor}
                    onChange={event => handleChangeInput(event)}
                    >
                    {selectOutdoorSpaces.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                    </TextField>
                </Grid>
            </Grid>
        </Paper>
    </Grid>
</>
);
};
      
export default BuildingSetting;