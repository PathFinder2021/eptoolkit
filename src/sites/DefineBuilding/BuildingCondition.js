import React, { useState, useEffect } from 'react';
import { TextField, Grid, Slider, makeStyles, Paper, Typography, Hidden} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import i18n from "../../i18n"
import Colors from '../../components/Styles/colors';

const useStyles = makeStyles((theme) => ({
    baseStyle: {
        width: '100%',
        display: "flex",
        flexDirection: "row",
        marginTop: 25,
        marginBottom: 50,
    },
    formControl: {
        margin: "auto",
        display: "flex",
        flexDirection: "row",
    },
}));

const selectCondition = [
    {
        value: 0,
        label: 'Ruined',
    },
    {
        value: 1,
        label: 'Poor',
    },
    {
        value: 2,
        label: 'Mediocre',
    },
    {
        value: 3,
        label: 'Good',
    },
    {
        value: 4,
        label: 'Excellent',
    },
];

const selectConditionFI = [
    {
        value: 0,
        label: 'Tuhoutunut',
    },
    {
        value: 1,
        label: 'Huono',
    },
    {
        value: 2,
        label: 'Tyydyttävä',
    },
    {
        value: 3,
        label: 'Hyvä',
    },
    {
        value: 4,
        label: 'Erinomainen',
    },
];

var conditionYardValuesEN =
{
    0: "--",
    1: "The ground is waterlogged, or above ground floor level; the underfloor void is wet.",
    2: "The ground is sloping. Part of the ground floor is below ground.",
    4: "Vegetation needs to be cleared beside the building",
    7: "The ground level is below ground floor and slopes away from the building",
};

var conditionFoundationValuesEN =
{
    0: "--",
    1: "The building has significant frost damage or settlement cracking. Foundations are not of sufficient depth.",
    2: "Minor cracking is visible, but does not threaten structural stability.",
    4: "Foundations are of adequate depth. No settlement cracking. Some rising damp may be visible.",
    7: "Foundations are of adequate depth. No settlement cracking. No rising damp is visible.",
};

var conditionFloorValuesEN =
{
    0: "Collapsed or broken beyond repair",
    1: "Suspended timber floor is rotten; under floor ventilation inadequate. Concrete slab or stone  shows significant cracking or damp.",
    2: "Suspended timber floor shows some minor signs of decay or woodworm but is repairable. Concrete slab or stone shows some minor signs of damp.",
    4: "Suspended timber floor may be slightly worn, or deflects under a heel drop test. Concrete slab or stone shows signs of wear but is otherwise sound.",
    7: "The floor is visually level, dry and structurally sound.",
};

var conditionWallsOuterValuesEN =
{
    0: "Walls show major structural cracking, out of plumb or collapsed; need rebuilding",
    1: "Walls show significant structural cracks but may be repaired/stitched",
    2: "Walls are damp, rainwater goods have failed, lintels or sills cracked, plaster or render is hollow but repairable.",
    4: "There is minor damage or cracks in the plaster or render. The wall surfaces are dry.",
    7: "The walls are straight, plumb, dry and structurally sound; no damage to finishes.",
};

var conditionWindowsDoorsValuesEN =
{
    0: "--",
    1: "Frames or doors are rotten, not openable; glass or putty/mastic missing.",
    2: "There is minor damage to frames or doors, but these are openable and repairable. Some glazing may be cracked.",
    4: "The windows or doors are functioning, but not draught stripped, need redecorating",
    7: "Windows and doors are in good decorative order, functioning, insulate well, and are draught stripped.",
};

var conditionCeilingValuesEN =
{
    0: "Ceiling and roof dropped",
    1: "The insulations are wet.",
    2: "At cold attic the insulation is lacking in some places.",
    4: "There is a slight sign of use on the surfaces in some places or ceiling is not straight.",
    7: "Ceiling is straight, clean and harmony.",
};

var conditionRoofValuesEN =
{
    0: "--",
    1: "Significant leaks, missing slates, asphalt, lead or other waterproof layer, decayed timbers, major leaks at eaves",
    2: "Some leaks, minor repairable timber damage, rainwater goods blocked or leaking but repairable.",
    4: "Roof is in good condition, not leaking; the anticipated service life is reasonable but should be assessed in relation to the life expectancy of other elements.",
    7: "The waterproofing layer, rainwater goods and supporting structure are in good condition, with long life expectancy.",
};

var conditionWallsInnerValuesEN =
{
    0: "--",
    1: "Load-bearing internal walls or chimneys have major structural cracking or defective foundations.",
    2: "There are signs of rising damp or salt efflorescence; some cracking or loose plaster.",
    4: "The walls may have small hair cracks.",
    7: "The walls are sound, plumb, straight and plaster is in good condition.",
};

