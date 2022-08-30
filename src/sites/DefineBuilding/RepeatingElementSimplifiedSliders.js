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
const selectDoorTypeEN = [
    {
        value: '1',
        selection: '1',
        label: "I would like to replace all the exterior doors because they are worn, they pull and all the sounds come from the street. The doors have no historical significance.",
    },
    {
        value: '2',
        selection: '2',
        label: "The exterior doors cool the whole apartment and feel cold, some of the doors are also worn and I would like to replace some of these doors",
    },
    {
        value: '3',
        selection: '3',
        label: "Exterior doors cool the whole apartment and feel cold, otherwise they are clean and I might not want to replace them",
    },
    {
        value: '4',
        selection: '4',
        label: "The building is protected and it is not possible to replace the external doors",
    },
    {
        value: '4',
        selection: '5',
        label: "I would like to replace the exterior doors to match current standards, but the building is protected",
    },
    {
        value: '6',
        selection: '6',
        label: "I would like to replace some of the exterior doors as they pull. Some of the doors are already new",
    },
    {
        value: '7',
        selection: '7',
        label: "Exterior doors are in accordance with current building regulations or new factory-made thermal exterior doors and do not need to be repaired or replaced.",
    },
];

const selectWindowTypeEN = [
    {
        value: '1',
        selection: '1',
        label: "I would like to replace all the windows in the house because they are worn, there is a draft and all the street sounds can be heard. Windows have no historical significance. (For example, the frame has only one glass).",
    },
    {
        value: '2',
        selection: '2',
        label: "The windows are cooling the whole apartment and feel cold, some of the windows are also worn or warped or broken and I would like to replace some of these",
    },
    {
        value: '3',
        selection: '3',
        label: "The windows cool the whole apartment and feel cold, otherwise they are clean and I might not want to replace them. The windows are single or double glazed (cultural difference UK one glass / Scandinavia two glass).",
    },
    {
        value: '4',
        selection: '4',
        label: "I would like to replace the windows to match current standards, but the building is protected",
    },
    {
        value: '5',
        selection: '5',
        label: "The building is protected and it is not possible to replace the windows. I have sealed the windows as instructed by a security expert.",
    },
    {
        value: '6',
        selection: '6',
        label: "I would like to replace some of the windows because of draft. Some windows have already been refurbished to current regulations. I have assured the municipal building inspector that this is possible.",
    },
    {
        value: '7',
        selection: '7',
        label: "The windows are in accordance with current building regulations or new factory-made thermal glass windows and do not need to be repaired or replaced.",
    },
];

const selectRoofTypeEN = [
    {
        value: '1',
        selection: '1',
        label: "The roof is completely uninsulated. I can’t add insulation without completely changing the roof structures.",
    },
    {
        value: '2',
        selection: '2',
        label: "Some of the rooms feel very cold and I’m not sure if this is due to inadequate insulation or airtightness on the roof. I want to renovate this/these room(s)",
    },
    {
        value: '3',
        selection: '3',
        label: "The water cover on the roof is at the end of its service life and well worn. At the same time, I would like to improve the thermal insulation and airtightness of the building by changing the original structure.",
    },
    {
        value: '4',
        selection: '4',
        label: "The building is protected and no further insulation and sealing can be done without altering the protected interior",
    },
    {
        value: '6',
        selection: '5',
        label: "The insulation of the roof in the attic is slightly depressed and I can add the corresponding insulation on top of the old one",
    },
    {
        value: '7',
        selection: '6',
        label: "The insulation of the roof is in accordance with current building regulations and the structure is tight. (eg Thermal camera images do not have special leaks)",
    },
];

