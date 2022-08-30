import React, { useState, useEffect } from 'react';
import { TextField, Grid, MenuItem, makeStyles, Typography,Switch, FormControlLabel} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/RemoveCircleOutlineSharp';
import { useTranslation } from 'react-i18next';
import i18n from "../../i18n"

// TO-DO: EVALUATION

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

const selectElectricitySupplyEN = [
{
    value: '1',
    label: "Connection to electricity network",
},
{
    value: '2',
    label: "Generator",
},
{
    value: '3',
    label: "Hydro turbine",
},
{
    value: '4',
    label: "Photovoltaics",
},
{
    value: '5',
    label: "Wind turbine",
},
];	

const TariffSubtypeEN = [
    {
        value: '1',
        label: "conventional single-rate tariff",
    },
    {
        value: '2',
        label: "conventional multi-rate tariff",
    },
    {
        value: '3',
        label: "smart tariff",
    },
    {
        value: '4',
        label: "renewable tariff",
    }
];

    const PhotovoltaicsSubtypeEN = [
    {
        value: '5',
        label: "integrated into building",
    },
    {
        value: '6',
        label: "mounted onto building",
    },
    {
        value: '7',
        label: "sited near building",
    }
    ];

    const selectElectricitySupplyFI = [
        {
            value: '1',
            label: "Yhteys sähköverkkoon",
        },
        {
            value: '2',
            label: "Generaattori",
        },
        {
            value: '3',
            label: "Vesiturbiini",
        },
        {
            value: '4',
            label: "Aurinkokennot",
        },
        {
            value: '5',
            label: "Tuuliturbiini",
        },
        ];	
        
        
    const TariffSubtypeFI = [
        {
            value: '1',
            label: "Tavallinen yksitariffi",
        },
        {
            value: '2',
            label: "Tavallinen monitariffi",
        },
        {
            value: '3',
            label: "Älykäs tariffi",
        },
        {
            value: '4',
            label: "Uusiutuva tariffi",
        }
        ];	
    
    
        const PhotovoltaicsSubtypeFI = [
        {
            value: '5',
            label: "Integroitu rakennukseen",
        },
        {
            value: '6',
            label: "Asennettu rakennuksen yhteyteen",
        },
        {
            value: '7',
            label: "Sijaitsevat lähellä rakennusta",
        }
        ];

const EnergySupply = (props) => {
    const classes = useStyles();

    const [languageData, setData] = useState({
        selectElectricitySupply: selectElectricitySupplyEN,
        TariffSubtype: TariffSubtypeEN,
        PhotovoltaicsSubtype: PhotovoltaicsSubtypeEN
      });

    const { selectElectricitySupply, TariffSubtype, PhotovoltaicsSubtype} = languageData;

    const handleChangeInput = (id, event) => {
        props.onChange(id, event.target.name, event.target.value, event.target.type, event.target.checked);
    }

    const { t } = useTranslation();

    const getLanguageVersions = (event) =>{ 
        switch (i18n.language) {
            case 'fi':
            return (
                setData(
                    {
                        selectElectricitySupply: selectElectricitySupplyFI,
                        TariffSubtype: TariffSubtypeFI,
                        PhotovoltaicsSubtype: PhotovoltaicsSubtypeFI
                    }
                )
            );
            case 'en':
            return (
                setData(
                    {
                        selectElectricitySupply: selectElectricitySupplyEN,
                        TariffSubtype: TariffSubtypeEN,
                        PhotovoltaicsSubtype: PhotovoltaicsSubtypeEN
                    }
                )
            );
            default:
            return (
                setData(
                    {
                        selectElectricitySupply: selectElectricitySupplyEN,
                        TariffSubtype: TariffSubtypeEN,
                        PhotovoltaicsSubtype: PhotovoltaicsSubtypeEN
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
                <Typography hidden={props.value.energy.length === 1} variant="h5" component="h2" style={{ paddingTop: 25, paddingLeft: 25,}}>
                {t('energySupplyHeader')}
                </Typography>

                {props.value.energy.map((inputElement)=>(
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
                                            id="select-energy-supply"
                                            select
                                            name="energySystemType"
                                            label={t('energySupplyLabelEnergySupply')}
                                            variant="outlined"
                                            fullWidth
                                            value={inputElement.energySystemType}
                                            onChange={event => handleChangeInput(inputElement.id, event)}
                                        >
                                            {selectElectricitySupply.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>

                                        {(() => {
                                            switch (inputElement.energySystemType) {
                                                case '1':
                                                return (
                                                    <TextField
                                                    id="select-energy-subtype"
                                                    select
                                                    name="energySystemSubtype"
                                                    label={t('energySupplyLabelSubtype')}
                                                    variant="outlined"
                                                    fullWidth
                                                    value={inputElement.energySystemSubtype}
                                                    onChange={event => handleChangeInput(inputElement.id, event)}
                                                    >
                                                    {TariffSubtype.map((option) => (
                                                        <MenuItem key={option.value} value={option.value}>
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
                                                        name="energySystemSubtype"
                                                        label={t('energySupplyLabelFossilFuel')}
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
                                                        id="select-subtype_default"
                                                        select
                                                        name="energySystemSubtype"
                                                        label={t('energySupplyLabelHydroTurbine')}
                                                        variant="outlined"
                                                        fullWidth
                                                        value=""
                                                        disabled
                                                        >
                                                        </TextField>
                                                    );
                                                case '4':
                                                return (
                                                    <TextField
                                                    id="select-fuel-burning-subtype"
                                                    select
                                                    name="energySystemSubtype"
                                                    label={t('energySupplyLabelSolar')}
                                                    variant="outlined"
                                                    fullWidth
                                                    value={inputElement.energySystemSubtype}
                                                    onChange={event => handleChangeInput(inputElement.id, event)}
                                                    >
                                                    {PhotovoltaicsSubtype.map((option) => (
                                                        <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                                );
                                                case '5':
                                                    return (
                                                        <TextField
                                                        id="select-subtype_default"
                                                        select
                                                        name="energySystemSubtype"
                                                        label={t('energySupplyLabelWind')}
                                                        variant="outlined"
                                                        fullWidth
                                                        value=""
                                                        disabled
                                                        >
                                                        </TextField>
                                                    );
                                                default:
                                                return (
                                                    <TextField
                                                    id="select-subtype_default"
                                                    select
                                                    name="energySystemSubtype"
                                                    label={t('energySupplyLabelDefault')}
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
                                        label={t('energySupplyToggleStandard')}
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
                                        disabled={props.value.energy.length === 0}  
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

export default EnergySupply;
