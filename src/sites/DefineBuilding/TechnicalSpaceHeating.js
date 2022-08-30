import React, { useState, useEffect } from 'react';
import { TextField, Grid, MenuItem, makeStyles, Typography,Switch, FormControlLabel} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/RemoveCircleOutlineSharp';
import { useTranslation } from 'react-i18next';
import i18n from "../../i18n"

// TO-DO: EVALUATION, STANDARD (current / past), Linked energy supply

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

const selectSpaceHeatingEN = [
{
    value: '1',
    label: "Electric space heaters and electric underfloor heating",
},
{
    value: '2',
    label: "Stoves and open fires",
},
{
    value: '3', // REQUIREMENT:: Mains gas connection
    label: "Gas room heaters (fires and stoves)",
},
{
    value: '4', // REQUIREMENT:: ATLEAST 1 PRIMARY HEAT SUPPLY SELECTED
    label: "Radiators and water-based underfloor heating",
},
{
    value: '5', // REQUIREMENT:: ATLEAST 1 PRIMARY HEAT SUPPLY SELECTED
    label: "Warm-air ducted heating",
},
];	

const electricHeaterSubtypeEN = [
    {
        value: '1',
        label: "Electric convection heaters, without heat storage",
    },
    {
        value: '2',
        label: "Electric convection heaters, with heat storage",
    },
    {
        value: '3',
        label: "Electric fan heaters",
    },
    {
        value: '4',
        label: "Electric infrared heaters",
    },
    {
        value: '5',
        label: "Electric underfloor heating",
    }
];


    const stoveSubtypeEN = [
    {
        value: '6',
        label: "Log stove",
    },
    {
        value: '7',
        label: "multifuel stove",
    },
    {
        value: '8',
        label: "coal stove",
    },
    {
        value: '9',
        label: "log open fire",
    },
    {
        value: '10',
        label: "multifuel open fire",
    },
    {
        value: '11',
        label: "coal open fire",
    }
];

    const gasSubtypeEN = [
        {
            value: '12',
            label: "Gas room heaters (LPG)",
        },
        {
            value: '13',
            label: " gas room heaters (mains gas)",
        },
    ];	

    const radiatorSubtypeEN = [
        {
            value: '14',
            label: "Radiators, low temperature",
        },
        {
            value: '15',
            label: "Radiators, high temperature",
        },
        {
            value: '16',
            label: "Water-based underfloor heating",
        },
        ];

    const selectSpaceHeatingFI = [
        {
            value: '1',
            label: "Sähkölämmittimet ja sähköinen lattialämmitys",
        },
        {
            value: '2',
            label: "Uunit ja tulisijat",
        },
        {
            value: '3', // REQUIREMENT:: Mains gas connection
            label: "Kaasulämmittimet (takat ja uunit)",
        },
        {
            value: '4', // REQUIREMENT:: ATLEAST 1 PRIMARY HEAT SUPPLY SELECTED
            label: "Patterit ja vesiohenteinen lattialämmitys",
        },
        {
            value: '5', // REQUIREMENT:: ATLEAST 1 PRIMARY HEAT SUPPLY SELECTED
            label: "Ilmalämmitys",
        },
        ];	
        
    const electricHeaterSubtypeFI = [
        {
            value: '1',
            label: "Sähköiset konvektiolämmittimet, ilman lämmönvaraajaa",
        },
        {
            value: '2',
            label: "Sähköiset konvektiolämmittimet lämmönvaraajaalla",
        },
        {
            value: '3',
            label: "Sähkölämmittimet",
        },
        {
            value: '4',
            label: "Sähköiset infrapunalämmittimet",
        },
        {
            value: '5',
            label: "Sähköinen lattialämmitys",
        }
        ];	
        
    const stoveSubtypeFI = [
        {
            value: '6',
            label: "Puuliesi",
        },
        {
            value: '7',
            label: "Monipolttoaineliesi",
        },
        {
            value: '8',
            label: "Hiililiesi",
        },
        {
            value: '9',
            label: "Puu avotakka",
        },
        {
            value: '10',
            label: "Monipolttoainen avotakka",
        },
        {
            value: '11',
            label: "Hiili avotakka",
        }
        ];	
        
    const gasSubtypeFI = [
        {
            value: '12',
            label: "Kaasulämmitys (paikallinen)",
        },
        {
            value: '13',
            label: "Kaasulämmitys (kaasuverkko)",
        },
        ];	
        
    const radiatorSubtypeFI = [
        {
            value: '14',
            label: "FI Radiators, low temperature",
        },
        {
            value: '15',
            label: "Jäähdyttimet",
        },
        {
            value: '16',
            label: "Vesikiertoinen lattialämmitys",
        },
        ];

