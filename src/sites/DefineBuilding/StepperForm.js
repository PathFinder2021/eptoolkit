import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, MenuItem, Tooltip } from '@material-ui/core';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { v4 as uuidv4 } from 'uuid';
import NavigationBar from "../../components/Navigation/NavigationBar";
import RepeatingElementSimplifiedSliders from './RepeatingElementSimplifiedSliders';
import SimpleChart from './SimpleChart';
import ChartComfort from './ChartComfort';
import HeatSupply from './HeatSupply';
import EnergySupply from './EnergySupply';
import TechnicalSpaceHeating from './TechnicalSpaceHeating';
import DefineBuilding from './DefineBuilding';
import BuildingCondition from './BuildingCondition';
import HeritageDesignations from './HeritageDesignations';
import UserComfort from './UserComfort';
import BuildingUse from './BuildingUse';
import BuildingSetting from './BuildingSetting';
import BuildingEnergyPotential from './BuildingEnergyPotential';
import { useTranslation } from 'react-i18next';
import i18n from "../../i18n"

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './verticalTabs.scss';
import { stepperTopContainer, overviewIcon, stepperTopTitleContainer, stepperBottomContainer } from '../../components/Styles/classes';
import InfoIcon from '@material-ui/icons/Info';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Colors from '../../components/Styles/colors';
import history from "../../utils/history";
import ErrorIcon from '@material-ui/icons/Error';


const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down('md')]: {
            overflowX: "hidden",    // needs to be hidden to display everything correctly, but sticky elements won't work when hidden
        },
        padding: 0,
        width: '100%',
        margin: "auto",
        flexGrow: 1,
    },
    paper: {
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
        [theme.breakpoints.up('md')]: {
            width: '75%',
        },
        marginTop: theme.spacing(0),
        marginBottom: theme.spacing(0),
        borderRadius: 0,
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
    arrowIcon: {
        [theme.breakpoints.up('md')]: {
            fontSize: 18,
        },
        color: Colors.secondaryColor1,
        fontSize: 16,
        verticalAlign: "middle",
        borderRadius: 100,
        backgroundColor: Colors.primaryColorHover
    },
    arrowLinkContainer: {
        borderRadius: 15,
        backgroundColor: "white",
        marginTop: "1rem",
        padding: "0.5rem 0"
    },
    arrowIconLink: {
        [theme.breakpoints.up('md')]: {
            fontSize: 18,
        },
        color: "white",
        fontSize: 16,
        verticalAlign: "middle",
        borderRadius: 100,
        backgroundColor: Colors.arrowLink
    },
    carouselArrowText: {
        [theme.breakpoints.up('md')]: {
            fontSize: 18,
            marginLeft: theme.spacing(2),
            paddingLeft: theme.spacing(2),
        },
        color: Colors.primaryColorHover,
        fontSize: 16,
        marginLeft: theme.spacing(3),
        paddingLeft: theme.spacing(3),
        marginTop: "1.7rem",
        fontWeight: "bold",
        textIndent: theme.spacing(-3),
        marginRight: theme.spacing(3),
        margin: 0,
        padding: 0,
    },
    carouselArrowTextLink: {
        [theme.breakpoints.up('md')]: {
            fontSize: 18,
            marginLeft: theme.spacing(2),
            paddingLeft: theme.spacing(2),
        },
        color: Colors.arrowLink,
        fontSize: 16,
        marginLeft: theme.spacing(3),
        paddingLeft: theme.spacing(3),
        marginTop: "0.7rem",
        marginBottom: "0.7rem",
        fontWeight: "bold",
        textIndent: theme.spacing(-3),
        marginRight: theme.spacing(3),
        margin: 0,
        padding: 0,
        "&:hover": {
            cursor: "pointer",
            color: Colors.arrowLinkHover,
            textDecoration: "underline",
        }
    },
    carouselText: {
        [theme.breakpoints.up('md')]: {
            fontSize: 18,
            marginLeft: theme.spacing(2),
            paddingLeft: theme.spacing(2),
        },
        marginLeft: theme.spacing(3),
        paddingLeft: theme.spacing(3),
        fontSize: 16,
        marginRight: theme.spacing(3),
        margin: 0,
        padding: 0,
    },
    stepperTopContainer: stepperTopContainer,
    stepperTopTitleContainer: stepperTopTitleContainer,
    overviewIcon: overviewIcon,
    stepperBottomContainer: stepperBottomContainer,
}));

const selectElementEN = [
    {
        value: 1,
        label: 'Ovi',
    },
    {
        value: 2,
        label: 'Ikkuna',
    },
    {
        value: 3,
        label: 'Seinä',
    },
    {
        value: 4,
        label: 'Lattia',
    },
];

const selectElementEnergySupplyEN = [
    {
        value: 1,
        label: 'Lisää energian lähde',
    },
    {
        value: 2,
        label: 'Lisää lämmönlähde',
    },
];

const selectElementTechnicalBuildingServiceEN = [
    {
        value: 1,
        label: 'Lisää tilojen lämmitys',
    },
    {
        value: 2,
        label: 'Placeholder, more later.',
    },
];

const selectElementFI = [
    {
        value: 1,
        label: 'Ovi',
    },
    {
        value: 2,
        label: 'Ikkuna',
    },
    {
        value: 3,
        label: 'Seinä',
    },
    {
        value: 4,
        label: 'Lattia',
    },
];

const selectElementEnergySupplyFI = [
    {
        value: 1,
        label: 'Lisää sähköntuotantotapa',
    },
    {
        value: 2,
        label: 'Lisää lämmitysmuoto',
    },
];

const selectElementTechnicalBuildingServiceFI = [
    {
        value: 1,
        label: 'Tilojen lämmitys',
    },
    {
        value: 2,
        label: 'FI Placeholder, more later.',
    },
];


function getSteps() {
    // refresh this on translate useEffect to update language values ------------------------------
    return ['Building name and location', 'Context and occupancy', 'Building condition', 'Building fabric', 'Energy supply', 'Technical building services', 'Cultural significance'];

}

export default function StepperForm() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();


    //const [elementSelector, setElementSelector] = useState(1);
    const [elementSelectorEnergySupply, setElementSelectorEnergySupply] = useState(1);
    const [elementSelectorTechnicalBuildingService, setElementSelectorTechnicalBuildingService] = useState(1);
    //const [heritageValueSelector, setHeritageValueSelector] = useState(1);