const selectFloorTypeEN = [
    {
        value: '1',
        selection: '1',
        label: "The floor is completely uninsulated. The mode is therefore only in temporary use. The existing substructures will have to be dismantled to improve the situation.",
    },
    {
        value: '2',
        selection: '2',
        label: "Some rooms feel very cold and I’m not sure if this is due to insufficient floor insulation or airtightness. I want to renovate these rooms.",
    },
    {
        value: '2',
        selection: '3',
        label: "The floor (lower base) is depressed (eg wooden base) and cold. At the same time, I would like to improve the thermal insulation and airtightness of the building by changing the original structure.",
    },
    {
        value: '3',
        selection: '4',
        label: "The floor feels cold in places. I would like to improve the situation, for example, by improving the comfort heat in the washrooms, for example, with underfloor heating. At the same time, the latest surface materials and end-of-life water fixtures.",
    },
    {
        value: '3',
        selection: '5',
        label: "The floor feels cold in places and is drafty at the corners due to poor sealing of the floor and exterior wall.",
    },
    {
        value: '4',
        selection: '6',
        label: "The building is protected and no further insulation and sealing can be done without altering the protected interior",
    },
    {
        value: '7',
        selection: '7',
        label: "The insulation of the subfloor is in accordance with current building regulations and the structure is tight. (e.g. Thermal camera images do not have special leaks).",
    },
];

const selectExteriorTypeEN = [
    {
        value: '1',
        selection: '1',
        label: "The outer wall is completely uninsulated. The mode is therefore only in temporary use. Existing structures will have to be dismantled to improve the situation.",
    },
    {
        value: '2',
        selection: '2',
        label: "Some rooms feel very cold and I’m not sure if this is due to insufficient insulation or airtightness on the exterior wall. I want to renovate these rooms.",
    },
    {
        value: '2',
        selection: '3',
        label: "The exterior wall is structurally damaged and cold. At the same time, I would like to improve the thermal insulation and airtightness of the building by changing the original structure.",
    },
    {
        value: '3',
        selection: '4',
        label: "The outer wall feels cold in places. I would like to improve the situation with additional external insulation. At the same time the latest facade surface structures.",
    },
    {
        value: '3',
        selection: '5',
        label: "The outer wall feels cold in places. I would like to improve the situation with additional internal insulation. At the same time, the latest surface materials and end-of-life water fixtures.",
    },
    {
        value: '3',
        selection: '6',
        label: "The exterior wall feels cold in places and is drafty at the corners due to poor sealing of the floor and exterior wall.",
    },
    {
        value: '4',
        selection: '7',
        label: "The building is protected and no further insulation and sealing can be carried out without altering the protected interior or façade",
    },
    {
        value: '5',
        selection: '8',
        label: "There is a feeling of traction in the outer walls. I guess this may be due to poor sealing of the windows or poor thermal insulation (single glazed window) or poor adjustment of the heating system. I want to improve the situation with simple steps.",
    },
    {
        value: '7',
        selection: '9',
        label: "The external wall insulation complies with current building regulations and the structure is tight. (e.g. Thermal camera images do not have special leaks).",
    },
];

// FINNISH // 
const selectDoorTypeFI = [
    {
        value: '1',
        selection: '1',
        label: "Haluaisin vaihtaa kaikki ulko-ovet, koska ne ovat kuluneet, ne vetävät ja kadulta kuuluvat kaikki äänet. Ovilla ei ole historiallista merkitystä.",
    },
    {
        value: '2',
        selection: '2',
        label: "Ulko-ovet vetävät viilentäen koko asuntoa ja tuntuvat kylmiltä, osa ovista on myös kuluneet ja haluaisin uusia osan näistä ovista",
    },
    {
        value: '3',
        selection: '3',
        label: "Ulko-ovet vetävät viilentäen koko asuntoa ja tuntuvat kylmiltä, muutoin ne ovat siistit enkä välttämättä haluaisi uusia niitä",
    },
    {
        value: '4',
        selection: '4',
        label: "Rakennus on suojeltu, eikä ulko-ovia ei ole mahdollista vaihtaa",
    },
    {
        value: '4',
        selection: '5',
        label: "Haluaisin vaihtaa ulko-ovet nykystandardien mukaisiin oviin, mutta rakennus on suojeltu",
    },
    {
        value: '6',
        selection: '6',
        label: "Haluaisin vaihtaa osan ulko-ovista, koska ne vetävät. Osa ovista on jo uusia.",
    },
    {
        value: '7',
        selection: '7',
        label: "Ulko-ovet ovat nykyrakennusmääräysten mukaisia tai uusia tehdasvalmisteisia lämpöulko-ovia eikä niitä ole tarvetta korjata tai vaihtaa.",
    },
];
    