const TechnicalSpaceHeating = (props) => {
    const classes = useStyles();

    const [languageData, setData] = useState({
        selectSpaceHeating: selectSpaceHeatingEN,
        electricHeaterSubtype: electricHeaterSubtypeEN,
        stoveSubtype: stoveSubtypeEN,
        gasSubtype: gasSubtypeEN,
        radiatorSubtype: radiatorSubtypeEN,
      });

    const { selectSpaceHeating, electricHeaterSubtype, stoveSubtype, gasSubtype, radiatorSubtype} = languageData;

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
                        selectSpaceHeating: selectSpaceHeatingFI,
                        electricHeaterSubtype: electricHeaterSubtypeFI,
                        stoveSubtype: stoveSubtypeFI,
                        gasSubtype: gasSubtypeFI,
                        radiatorSubtype: radiatorSubtypeFI,
                    }
                )
            );
            case 'en':
            return (
                setData(
                    {
                        selectSpaceHeating: selectSpaceHeatingEN,
                        electricHeaterSubtype: electricHeaterSubtypeEN,
                        stoveSubtype: stoveSubtypeEN,
                        gasSubtype: gasSubtypeEN,
                        radiatorSubtype: radiatorSubtypeEN,
                    }
                )
            );
            default:
            return (
                setData(
                    {
                        selectSpaceHeating: selectSpaceHeatingEN,
                        electricHeaterSubtype: electricHeaterSubtypeEN,
                        stoveSubtype: stoveSubtypeEN,
                        gasSubtype: gasSubtypeEN,
                        radiatorSubtype: radiatorSubtypeEN,
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
                <Typography hidden={props.value.heating.length === 1} variant="h5" component="h2" style={{ paddingTop: 25, paddingLeft: 25,}}>
                {t('technicalSpaceHeatingHeader')}
                </Typography>

                {props.value.heating.map((inputElement)=>(
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
                                            id="select-heating-type"
                                            select
                                            name="technicalSpaceHeatingType"
                                            label={t('technicalSpaceHeatingLabelHeatingType')}
                                            variant="outlined"
                                            fullWidth
                                            value={inputElement.technicalSpaceHeatingType}
                                            onChange={event => handleChangeInput(inputElement.id, event)}
                                            >
                                            {selectSpaceHeating.map((option) => (
                                                <MenuItem key={option.value} value={option.value} disabled={option.value === 3 && props.value.energyPotential.buildingEnergyGas === false}>
                                                {option.label}
                                                </MenuItem>
                                            ))}
                       
                                        </TextField>

                                        {(() => {
                                            switch (inputElement.technicalSpaceHeatingType) {
                                                case '1':
                                                return (
                                                    <TextField
                                                    id="select-energy-subtype"
                                                    select
                                                    name="technicalSpaceHeatingSubtype"
                                                    label={t('technicalSpaceHeatingLabelSubtype')}
                                                    variant="outlined"
                                                    fullWidth
                                                    value={inputElement.technicalSpaceHeatingSubtype}
                                                    onChange={event => handleChangeInput(inputElement.id, event)}
                                                    >
                                                    {electricHeaterSubtype.map((option) => (
                                                        <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                                );
                                                case '2':
                                                    return (
                                                        <TextField
                                                        id="select-energy-subtype"
                                                        select
                                                        name="technicalSpaceHeatingSubtype"
                                                        label={t('technicalSpaceHeatingLabelSubtype')}
                                                        variant="outlined"
                                                        fullWidth
                                                        value={inputElement.technicalSpaceHeatingSubtype}
                                                        onChange={event => handleChangeInput(inputElement.id, event)}
                                                        >
                                                        {stoveSubtype.map((option) => (
                                                            <MenuItem key={option.value} value={option.value}>
                                                            {option.label}
                                                            </MenuItem>
                                                        ))}
                                                        </TextField>
                                                    );
                                                case '3':
                                                    return (
                                                        <TextField
                                                        id="select-energy-subtype"
                                                        select
                                                        name="technicalSpaceHeatingSubtype"
                                                        label={t('technicalSpaceHeatingLabelSubtype')}
                                                        variant="outlined"
                                                        fullWidth
                                                        value={inputElement.technicalSpaceHeatingSubtype}
                                                        onChange={event => handleChangeInput(inputElement.id, event)}
                                                        >
                                                        {gasSubtype.map((option) => (
                                                            <MenuItem key={option.value} value={option.value}>
                                                            {option.label}
                                                            </MenuItem>
                                                        ))}
                                                        </TextField>
                                                    );
                                                case '4':
                                                return (
                                                    <TextField
                                                    id="select-fuel-burning-subtype"
                                                    select
                                                    name="technicalSpaceHeatingSubtype"
                                                    label={t('technicalSpaceHeatingLabelSubtype')}
                                                    variant="outlined"
                                                    fullWidth
                                                    value={inputElement.technicalSpaceHeatingSubtype}
                                                    onChange={event => handleChangeInput(inputElement.id, event)}
                                                    >
                                                    {radiatorSubtype.map((option) => (
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
                                                        name="technicalSpaceHeatingSubtype"
                                                        label={t('technicalSpaceHeatingLabelwarmAir')}
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
                                                    name="technicalSpaceHeatingSubtype"
                                                    label={t('technicalSpaceHeatingLabelSubtype')}
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
                                        label={t('technicalSpaceHeatingToggleStandard')}
                                        labelPlacement="start"
                                        control={
                                            <Switch 
                                            name="technicalSpaceHeatingCurrent" 
                                            checked={inputElement.technicalSpaceHeatingCurrent} 
                                            onChange={event => handleChangeInput(inputElement.id, event)}  />
                                        }
                                    />

                                    <Grid container item xs={12}>
                                        <IconButton 
                                        disabled={props.value.heating.length === 0}  
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

export default TechnicalSpaceHeating;