/*
    const [inputUserComfortFlags, setUserComfortFlags] = useState(
        { flagInsufficientVentilation: false, flagInsufficientAirtightness: false, flagUnderheating: false, flagNoise: false },
    );
 */
    const [flagInsufficientVentilation, setFlagInsufficientVentilation] = useState(false);
    const [flagInsufficientAirtightness, setFlagInsufficientAirtightness] = useState(false);
    const [flagUnderheating, setFlagUnderheating] = useState(false);
    const [flagNoise, setFlagNoise] = useState(false);

    const [tooltipInsufficientVentilation, setTooltipInsufficientVentilation] = useState("");
    const [tooltipInsufficientAirtightness, setTooltipInsufficientAirtightness] = useState("");
    const [tooltipUnderheating, setTooltipUnderheating] = useState("");
    const [tooltipNoise, setTooltipNoise] = useState("");


const redirectTo = (addr) => {
    history.push("#/"+addr);
    history.go(0);
    window.scrollTo(0, 0);
};

    const [languageData, setData] = useState({
        selectElementEnergySupply: selectElementEnergySupplyEN,
        selectElementTechnicalBuildingService: selectElementTechnicalBuildingServiceEN,
    });

    const { selectElementEnergySupply, selectElementTechnicalBuildingService} = languageData;



    // NEW SIMPLIFIED VERSION

    const[inputDoorSimple, setInputDoorSimple] = useState([
        {id: uuidv4(), doorValue:"", doorSelection:"", doorStatus:""},
      ]);

    const[inputWindowSimple, setInputWindowSimple] = useState([
        {id: uuidv4(), windowValue:"", windowSelection:"", windowStatus:""},
    ]);

    const[inputRoofSimple, setInputRoofSimple] = useState([
        {id: uuidv4(), roofValue:"", roofSelection:"", roofStatus:""},
    ]);

    const[inputFloorSimple, setInputFloorSimple] = useState([
        {id: uuidv4(), floorValue:"", floorSelection:"", floorStatus:""},
    ]);

    const[inputExteriorSimple, setInputExteriorSimple] = useState([
        {id: uuidv4(), exteriorValue:"", exteriorSelection:"", exteriorStatus:""},
    ]);

    const[inputSmartSimple, setInputSmartSimple] = useState([
        {id: uuidv4(), smartValue:""},
    ]);

    // Data structure is defined here, and also on handleAddFields. So be sure to change is on both
    const[inputDefineBuilding, setDefineBuilding] = useState(
      {buildingName:"", buildingAddress:"", country:""},
    );
  
    const [inputBuildingCondition, setBuildingCondition] = useState(
        { conditionYard: "", conditionFoundation: "", conditionFloor: "", conditionWallsOuter: "", conditionWallsInner: "", conditionWindowsDoors: "", conditionCeiling: "", conditionRoof: "", conditionInterior: "" },
    );

    const [inputUserComfort, setUserComfort] = useState(
        { comfortAirQuality: "", comfortDraughts: "", comfortHumidity: "", comfortNoise: "", comfortTempSummer: "", comfortTempWinter: "" },
    );

    const [inputBuildingUse, setBuildingUse] = useState(
        { buildingUseStatus: "", buildingUseOccupancy: "", buildingUseRegularity: "" },
    );

    const [inputBuildingSetting, setBuildingSetting] = useState(
        { buildingSettingLandscape: "", buildingSettingGroup: "", buildingSettingProperty: "", buildingSettingOutdoor: "" },
    );
    const [inputBuildingEnergyPotential, setBuildingEnergyPotential] = useState(
        { buildingEnergyGas: false, buildingEnergyDistrictHeating: false, buildingEnergySun: false, buildingEnergyWater: false, buildingEnergyWaterFlow: false },
    );

    const[inputHeatElements, setInputHeatElements] = useState([
      {id: "placeholder", heatSystemType:"", heatSystemSubtype:"", systemStandard:false, heatSystemEfficiency: "", heatOperationalCost: ""},
    ]);
  
    const[inputEnergyElements, setInputEnergyElements] = useState([
      {id: "placeholder", energySystemType:"", energySystemSubtype:"", energySystemLinkedElement:"",},
    ]);
  
    const[inputTechnicalSpaceHeating, setInputTechnicalSpaceHeating] = useState([
      {id: "placeholder", technicalSpaceHeatingType:"", technicalSpaceHeatingSubtype:"", technicalSpaceHeatingCurrent: false, technicalSpaceHeatingLinkedElement:"", heatSystemEfficiency: "", heatOperationalCost: ""},
    ]);

    const [inputHeritageValue, setInputHeritageValueElements] = useState([
        { id: uuidv4(), heritageValueDescription: "", heritageValueMaterial: "", heritageValueType: "" },
    ]);
    const [inputHeritageDesignation, setHeritageDesignationElements] = useState([
        { id: uuidv4(), heritageDesignation: "", heritageDesignationName: "", heritageDesignationRemarks: "" },
    ]);
    const [inputHeritageDesignationFinland, setHeritageDesignationFinland] = useState(
        { id: 0, heritageDesignationFIN: "", shouldProtect: false, protectionType: "", specialType: "" },
    );