var conditionInteriorValuesEN =
{
    0: "The premises are uninhabitable, unsafe.",
    1: "For example, the building has damage caused by mould or fungus, which causes health problems. The structure is damp.",
    2: "For example, the building has some dampness, poor air quality or excessive air leakage, damage due to plumbing failures, is expensive to heat.",
    4: "There is a slight wear in visible finishes in some places. Comfort is less than ideal and energy costs could be reduced.",
    7: "The premises are clean, well-finished and in good condition. Air quality is good and energy costs are reasonable.",
};

var conditionYardValuesFI =
{
    0: "--",
    1: "Rakennuksen alla esimerkikisi ryömintätilaisessa alapohjassa on vettä",
    2: "Maanpinta viettää rakennusten alle. Lattiataso on ulkopuoista maanpintaa alempana.",
    4: "Kasvillisuus on leikkaamatta rakennusten seinustoilta",
    7: "Maanpinta viettää selkeästi rakennuksista poispäin",
};
var conditionFoundationValuesFI =
{
    0: "--",
    1: "Rakennuksessa on merkittäviä routapainumia tai halkeamia. Hirsirakennuksen useita hirsikertoja vaihdettava, nurkat paikoin pettäneet",
    2: "Alin hirsikerta koskettaa maanpintaa. Näkyvissä on veden aiheuttamia  pakkashalkeamia esimerkiksi tiiliperustuksissa tai  näkyvää  rappauksen rapautumista.",
    4: "Sokkeli tai peruskivet ovat näkyvissä. Näkyvissä voi olla kapillaarista veden nousua pintarappauksessa.",
    7: "Sokkeli tai peruskivet ovat selkeästi näkyvissä",
};
var conditionFloorValuesFI =
{
    0: "--",
    1: "Rakennuksessa on esim. lattiasieni tai puulattia on paikoin laho. Maanvaraisen laatan päällä on vettä. // Rossialapohja pudonnut",
    2: "Puulattiassa on näkyvissä routanousuja tai rossialapohjan ryömintätilassa maanpintaa vasten on orgaanista ainesta (esim. lautoja). Kivi- tai betonilattia on märkä (esimerkiksi pinnoitteet irtoavat sisätiloissa).",
    4: "Lattiassa on kulumia. Puulattiassa esimerkiksi pientä narinaa tai Pieniä painumia.",
    7: "Lattia on silmämääräisesti suora",
};
var conditionWallsOuterValuesFI =
{
    0: "Nurkat menettäneet kantokykynsä, seinät sortuneet",
    1: "Nurkat paikoin pettäneet, suuria hirsipintoja vaihdettava // Aukkojen karapuut ovat pettäneet",
    2: "Ulkoseinät ovat jatkuvasti kosteat. Ulkopuolinen vesijärjestelmä kuten syöksyt ovat rikki tai johtavat vettä seinille. Esimerkiksi (lateksi)maalaus kuoriutuu paikoin irti. Sisäpuolella on näkyvissä paikoin ilmavuotojen aiheuttamia kosteusjälkiä. // Hirsirakennuksesa on lievä kengitystarve tai seinien oikaisutarve. Aukkojen alapuoliset hirret on uusittava.",
    4: "Maalaus on kulunut tai rappauksessa on pieniä vaurioita tai halkeamia. Seinäpinnat ovat kuivat.",
    7: "Seinät ovat suorat, hirsirakennuksen nurkat ovat ehyet. Esimerkiksi maalipinnassa ei ole näkyvissä kosteudesta johtuvia vaurioita.",
};
var conditionWindowsDoorsValuesFI =
{
    0: "--",
    1: "Ikkunalasit lasituslangan varassa, liitostapit pettäneet. Laseja tai ikkunoita puuttuu.",
    2: "Ikkunat tai ovet vetävät. Vesipeltien puttuessa vesi valuu ikkunoiden alapuolelle.",
    4: "Ikkunoiden  kittaukset ovat irti, joitssain lasiruuduissa voi olla halkeamia. Ikkunat ovat tiivistämättä.",
    7: "Ikkunat ovat maalattu ja ehyet, vesipellit ovat ehyet",
};
var conditionCeilingValuesFI =
{
    0: "Välikatto ja vesikate pudonnut",
    1: "Eristeet ovat märkiä.",
    2: "Yläpohjaeristeessä on näkyvissä kosteusvaurioita tai se on paikoin puuteellinen.",
    4: "Kuiva, pieniä painumia",
    7: "Kuiva, ei painumia",
};
var conditionRoofValuesFI =
{
    0: "--",
    1: "Vesikate paikoin irti, vuotoja // Vuodot jatkuvat pitkin seiniä. Esim. Räystään kannattavat palkit pettäneet",
    2: "Aluslaudoituksessa on näkyvissä vuotokohtia. Räystäät ja kourut ovat tukossa ja puhdistamatta. // Vesikate kuten esimerkiksi huopakate on paikoin irti, mutta siinä ei ole vuotoja (alla voi olla esim. alkuperäinen katemateriaali kuten päre) // Räystäslaudoituksessa tai rappauksessa on näkyvissä maalin irtoamista tai se on paikoin vaurioitunut vesivuotojen seurauksena.",
    4: "Kate ehjä, eikä siinä ole ollut vuotoja, kunnostustarvetta arvioidaan käyttöikäarvion mukaisesti.",
    7: "Kate on ehjä.",
};
var conditionWallsInnerValuesFI =
{
    0: "--",
    1: "Kantava väliseinäperustus painunut, mikä on esim. näkyvissä ulkoseinien tai tuulisijahormien rakoiluna",
    2: "Seinistä nousee kosteutta, mikä on näyvissä esim. suoloina lattianrajassa.",
    4: "Seinissä voi olla materiaalien omainaisuuksista tai vääristä asennus tai materiaalivalinnoista johtuvia johtuen pieniä hiushalkeamia (esim. kahitiili).",
    7: "Seinät ovat ehyet ja suorat",
};
var conditionInteriorValuesFI =
{
    0: "Tilat ovat käyttökiellossa esimerkiksi terveystarkastuksen toimesta.",
    1: "Rakennuksessa on esimerkiksi homeen tai sinikasvuston aiheuttama vaurio, joka aiheuttaa terveysongelmia. Rakenteet ovat märät.",
    2: "Rakennuksesta on huomatutettu useasti sisäilman laadusta. Rakennuksessa voi olla  tunkkainen outo haju. Ikkunat tai ovet vetävät. Seinissä on rakoja, joista vetää. Sisällä on teknisten järjestelmien vuodoista johtuvia näkyviä paikallisia pieniä vaurioita ja vuoto on korjaamatta ja kuivaamatta.",
    4: "Paikoin on pientä pintojen kulumista. Rakennuksesta on tullut huomautuksia että se on joskus liian kuuma tai kylmä.",
    7: "Tilat ovat siistit ja ehyet. Rakennuksen sisäilmasta ei ole tullut huomautuksia.",
};