const selectWindowTypeFI = [
    {
        value: '1',
        selection: '1',
        label: "Haluaisin vaihtaa kaikki talon ikkunat, koska ne ovat kuluneet, ne vetävät ja kadulta kuuluvat kaikki äänet. Ikkunoilla ei ole historiallista merkitystä. Esimerkiksi karmissa on vain yksi lasi.",
    },
    {
        value: '2',
        selection: '2',
        label: "Ikkunat vetävät viilentäen koko asuntoa ja tuntuvat kylmiltä, osa ikkunoista on myös kuluneet tai vääntyilleet tai rikki ja haluaisin uusia osan näistä",
    },
    {
        value: '3',
        selection: '3',
        label: "Ikkunat vetävät viilentäen koko asuntoa ja tuntuvat kylmiltä, muutoin ne ovat siistit enkä välttämättä haluaisi uusia niitä. Ikkunat ovat yksi tai kaksilasiteiset (kulttuurinen eroavaisuus UK yksi lasi/ suomi kaksi lasia).",
    },
    {
        value: '4',
        selection: '4',
        label: "Haluaisin vaihtaa ikkunat nykystandardien mukaisiin ikkunoihin, mutta rakennus on suojeltu",
    },
    {
        value: '5',
        selection: '5',
        label: "Rakennus on suojeltu, eikä ikkunoita ei ole mahdollista vaihtaa. Olen tiivistänyt ikkunat suojeluasiantuntijan ohjeen mukaan.",
    },
    {
        value: '6',
        selection: '6',
        label: "Haluaisin vaihtaa osan ikkunoista, koska ne vetävät. Osa ikkunoita on jo uusittu nykymääräysten mukaisiksi. Olen varmistanut kunnan rakennustarkastajalta, että tämä on mahdollista.",
    },
    {
        value: '7',
        selection: '7',
        label: "Ikkunat ovat nykyrakennusmääräysten mukaisia tai uusia tehdasvalmisteisia lämpölasi-ikkunoita eikä niitä ole tarvetta korjata tai vaihtaa",
    },
];

const selectRoofTypeFI = [
    {
        value: '1',
        selection: '1',
        label: "Yläpohja on täysin eristämätön. En voi lisätä eristettä muuttamatta täysin kattorakenteita.",
    },
    {
        value: '2',
        selection: '2',
        label: "Osa huoneista tuntuu hyvin kylmiltä, enkä ole varma johtuuko tämä yläpohjan riittämättömästä eristyksestä tai ilmantiiveydestä. Haluan peruskorjata nämä huoneet.",
    },
    {
        value: '3',
        selection: '3',
        label: "Yläpohjan vesikate on käyttöikänsä lopussa ja hyvin kulunut. Haluaisin parantaa samalla rakennuksen lämmöneristystä ja ilmantiiveyttä alkuperäistä rakennetta muuttamalla.",
    },
    {
        value: '4',
        selection: '4',
        label: "Rakennus on suojeltu, eikä lisäeristystä ja tiivistämistä voi tehdä muuttamatta suojeltua sisätilaa",
    },
    {
        value: '6',
        selection: '5',
        label: "Yläpohjan eristeet käyttöullakolla ovat hieman painuneet ja voin itse lisätä vastaavaa eristettä vanhan päälle",
    },
    {
        value: '7',
        selection: '6',
        label: "Yläpohjan eristeet ovat nykyrakennusmääräysten mukaisia ja rakenne on tiiviis.(esim. Lämpökamerakuvissa ei ole erityisiä vuotoja)",
    },
];

