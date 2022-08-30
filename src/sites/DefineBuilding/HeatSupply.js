import React, { useState, useEffect } from 'react';
import { TextField, Grid, MenuItem, makeStyles, Typography,Switch, FormControlLabel} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/RemoveCircleOutlineSharp';
import { useTranslation } from 'react-i18next';
import i18n from "../../i18n"

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
        display:"flex",
        flexDirection:"row",
    },
  }));

const selectTypeEN = [
{
    value: '1',
    label: "Fuel-burning boiler",
},
{
    value: '2',
    label: "Electric boiler",
},
{
    value: '3',
    label: "District heating connection",
},
{
    value: '4',
    label: "Heat pump",
},
{
    value: '5',
    label: "Solar thermal collector or solar-assisted heat pump",
},
];	

const fuelBurningSubtypeEN = [
    {
        value: '1',
        label: "Biomass boiler",
    },
    {
        value: '2',
        label: "Coal boiler",
    },
    {
        value: '3',
        label: "Oil boiler",
    },
    {
        value: '4',
        label: "Gas boiler (LPG)",
    },
    {
        value: '5',
        label: "Gas boiler (mains gas)",
    },
    {
        value: '6',
        label: "Fireplace boiler (logs)",
    },
    {
        value: '7',
        label: "Fireplace boiler (multifuel)",
    },
    {
        value: '8',
        label: "Fireplace boiler (coal)",
    },
    {
        value: '9',
        label: "Fireplace boiler (LPG)",
    },
    {
        value: '10',
        label: "Fireplace boiler (mains gas)",
    },
    ];	

    const districtHeatingSubtypeEN = [
    {
        value: '1',
        label: "District heating (heat pump)",
    },
    {
        value: '2',
        label: "District heating (biomass)",
    },
    {
        value: '3',
        label: "District heating (fossil fuel)",
    },
    {
        value: '4',
        label: "District heating (waste heat)",
    },
    ];	

    const heatPumpSubtypeEN = [
    {
        value: '1',
        label: "Air-source heat pump (air-to-air)",
    },
    {
        value: '2',
        label: "Air-source heat pump (air-to-water)",
    },
    {
        value: '3',
        label: "Ground-source heat pump (near-surface)",
    },
    {
        value: '4',
        label: "Ground-source heat pump (borehole)",
    },
    {
        value: '5',
        label: "Water-source heat pump",
    },
    ];	
  
    const solarSubtypeEN = [
    {
        value: '1',
        label: "Solar thermal collectors mounted near building",
    },
    {
        value: '2',
        label: "Solar thermal collectors mounted onto building",
    },
    ];


    const selectTypeFI = [
        {
            value: '1',
            label: "Poltin (öljy tms)",
        },
        {
            value: '2',
            label: "Sähkökattila",
        },
        {
            value: '3',
            label: "Kaukolämpö",
        },
        {
            value: '4',
            label: "Lämpöpumpppu",
        },
        {
            value: '5',
            label: "Aurinkoenergia",
        },
        ];	
        
    const fuelBurningSubtypeFI = [
        {
            value: '1',
            label: "Biomassa",
        },
        {
            value: '2',
            label: "Hiili",
        },
        {
            value: '3',
            label: "Öljy",
        },
        {
            value: '4',
            label: "Paikallinen kaasu",
        },
        {
            value: '5',
            label: "Kaasuverkko",
        },
        {
            value: '6',
            label: "Tulipesä, puu",
        },
        {
            value: '7',
            label: "Tulipesä, useat energialähteet",
        },
        {
            value: '8',
            label: "Tulipesä, hiili",
        },
        {
            value: '9',
            label: "Tulipesä, kaasu",
        },
        {
            value: '10',
            label: "Tulipesä, kaasuverkko",
        },
        ];	
    
        const districtHeatingSubtypeFI = [
        {
            value: '1',
            label: "Kaukolämpö (lämpöpumppu)",
        },
        {
            value: '2',
            label: "Kaukolämpö (biomassa)",
        },
        {
            value: '3',
            label: "Kaukolämpö (fossiilinen polttoaine)",
        },
        {
            value: '4',
            label: "Kaukolämpö (hukkalämpö)",
        },
        ];	
    
        const heatPumpSubtypeFI = [
        {
            value: '1',
            label: "Ilmalämpöpumppu",
        },
        {
            value: '2',
            label: "Ilmavesilämpöpumppu",
        },
        {
            value: '3',
            label: "Maalämpö, pinta-asennus",
        },
        {
            value: '4',
            label: "Maalämpökaivo",
        },
        {
            value: '5',
            label: "Vesilämpöpumppu",
        },
        ];	
        
        const solarSubtypeFI = [
        {
            value: '1',
            label: "Keräimet asennettu lähelle rakennusta",
        },
        {
            value: '2',
            label: "Keräimet asennettu rakennukseen",
        },
        ];

