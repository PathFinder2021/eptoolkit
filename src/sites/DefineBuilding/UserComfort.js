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

const selectAirQualityEN = [
    {
        value: '7',
        label: "Generally not stuffy",
    },
    {
        value: '5',
        label: "Sometimes a little stuffy",
    },
    {
        value: '3',
        label: "Often stuffy",
    },
    {
        value: '1',
        label: "Very often very stuffy",
    },
];

const selectDraughsEN = [
    {
        value: '7',
        label: "Generally not draughty",
    },
    {
        value: '5',
        label: "Sometimes a little draughty",
    },
    {
        value: '3',
        label: "Often draughty",
    },
    {
        value: '1',
        label: "Very often very draughty",
    },
];

const selectHumidityEN = [
    {
        value: '7',
        label: "Generally no condensation",
    },
    {
        value: '5',
        label: "Sometimes a little condensation",
    },
    {
        value: '3',
        label: "Often some condensation",
    },
    {
        value: '1',
        label: "Very often a lot of condensation",
    },
];


const selectNoiseEN = [
    {
        value: '7',
        label: "Generally no outside noise",
    },
    {
        value: '5',
        label: "Sometimes a little outside noise",
    },
    {
        value: '3',
        label: "Often some outside noise",
    },
    {
        value: '1',
        label: "Very often a lot of outside noise",
    },
];

const selectTempSummerEN = [
    {
        value: '7',
        label: "Pleasantly temperatured or too cool",
    },
    {
        value: '5',
        label: "Sometimes slightly hot",
    },
    {
        value: '3',
        label: "Often hot",
    },
    {
        value: '1',
        label: "Very often very hot",
    },
];

const selectTempWinterEN = [
    {
        value: '7',
        label: "Pleasantly temperatured or too warm",
    },
    {
        value: '5',
        label: "Sometimes slightly chilly",
    },
    {
        value: '3',
        label: "Often cold",
    },
    {
        value: '1',
        label: "Very often very cold",
    },
];

const selectAirQualityFI = [
    {
        value: '7',
        label: "Yleensä ei kovin tunkkainen",
    },
    {
        value: '5',
        label: "Joskus hieman tunkkainen",
    },
    {
        value: '3',
        label: "Usein tunkkainen",
    },
    {
        value: '1',
        label: "Hyvin usein erittäin tunkkainen ",
    },
];

const selectDraughsFI = [
    {
        value: '7',
        label: "Yleensä ei kovin vetoinen",
    },
    {
        value: '5',
        label: "Joskus hieman vetoinen",
    },
    {
        value: '3',
        label: "Usein vetoinen",
    },
    {
        value: '1',
        label: "Hyvin usein erittäin vetoinen",
    },
];

const selectHumidityFI = [
    {
        value: '7',
        label: "Kosteus ei tiivisty",
    },
    {
        value: '5',
        label: "Joskus hieman kosteutta",
    },
    {
        value: '3',
        label: "Kosteus tiivistyy usein",
    },
    {
        value: '1',
        label: "Paljon kosteuden tiivistymistä hyvin usein",
    },
];


const selectNoiseFI = [
    {
        value: '7',
        label: "Yleensä ei ulkoa tulevia ääniä",
    },
    {
        value: '5',
        label: "Joskus hieman ulkoa tulevia ääniä",
    },
    {
        value: '3',
        label: "Usein ulkoa tulevia ääniä",
    },
    {
        value: '1',
        label: "Hyvin usein häiritsevää ulkoa tulevaa ääntä",
    },
];

const selectTempSummerFI = [
    {
        value: '7',
        label: "Lämpötila sopiva tai viileä",
    },
    {
        value: '5',
        label: "Joskus hieman kuuma",
    },
    {
        value: '3',
        label: "Usein kuuma",
    },
    {
        value: '1',
        label: "Hyvin usein liian kuuma",
    },
];

const selectTempWinterFI = [
    {
        value: '7',
        label: "Lämpötila sopiva tai liiankin lämmin",
    },
    {
        value: '5',
        label: "Joskus hieman viileä",
    },
    {
        value: '3',
        label: "Usein viileä",
    },
    {
        value: '1',
        label: "Hyvin usein turhan kylmä",
    },
];




