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
        display: "flex",
        flexDirection: "row",
    },
}));



const selectBuildingUseStatusEN = [
    {
        value: '1',
        label: "Community",
    },
    {
        value: '2',
        label: "Domestic",
    },
    {
        value: '3',
        label: "Office",
    },
    {
        value: '4',
        label: "Mixed / Other",
    },
];

const selectBuildingOccupancyEN = [
    {
        value: '1',
        label: "up to 2 persons",
    },
    {
        value: '2',
        label: "between 2 and 10 persons",
    },
    {
        value: '3',
        label: "more than 10 persons",
    },
];

const selectBuildingRegularityEN = [
    {
        value: '1',
        label: "Yes, used regularly",
    },
    {
        value: '2',
        label: "No, used occasionally",
    },
];

const selectBuildingUseStatusFI = [
    {
        value: '1',
        label: "Yhteiskäytössä",
    },
    {
        value: '2',
        label: "Asuinkäyttö",
    },
    {
        value: '3',
        label: "Toimistokäyttö",
    },
    {
        value: '4',
        label: "Yhdistelmä edellisistä tai muu",
    },
];

const selectBuildingOccupancyFI = [
    {
        value: '1',
        label: "Alle 2 henkilöä",
    },
    {
        value: '2',
        label: "Kahdesta kymmeneen henkilöä",
    },
    {
        value: '3',
        label: "Yli kymmenen henkilöä",
    },
];

const selectBuildingRegularityFI = [
    {
        value: '1',
        label: "Kyllä, käytetään säännöllisesti",
    },
    {
        value: '2',
        label: "Ei käytetä säännöllisesti",
    },
];


const BuildingUse = (props) => {
    //props.value.values.conditionYard
    const classes = useStyles();

    const [languageData, setData] = useState({
        selectBuildingUseStatus: selectBuildingUseStatusEN,
        selectBuildingOccupancy: selectBuildingOccupancyEN,
        selectBuildingRegularity: selectBuildingRegularityEN
    });

    const { selectBuildingUseStatus, selectBuildingOccupancy, selectBuildingRegularity } = languageData;

    const handleChangeInput = (event) => {
        props.onChange(event.target.name, event.target.value);
    }

    const { t } = useTranslation();

    const getLanguageVersions = (event) => {
        switch (i18n.language) {
            case 'fi':
                return (
                    setData(
                        {
                            selectBuildingUseStatus: selectBuildingUseStatusFI,
                            selectBuildingOccupancy: selectBuildingOccupancyFI,
                            selectBuildingRegularity: selectBuildingRegularityFI
                        }
                    )
                );
            case 'en':
                return (
                    setData(
                        {
                            selectBuildingUseStatus: selectBuildingUseStatusEN,
                            selectBuildingOccupancy: selectBuildingOccupancyEN,
                            selectBuildingRegularity: selectBuildingRegularityEN
                        }
                    )
                );
            default:
                return (
                    setData(
                        {
                            selectBuildingUseStatus: selectBuildingUseStatusEN,
                            selectBuildingOccupancy: selectBuildingOccupancyEN,
                            selectBuildingRegularity: selectBuildingRegularityEN
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
            <Grid container direction="column" justify="center" alignItems="center" style={{ paddingTop: 25, margin: 'auto' }}>

                <Paper elevation={1}>

                    <Grid container item xs={11} sm={10} lg={8} spacing={3} direction="row" alignItems="center" justify="center" style={{ margin: 'auto', paddingBottom: 50 }}>

                        <Grid xs={12}>

                            <Typography variant="h5" component="h2" style={{ paddingTop: 50, paddingBottom: "1rem" }}>
                                {t('buildingUseHeader')}
                            </Typography>

                            <Typography variant="body1" style={{ paddingBottom: 10 }}>
                                {t('buildingUseSubtitle')}
                            </Typography>

                        </Grid>

                        <Grid xs={4}>
                        <Typography variant="h6" component="h2" style={{paddingRight: 25,}}>
                        {t('buildingUseLabelStatus')}
                        </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                            id="select-building-use"
                            select
                            name="buildingUseStatus"
                            label={t('buildingUseLabelStatus')}
                            variant="outlined"
                            fullWidth
                            value={props.value.values.buildingUseStatus}
                            onChange={event => handleChangeInput(event)}
                            >
                            {selectBuildingUseStatus.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                            </TextField>
                        </Grid>

                        <Grid xs={4}>
                            <Typography variant="h6" component="h2" style={{ paddingRight: 25, }}>
                                {t('buildingUseOccupancy')}
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                id="select-building-use-occupancy"
                                select
                                name="buildingUseOccupancy"
                                label={t('buildingUseLabelOccupancy')}
                                variant="outlined"
                                fullWidth
                                value={props.value.values.buildingUseOccupancy}
                                onChange={event => handleChangeInput(event)}
                            >
                                {selectBuildingOccupancy.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid xs={4}>
                            <Typography variant="h6" component="h2" style={{ paddingRight: 25, }}>
                                {t('buildingUseRegularity')}
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                id="select-building-use-regularity"
                                select
                                name="buildingUseRegularity"
                                label={t('buildingUseLabelRegularity')}
                                variant="outlined"
                                fullWidth
                                value={props.value.values.buildingUseRegularity}
                                onChange={event => handleChangeInput(event)}
                            >
                                {selectBuildingRegularity.map((option) => (
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

export default BuildingUse;