function valuetext(value) {
    return `${value}`;
}

function valueLabelFormat(value) {
    //return selectCondition.findIndex((selectCondition) => selectCondition.value === value);
    return value;
}

const BuildingCondition = (props) => {
    const classes = useStyles();

    const [selectedValue1, setConditionYard] = useState(props.value.condition.conditionYard);
    const [selectedValue2, setConditionFoundation] = useState(props.value.condition.conditionFoundation);
    const [selectedValue3, setConditionFloor] = useState(props.value.condition.conditionFloor);
    const [selectedValue4, setConditionWallsOuter] = useState(props.value.condition.conditionWallsOuter);
    const [selectedValue5, setConditionWallsInner] = useState(props.value.condition.conditionWallsInner);
    const [selectedValue6, setConditionCeiling] = useState(props.value.condition.conditionCeiling);
    const [selectedValue7, setConditionRoof] = useState(props.value.condition.conditionRoof);
    const [selectedValue8, setConditionWindowsDoors] = useState(props.value.condition.conditionWindowsDoors);
    const [selectedValue9, setConditionInterior] = useState(props.value.condition.conditionInterior);

    const [slider1Color, setSlider1Color] = useState("secondary");
    const [slider2Color, setSlider2Color] = useState("secondary");
    const [slider3Color, setSlider3Color] = useState("secondary");
    const [slider4Color, setSlider4Color] = useState("secondary");
    const [slider5Color, setSlider5Color] = useState("secondary");
    const [slider6Color, setSlider6Color] = useState("secondary");
    const [slider7Color, setSlider7Color] = useState("secondary");
    const [slider8Color, setSlider8Color] = useState("secondary");
    const [slider9Color, setSlider9Color] = useState("secondary");

    const [text1Color, setText1Color] = useState();
    const [text2Color, setText2Color] = useState();
    const [text3Color, setText3Color] = useState();
    const [text4Color, setText4Color] = useState();
    const [text5Color, setText5Color] = useState();
    const [text6Color, setText6Color] = useState();
    const [text7Color, setText7Color] = useState();
    const [text8Color, setText8Color] = useState();
    const [text9Color, setText9Color] = useState();

    const [languageData, setLanguageData] = useState({
        conditionYardValues: conditionYardValuesEN,
        conditionFoundationValues: conditionFoundationValuesEN,
        conditionFloorValues: conditionFloorValuesEN,
        conditionWallsOuterValues: conditionWallsOuterValuesEN,
        conditionWallsInnerValues: conditionWallsInnerValuesEN,
        conditionCeilingValues: conditionCeilingValuesEN,
        conditionRoofValues: conditionRoofValuesEN,
        conditionWindowsDoorsValues: conditionWindowsDoorsValuesEN,
        conditionInteriorValues: conditionInteriorValuesEN
    });

    const { conditionYardValues, conditionFoundationValues, conditionFloorValues, conditionWallsOuterValues, conditionWallsInnerValues, conditionCeilingValues, conditionRoofValues, conditionWindowsDoorsValues, conditionInteriorValues } = languageData;

    const handleSliderChange = name => (event, newValue) => {

        if (newValue === 3) {
            newValue = 4;
        }
        else if (newValue === 4) {
            newValue = 7;
        }

        switch (name) {
            case "conditionYard":

                if (selectedValue1 === "") {
                    setSlider1Color("primary");
                }

                setConditionYard(newValue);
                break;
            case "conditionFoundation":

                if (selectedValue2 === "") {
                    setSlider2Color("primary");
                }

                setConditionFoundation(newValue);
                break;
            case "conditionFloor":

                if (selectedValue3 === "") {
                    setSlider3Color("primary");
                }

                setConditionFloor(newValue);
                break;
            case "conditionWallsOuter":

                if (selectedValue4 === "") {
                    setSlider4Color("primary");
                }

                setConditionWallsOuter(newValue);
                break;
            case "conditionWallsInner":

                if (selectedValue5 === "") {
                    setSlider5Color("primary");
                }

                setConditionWallsInner(newValue);
                break;
            case "conditionWindowsDoors":

                if (selectedValue8 === "") {
                    setSlider8Color("primary");
                }

                setConditionWindowsDoors(newValue);
                break;
            case "conditionCeiling":

                if (selectedValue6 === "") {
                    setSlider6Color("primary");
                }

                setConditionCeiling(newValue);
                break;
            case "conditionRoof":

                if (selectedValue7 === "") {
                    setSlider7Color("primary");
                }

                setConditionRoof(newValue);
                break;
            case "conditionInterior":

                if (selectedValue9 === "") {
                    setSlider9Color("primary");
                }

                setConditionInterior(newValue);
                break;

            default:
                console.log("default @ handleSliderChange")
        }
        updateColors();
    }

    const handleSlider = name => (event, newValue) => {
        console.log(event);
        console.log(name);

        if (newValue === 3) {
            newValue = 4;
        }
        else if (newValue === 4) {
            newValue = 7;
        }

        props.onChange(name, newValue);
        updateColors();
    }

    const handlePropDefault = (propValue) => {

        if (propValue === 4) {
            propValue = 3;
        }
        else if (propValue === 7) {
            propValue = 4;
        }

        return propValue;
    }

    const getSliderLanguage = (event) => {
        switch (i18n.language) {
            case 'fi':
                return (
                    selectConditionFI
                );
            case 'en':
                return (
                    selectCondition
                );
            default:
                return (
                    selectCondition
                );
        }
    }


    const { t } = useTranslation();

    const getLanguageVersions = (event) => {
        switch (i18n.language) {
            case 'fi':
                return (
                    setLanguageData(
                        {
                            conditionYardValues: conditionYardValuesFI,
                            conditionFoundationValues: conditionFoundationValuesFI,
                            conditionFloorValues: conditionFloorValuesFI,
                            conditionWallsOuterValues: conditionWallsOuterValuesFI,
                            conditionWallsInnerValues: conditionWallsInnerValuesFI,
                            conditionCeilingValues: conditionCeilingValuesFI,
                            conditionRoofValues: conditionRoofValuesFI,
                            conditionWindowsDoorsValues: conditionWindowsDoorsValuesFI,
                            conditionInteriorValues: conditionInteriorValuesFI
                        }
                    )
                );
            case 'en':
                return (
                    setLanguageData(
                        {
                            conditionYardValues: conditionYardValuesEN,
                            conditionFoundationValues: conditionFoundationValuesEN,
                            conditionFloorValues: conditionFloorValuesEN,
                            conditionWallsOuterValues: conditionWallsOuterValuesEN,
                            conditionWallsInnerValues: conditionWallsInnerValuesEN,
                            conditionCeilingValues: conditionCeilingValuesEN,
                            conditionRoofValues: conditionRoofValuesEN,
                            conditionWindowsDoorsValues: conditionWindowsDoorsValuesEN,
                            conditionInteriorValues: conditionInteriorValuesEN
                        }
                    )
                );
            default:
                return (
                    setLanguageData(
                        {
                            conditionYardValues: conditionYardValuesEN,
                            conditionFoundationValues: conditionFoundationValuesEN,
                            conditionFloorValues: conditionFloorValuesEN,
                            conditionWallsOuterValues: conditionWallsOuterValuesEN,
                            conditionWallsInnerValues: conditionWallsInnerValuesEN,
                            conditionCeilingValues: conditionCeilingValuesEN,
                            conditionRoofValues: conditionRoofValuesEN,
                            conditionWindowsDoorsValues: conditionWindowsDoorsValuesEN,
                            conditionInteriorValues: conditionInteriorValuesEN
                        }
                    )
                );
        }
    }


    const updateColors = () => {
        if (selectedValue1 !== "") {
            if (selectedValue1 >= 4) {
                setText1Color(Colors.recommendedGreen);
            }
            else if (selectedValue1 === 2) {
                setText1Color(Colors.sandyYellow)
            }
            else {
                setText1Color(Colors.notRecommendedRed);
            }
        }
        if (selectedValue2 !== "") {
            if (selectedValue2 >= 4) {
                setText2Color(Colors.recommendedGreen);
            }
            else if (selectedValue2 === 2) {
                setText2Color(Colors.sandyYellow)
            }
            else {
                setText2Color(Colors.notRecommendedRed);
            }
        }
        if (selectedValue3 !== "") {
            if (selectedValue3 >= 4) {
                setText3Color(Colors.recommendedGreen);
            }
            else if (selectedValue3 === 2) {
                setText3Color(Colors.sandyYellow)
            }
            else {
                setText3Color(Colors.notRecommendedRed);
            }
        }
        if (selectedValue4 !== "") {
            if (selectedValue4 >= 4) {
                setText4Color(Colors.recommendedGreen);
            }
            else if (selectedValue4 === 2) {
                setText4Color(Colors.sandyYellow)
            }
            else {
                setText4Color(Colors.notRecommendedRed);
            }
        }
        if (selectedValue5 !== "") {
            if (selectedValue5 >= 4) {
                setText5Color(Colors.recommendedGreen);
            }
            else if (selectedValue5 === 2) {
                setText5Color(Colors.sandyYellow)
            }
            else {
                setText5Color(Colors.notRecommendedRed);
            }
        }
        if (selectedValue6 !== "") {
            if (selectedValue6 >= 4) {
                setText6Color(Colors.recommendedGreen);
            }
            else if (selectedValue6 === 2) {
                setText6Color(Colors.sandyYellow)
            }
            else {
                setText6Color(Colors.notRecommendedRed);
            }
        }
        if (selectedValue7 !== "") {
            if (selectedValue7 >= 4) {
                setText7Color(Colors.recommendedGreen);
            }
            else if (selectedValue7 === 2) {
                setText7Color(Colors.sandyYellow)
            }
            else {
                setText7Color(Colors.notRecommendedRed);
            }
        }
        if (selectedValue8 !== "") {
            if (selectedValue8 >= 4) {
                setText8Color(Colors.recommendedGreen);
            }
            else if (selectedValue8 === 2) {
                setText8Color(Colors.sandyYellow)
            }
            else {
                setText8Color(Colors.notRecommendedRed);
            }
        }
        if (selectedValue9 !== "") {
            if (selectedValue9 >= 4) {
                setText9Color(Colors.recommendedGreen);
            }
            else if (selectedValue9 === 2) {
                setText9Color(Colors.sandyYellow)
            }
            else {
                setText9Color(Colors.notRecommendedRed);
            }
        }
    }

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        getLanguageVersions();
    };

    useEffect(getLanguageVersions, []);
    useEffect(updateColors, []);
    //useEffect(updateTexts, []);

    return (
        <>
            <Paper elevation={1}>
                <Grid container item xs={12} direction="column" justify="center" alignItems="center" style={{ padding: 50, margin: 'auto' }}>
                    <Grid container item xs={12} justify="left">
                        <Typography variant="h5" component="h2" style={{ paddingBottom: "0.5rem" }}>
                            {t('buildingConditionYard')}
                        </Typography>
                    </Grid>
                    <Grid container xs={12} direction="row">
                        <Hidden xsDown>
                            <Grid item sm={4}>
                                <Typography variant="body1" style={{ marginTop: 3 }}>{t('buildingConditionDescription')}</Typography>
                            </Grid>
                        </Hidden>
                        <Grid item xs={12} sm={8}>
                            <Slider
                                defaultValue={handlePropDefault(props.value.condition.conditionYard)}
                                valueLabelFormat={valueLabelFormat}
                                getAriaValueText={valuetext}
                                onChange={handleSliderChange("conditionYard")}
                                onChangeCommitted={handleSlider("conditionYard")}
                                color={slider1Color}
                                aria-labelledby="discrete-slider-restrict"
                                step={null}
                                valueLabelDisplay="off"
                                marks={getSliderLanguage()}
                                min={0}
                                max={4}
                            />
                        </Grid>
                        <Grid container xs={12} direction="row">
                            <Hidden xsDown>
                                <Grid item sm={4}>
                                    <Typography variant="body1" style={{ marginTop: 12 }}>{t('buildingConditionGuidelines')}</Typography>
                                </Grid>
                            </Hidden>
                            <Grid item xs={12} sm={8}>
                                <TextField
                                    style={{ background: text1Color }}
                                    name="description"
                                    placeholder={t('buildingConditionLabelYard')}
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                    value={conditionYardValues[selectedValue1]}
                                    multiline
                                    rows={3}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid container item xs={12} justify="left">
                        <Typography variant="h5" component="h2" style={{ paddingTop: 45, paddingBottom: "0.5rem" }}>
                            {t('buildingConditionFoundation')}
                        </Typography>
                    </Grid>
                    <Grid container xs={12} direction="row">
                        <Hidden xsDown>
                            <Grid item sm={4}>
                                <Typography variant="body1" style={{ marginTop: 3 }}>{t('buildingConditionDescription')}</Typography>
                            </Grid>
                        </Hidden>
                        <Grid item xs={12} sm={8}>
                            <Slider
                                defaultValue={handlePropDefault(props.value.condition.conditionFoundation)}
                                valueLabelFormat={valueLabelFormat}
                                getAriaValueText={valuetext}
                                onChange={handleSliderChange("conditionFoundation")}
                                onChangeCommitted={handleSlider("conditionFoundation")}
                                color={slider2Color}
                                aria-labelledby="discrete-slider-restrict"
                                step={null}
                                valueLabelDisplay="off"
                                marks={getSliderLanguage()}
                                min={0}
                                max={4}
                            />
                        </Grid>
                        <Grid container xs={12} direction="row">
                            <Hidden xsDown>
                                <Grid item sm={4}>
                                    <Typography variant="body1" style={{ marginTop: 12 }}>{t('buildingConditionGuidelines')}</Typography>
                                </Grid>
                            </Hidden>
                            <Grid item xs={12} sm={8}>
                                <TextField
                                    style={{ background: text2Color }}
                                    name="description"
                                    placeholder={t('buildingConditionLabelFoundation')}
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                    value={conditionFoundationValues[selectedValue2]}
                                    multiline
                                    rows={3}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid container item xs={12} justify="left">
                        <Typography variant="h5" component="h2" style={{ paddingTop: 45, paddingBottom: "0.5rem" }}>
                            {t('buildingConditionFloor')}
                        </Typography>
                    </Grid>
                    <Grid container xs={12} direction="row">
                        <Hidden xsDown>
                            <Grid item sm={4}>
                                <Typography variant="body1" style={{ marginTop: 3 }}>{t('buildingConditionDescription')}</Typography>
                            </Grid>
                        </Hidden>
                        <Grid item xs={12} sm={8}>
                            <Slider
                                defaultValue={handlePropDefault(props.value.condition.conditionFloor)}
                                valueLabelFormat={valueLabelFormat}
                                getAriaValueText={valuetext}
                                onChange={handleSliderChange("conditionFloor")}
                                onChangeCommitted={handleSlider("conditionFloor")}
                                color={slider3Color}
                                aria-labelledby="discrete-slider-restrict"
                                step={null}
                                valueLabelDisplay="off"
                                marks={getSliderLanguage()}
                                min={0}
                                max={4}
                            />
                        </Grid>
                        <Grid container xs={12} direction="row">
                            <Hidden xsDown>
                                <Grid item sm={4}>
                                    <Typography variant="body1" style={{ marginTop: 12 }}>{t('buildingConditionGuidelines')}</Typography>
                                </Grid>
                            </Hidden>
                            <Grid item xs={12} sm={8}>
                                <TextField
                                    style={{ background: text3Color }}
                                    name="description"
                                    placeholder={t('buildingConditionLabelFloor')}
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                    value={conditionFloorValues[selectedValue3]}
                                    multiline
                                    rows={3}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid container item xs={12} justify="left">
                        <Typography variant="h5" component="h2" style={{ paddingTop: 45, paddingBottom: "0.5rem" }}>
                            {t('buildingConditionWallsOuter')}
                        </Typography>
                    </Grid>
                    <Grid container xs={12} direction="row">
                        <Hidden xsDown>
                            <Grid item sm={4}>
                                <Typography variant="body1" style={{ marginTop: 3 }}>{t('buildingConditionDescription')}</Typography>
                            </Grid>
                        </Hidden>
                        <Grid item xs={12} sm={8}>
                            <Slider
                                defaultValue={handlePropDefault(props.value.condition.conditionWallsOuter)}
                                valueLabelFormat={valueLabelFormat}
                                getAriaValueText={valuetext}
                                onChange={handleSliderChange("conditionWallsOuter")}
                                onChangeCommitted={handleSlider("conditionWallsOuter")}
                                color={slider4Color}
                                aria-labelledby="discrete-slider-restrict"
                                step={null}
                                valueLabelDisplay="off"
                                marks={getSliderLanguage()}
                                min={0}
                                max={4}
                            />
                        </Grid>
                        <Grid container xs={12} direction="row">
                            <Hidden xsDown>
                                <Grid item sm={4}>
                                    <Typography variant="body1" style={{ marginTop: 12 }}>{t('buildingConditionGuidelines')}</Typography>
                                </Grid>
                            </Hidden>
                            <Grid item xs={12} sm={8}>
                                <TextField
                                    style={{ background: text4Color }}
                                    name="description"
                                    placeholder={t('buildingConditionLabelWallsOuter')}
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                    value={conditionWallsOuterValues[selectedValue4]}
                                    multiline
                                    rows={3}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid container item xs={12} justify="left">
                        <Typography variant="h5" component="h2" style={{ paddingTop: 45, paddingBottom: "0.5rem" }}>
                            {t('buildingConditionWallsInner')}
                        </Typography>
                    </Grid>
                    <Grid container xs={12} direction="row">
                        <Hidden xsDown>
                            <Grid item sm={4}>
                                <Typography variant="body1" style={{ marginTop: 3 }}>{t('buildingConditionDescription')}</Typography>
                            </Grid>
                        </Hidden>
                        <Grid item xs={12} sm={8}>
                            <Slider
                                defaultValue={handlePropDefault(props.value.condition.conditionWallsInner)}
                                valueLabelFormat={valueLabelFormat}
                                getAriaValueText={valuetext}
                                onChange={handleSliderChange("conditionWallsInner")}
                                onChangeCommitted={handleSlider("conditionWallsInner")}
                                color={slider5Color}
                                aria-labelledby="discrete-slider-restrict"
                                step={null}
                                valueLabelDisplay="off"
                                marks={getSliderLanguage()}
                                min={0}
                                max={4}
                            />
                        </Grid>
                        <Grid container xs={12} direction="row">
                            <Hidden xsDown>
                                <Grid item sm={4}>
                                    <Typography variant="body1" style={{ marginTop: 12 }}>{t('buildingConditionGuidelines')}</Typography>
                                </Grid>
                            </Hidden>
                            <Grid item xs={12} sm={8}>
                                <TextField
                                    style={{ background: text5Color }}
                                    name="description"
                                    placeholder={t('buildingConditionLabelWallsInner')}
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                    value={conditionWallsInnerValues[selectedValue5]}
                                    multiline
                                    rows={3}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid container item xs={12} justify="left">
                        <Typography variant="h5" component="h2" style={{ paddingTop: 45, paddingBottom: "0.5rem" }}>
                            {t('buildingConditionCeiling')}
                        </Typography>
                    </Grid>
                    <Grid container xs={12} direction="row">
                        <Hidden xsDown>
                            <Grid item sm={4}>
                                <Typography variant="body1" style={{ marginTop: 3 }}>{t('buildingConditionDescription')}</Typography>
                            </Grid>
                        </Hidden>
                        <Grid item xs={12} sm={8}>
                            <Slider
                                defaultValue={handlePropDefault(props.value.condition.conditionCeiling)}
                                valueLabelFormat={valueLabelFormat}
                                getAriaValueText={valuetext}
                                onChange={handleSliderChange("conditionCeiling")}
                                onChangeCommitted={handleSlider("conditionCeiling")}
                                color={slider6Color}
                                aria-labelledby="discrete-slider-restrict"
                                step={null}
                                valueLabelDisplay="off"
                                marks={getSliderLanguage()}
                                min={0}
                                max={4}
                            />
                        </Grid>
                        <Grid container xs={12} direction="row">
                            <Hidden xsDown>
                                <Grid item sm={4}>
                                    <Typography variant="body1" style={{ marginTop: 12 }}>{t('buildingConditionGuidelines')}</Typography>
                                </Grid>
                            </Hidden>
                            <Grid item xs={12} sm={8}>
                                <TextField
                                    style={{ background: text6Color }}
                                    name="description"
                                    placeholder={t('buildingConditionLabelCeiling')}
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                    value={conditionCeilingValues[selectedValue6]}
                                    multiline
                                    rows={3}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid container item xs={12} justify="left">
                        <Typography variant="h5" component="h2" style={{ paddingTop: 45, paddingBottom: "0.5rem" }}>
                            {t('buildingConditionRoof')}
                        </Typography>
                    </Grid>
                    <Grid container xs={12} direction="row">
                        <Hidden xsDown>
                            <Grid item sm={4}>
                                <Typography variant="body1" style={{ marginTop: 3 }}>{t('buildingConditionDescription')}</Typography>
                            </Grid>
                        </Hidden>
                        <Grid item xs={12} sm={8}>
                            <Slider
                                defaultValue={handlePropDefault(props.value.condition.conditionRoof)}
                                valueLabelFormat={valueLabelFormat}
                                getAriaValueText={valuetext}
                                onChange={handleSliderChange("conditionRoof")}
                                onChangeCommitted={handleSlider("conditionRoof")}
                                color={slider7Color}
                                aria-labelledby="discrete-slider-restrict"
                                step={null}
                                valueLabelDisplay="off"
                                marks={getSliderLanguage()}
                                min={0}
                                max={4}
                            />
                        </Grid>
                        <Grid container xs={12} direction="row">
                            <Hidden xsDown>
                                <Grid item sm={4}>
                                    <Typography variant="body1" style={{ marginTop: 12 }}>{t('buildingConditionGuidelines')}</Typography>
                                </Grid>
                            </Hidden>
                            <Grid item xs={12} sm={8}>
                                <TextField
                                    style={{ background: text7Color }}
                                    name="description"
                                    placeholder={t('buildingConditionLabelRoof')}
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                    value={conditionRoofValues[selectedValue7]}
                                    multiline
                                    rows={3}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid container item xs={12} justify="left">
                        <Typography variant="h5" component="h2" style={{ paddingTop: 45, paddingBottom: "0.5rem" }}>
                            {t('buildingConditionDoorsWindows')}
                        </Typography>
                    </Grid>
                    <Grid container xs={12} direction="row">
                        <Hidden xsDown>
                            <Grid item sm={4}>
                                <Typography variant="body1" style={{ marginTop: 3 }}>{t('buildingConditionDescription')}</Typography>
                            </Grid>
                        </Hidden>
                        <Grid item xs={12} sm={8}>
                            <Slider
                                defaultValue={handlePropDefault(props.value.condition.conditionWindowsDoors)}
                                valueLabelFormat={valueLabelFormat}
                                getAriaValueText={valuetext}
                                onChange={handleSliderChange("conditionWindowsDoors")}
                                onChangeCommitted={handleSlider("conditionWindowsDoors")}
                                color={slider8Color}
                                aria-labelledby="discrete-slider-restrict"
                                step={null}
                                valueLabelDisplay="off"
                                marks={getSliderLanguage()}
                                min={0}
                                max={4}
                            />
                        </Grid>
                        <Grid container xs={12} direction="row">
                            <Hidden xsDown>
                                <Grid item sm={4}>
                                    <Typography variant="body1" style={{ marginTop: 12 }}>{t('buildingConditionGuidelines')}</Typography>
                                </Grid>
                            </Hidden>
                            <Grid item xs={12} sm={8}>
                                <TextField
                                    style={{ background: text8Color }}
                                    name="description"
                                    placeholder={t('buildingConditionLabelDoorsWindows')}
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                    value={conditionWindowsDoorsValues[selectedValue8]}
                                    multiline
                                    rows={3}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid container item xs={12} justify="left">
                        <Typography variant="h5" component="h2" style={{ paddingTop: 45, paddingBottom: "0.5rem" }}>
                            {t('buildingConditionInterior')}
                        </Typography>
                    </Grid>
                    <Grid container xs={12} direction="row">
                        <Hidden xsDown>
                            <Grid item sm={4}>
                                <Typography variant="body1" style={{ marginTop: 3 }}>{t('buildingConditionDescription')}</Typography>
                            </Grid>
                        </Hidden>
                        <Grid item xs={12} sm={8}>
                            <Slider
                                defaultValue={handlePropDefault(props.value.condition.conditionInterior)}
                                valueLabelFormat={valueLabelFormat}
                                getAriaValueText={valuetext}
                                onChange={handleSliderChange("conditionInterior")}
                                onChangeCommitted={handleSlider("conditionInterior")}
                                color={slider9Color}
                                aria-labelledby="discrete-slider-restrict"
                                step={null}
                                valueLabelDisplay="off"
                                marks={getSliderLanguage()}
                                min={0}
                                max={4}
                            />
                        </Grid>
                        <Grid container xs={12} direction="row">
                            <Hidden xsDown>
                                <Grid item sm={4}>
                                    <Typography variant="body1" style={{ marginTop: 12 }}>{t('buildingConditionGuidelines')}</Typography>
                                </Grid>
                            </Hidden>
                            <Grid item xs={12} sm={8}>
                                <TextField
                                    style={{ background: text9Color }}
                                    name="description"
                                    placeholder={t('buildingConditionLabelInterior')}
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                    value={conditionInteriorValues[selectedValue9]}
                                    multiline
                                    rows={3}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
};

export default BuildingCondition;