const UserComfort = (props) => {
    const classes = useStyles();

    const [languageData, setData] = useState({
        selectAirQuality: selectAirQualityEN,
        selectDraughs: selectDraughsEN,
        selectHumidity: selectHumidityEN,
        selectNoise: selectNoiseEN,
        selectTempSummer: selectTempSummerEN,
        selectTempWinter: selectTempWinterEN
    });

    const { selectAirQuality, selectDraughs, selectHumidity, selectNoise, selectTempSummer, selectTempWinter } = languageData;

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
                            selectAirQuality: selectAirQualityFI,
                            selectDraughs: selectDraughsFI,
                            selectHumidity: selectHumidityFI,
                            selectNoise: selectNoiseFI,
                            selectTempSummer: selectTempSummerFI,
                            selectTempWinter: selectTempWinterFI

                        }
                    )
                );
            case 'en':
                return (
                    setData(
                        {
                            selectAirQuality: selectAirQualityEN,
                            selectDraughs: selectDraughsEN,
                            selectHumidity: selectHumidityEN,
                            selectNoise: selectNoiseEN,
                            selectTempSummer: selectTempSummerEN,
                            selectTempWinter: selectTempWinterEN
                        }
                    )
                );
            default:
                return (
                    setData(
                        {
                            selectAirQuality: selectAirQualityEN,
                            selectDraughs: selectDraughsEN,
                            selectHumidity: selectHumidityEN,
                            selectNoise: selectNoiseEN,
                            selectTempSummer: selectTempSummerEN,
                            selectTempWinter: selectTempWinterEN
                        }
                    )
                );
        }
    }

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        getLanguageVersions();

    };

    const calculatePerformance = () => {
        
        var comfortHighest = 0;
        var comfortCounter = 0;
        var comfortAverage = 0;
        //var comfortResult = 0;

        if(Object.values(props.value.comfort).indexOf("") === -1){
        console.log("NO EMPTY VALUES"); 

            if(props.value.comfort.comfortAirQuality < 3 || props.value.comfort.comfortHumidity < 3 || props.value.comfort.comfortTempSummer < 3){     
                console.log("FLAG1 - 1.	Risk of insufficient ventilation")
            }
            if(props.value.comfort.comfortDraughts < 3 && props.value.comfort.comfortTempWinter < 5){
                console.log("FLAG1 - 2.	Risk of insufficient airtightness")
            }
            if(props.value.comfort.comfortHumidity <3 && props.value.comfort.comfortTempWinter < 5 && props.value.comfort.comfortDraughts > 3){    
                console.log("FLAG1 - 3.	Risk of underheating")
            }
            if(props.value.comfort.comfortNoise <3){
                console.log("FLAG1 - 4.	Excessive noise")
            }

            for (const [key, value] of Object.entries(props.value.comfort)) {
                console.log(`${key}: ${value}`);
                comfortCounter += parseInt(value);

                    if(comfortHighest < parseInt(value)){
                        comfortHighest = parseInt(value);
                    }
            }

        comfortAverage = comfortCounter / Object.keys(props.value.comfort).length;
/*
            if(comfortAverage < comfortHighest - 2)
            {
                comfortResult = comfortHighest - 2;
            }

            else
            {
                comfortResult = comfortAverage;
            }
*/
/*
        console.log("CUMULATIVE: " + comfortCounter);
        console.log("AVG: " + comfortAverage);
        console.log("HIGH: " + comfortHighest);
        console.log("RESULT: " +comfortResult);
*/          
        }
        
    };

    useEffect(getLanguageVersions, []);
    useEffect(calculatePerformance, [props.value.comfort])

    return (
        <>
            <Grid container direction="column" justify="center" alignItems="center" style={{ paddingTop: 25, margin: 'auto' }}>

                <Paper elevation={1}>

                    <Grid container item xs={11} sm={10} lg={8} spacing={3} direction="row" alignItems="center" justify="center" style={{ margin: 'auto', paddingBottom: 50 }}>

                        <Grid xs={12}>

                            <Typography variant="h5" component="h2" style={{ paddingTop: 50, paddingBottom: "1rem" }}>
                                {t('userComfortHeader')}
                            </Typography>

                            <Typography variant="body1" style={{ paddingBottom: 10 }}>
                                {t('userComfortSubtitle')}
                            </Typography>

                        </Grid>

                        <Grid xs={4}>
                            <Typography variant="h6" component="h2" style={{ paddingRight: 25, }}>
                                {t('userComfortStuffiness')}
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                id="select-air-quality"
                                select
                                name="comfortAirQuality"
                                label={t('userComfortLabelAir')}
                                variant="outlined"
                                fullWidth
                                value={props.value.comfort.comfortAirQuality}
                                onChange={event => handleChangeInput(event)}
                            >
                                {selectAirQuality.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid xs={4}>
                            <Typography variant="h6" component="h2" style={{ paddingRight: 25, }}>
                                {t('userComfortDraughtiness')}
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                id="select-draught"
                                select
                                name="comfortDraughts"
                                label={t('userComfortLabelDraughtiness')}
                                variant="outlined"
                                fullWidth
                                value={props.value.comfort.comfortDraughts}
                                onChange={event => handleChangeInput(event)}
                            >
                                {selectDraughs.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid xs={4}>
                            <Typography variant="h6" component="h2" style={{ paddingRight: 25, }}>
                                {t('userComfortCondensation')}
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                id="select-humidity"
                                select
                                name="comfortHumidity"
                                label={t('userComfortLabelHumidity')}
                                variant="outlined"
                                fullWidth
                                value={props.value.comfort.comfortHumidity}
                                onChange={event => handleChangeInput(event)}
                            >
                                {selectHumidity.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid xs={4}>
                            <Typography variant="h6" component="h2" style={{ paddingRight: 25, }}>
                                {t('userComfortNoise')}
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                id="select-noise"
                                select
                                name="comfortNoise"
                                label={t('userComfortLabelNoise')}
                                variant="outlined"
                                fullWidth
                                value={props.value.comfort.comfortNoise}
                                onChange={event => handleChangeInput(event)}
                            >
                                {selectNoise.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid xs={4}>
                            <Typography variant="h6" component="h2" style={{ paddingRight: 25, }}>
                                {t('userComfortOverheat')}
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                id="select-temp-summer"
                                select
                                name="comfortTempSummer"
                                label={t('userComfortLabelSummerTemp')}
                                variant="outlined"
                                fullWidth
                                value={props.value.comfort.comfortTempSummer}
                                onChange={event => handleChangeInput(event)}
                            >
                                {selectTempSummer.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid xs={4}>
                            <Typography variant="h6" component="h2" style={{ paddingRight: 25, }}>
                                {t('userComfortUnderheat')}
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                id="select-temp-winter"
                                select
                                name="comfortTempWinter"
                                label={t('userComfortLabelWinterTemp')}
                                variant="outlined"
                                fullWidth
                                value={props.value.comfort.comfortTempWinter}
                                onChange={event => handleChangeInput(event)}
                            >
                                {selectTempWinter.map((option) => (
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

export default UserComfort;
