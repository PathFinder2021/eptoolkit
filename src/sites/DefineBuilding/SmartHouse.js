import React, { useState, useEffect } from 'react';
import { TextField, Grid, makeStyles, Paper, Typography, Slider} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import i18n from "../../i18n"
import Colors from '../../components/Styles/colors';

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

// ENGLISH //
const selectSmartEN = [
    {
        value: '1',
        selection: '1',
        label: "Energy saving or LED lighting",
    },
    {
        value: '2',
        selection: '2',
        label: "in addition to the above, eg motion sensor lighting in non-residential areas",
    },
    {
        value: '3',
        selection: '3',
        label: "In addition to the above, eg exhaust air recoverym",
    },
    {
        value: '4',
        selection: '4',
        label: "Home / away capability that adjusts house control system for heating, ventilation, security systems and lighting to suit the situation. Building technology control according to the situation and need saves 20-30% of operating costs during the life cycle of the house",
    },
    {
        value: '5',
        selection: '5',
        label: "in addition to the above, eg control of lighting and sockets or blinds that close to the windows according to the time of day or temperature.",
    },
    {
        value: '6',
        selection: '6',
        label: "In addition to the above, eg room-specific user identification: Measures, for example, the amount and temperature of carbon dioxide and people in the room and adjusts the amount of changing air per room.",
    },
    {
        value: '7',
        selection: '7',
        label: "in addition to the above, eg stock exchange electricity automation, eg car charging, use of dishwashers and washing machines, is switched on when there is an oversupply of electricity in the electricity network, a sewage heat pump or other new innovative solutions",
    },
];

// FINNISH // 
const selectSmartFI = [
    {
        value: '1',
        selection: '1',
        label: "Energiansäästö tai ledvalaistus.",
    },
    {
        value: '2',
        selection: '2',
        label: "edellisten lisäksi esim. Liiketunnistinvalaistus tiloissa, joissa ei oleskella",
    },
    {
        value: '3',
        selection: '3',
        label: "edellisten lisäksi esim. Poistoilman talteenotto",
    },
    {
        value: '4',
        selection: '4',
        label: "Kotona/poissa kykin, joka säätää talon ohjausjärjestelmä lämmityksen, ilmanvaihdon, turvajärjestelmiä ja valaistusta tilanteeseen sopivaksi.  tilanteen ja tarpeen mukainen talotekniikan ohjaus säästää 20-30 % käyttökustannuksia talon elinkaaren aikana",
    },
    {
        value: '5',
        selection: '5',
        label: "edellisten lisäksi esim. valaistuksen ja pistorasioiden säätely tai vuorokaudenajan tai lämpötilan mukaan sulkeutuvat kaihtimet ikkunoihin.",
    },
    {
        value: '6',
        selection: '6',
        label: "edellisten lisäksi esim. Huonekohtainen käyttäjätunnistus: Mittaa esim. hiilidioksidin ja ihmisten määrää ja lämpötilaa huonetiloissa ja säätää huonekohtaisesti vaihtuvan ilman määrää.",
    },
    {
        value: '7',
        selection: '7',
        label: "edellisten lisäksi esim. Pörssisähkö automatikka esim. auton lataus, astian- ja pyykinpesukoneiden käyttö kytkeytyy päälle, kun sähköstä on ylitarjontaa sähköverkossa, jätevesilämpöpumppu tai muut uudet innovatiiviset ratkaisut",
    },
];


function valuetext(value) {
    return `${value}`;
}

function valueLabelFormat(value) {
    //return selectCondition.findIndex((selectCondition) => selectCondition.value === value);
    return value;
}