const selectFloorTypeFI = [
    {
        value: '1',
        selection: '1',
        label: "Alapohja on täysin eristämätön. Tila on tästä syystä vain tilapäiskäytössä. Nykyiset alapohjarakenteet joudutaan purkamaan tilanteen parantamiseksi.",
    },
    {
        value: '2',
        selection: '2',
        label: "Osa huoneista tuntuu hyvin kylmiltä, enkä ole varma johtuuko tämä lattian riittämättömästä eristyksestä tai ilmantiiveydestä. Haluan peruskorjata nämä huoneet.",
    },
    {
        value: '2',
        selection: '3',
        label: "Lattia (alapohja) on painunut (esim. puualapohja) ja kylmä. Haluaisin parantaa samalla rakennuksen lämmöneristystä ja ilmantiiveyttä alkuperäistä rakennetta muuttamalla.",
    },
    {
        value: '3',
        selection: '4',
        label: "Lattia tuntuu paikoin kylmältä. Haluaisin parantaa tilannetta esimerkiksi parantamalla mukavuuslämpöä esimerkiksi pesuhuoneissa lattialämmityksen avulla. Samalla uusin pintamateriaalit ja käyttöikänsä päässä olevat vesikalusteet.",
    },
    {
        value: '3',
        selection: '5',
        label: "Lattia tuntuu paikoin kylmältä ja vetää nurkista, mikä johtuu lattian ja ulkoseinän huonosta tiivistyksestä.",
    },
    {
        value: '4',
        selection: '6',
        label: "Rakennus on suojeltu, eikä lisäeristystä ja tiivistämistä voi tehdä muuttamatta suojeltua sisätilaa",
    },
    {
        value: '7',
        selection: '7',
        label: "Alapohjan eristeet ovat nykyrakennusmääräysten mukaisia ja rakenne on tiiviis. (esim. Lämpökamerakuvissa ei ole erityisiä vuotoja).",
    },
];

const selectExteriorTypeFI = [
    {
        value: '1',
        selection: '1',
        label: "Ulkoseinä on täysin eristämätön. Tila on tästä syystä vain tilapäiskäytössä. Nykyiset rakenteet joudutaan purkamaan tilanteen parantamiseksi. ",
    },
    {
        value: '2',
        selection: '2',
        label: "Osa huoneista tuntuu hyvin kylmiltä, enkä ole varma johtuuko tämä ulkoseinän riittämättömästä eristyksestä tai ilmantiiveydestä. Haluan peruskorjata nämä huoneet.",
    },
    {
        value: '2',
        selection: '3',
        label: "Ulkoseinässä on rakenteellisia vaurioita ja kylmä. Haluaisin parantaa samalla rakennuksen lämmöneristystä ja ilmantiiveyttä alkuperäistä rakennetta muuttamalla.",
    },
    {
        value: '3',
        selection: '4',
        label: "Ulkoseinä tuntuu paikoin kylmältä. Haluaisin parantaa tilannetta ulkopuolisellä lisäeristyksellä. Samalla uusin julkisivun pintarakenteet.",
    },
    {
        value: '3',
        selection: '5',
        label: "Ulkoseinä tuntuu paikoin kylmältä. Haluaisin parantaa tilannetta sisäpuolisellä lisäeristyksellä. Samalla uusin pintamateriaalit ja käyttöikänsä päässä olevat vesikalusteet.",
    },
    {
        value: '3',
        selection: '6',
        label: "Ulkoseinä tuntuu paikoin kylmältä ja vetää nurkista, mikä johtuu lattian ja ulkoseinän huonosta tiivistyksestä.",
    },
    {
        value: '4',
        selection: '7',
        label: "Rakennus on suojeltu, eikä lisäeristystä ja tiivistämistä voi tehdä muuttamatta suojeltua sisätilaa tai fasadia",
    },
    {
        value: '5',
        selection: '8',
        label: "Ulkoseinissä on vedon tunnetta. Arvelen, että tämä voi johtua ikkunoiden huonosta tiivistyksestä tai heikosta lämmöneristyskyvystä (yksilasitteinen ikkuna) tai lämmitysjärjestlmän huonosta säädöstä. Haluan parantaa tilannetta yksinkertaisin toimin.",
    },
    {
        value: '7',
        selection: '9',
        label: "Ulkoseinäeristeet ovat nykyrakennusmääräysten mukaisia ja rakenne on tiiviis. (esim. Lämpökamerakuvissa ei ole erityisiä vuotoja).",
    },
];