// NEW SIMPLE DATA

    const simpleFabric = {
    "doors":inputDoorSimple,
    "windows":inputWindowSimple,
    "roof":inputRoofSimple,
    "floor":inputFloorSimple,
    "exterior":inputExteriorSimple,
    } 
    const defineBuildingData = {
        "building": inputDefineBuilding,
    }
    const heatProps = {
        "heat": inputHeatElements,
        "energyPotential": inputBuildingEnergyPotential,
    }
    const energyProps = {
        "energy": inputEnergyElements,
        // tähän vielä propseina elementit joihin on mahdollista linkittää. 
    }
    const technicalSpaceHeatingProps = {
        "heating": inputTechnicalSpaceHeating,
        "energyPotential": inputBuildingEnergyPotential,
        // tähän vielä propseina elementit joihin on mahdollista linkittää. 
    }
    const conditionProps = {
        "condition": inputBuildingCondition,
    }
    const heritageDesignationProps = {
        "values": inputHeritageDesignation,
        "finland": inputHeritageDesignationFinland,
        "building": inputDefineBuilding,
    }
    const userComfortProps = {
        "comfort": inputUserComfort,
    }
    const buildingUseProps = {
        "values": inputBuildingUse,
    }
    const buildingSettingProps = {
        "values": inputBuildingSetting,
    }
    const BuildingEnergyPotentialProps = {
        "values": inputBuildingEnergyPotential,
    }

    const handleNext = () => {

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleFlowControl = () => {

        switch (activeStep + 1) {
            case 1:

                if (Object.values(inputDefineBuilding).indexOf("") > -1) {
                    console.log("Define building has unselected values");
                    return true;
                }
                else {
                    return false;
                }

            case 2:

                if (Object.values(inputBuildingSetting).indexOf("") > -1) {
                    console.log("Building Setting has unselected values");
                }
                else if (Object.values(inputBuildingUse).indexOf("") > -1) {
                    console.log("Building use has unselected values");
                }
                else if (Object.values(inputUserComfort).indexOf("") > -1) {
                    console.log("Building user comfort has unselected values");
                }
                else {
                    return false;
                }
                return true;

            case 3:
                if (Object.values(inputBuildingCondition).indexOf("") > -1) {
                    console.log("Define building has unselected values");
                    return true;
                }
                else {
                    return false;
                }
                
            case 4:
                    return false;
  
            case 5:
                if (inputEnergyElements.length + inputHeatElements.length - 2 >= 2)
                {
                    return false;
                }
                return true;

            case 6:

                if (inputTechnicalSpaceHeating.length - 1 >= 1)
                {
                    return false;
                }
                return true;

            case 7:
                return false;
            case 8:
                return false;
            default:
                console.log(activeStep);
                console.log("error @ handleFlowControl");
        }
        
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };


  const handleSubmit = () => {
    console.log("placeholder, waiting for backend implementation");

    console.log("BUILDING BACKGROUND INFO: ");
    console.log(inputDefineBuilding, inputBuildingSetting, inputBuildingUse, inputBuildingCondition, inputUserComfort);

    console.log("TECHNICAL INFO: ");
    console.log(inputBuildingEnergyPotential, inputHeatElements, inputEnergyElements, inputTechnicalSpaceHeating);

    console.log("BUILDING FABRICS: ");
    console.log(inputDoorSimple, inputWindowSimple, inputRoofSimple, inputFloorSimple, inputExteriorSimple);

    console.log("HERITAGE: ");
    console.log(inputHeritageDesignation, inputHeritageDesignationFinland);
    
  };

    const handleDefineBuilding = (name, value) => {
        setDefineBuilding({ ...inputDefineBuilding, [name]: value });
    }

    const handleBuildingCondition = (name, value) => {
        setBuildingCondition({ ...inputBuildingCondition, [name]: value });
    }

    const handleUserComfort = (name, value) => {
        setUserComfort({ ...inputUserComfort, [name]: value });
    }

    const handleBuildingUse = (name, value) => {
        setBuildingUse({ ...inputBuildingUse, [name]: value });
    }
    const handleBuildingSetting = (name, value) => {
        setBuildingSetting({ ...inputBuildingSetting, [name]: value });
    }

    const handleBuildingEnergyPotential = (name, checked) => {
        setBuildingEnergyPotential({ ...inputBuildingEnergyPotential, [name]: checked });
    }



    // NEW NEW NEW

    const handleSimpleInput = (id, name, selection, value, status) => {

      if(inputDoorSimple[0].hasOwnProperty(name) === true){ 
          const newInputDoors = inputDoorSimple.map(i => {
              if(id === i.id) {
      
                i["doorSelection"] = selection
                i["doorValue"] = value
                i["doorStatus"] = status

              }
              return i;
            })
          
          setInputDoorSimple(newInputDoors);
          console.log(inputDoorSimple);
      }
  
      else if(inputWindowSimple[0].hasOwnProperty(name) === true){
      
          const newInputWindows = inputWindowSimple.map(i => {
            if(id === i.id) {
      
                i["windowSelection"] = selection
                i["windowValue"] = value
                i["windowStatus"] = status

              }

              return i;
              })
          
          setInputWindowSimple(newInputWindows);
          console.log(inputWindowSimple);
      }

      else if(inputRoofSimple[0].hasOwnProperty(name) === true){
      
        const newInputRoof = inputRoofSimple.map(i => {
          if(id === i.id) {
    
              i["roofSelection"] = selection
              i["roofValue"] = value
              i["roofStatus"] = status

            }

            return i;
            })
        
        setInputRoofSimple(newInputRoof);
        console.log(inputRoofSimple);
    }  

    else if(inputFloorSimple[0].hasOwnProperty(name) === true){
      
        const newInputFloor = inputFloorSimple.map(i => {
          if(id === i.id) {
    
              i["floorSelection"] = selection
              i["floorValue"] = value
              i["floorStatus"] = status

            }

            return i;
            })
        
        setInputFloorSimple(newInputFloor);
        console.log(inputFloorSimple);
    }      

    else if(inputExteriorSimple[0].hasOwnProperty(name) === true){
      
        const newInputExterior = inputExteriorSimple.map(i => {
          if(id === i.id) {
    
              i["exteriorSelection"] = selection
              i["exteriorValue"] = value
              i["exteriorStatus"] = status

            }

            return i;
            })
        
        setInputExteriorSimple(newInputExterior);
        console.log(inputExteriorSimple);
    }      

    else if(inputSmartSimple[0].hasOwnProperty(name) === true){
        const newInputSmart = inputSmartSimple.map(i => {
            if(id === i.id){
                i["smartValue"] = selection
            }
            return i;
        })
        setInputSmartSimple(newInputSmart);
        console.log(newInputSmart);
    }
    
    else{
    console.log("error @ handleChangeInput");
    }
  }


// VANHA, tee uusi -------------
  const handleChangeInput = (id, name, value, type, checked) => {
      ///console.log(id, name, value, type, checked);
        //console.log(selectedCountry);
    if(inputHeatElements[0].hasOwnProperty(name) === true){
        const newHeatElement = inputHeatElements.map(i => {
            if(id === i.id) {
                var systemEfficiency = "";
                var operationalCost = "";
                //console.log(type);

                if(type === "checkbox"){
                    i[name] = checked
                }
                else{
                    if(name === "heatSystemType")
                    {
                        i["heatSystemSubtype"] = "";
                    }

                    i[name] = value
                }

                // HEAT EVALUATION
                if(i.heatSystemType === "1" && i.heatSystemSubtype !== "")
                { 
                    console.log("value === 1");
                    switch (i.heatSystemSubtype) {
                        case '1':
                            systemEfficiency = 1;
                            operationalCost = 3;
                            break;
                        case '2':
                            systemEfficiency = 1;
                            operationalCost = 5;
                            break;
                        case '3':
                            systemEfficiency = 1;
                            operationalCost = 4;
                            break;
                        case '4':
                            systemEfficiency = 1;
                            operationalCost = 2;
                            break;
                        case '5':
                            systemEfficiency = 1;
                            operationalCost = 5;
                            break;
                        case '6':
                            systemEfficiency = 1;
                            operationalCost = 4;
                            break;
                        case '7':
                            systemEfficiency = 1;
                            operationalCost = 4;
                            break;
                        case '8':
                            systemEfficiency = 1;
                            operationalCost = 5;
                            break;
                        case '9':
                            systemEfficiency = 1;
                            operationalCost = 2;
                            break;
                        case '10':
                            systemEfficiency = 1;
                            operationalCost = 5;
                            break;
                        default:
                        return (console.log("error @ heatSupply evaluation"));
                    }
                }

                else if(i.heatSystemType === "2")
                {
                    systemEfficiency = 3;
                    operationalCost = 1;
                }

                else if(i.heatSystemType === "3" && i.heatSystemSubtype !== "")
                { 
                    switch (i.heatSystemSubtype) {
                        case '1':
                            systemEfficiency = 3;
                            operationalCost = 5;
                            break;
                        case '2':
                            systemEfficiency = 3;
                            operationalCost = 5;
                            break;
                        case '3':
                            systemEfficiency = 7;
                            operationalCost = 5;
                            break;
                        case '4':
                            systemEfficiency = 7;
                            operationalCost = 5;
                            break;
                        default:
                        return (console.log("error @ heatSupply evaluation"));
                    }
                }

                else if(i.heatSystemType === "4" && i.heatSystemSubtype !== "")
                { 
                    switch (i.heatSystemSubtype) {
                        case '1':
                            systemEfficiency = 5;
                            operationalCost = 5;
                            break;
                        case '2':
                            systemEfficiency = 5;
                            operationalCost = 5;
                            break;
                        case '3':
                            systemEfficiency = 5;
                            operationalCost = 6;
                            break;
                        case '4':
                            systemEfficiency = 5;
                            operationalCost = 6;
                            break;
                        case '5':
                            systemEfficiency = 5;
                            operationalCost = 6;
                            break;
                        default:
                        return (console.log("error @ heatSupply evaluation"));
                    }
                }

                if(i.systemStandard === true)
                {
                    if(systemEfficiency !== ""){
                        systemEfficiency += 1;
                    }
                    if(operationalCost !== ""){
                        operationalCost += 1;
                    }
                }

                i["heatSystemEfficiency"] = systemEfficiency;
                i["heatOperationalCost"] = operationalCost;
                
            }
            return i;
            })
        
        setInputHeatElements(newHeatElement);
        console.log(inputHeatElements);
    }

    else if(inputEnergyElements[0].hasOwnProperty(name) === true){
        const newEnergyElement = inputEnergyElements.map(i => {
            if(id === i.id) {
    
                //console.log(type);
                if(type === "checkbox"){
                    i[name] = checked
                }
                else{
                    i[name] = value
                }
                
            }
            return i;
            })
        
        setInputEnergyElements(newEnergyElement);
    }

    else if(inputTechnicalSpaceHeating[0].hasOwnProperty(name) === true){
        const newTechnicalSpaceHeating = inputTechnicalSpaceHeating.map(i => {
            if(id === i.id) {
                var systemEfficiency = "";
                var operationalCost = "";

                if(type === "checkbox"){
                    i[name] = checked
                }
                else{
                    if(name === "technicalSpaceHeatingType")
                    {
                        //console.log("value RESET");
                        i["technicalSpaceHeatingSubtype"] = "";
                    }
                    i[name] = value
                }
                
                if(i.technicalSpaceHeatingType === "1" && i.technicalSpaceHeatingSubtype !== "")
                { 
                    switch (i.technicalSpaceHeatingSubtype) {
                        case '1':
                            systemEfficiency = 3;
                            operationalCost = 1;
                            break;
                        case '2':
                            systemEfficiency = 3;
                            operationalCost = 1;
                            break;
                        case '3':
                            systemEfficiency = 3;
                            operationalCost = 1;
                            break;
                        case '4':
                            systemEfficiency = 4;
                            operationalCost = 1;
                            break;
                        case '5':
                            systemEfficiency = 3;
                            operationalCost = 1;
                            break;
                        default:
                        return (console.log("error @ spaceHeating evaluation"));
                    }
                }

                else if(i.technicalSpaceHeatingType === "2" && i.technicalSpaceHeatingSubtype !== "")
                { 
                    switch (i.technicalSpaceHeatingSubtype) {
                        case '6':
                            systemEfficiency = 1;
                            operationalCost = 4;
                            break;
                        case '7':
                            systemEfficiency = 1;
                            operationalCost = 4;
                            break;
                        case '8':
                            systemEfficiency = 1;
                            operationalCost = 5;
                            break;
                        case '9':
                            systemEfficiency = 1;
                            operationalCost = 3;
                            break;
                        case '10':
                            systemEfficiency = 1;
                            operationalCost = 3;
                            break;
                        case '11':
                            systemEfficiency = 1;
                            operationalCost = 3;
                            break;
                        default:
                        return (console.log("error @ spaceHeating evaluation"));
                    }
                }

                else if(i.technicalSpaceHeatingType === "3" && i.technicalSpaceHeatingSubtype !== "")
                { 
                    switch (i.technicalSpaceHeatingSubtype) {
                        case '12':
                            systemEfficiency = 1;
                            operationalCost = 1;
                            break;
                        case '13':
                            systemEfficiency = 1;
                            operationalCost = 4;
                            break;
                        default:
                        return (console.log("error @ spaceHeating evaluation"));
                    }
                }


                if(i.technicalSpaceHeatingCurrent === true)
                {
                    if(systemEfficiency !== ""){
                        systemEfficiency += 1;
                    }
                    if(operationalCost !== ""){
                        operationalCost += 1;
                    }
                }

                i["heatSystemEfficiency"] = systemEfficiency;
                i["heatOperationalCost"] = operationalCost;

            }
            return i;
            })
        
        setInputTechnicalSpaceHeating(newTechnicalSpaceHeating);
        console.log(inputTechnicalSpaceHeating);
    }

    else if(inputHeritageValue[0].hasOwnProperty(name) === true){
        const newHeritageValue = inputHeritageValue.map(i => {
            if(id === i.id) {
                i[name] = value   
            }
            return i;
            })
        
        setInputHeritageValueElements(newHeritageValue);
    }

    else if(inputHeritageDesignation[0].hasOwnProperty(name) === true){
        const newHeritageDesignation = inputHeritageDesignation.map(i => {
            if(id === i.id) {
                i[name] = value 
            }
            return i;
            })
        
        setHeritageDesignationElements(newHeritageDesignation);
    }

    else if(inputHeritageDesignationFinland.hasOwnProperty(name) === true){
        // Ei valittujen arvojen nollaus! => heritageDesignationFIN, shouldProtect, protectionType, specialType
        if(type === "checkbox"){
            setHeritageDesignationFinland({ ...inputHeritageDesignationFinland, [name]: checked });
        }
        else if(name === "heritageDesignationFIN" && value === "0"){
            console.log([name]);
            setHeritageDesignationFinland({ ...inputHeritageDesignationFinland, [name]: value, "shouldProtect": false});
        }
        else if(name === "heritageDesignationFIN" && value !== "0"){
            setHeritageDesignationFinland({ ...inputHeritageDesignationFinland, [name]: value, "protectionType":"", "specialType": ""});
        }
        else if(name === "protectionType" && (value !== "3" || value !== "4")){
            setHeritageDesignationFinland({ ...inputHeritageDesignationFinland, [name]: value, "specialType":""});
        }
        else{
            setHeritageDesignationFinland({ ...inputHeritageDesignationFinland, [name]: value });
        }

        console.log(inputHeritageDesignationFinland);
    }
  
    else{
    console.log("error @ handleChangeInput");
    }
}

    const handleAddFieldsEnergySupply = () => {
        switch (elementSelectorEnergySupply) {
            case 1:
                setInputEnergyElements([...inputEnergyElements, { id: uuidv4(), energySystemType: "", energySystemSubtype: "", energySystemLinkedElement: "" }])
                break;
            case 2:
                setInputHeatElements([...inputHeatElements, { id: uuidv4(), heatSystemType: "", heatSystemSubtype: "", systemStandard: false }])
                break;
            default:
                console.log("error @ handleAddFieldsEnergySupply");
        }
    }

    const handleAddFieldsTechnicalBuildingService = () => {
        switch (elementSelectorTechnicalBuildingService) {
            case 1:
                setInputTechnicalSpaceHeating([...inputTechnicalSpaceHeating, { id: uuidv4(), technicalSpaceHeatingType: "", technicalSpaceHeatingSubtype: "", technicalSpaceHeatingCurrent: false, technicalSpaceHeatingLinkedElement: "" }])
                break;
            case 2:
                // PLACEHOLDER for upcoming elements
                console.log("PLACEHOLDER @ handleAddFieldsEnergySupply");
                break;
            default:
                console.log("error @ handleAddFieldsEnergySupply");
        }
    }

    const handleRemoveFields = (id) => {
        // fix the logic here.

        inputHeatElements.map(i => {
            if (id === i.id) {
                const values = [...inputHeatElements];
                values.splice(values.findIndex(value => value.id === id), 1);
                setInputHeatElements(values);
            }
        })
        inputEnergyElements.map(i => {
            if (id === i.id) {
                const values = [...inputEnergyElements];
                values.splice(values.findIndex(value => value.id === id), 1);
                setInputEnergyElements(values);
            }
        })
        inputTechnicalSpaceHeating.map(i => {
            if (id === i.id) {
                const values = [...inputTechnicalSpaceHeating];
                values.splice(values.findIndex(value => value.id === id), 1);
                setInputTechnicalSpaceHeating(values);
            }
        })
    }

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <DefineBuilding
                    value={defineBuildingData}
                    onChange={handleDefineBuilding} />;
            case 1:
                return (
                    <>
                        <BuildingSetting
                            value={buildingSettingProps}
                            onChange={handleBuildingSetting}
                        />
                        <BuildingEnergyPotential
                            value={BuildingEnergyPotentialProps}
                            onChange={handleBuildingEnergyPotential}
                        />
                        <BuildingUse
                            value={buildingUseProps}
                            onChange={handleBuildingUse}
                        />
                        <UserComfort
                            value={userComfortProps}
                            onChange={handleUserComfort}
                        />
                    </>
                );
            case 2:
                return (
                    <>
                        <BuildingCondition
                            value={conditionProps}
                            onChange={handleBuildingCondition}
                        />

                    </>);
            case 3:
                return (
                    <>
                        <RepeatingElementSimplifiedSliders
                        value={simpleFabric}
                        onChange={handleSimpleInput}
                        onClick={handleRemoveFields}/>
                    </>
                );
            case 4:
                return (
                    <>
                        <Grid
                            container
                            spacing={3}
                            direction="column"
                            alignItems="center"
                            justify="center"
                            style={{ margin: 'auto' }}
                        >
                            <EnergySupply
                                value={energyProps}
                                onChange={handleChangeInput}
                                onClick={handleRemoveFields}
                            />

                            <HeatSupply
                                value={heatProps}
                                onChange={handleChangeInput}
                                onClick={handleRemoveFields}
                            />


                            <Grid item xs={12}>
                                <TextField
                                    style={{ width: '29ch', margin: "auto", marginTop: 25 }}
                                    id="select-energy-supply"
                                    select
                                    name="selectAddEnergySupply"
                                    label={t('stepperFormAddEnergySupply')}
                                    variant="outlined"
                                    value={elementSelectorEnergySupply}
                                    onChange={event => setElementSelectorEnergySupply(event.target.value)}
                                >
                                    {selectElementEnergySupply.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <Button
                                    style={{ margin: "auto", marginTop: 25 }}
                                    justify="right"
                                    onClick={handleAddFieldsEnergySupply}
                                    variant="contained"
                                >
                                    {t('stepperFormAddField')}
                                </Button>
                            </Grid>
                        </Grid>


                    </>);
            case 5:
                return (
                    <>
                        <Grid
                            container
                            spacing={3}
                            direction="column"
                            alignItems="center"
                            justify="center"
                            style={{ margin: 'auto' }}
                        >
                            <TechnicalSpaceHeating
                                value={technicalSpaceHeatingProps}
                                onChange={handleChangeInput}
                                onClick={handleRemoveFields}
                            />
                            <Grid item xs={12}>
                                <TextField
                                    style={{ width: '29ch', margin: "auto", marginTop: 25 }}
                                    id="select-technical"
                                    select
                                    name="selectAddTechnicalBuildingService"
                                    label={t('stepperFormTechnicalBuildingServiceSelector')}
                                    variant="outlined"
                                    value={elementSelectorTechnicalBuildingService}
                                    onChange={event => setElementSelectorTechnicalBuildingService(event.target.value)}
                                >
                                    {selectElementTechnicalBuildingService.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <Button
                                    style={{ margin: "auto", marginTop: 25 }}
                                    justify="right"
                                    onClick={handleAddFieldsTechnicalBuildingService}
                                    variant="contained"
                                >
                                    {t('stepperFormAddField')}
                                </Button>
                            </Grid>
                        </Grid>
                    </>
                );
            case 6:
                return (
                    <>
                        <HeritageDesignations
                            value={heritageDesignationProps}
                            onChange={handleChangeInput}
                        />
                    </>);
            default:
                console.log(step);
                return 'Unknown step';
        }
    }



    const { t } = useTranslation();

    const getLanguageVersions = (event) => {
        switch (i18n.language) {
            case 'fi':
                return (
                    setData(
                        {
                            selectElement: selectElementFI,
                            selectElementEnergySupply: selectElementEnergySupplyFI,
                            selectElementTechnicalBuildingService: selectElementTechnicalBuildingServiceFI,
                        }
                    )
                );
            case 'en':
                return (
                    setData(
                        {
                            selectElement: selectElementEN,
                            selectElementEnergySupply: selectElementEnergySupplyEN,
                            selectElementTechnicalBuildingService: selectElementTechnicalBuildingServiceEN,
                        }
                    )
                );
            default:
                return (
                    setData(
                        {
                            selectElement: selectElementEN,
                            selectElementEnergySupply: selectElementEnergySupplyEN,
                            selectElementTechnicalBuildingService: selectElementTechnicalBuildingServiceEN,
                        }
                    )
                );
        }
    }

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        getLanguageVersions();

    };

    // CHECK FOR USERCOMFORT FLAGS::
    const checkFlags = () => {
        if(Object.values(inputUserComfort).indexOf("") === -1){

            if(inputUserComfort.comfortAirQuality < 3 || inputUserComfort.comfortHumidity < 3 || inputUserComfort.comfortTempSummer < 3){     
                let alertVentilation = "Triggered by ";

                    if(inputUserComfort.comfortAirQuality < 3){
                        alertVentilation += "Stuffiness"
                    }
                    if(inputUserComfort.comfortHumidity < 3){
                        if(alertVentilation !== "Triggered by "){
                            alertVentilation +=", "
                        }
                        alertVentilation += "Condensation"
                    }
                    if(inputUserComfort.comfortTempSummer < 3){
                        if(alertVentilation !== "Triggered by "){
                            alertVentilation +=", "
                        }
                        alertVentilation += "Overheating"
                    }
                console.log(alertVentilation);
                setFlagInsufficientVentilation(true);
                setTooltipInsufficientVentilation(alertVentilation);

            }
            else{
                setFlagInsufficientVentilation(false);
            }

            if(inputUserComfort.comfortDraughts < 3 && inputUserComfort.comfortTempWinter < 5){
                setFlagInsufficientAirtightness(true);
                setTooltipInsufficientAirtightness("Triggered by draughtiness and inadequate heating");
            }
            else{
                setFlagInsufficientAirtightness(false);
            }

            if(inputUserComfort.comfortHumidity <3 && inputUserComfort.comfortTempWinter < 5 && inputUserComfort.comfortDraughts > 3){    
                setFlagUnderheating(true);
                setTooltipUnderheating("Flag triggered by condensation and inadequate heating");
            }
            else{
                setFlagUnderheating(false);
            }

            if(inputUserComfort.comfortNoise <3){
                setFlagNoise(true);
                setTooltipNoise("Triggered by outside noise");
            }
            else{
                setFlagNoise(false);
            }   

        }
    }

    useEffect(getLanguageVersions, []);
    useEffect(checkFlags, [inputUserComfort]);

    useEffect(() => {
        window.scrollTo({   // scroll to the top of the page
            top: 0,
            left: 0,
            behavior: "smooth",
            duration: 225
        });
    }, [activeStep])

    return (
        <div className={classes.root}>
            <NavigationBar />
            <Grid container justify="center">
                <Paper className={classes.paper}>
                    <Grid container
                        direction="row"
                        style={{ marginTop: 50 }}
                        alignItems="center"
                        justify="center">
                        <Grid item xs={12} sm={11} lg={10}>
                            <Stepper activeStep={activeStep} orientation="vertical">
                                {steps.map((label, index) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                        <StepContent>
                                            <Typography>{getStepContent(index)}</Typography>
                                            <div className={classes.actionsContainer}>
                                                <div>
                                                    <Button
                                                        disabled={activeStep === 0}
                                                        onClick={handleBack}
                                                        className={classes.button}
                                                    >
                                                        {t('stepperFormBack')}
                                                    </Button>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        disabled={handleFlowControl()}
                                                        onClick={handleNext}
                                                        className={classes.button}
                                                    >
                                                        {activeStep === steps.length - 1 ? t('stepperFormFinish') : t('stepperFormNext')}
                                                    </Button>
                                                </div>
                                            </div>
                                        </StepContent>
                                    </Step>
                                ))}
                            </Stepper>
                            {activeStep === steps.length && (
                                <Paper square elevation={0} className={classes.resetContainer}>
                                    <div className={classes.stepperTopContainer}>
                                        <React.Fragment>
                                            <Grid
                                                container
                                                direction="row"
                                                alignItems="center"
                                                spacing={0}
                                                className={classes.stepperTopTitleContainer}>
                                                <Grid item>
                                                    <InfoIcon className={classes.overviewIcon} style={{ color: Colors.primaryColor1 }} />
                                                </Grid>
                                                <Grid item>
                                                    <header className="overviewTitle">How your building currently performs</header>
                                                </Grid>
                                            </Grid>
                                        </React.Fragment>
                                        <Typography>
                                            <div className="overviewText">
                                                <p>On the dashboard below you can explore how we've rated your current building based on what you've told us. We're
                                                    using a rating system from 1 to 7, with 1 being a low / poor and 7 being a good / high rating.</p>
                                                <p>The rating systems are grouped onto four different tabs: <i>Energy overview, Energy analysis, Building fabric </i>
                                                    and <i>Technical building systems. </i>Click on the four graphic symbols below to explore our different assessments.
                                                    The text next to the diagram provides explanations and links to further information.</p>
                                                <p className={classes.carouselArrowText}> <ArrowDownwardIcon className={classes.arrowIcon} /> Once you've reviewed our performance
                                                    ratings of your current building, you can print or save these results and continue to explore options and recommendations
                                                    to improve the energy performance of your building by retrofitting it</p>
                                            </div>
                                        </Typography>
                                    </div>


                                    <Tabs>
                                        <TabList>
                                            <Tab>
                                                <p>Evaluation overview</p>
                                            </Tab>
                                            <Tab>
                                                <p>Efficiency analysis</p>
                                            </Tab>
                                            <Tab>
                                                <p>Building fabric</p>
                                            </Tab>
                                            <Tab>
                                                <p>Technical building systems</p>
                                            </Tab>
                                        </TabList>

                                        <TabPanel>
                                            <div className="panel-content">

                                                <Grid container
                                                    spacing={3}
                                                    direction="row"
                                                    alignItems="center"
                                                    justify="center"
                                                    style={{ margin: 'auto', paddingTop: 25 }}>
                                                        ---
                                                </Grid>
                                            </div>
                                        </TabPanel>



                                        <TabPanel>
                                            <div className="panel-content">
                                            <h2>User comfort: </h2>
                                            <ChartComfort
                                                value={userComfortProps}
                                            />                 

                                                <Grid container item xs={12} direction="column" justify="center" alignItems="center" style={{ paddingTop: 25, margin: 'auto'}}>
                                                
                                                    {flagInsufficientVentilation === false ? (
                                                        ""
                                                    ) : (
                                                            <Grid container item xs={12} md={8} direction="row">       
                                                                    <Grid container item xs={4} justify="flex-end" alignItems="center">
                                                                        <Tooltip title={tooltipInsufficientVentilation} placement="left">
                                                                            <ErrorIcon style={{color:Colors.notRecommendedRed}}/>
                                                                        </Tooltip>
                                                                    </Grid>
                                                                    <Grid container item xs={8} justify="flex-start">
                                                                            <Typography variant="body2" style={{ paddingLeft: 25}}>
                                                                            {t('alertVentilation')}
                                                                            </Typography>
                                                                    </Grid>     
                                                            </Grid>
                                                    )}

                                                    {flagInsufficientAirtightness === false ? (
                                                        ""
                                                    ) : (
                                                            <Grid container item xs={12} md={8} direction="row">       
                                                                    <Grid container item xs={4} justify="flex-end" alignItems="center">
                                                                        <Tooltip title={tooltipInsufficientAirtightness} placement="left">
                                                                        <ErrorIcon style={{color:Colors.notRecommendedRed}}/>
                                                                        </Tooltip>
                                                                    </Grid>
                                                                    <Grid container item xs={8} justify="flex-start">
                                                                        <Typography variant="body2" style={{ paddingLeft: 25}}>
                                                                        {t('alertAirtightness')}
                                                                        </Typography>
                                                                    </Grid>     
                                                            </Grid>
                                                    )}

                                                    {flagUnderheating === false ? (
                                                        ""
                                                    ) : (
                                                            <Grid container item xs={12} md={8} direction="row">       
                                                                    <Grid container item xs={4} justify="flex-end" alignItems="center">
                                                                        <Tooltip title={tooltipUnderheating} placement="left">
                                                                            <ErrorIcon style={{color:Colors.notRecommendedRed}}/>
                                                                        </Tooltip>
                                                                    </Grid>
                                                                    <Grid container item xs={8} justify="flex-start">
                                                                        <Typography variant="body2" style={{ paddingLeft: 25}}>
                                                                        {t('alertUnderheating')}
                                                                        </Typography>
                                                                    </Grid>     
                                                            </Grid>
                                                    )}

                                                    {flagNoise === false ? (
                                                        ""
                                                    ) : (
                                                            <Grid container item xs={12} md={8} direction="row">       
                                                                    <Grid container item xs={4} justify="flex-end" alignItems="center">
                                                                        <Tooltip title={tooltipNoise} placement="left">
                                                                            <ErrorIcon style={{color:Colors.sandyYellow}}/>
                                                                        </Tooltip>
                                                                    </Grid>
                                                                    <Grid container item xs={8} justify="flex-start">
                                                                        <Typography variant="body2" style={{ paddingLeft: 25}}>
                                                                        {t('alertNoise')}
                                                                        </Typography>
                                                                    </Grid>     
                                                            </Grid>
                                                    )}

                                                </Grid>
                                            </div>

                                        </TabPanel>
                                        <TabPanel>
                                            <div className="panel-content">
                                                <h2>Building fabric: </h2>
                                                <SimpleChart
                                                value={simpleFabric}/>
                                                    <Grid container item xs={12} direction="column" justify="center" alignItems="center" style={{ paddingTop: 25, margin: 'auto'}}>
                                                        
                                                        {inputFloorSimple[0].floorStatus !== "Protected" ? (
                                                            ""
                                                        ) : (
                                                                <Grid container item xs={12} md={8} direction="row">       
                                                                        <Grid container item xs={4} justify="flex-end" alignItems="center">
                                                                            <Tooltip title={t('tooltipFloor')} placement="left">
                                                                                <ErrorIcon style={{color:Colors.notRecommendedRed}}/>
                                                                            </Tooltip>
                                                                        </Grid>
                                                                        <Grid container item xs={8} justify="flex-start">
                                                                                <Typography variant="body2" style={{ paddingLeft: 25}}>
                                                                                {t('statusFloor')}
                                                                                </Typography>
                                                                        </Grid>     
                                                                </Grid>
                                                        )}  

                                                        {inputExteriorSimple[0].exteriorStatus !== "Protected" ? (
                                                            ""
                                                        ) : (
                                                                <Grid container item xs={12} md={8} direction="row">       
                                                                        <Grid container item xs={4} justify="flex-end" alignItems="center">
                                                                            <Tooltip title={t('tooltipExterior')} placement="left">
                                                                                <ErrorIcon style={{color:Colors.notRecommendedRed}}/>
                                                                            </Tooltip>
                                                                        </Grid>
                                                                        <Grid container item xs={8} justify="flex-start">
                                                                                <Typography variant="body2" style={{ paddingLeft: 25}}>
                                                                                {t('statusExterior')}
                                                                                </Typography>
                                                                        </Grid>     
                                                                </Grid>
                                                        )}

                                                        {inputRoofSimple[0].roofStatus !== "Protected" ? (
                                                            ""
                                                        ) : (
                                                                <Grid container item xs={12} md={8} direction="row">       
                                                                        <Grid container item xs={4} justify="flex-end" alignItems="center">
                                                                            <Tooltip title={t('tooltipRoof')} placement="left">
                                                                                <ErrorIcon style={{color:Colors.notRecommendedRed}}/>
                                                                            </Tooltip>
                                                                        </Grid>
                                                                        <Grid container item xs={8} justify="flex-start">
                                                                                <Typography variant="body2" style={{ paddingLeft: 25}}>
                                                                                {t('statusRoof')}
                                                                                </Typography>
                                                                        </Grid>     
                                                                </Grid>
                                                        )}

                                                        {inputWindowSimple[0].windowStatus !== "Protected" ? (
                                                            ""
                                                        ) : (
                                                                <Grid container item xs={12} md={8} direction="row">       
                                                                        <Grid container item xs={4} justify="flex-end" alignItems="center">
                                                                            <Tooltip title={t('tooltipWindow')} placement="left">
                                                                                <ErrorIcon style={{color:Colors.notRecommendedRed}}/>
                                                                            </Tooltip>
                                                                        </Grid>
                                                                        <Grid container item xs={8} justify="flex-start">
                                                                                <Typography variant="body2" style={{ paddingLeft: 25}}>
                                                                                {t('statusWindow')}
                                                                                </Typography>
                                                                        </Grid>     
                                                                </Grid>
                                                        )}

                                                        {inputDoorSimple[0].doorStatus !== "Protected" ? (
                                                            ""
                                                        ) : (
                                                                <Grid container item xs={12} md={8} direction="row">       
                                                                        <Grid container item xs={4} justify="flex-end" alignItems="center">
                                                                            <Tooltip title={t('tooltipDoor')} placement="left">
                                                                                <ErrorIcon style={{color:Colors.notRecommendedRed}}/>
                                                                            </Tooltip>
                                                                        </Grid>
                                                                        <Grid container item xs={8} justify="flex-start">
                                                                                <Typography variant="body2" style={{ paddingLeft: 25}}>
                                                                                {t('statusDoor')}
                                                                                </Typography>
                                                                        </Grid>     
                                                                </Grid>
                                                        )}
                                                        
                                                </Grid>
                                            </div>
                                        </TabPanel>
                                        <TabPanel>
                                            <div className="panel-content">
                                                <h2>Heat supply + technical space heating</h2>

                                                <Grid container
                                                    spacing={3}
                                                    direction="column"
                                                    alignItems="center"
                                                    justify="center"
                                                    style={{ margin: 'auto', paddingTop: 25 }}>

                                                    <Typography>Heat supply:</Typography>

                                                    {inputHeatElements.map((inputElement) => (
                                                        
                                                        <div key={inputElement.id}>
                                                            {inputElement.id === "placeholder" ? (
                                                                <div/>
                                                            ) : (
                                                                <Grid item xs={12}>
                                                                    <TextField
                                                                        name="heatId"
                                                                        label="Id"
                                                                        disabled
                                                                        fullWidth
                                                                        style={{ paddingTop: 5, marginTop: 25 }}
                                                                        value={inputElement.id}
                                                                        InputLabelProps={{
                                                                            shrink: true,
                                                                        }}
                                                                    />
                                                                    <TextField
                                                                        name="heatEfficiency"
                                                                        label="Efficiency"
                                                                        disabled
                                                                        fullWidth
                                                                        style={{ paddingTop: 5 }}
                                                                        value={inputElement.heatSystemEfficiency}
                                                                        InputLabelProps={{
                                                                            shrink: true,
                                                                        }}
                                                                    />
                                                                    <TextField
                                                                        name="heatCost"
                                                                        label="Cost"
                                                                        disabled
                                                                        fullWidth
                                                                        style={{ paddingTop: 5 }}
                                                                        value={inputElement.heatOperationalCost}
                                                                        InputLabelProps={{
                                                                            shrink: true,
                                                                        }}
                                                                    />

                                                                </Grid>
                                                            )}
                                                        </div>
                                                    ))}

                                                    <Typography>Space heating:</Typography>

                                                    {inputTechnicalSpaceHeating.map((inputElement) => (
                                                        <div key={inputElement.id}>
                                                            {inputElement.id === "placeholder" ? (
                                                                <div/>
                                                            ) : (
                                                                <Grid item xs={12}>
                                                                    <TextField
                                                                        name="heatId"
                                                                        label="Id"
                                                                        disabled
                                                                        fullWidth
                                                                        style={{ paddingTop: 5, marginTop: 25 }}
                                                                        value={inputElement.id}
                                                                        InputLabelProps={{
                                                                            shrink: true,
                                                                        }}
                                                                    />
                                                                    <TextField
                                                                        name="heatEfficiency"
                                                                        label="Efficiency"
                                                                        disabled
                                                                        fullWidth
                                                                        style={{ paddingTop: 5 }}
                                                                        value={inputElement.heatSystemEfficiency}
                                                                        InputLabelProps={{
                                                                            shrink: true,
                                                                        }}
                                                                    />
                                                                    <TextField
                                                                        name="heatCost"
                                                                        label="Cost"
                                                                        disabled
                                                                        fullWidth
                                                                        style={{ paddingTop: 5 }}
                                                                        value={inputElement.heatOperationalCost}
                                                                        InputLabelProps={{
                                                                            shrink: true,
                                                                        }}
                                                                    />
                                                                    
                                                                </Grid>
                                                            )}
                                                        </div>
                                                    ))}

                                                </Grid>
                                            </div>
                                        </TabPanel>
                                    </Tabs>

                                    <div className={classes.stepperBottomContainer}>
                                        <Typography>
                                            <div className="overviewText">
                                                <p>Options to improve your building's energy performance are plentiful. You can continue to browse our catalogue
                                                    of retrofit measures. To help you explore them, we'll recommend some which might be particularly useful for
                                                    you to explore. In the catalogue you can also select one or more retrofit measures as you see fit and once
                                                    you've completed your selection, we'll evaluate your building again to compare its current condition to what
                                                    improvements your retrofit of choice might achieve.
                                                </p>

                                                <Grid
                                                    container
                                                    direction="row"
                                                    spacing={3}
                                                    style={{ marginTop: "-1rem" }}>

                                                    <Grid item sm={12} md={6}>
                                                        <div className={classes.arrowLinkContainer}>
                                                            <p className={classes.carouselArrowTextLink}>
                                                                <ArrowForwardIcon className={classes.arrowIconLink} /> Print or save this review of your current building </p>
                                                        </div>
                                                    </Grid>
                                                    <Grid item sm={12} md={6}
                                                        onClick={() => {
                                                            redirectTo("retrofit");
                                                        }}>
                                                        <div className={classes.arrowLinkContainer}>
                                                            <p className={classes.carouselArrowTextLink}>
                                                                <ArrowForwardIcon className={classes.arrowIconLink} /> Explore options and recommendations to retrofit your building</p>
                                                        </div>
                                                    </Grid>
                                                </Grid>
                                            </div>
                                        </Typography>
                                    </div>


                                    <Button onClick={handleReset} className={classes.button}>
                                        {t('stepperFormReset')}
                                    </Button>
                                    <Button onClick={handleSubmit} className={classes.button}>
                                        {t('stepperFormSubmit')}
                                    </Button>
                                </Paper>
                            )}
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </div>
    );
}