const SmartHouse = (props) => {
    const classes = useStyles();


    const [colorSmartType,setColorSmartType]=useState();

    const [selectedValue, setValue] = useState(props.value.values[0].smartValue);

    const [textSmartHouse, setTextSmartHouse]=useState(" ");


    const [languageData, setData] = useState({
        selectSmart: selectSmartEN,
    });
    const { selectSmart } = languageData;

    /*
    const handleChangeInput = (id, event) => {
        var resultValue;
        var resultStatus;

        if(event.target.name === "smartValue"){
            resultValue = selectDoorTypeEN.filter(obj => {
                return obj.selection === event.target.value;
            })

            if(event.target.value >= 6){
                setColorDoors(Colors.recommendedGreen);
                resultStatus = "Maintained"
            }
            else if(event.target.value >= 4 && event.target.value <=5){
                setColorDoors(Colors.notRecommendedRed);
                resultStatus = "Protected"
            }
            else{
                setColorDoors(Colors.sandyYellow);
                resultStatus = "Fixable"
            }
        }


        if(resultValue[0].value !== undefined)
        {
            props.onChange(id, event.target.name, event.target.value, resultValue[0].value, resultStatus);
        }

        else{
            console.log("ERROR @RepeatingElementSimple -> handleChangeInput")
        }   

    }
    */

    const handleSliderInput = (id, name) => () => {
        //var resultValue;
        //var resultStatus;
        var resultSelection = selectedValue;
        
        /*
        if(name === "doorSelection"){
            resultValue = selectSmartEN.filter(obj => {
                return obj.selection == selectedValue;
            })
            
            if(selectedValue >= 6){
                resultStatus = "Maintained"
            }
            else if(selectedValue >= 4 && selectedValue <=5){
                resultStatus = "Protected"
            }
            else{
                resultStatus = "Fixable"
            }

            resultSelection = selectedValue;
        }
        */
        console.log(id, name, resultSelection);
        props.onChange(id, name, resultSelection, 0, 0);

    }


    const handleSliderChange = name => (event, selectionValue) => {

        setValue(selectionValue);
        setTextSmartHouse(selectSmart[selectionValue-1].label);
    }    

    const updateColors = () =>{ 
/*
        if(props.value.doors[0].doorStatus !== "")
        {
            switch (props.value.doors[0].doorStatus) {
                case 'Maintained':
                    setColorDoors(Colors.recommendedGreen)
                    break;
                case 'Protected':
                    setColorDoors(Colors.notRecommendedRed)
                    break;
                case 'Fixable':
                    setColorDoors(Colors.sandyYellow)
                    break;
                default:
                return (console.log("error @ updateColors"));
            }

        }

        if(props.value.windows[0].windowStatus != "")
        {
            switch (props.value.windows[0].windowStatus) {
                case 'Maintained':
                    setColorWindows(Colors.recommendedGreen)
                    break;
                case 'Protected':
                    setColorWindows(Colors.notRecommendedRed)
                    break;
                case 'Fixable':
                    setColorWindows(Colors.sandyYellow)
                    break;
                default:
                return (console.log("error @ updateColors"));
            }
        }

        if(props.value.roof[0].roofStatus != "")
        {
            switch (props.value.roof[0].roofStatus) {
                case 'Maintained':
                    setColorRoof(Colors.recommendedGreen)
                    break;
                case 'Protected':
                    setColorRoof(Colors.notRecommendedRed)
                    break;
                case 'Fixable':
                    setColorRoof(Colors.sandyYellow)
                    break;
                default:
                return (console.log("error @ updateColors"));
            }
        }

        if(props.value.floor[0].floorStatus != "")
        {
            switch (props.value.floor[0].floorStatus) {
                case 'Maintained':
                    setColorFloor(Colors.recommendedGreen)
                    break;
                case 'Protected':
                    setColorFloor(Colors.notRecommendedRed)
                    break;
                case 'Fixable':
                    setColorFloor(Colors.sandyYellow)
                    break;
                default:
                return (console.log("error @ updateColors"));
            }
        }

        if(props.value.exterior[0].exteriorStatus != "")
        {
            switch (props.value.exterior[0].exteriorStatus) {
                case 'Maintained':
                    setColorExterior(Colors.recommendedGreen)
                    break;
                case 'Protected':
                    setColorExterior(Colors.notRecommendedRed)
                    break;
                case 'Fixable':
                    setColorExterior(Colors.sandyYellow)
                    break;
                default:
                return (console.log("error @ updateColors"));
            }
        }
        */
    }

    const updateTexts = () =>{ 

        if(props.value.values[0].smartValue !== "")
        {
            setTextSmartHouse(selectSmart[props.value.values[0].smartValue-1].label)
        }
    }

    const getLanguageVersions = (event) =>{ 
        switch (i18n.language) {
            case 'fi':
            return (
                setData(
                    {
                        selectSmart: selectSmartFI,
                    }
                )
            );
            case 'en':
            return (
                setData(
                    {
                        selectSmart: selectSmartEN,
                    }
                )
            );
            default:
            return (
                setData(
                    {
                        selectSmart: selectSmartEN,
                    }
                )
            );
        }
    }

    const { t } = useTranslation();

    const getLabelText = (name) => () =>{
        /*
        if(selectedValueDoors != ""){
            console.log(selectDoorType[selectedValueDoors].label)
            return selectDoorType[selectedValueDoors].label;
        }
        */
        
    };


useEffect(getLanguageVersions, [i18n.language]);
useEffect(updateColors, []);
useEffect(updateTexts, []);
    
    return (
<>
    <Grid container item xs={12} direction="column" justify="center" alignItems="center" style={{ paddingTop: 25, margin: 'auto'}}>  
        <form className={classes.baseStyle}>
            <Paper elevation={1}>
                {props.value.values.map((inputSmartElement)=>(
                    <div key={inputSmartElement.id}> 
                        {inputSmartElement.id === "placeholder" ? (
                            <div/>
                        ) : (
                            <div>
                                <Grid 
                                container 
                                spacing={3}
                                direction="row"
                                alignItems="center"
                                justify="center"
                                style={{ margin: 'auto', paddingTop: 25}}
                                >
                                    <Grid container item xs={10}
                                    direction="row"
                                    alignItems="center"
                                    justify="center"
                                    style={{ margin: 'auto'}}>

                                        <Grid item xs={10} sm={8}>
                                            <Slider
                                                defaultValue={inputSmartElement.smartValue}
                                                valueLabelFormat={valueLabelFormat}
                                                getAriaValueText={valuetext}                        
                                                onChange={handleSliderChange("floorSelection")}
                                                onChangeCommitted={handleSliderInput(inputSmartElement.id, "smartValue")}
                                                aria-labelledby="discrete-slider-restrict"
                                                step={1}
                                                valueLabelDisplay="off"
                                                min={1}
                                                max={7}
                                            />

                                            <TextField
                                                style={{background:colorSmartType}}
                                                name="description"
                                                placeholder={""}
                                                margin="normal"
                                                variant="outlined"
                                                fullWidth
                                                value={textSmartHouse}
                                                multiline
                                                rows={3}
                                                InputLabelProps={{
                                                shrink: true,
                                                }}
                                                InputProps={{
                                                    readOnly: true
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </div>
                         )}
                    </div>
                ))}
            </Paper>
        </form>
    </Grid>
</>
);
};
      
export default SmartHouse;