function valuetext(value) {
    return `${value}`;
}

function valueLabelFormat(value) {
    //return selectCondition.findIndex((selectCondition) => selectCondition.value === value);
    return value;
}

const RepeatingElementSimplifiedSliders = (props) => {
    const classes = useStyles();

    const [colorDoors,setColorDoors]=useState();
    const [colorWindows,setColorWindows]=useState();
    const [colorRoof,setColorRoof]=useState();
    const [colorFloor,setColorFloor]=useState();
    const [colorExterior,setColorExterior]=useState();

    const [selectedValueDoors, setDoors] = useState(props.value.doors.doorSelection);
    const [selectedValueWindows, setWindows] = useState(props.value.windows.windowSelection);
    const [selectedValueRoof, setRoof] = useState(props.value.roof.roofSelection);
    const [selectedValueFloor, setFloor] = useState(props.value.floor.floorSelection);
    const [selectedValueExterior, setExterior] = useState(props.value.exterior.exteriorSelection);

    const [textDoors,setTextDoors]=useState(" ");
    const [textWindows,setTextWindows]=useState(" ");
    const [textRoof,setTextRoof]=useState(" ");
    const [textFloor,setTextFloor]=useState(" ");
    const [textExterior,setTextExterior]=useState(" ");




    const [languageData, setData] = useState({
        selectDoorType: selectDoorTypeEN,
        selectWindowType: selectWindowTypeEN,
        selectRoofType: selectRoofTypeEN,
        selectFloorType: selectFloorTypeEN,
        selectExteriorType: selectExteriorTypeEN,
    });
    const { selectDoorType, selectWindowType, selectRoofType, selectFloorType, selectExteriorType} = languageData;

    const handleSliderInput = (id, name) => () => {
        var resultValue;
        var resultStatus;
        var resultSelection;

        if(name === "doorSelection"){
            resultValue = selectDoorTypeEN.filter(obj => {
                return obj.selection == selectedValueDoors;
            })

            if(selectedValueDoors >= 6){
                resultStatus = "Maintained"
            }
            else if(selectedValueDoors >= 4 && selectedValueDoors <=5){
                resultStatus = "Protected"
            }
            else{
                resultStatus = "Fixable"
            }

            resultSelection = selectedValueDoors;
        }

        else if(name === "windowSelection"){
            
            resultValue = selectWindowTypeEN.filter(obj => {
                return obj.selection == selectedValueWindows;
            })

            if(selectedValueWindows === 7){
                resultStatus = "Maintained"
            }
            else if(selectedValueWindows >= 4 && selectedValueWindows <=5){
                resultStatus = "Protected"
            }
            else{
                resultStatus = "Fixable"
            }

            resultSelection = selectedValueWindows;
        }

        else if(name === "roofSelection"){
            
            resultValue = selectRoofTypeEN.filter(obj => {
                return obj.selection == selectedValueRoof;
            })

            if(selectedValueRoof >= 5){
                resultStatus = "Maintained"
            }
            else if(selectedValueRoof === 4){
                resultStatus = "Protected"
            }
            else{
                resultStatus = "Fixable"
            }

            resultSelection = selectedValueRoof;
        }

        else if(name === "floorSelection"){
            
            resultValue = selectFloorTypeEN.filter(obj => {
                return obj.selection == selectedValueFloor;
            })

            if(selectedValueFloor === 7){
                resultStatus = "Maintained"
            }
            else if(selectedValueFloor === 6){
                resultStatus = "Protected"
            }
            else{
                resultStatus = "Fixable"
            }

            resultSelection = selectedValueFloor;
        }

        else if(name === "exteriorSelection"){
            
            resultValue = selectExteriorTypeEN.filter(obj => {
                return obj.selection == selectedValueExterior;
            })

            if(selectedValueExterior >= 8){
                resultStatus = "Maintained"
            }
            else if(selectedValueExterior === 7){
                resultStatus = "Protected"
            }
            else{
                resultStatus = "Fixable"
            }

            resultSelection = selectedValueExterior;
        }

         console.log(name, resultSelection, resultValue[0].value, resultStatus);

        if(resultValue[0].value !== undefined)
        {
            props.onChange(id, name, resultSelection, resultValue[0].value, resultStatus);
        }

        else{
            console.log("ERROR @RepeatingElementSimple -> handleChangeInput")
        }   


    }


    const handleSliderChange = name => (event, selectionValue) => {

        switch (name) {
            case "doorSelection":
                setDoors(selectionValue);
                setTextDoors(selectDoorType[selectionValue-1].label)

                    if(selectionValue >= 6){
                        setColorDoors(Colors.recommendedGreen);
                    }
                    else if(selectionValue >= 4 && selectionValue <=5){
                        setColorDoors(Colors.notRecommendedRed);
                    }
                    else{
                        setColorDoors(Colors.sandyYellow);
                    }

                break;
                
            case "windowSelection":
                setWindows(selectionValue);
                setTextWindows(selectWindowType[selectionValue-1].label)

                if(selectionValue === 7){
                    setColorWindows(Colors.recommendedGreen);
                }
                else if(selectionValue >= 4 && selectionValue <=5){
                    setColorWindows(Colors.notRecommendedRed);
                }
                else{
                    setColorWindows(Colors.sandyYellow);
                }

                break;
            case "roofSelection":
                setRoof(selectionValue);
                setTextRoof(selectRoofType[selectionValue-1].label)

                if(selectionValue >= 5){
                    setColorRoof(Colors.recommendedGreen);
                }
                else if(selectionValue === 4){
                    setColorRoof(Colors.notRecommendedRed);
                }
                else{
                    setColorRoof(Colors.sandyYellow);
                }

                break;
            case "floorSelection":
                setFloor(selectionValue);
                setTextFloor(selectFloorType[selectionValue-1].label)

                if(selectionValue === 7){
                    setColorFloor(Colors.recommendedGreen);
                }
                else if(selectionValue === 6){
                    setColorFloor(Colors.notRecommendedRed);
                }
                else{
                    setColorFloor(Colors.sandyYellow);
                }

                break;
            case "exteriorSelection":
                setExterior(selectionValue);
                setTextExterior(selectExteriorType[selectionValue-1].label)

                if(selectionValue >= 8){
                    setColorExterior(Colors.recommendedGreen);
                }
                else if(selectionValue === 7){
                    setColorExterior(Colors.notRecommendedRed);
                }
                else{
                    setColorExterior(Colors.sandyYellow);
                }

                break;
            default:
                console.log("default @ handleSliderChange")
        }
    }    

    const updateColors = () =>{ 

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

        if(props.value.windows[0].windowStatus !== "")
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

        if(props.value.roof[0].roofStatus !== "")
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

        if(props.value.floor[0].floorStatus !== "")
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

        if(props.value.exterior[0].exteriorStatus !== "")
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
    }

    const updateTexts = () =>{ 

        if(props.value.doors[0].doorSelection !== "")
        {
            setTextDoors(selectDoorType[props.value.doors[0].doorSelection-1].label)
        }

        if(props.value.windows[0].windowSelection !== "")
        {
            setTextWindows(selectWindowType[props.value.windows[0].windowSelection-1].label)
        }

        if(props.value.roof[0].roofSelection !== "")
        {
            setTextRoof(selectRoofType[props.value.roof[0].roofSelection-1].label)
        }

        if(props.value.floor[0].floorSelection !== "")
        {
            setTextFloor(selectFloorType[props.value.floor[0].floorSelection-1].label)
        }

        if(props.value.exterior[0].exteriorSelection !== "")
        {
            setTextExterior(selectExteriorType[props.value.exterior[0].exteriorSelection-1].label)
        }
    }

    const getLanguageVersions = (event) =>{ 
        switch (i18n.language) {
            case 'fi':
            return (
                setData(
                    {
                        selectDoorType: selectDoorTypeFI,
                        selectWindowType: selectWindowTypeFI,
                        selectRoofType: selectRoofTypeFI,
                        selectFloorType: selectFloorTypeFI,
                        selectExteriorType: selectExteriorTypeFI,
                    }
                )
            );
            case 'en':
            return (
                setData(
                    {
                        selectDoorType: selectDoorTypeEN,
                        selectWindowType: selectWindowTypeEN,
                        selectRoofType: selectRoofTypeEN,
                        selectFloorType: selectFloorTypeEN,
                        selectExteriorType: selectExteriorTypeEN,
                    }
                )
            );
            default:
            return (
                setData(
                    {
                        selectDoorType: selectDoorTypeEN,
                        selectWindowType: selectWindowTypeEN,
                        selectRoofType: selectRoofTypeEN,
                        selectFloorType: selectFloorTypeEN,
                        selectExteriorType: selectExteriorTypeEN,
                    }
                )
            );
        }
    }

    const { t } = useTranslation();
/*
    const getLabelText = (name) => () =>{
        if(selectedValueDoors !== ""){
            console.log(selectDoorType[selectedValueDoors].label)
            return selectDoorType[selectedValueDoors].label;
        }
        
        
    };
*/
/*
//

    const updateFields = () =>{
        getLanguageVersions();
        updateTexts();
    };

    const onReload = () =>{
        updateTexts();
        updateColors();
    };
*/
 //   useEffect(updateFields, [i18n.language]);
 //   useEffect(onReload, []);


useEffect(getLanguageVersions, [i18n.language]); // Tähän yhteyteen tekstien päivitys
useEffect(updateColors, []);
useEffect(updateTexts, []);
//useEffect(updateTexts, [getLanguageVersions]); // ei toimi, rikkoo tekstien päivityksen


    

    return (
<>
    <Grid container item xs={12} direction="column" justify="center" alignItems="center" style={{ paddingTop: 25, margin: 'auto'}}>  
        <form className={classes.baseStyle}>
            <Paper elevation={1}>
                <Typography hidden={props.value.windows.length === 2} variant="h5" component="h2" style={{ paddingTop: 25, paddingLeft: 25,}}>
                {t('repeatingElementHeaderFloor')}
                </Typography>
                {props.value.floor.map((inputFloorElement)=>(
                    <div key={inputFloorElement.id}> 
                        {inputFloorElement.id === "placeholder" ? (
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
                                                defaultValue={inputFloorElement.floorSelection}
                                                valueLabelFormat={valueLabelFormat}
                                                getAriaValueText={valuetext}                        
                                                onChange={handleSliderChange("floorSelection")}
                                                onChangeCommitted={handleSliderInput(inputFloorElement.id, "floorSelection")}
                                                aria-labelledby="discrete-slider-restrict"
                                                step={1}
                                                valueLabelDisplay="off"
                                                min={1}
                                                max={7}
                                            />

                                            <TextField
                                                style={{background:colorFloor}}
                                                name="description"
                                                placeholder={""}
                                                margin="normal"
                                                variant="outlined"
                                                fullWidth
                                                value={textFloor}
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
            <Paper elevation={1}>
                <Typography hidden={props.value.windows.length === 2} variant="h5" component="h2" style={{ paddingTop: 25, paddingLeft: 25,}}>
                {t('repeatingElementHeaderExterior')}
                </Typography>
                {props.value.exterior.map((inputExteriorElement)=>(
                    <div key={inputExteriorElement.id}> 
                        {inputExteriorElement.id === "placeholder" ? (
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
                                                defaultValue={inputExteriorElement.exteriorSelection}
                                                valueLabelFormat={valueLabelFormat}
                                                getAriaValueText={valuetext}                        
                                                onChange={handleSliderChange("exteriorSelection")}
                                                onChangeCommitted={handleSliderInput(inputExteriorElement.id, "exteriorSelection")}
                                                aria-labelledby="discrete-slider-restrict"
                                                step={1}
                                                valueLabelDisplay="off"
                                                min={1}
                                                max={9}
                                            />

                                            <TextField
                                                style={{background:colorExterior}}
                                                name="description"
                                                placeholder={""}
                                                margin="normal"
                                                variant="outlined"
                                                fullWidth
                                                value={textExterior}
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
                            </div>
                         )}
                    </div>
                ))}
            </Paper>
            <Paper elevation={1}>
                <Typography hidden={props.value.windows.length === 2} variant="h5" component="h2" style={{ paddingTop: 25, paddingLeft: 25,}}>
                {t('repeatingElementHeaderRoof')}
                </Typography>
                {props.value.roof.map((inputRoofElement)=>(
                    <div key={inputRoofElement.id}> 
                        {inputRoofElement.id === "placeholder" ? (
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
                                                defaultValue={inputRoofElement.roofSelection}
                                                valueLabelFormat={valueLabelFormat}
                                                getAriaValueText={valuetext}                        
                                                onChange={handleSliderChange("roofSelection")}
                                                onChangeCommitted={handleSliderInput(inputRoofElement.id, "roofSelection")}
                                                aria-labelledby="discrete-slider-restrict"
                                                step={1}
                                                valueLabelDisplay="off"
                                                min={1}
                                                max={6}
                                            />

                                            <TextField
                                                style={{background:colorRoof}}
                                                name="description"
                                                placeholder={""}
                                                margin="normal"
                                                variant="outlined"
                                                fullWidth
                                                value={textRoof}
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
                            </div>
                         )}
                    </div>
                ))}
            </Paper>
            <Paper elevation={1}>
                <Typography hidden={props.value.windows.length === 2} variant="h5" component="h2" style={{ paddingTop: 25, paddingLeft: 25,}}>
                {t('repeatingElementHeaderWindows')}
                </Typography>
                {props.value.windows.map((inputWindowElement)=>(
                    <div key={inputWindowElement.id}> 
                        {inputWindowElement.id === "placeholder" ? (
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
                                                defaultValue={inputWindowElement.windowSelection}
                                                valueLabelFormat={valueLabelFormat}
                                                getAriaValueText={valuetext}                        
                                                onChange={handleSliderChange("windowSelection")}
                                                onChangeCommitted={handleSliderInput(inputWindowElement.id, "windowSelection")}
                                                aria-labelledby="discrete-slider-restrict"
                                                step={1}
                                                valueLabelDisplay="off"
                                                min={1}
                                                max={7}
                                            />

                                            <TextField
                                                style={{background:colorWindows}}
                                                name="description"
                                                placeholder={""}
                                                margin="normal"
                                                variant="outlined"
                                                fullWidth
                                                value={textWindows}
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
                            </div>
                         )}
                    </div>
                ))}
            </Paper>
            <Paper elevation={1}>
                <Typography hidden={props.value.doors.length === 2} variant="h5" component="h2" style={{ paddingTop: 25, paddingLeft: 25,}}>
                {t('repeatingElementHeaderDoors')}
                </Typography>
                {props.value.doors.map((inputDoorElement)=>(
                    <div key={inputDoorElement.id}> 

                        {inputDoorElement.id === "placeholder" ? (
                            <div/>
                        ) : (
                            <div>
                                <Grid 
                                container 
                                spacing={3}
                                direction="row"
                                alignItems="center"
                                justify="center"
                                style={{ margin: 'auto'}}
                                >
                                    <Grid container item xs={10} 
                                    direction="row"
                                    alignItems="center"
                                    justify="center"
                                    style={{ margin: 'auto'}}>

                                        <Grid item xs={10} sm={8}>
                                            <Slider
                                                defaultValue={inputDoorElement.doorSelection}
                                                valueLabelFormat={valueLabelFormat}
                                                getAriaValueText={valuetext}                        
                                                onChange={handleSliderChange("doorSelection")}
                                                onChangeCommitted={handleSliderInput(inputDoorElement.id, "doorSelection")}
                                                aria-labelledby="discrete-slider-restrict"
                                                step={1}
                                                valueLabelDisplay="off"
                                                min={1}
                                                max={7}
                                            />

                                            <TextField
                                                style={{background:colorDoors}}
                                                name="description"
                                                placeholder={""}
                                                margin="normal"
                                                variant="outlined"
                                                fullWidth
                                                value={textDoors}
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
      
export default RepeatingElementSimplifiedSliders;