const HeatSupply = (props) => {
    const classes = useStyles();

    const [languageData, setData] = useState({
        selectType: selectTypeEN,
        fuelBurningSubtype: fuelBurningSubtypeEN,
        districtHeatingSubtype: districtHeatingSubtypeEN,
        heatPumpSubtype: heatPumpSubtypeEN,
        solarSubtype: solarSubtypeEN,
      });

    const { selectType, fuelBurningSubtype, districtHeatingSubtype, heatPumpSubtype, solarSubtype} = languageData;

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
                        selectType: selectTypeFI,
                        fuelBurningSubtype: fuelBurningSubtypeFI,
                        districtHeatingSubtype: districtHeatingSubtypeFI,
                        heatPumpSubtype: heatPumpSubtypeFI,
                        solarSubtype: solarSubtypeFI,
                    }
                )
            );
            case 'en':
            return (
                setData(
                    {
                        selectType: selectTypeEN,
                        fuelBurningSubtype: fuelBurningSubtypeEN,
                        districtHeatingSubtype: districtHeatingSubtypeEN,
                        heatPumpSubtype: heatPumpSubtypeEN,
                        solarSubtype: solarSubtypeEN,
                    }
                )
            );
            default:
            return (
                setData(
                    {
                        selectType: selectTypeEN,
                        fuelBurningSubtype: fuelBurningSubtypeEN,
                        districtHeatingSubtype: districtHeatingSubtypeEN,
                        heatPumpSubtype: heatPumpSubtypeEN,
                        solarSubtype: solarSubtypeEN,
                    }
                )
            );
        }
    }

    useEffect(getLanguageVersions, []);

    return (
<>
    <Grid container item dxs={12} direction="column" justify="center" alignItems="center" style={{ paddingTop: 25, margin: 'auto'}}>  
        <form className={classes.baseStyle}>
            <Grid item xs={12}>
                <Typography hidden={props.value.heat.length === 1} variant="h5" component="h2" style={{ paddingTop: 25, paddingLeft: 25,}}>
                {t('heatSupplyHeader')}
                </Typography>

                {props.value.heat.map((inputElement)=>(
                    <div key={inputElement.id}> 

                        {inputElement.id === "placeholder" ? (
                            <div/>
                        ) : (
                            <div>
                                <Grid container item xs={10}
                                direction="row"
                                alignItems="center"
                                justify="center"
                                style={{ margin: 'auto'}}>
                                    <Grid item xs={12} md={8}>
                                        <TextField
                                            id="select-heat-supply"
                                            select
                                            name="heatSystemType"
                                            label={t('heatSupplyLabelHeatSupply')}
                                            variant="outlined"
                                            fullWidth
                                            value={inputElement.heatSystemType}
                                            onChange={event => handleChangeInput(inputElement.id, event)}
                                            >
                                            {selectType.map((option) => (
                                                <MenuItem 
                                                key={option.value} 
                                                value={option.value}
                                                disabled={option.value === 3 && props.value.energyPotential.buildingEnergyDistrictHeating === false}
                                                >
                                                {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>

                                        {(() => {
                                            switch (inputElement.heatSystemType) {
                                                case '1':
                                                return (
                                                    <TextField
                                                    id="select-fuel-burning-subtype"
                                                    select
                                                    name="heatSystemSubtype"
                                                    label={t('heatSupplyLabelSubtype')}
                                                    variant="outlined"
                                                    fullWidth
                                                    value={inputElement.heatSystemSubtype}
                                                    onChange={event => handleChangeInput(inputElement.id, event)}
                                                    >
                                                    {fuelBurningSubtype.map((option) => (
                                                        <MenuItem 
                                                        key={option.value} 
                                                        value={option.value}
                                                        disabled={(option.value === 5 && props.value.energyPotential.buildingEnergyGas === false) || (option.value === 10 && props.value.energyPotential.buildingEnergyGas === false)}>
                                                        {option.label}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                                );
                                                case '2':
                                                return (
                                                    <TextField
                                                    id="select-subtype_default"
                                                    select
                                                    name="heatSystemSubtype"
                                                    label={t('heatSupplyLabelElectricBoiler')}
                                                    variant="outlined"
                                                    fullWidth
                                                    value=""
                                                    disabled
                                                    >
                                                    </TextField>
                                                );
                                                case '3':
                                                return (
                                                    <TextField
                                                    id="select-fuel-burning-subtype"
                                                    select
                                                    name="heatSystemSubtype"
                                                    label={t('heatSupplyLabelSubtype')}
                                                    variant="outlined"
                                                    fullWidth
                                                    value={inputElement.heatSystemSubtype}
                                                    onChange={event => handleChangeInput(inputElement.id, event)}
                                                    >
                                                    {districtHeatingSubtype.map((option) => (
                                                        <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                                );
                                                case '4':
                                                return (
                                                    <TextField
                                                    id="select-heat-pump-subtype"
                                                    select
                                                    name="heatSystemSubtype"
                                                    label={t('heatSupplyLabelSubtype')}
                                                    variant="outlined"
                                                    fullWidth
                                                    value={inputElement.heatSystemSubtype}
                                                    onChange={event => handleChangeInput(inputElement.id, event)}
                                                    >
                                                    {heatPumpSubtype.map((option) => (
                                                        <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                                );
                                                case '5':
                                                return (
                                                    <TextField
                                                    id="select-heat-pump-subtype"
                                                    select
                                                    name="heatSystemSubtype"
                                                    label={t('heatSupplyLabelSubtype')}
                                                    variant="outlined"
                                                    fullWidth
                                                    value={inputElement.heatSystemSubtype}
                                                    onChange={event => handleChangeInput(inputElement.id, event)}
                                                    >
                                                    {solarSubtype.map((option) => (
                                                        <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                                );
                                                default:
                                                return (
                                                    <TextField
                                                    id="select-subtype_default"
                                                    select
                                                    name="heatSystemSubtype"
                                                    label={t('heatSupplyLabelSubtype')}
                                                    variant="outlined"
                                                    fullWidth
                                                    value=""
                                                    disabled
                                                    >
                                                    </TextField>
                                                );
                                            }
                                        })()}
                                    </Grid>
                                    <FormControlLabel
                                        label={t('heatSupplyToggleStandard')}
                                        labelPlacement="start"
                                        control={
                                            <Switch 
                                            name="systemStandard" 
                                            checked={inputElement.systemStandard} 
                                            onChange={event => handleChangeInput(inputElement.id, event)}  />
                                        }
                                    />

                                    <Grid container item xs={12}>
                                        <IconButton 
                                        disabled={props.value.heat.length === 0}  
                                        onClick={() => props.onClick(inputElement.id)}>
                                        <RemoveIcon />
                                        </IconButton>
                                    </Grid>

                                </Grid>
                            </div>
                        )}
                    </div>
                ))}
            </Grid>
        </form>
    </Grid>
</>
);
};
      
export default HeatSupply;