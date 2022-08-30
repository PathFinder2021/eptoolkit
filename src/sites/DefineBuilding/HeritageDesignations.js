import React from 'react';
import { TextField, Grid, MenuItem, makeStyles, Paper, Typography,Switch, FormControlLabel} from '@material-ui/core';
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
// not listed
const selectFinlandHeritageDesignation = [
    {value: '0',
    label: "On",},
    {value: '1',
    label: "Ei ole",}, 
    {value: '2',
    label: "Ei ole tiedossa",},
];

const selectFinlandProtected = [
    {value: '0',
    label: "Suojeltu asemakaavalla (Maankäyttö ja rakennuslaki MRL)",},
    {value: '1',
    label: "Laki rakennusperinnön suojelemisesta (Rakennusperintölaki)",},
    {value: '2',
    label: "Kirkkolaki (ennen vuotta 1917 valmistunut evankelis-luterilainen tai ortodoksinen kirkollinen rakennus)",}, 
    {value: '3',
    label: "Muu suojelumerkintä",},
    {value: '4',
    label: "Erikoistapaukset",},
    {value: '5',
    label: "En tiedä suojeluperustetta",},
];

const selectFinlandBuildingPlan = [
    {value: '0',
    label: "Maakuntakaava",},
    {value: '1',
    label: "Yleiskaava",},
];

const selectFinlandSpecialCase = [
    {value: '2',
    label: "World heritage (UNESCO) – maailmanperintökohde",},
    {value: '3',
    label: "Haagin yleissopimuksen mukainen kansallisesti merkittävä kulttuuriomaisuus",},
    {value: '4',
    label: "Valtakunnallisesti merkittävät rakennetut kulttuuriympäristöt eli RKY -alueet",},
    {value: '5',
    label: "Asetus valtion omistamista rakennuksista",},
    {value: '6',
    label: "Rautatiesopimus",},
    {value: '7',
    label: "Maisema-alue",},

];

const selectHeritageDesignationIreland = [
    {value: '0',
    label: "World Heritage site",},
    {value: '1',
    label: "Scheduled Monument",},
    {value: '2',
    label: "Listed Building (Grade A)",},
    {value: '3',
    label: "Listed Building (Grade B)",},
    {value: '4',
    label: "Listed Building (Grade B+)",},
    {value: '5',
    label: "Listed Building (Grade B1)",},
    {value: '6',
    label: "Listed Building (Grade B2)",},
    {value: '7',
    label: "Historic Buildings of Local Importance",},
    {value: '8',
    label: "Industrial Heritage",},
    {value: '9',
    label: "Defense Heritage",},
    {value: '10',
    label: "within a designated Conservation Area",},
    {value: '11',
    label: "within a designated Area of Townscape / Village Character",},
    {value: '12',
    label: "within a designated Battlefield site",},
    {value: '13',
    label: "within a designated Historic Park / Garden / Demesnes",},
    {value: '14',
    label: "within a Local Landscape Policy Areas",},
    {value: '15',
    label: "within a National Park",},
    {value: '16',
    label: "within a Special Protection Area / Special Areas of Conservation / Natural Heritage Areas",},
];


const HeritageDesignations = (props) => {
    const classes = useStyles();

    const handleChangeInput = (id, event) => {
            console.log(event.target);
            props.onChange(id,event.target.name, event.target.value, event.target.type, event.target.checked);
    }

    const { t } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

return (
    <>
        <Grid container direction="column" justify="center" alignItems="center" style={{ paddingTop: 25, margin: 'auto'}}> 
        <div className={classes.baseStyle}>
            <Paper elevation={1}>
                <Typography variant="h5" component="h2" style={{ paddingTop: 25, paddingLeft: 25,}}>
                {t('heritageDesignationsHeader')}
                </Typography>


                {(() => {
                        switch (props.value.building.country) {
                            case 'FIN':
                            return (
                               <Grid item xs={12} md={8} style={{ paddingTop: 25, paddingBottom: 50, margin: 'auto'}}>
                                    <TextField
                                        id="select-heritage-designation-FIN"
                                        select
                                        name="heritageDesignationFIN"
                                        label={t('heritageDesignationsFinlandProtected')}
                                        variant="outlined"
                                        fullWidth
                                        value={props.value.finland.heritageDesignationFIN}
                                        onChange={event => handleChangeInput(0, event)}
                                        >
                                        {selectFinlandHeritageDesignation.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>

                                    {props.value.finland.heritageDesignationFIN == "" ? (
                                        <div style={{ paddingTop: 25}}/>
                                    ) : (
                                        <div style={{ paddingTop: 25, paddingBottom: 25,}}>
                                            {props.value.finland.heritageDesignationFIN == "0" ? (
                                                <div>
                                                    <TextField
                                                    style={{paddingBottom: 25,}}
                                                    id="select-heritage-designation-FIN-protected"
                                                    select
                                                    name="protectionType"
                                                    label={t('heritageDesignationsFinlandProtectionType')}
                                                    variant="outlined"
                                                    fullWidth
                                                    value={props.value.finland.protectionType}
                                                    onChange={event => handleChangeInput(0, event)}
                                                    >
                                                        {selectFinlandProtected.map((option) => (
                                                            <MenuItem key={option.value} value={option.value}>
                                                            {option.label}
                                                            </MenuItem>
                                                        ))}
                                                    </TextField>
                                                
                                                    {(() => {
                                                        switch (props.value.finland.protectionType) {

                                                            case '3':
                                                            return (
                                                                <TextField
                                                                id="select-heritage-designation-FIN-special"
                                                                select
                                                                name="specialType"
                                                                label={t('heritageDesignationsFinlandProtectionOther')}
                                                                variant="outlined"
                                                                fullWidth
                                                                value={props.value.finland.specialType}
                                                                onChange={event => handleChangeInput(0, event)}
                                                                >
                                                                    {selectFinlandBuildingPlan.map((option) => (
                                                                        <MenuItem key={option.value} value={option.value}>
                                                                        {option.label}
                                                                        </MenuItem>
                                                                    ))}
                                                                </TextField>
                                                            );
                                                            case '4':
                                                            return (
                                                                <TextField
                                                                id="select-heritage-designation-FIN-special"
                                                                select
                                                                name="specialType"
                                                                label={t('heritageDesignationsFinlandProtectionSpecial')}
                                                                variant="outlined"
                                                                fullWidth
                                                                value={props.value.finland.specialType}
                                                                onChange={event => handleChangeInput(0, event)}
                                                                >
                                                                    {selectFinlandSpecialCase.map((option) => (
                                                                        <MenuItem key={option.value} value={option.value}>
                                                                        {option.label}
                                                                        </MenuItem>
                                                                    ))}
                                                                </TextField>
                                                            );
                                                            default:
                                                            return (
                                                                <div/>
                                                            );
                                                        }
                                                    })()}                                                
                                                    
                                                </div>
                                            ) : (
                                                <FormControlLabel
                                                label={t('heritageDesignationsFinlandProtectionToggle')}
                                                labelPlacement="start"
                                                control={
                                                    <Switch 
                                                    name="shouldProtect" 
                                                    label="Should be protected?"
                                                    checked={props.value.finland.shouldProtect} 
                                                    onChange={event => handleChangeInput(0, event)}  
                                                    />}                                                  
                                                />
                                            )}
                                        </div>
                                    )}
                                </Grid>      
                            );

                            default:
                            return (
                                <div>
                                    {props.value.values.map((inputElement)=>(
                                        <div key={inputElement.id}> 
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
                    
                    
                    
                                                    <Grid item xs={12} md={8} style={{ paddingTop: 25}}>
                                                        <TextField
                                                            id="select-heritage-designation"
                                                            select
                                                            name="heritageDesignation"
                                                            label={t('heritageDesignationsLabelDesignation')}
                                                            variant="outlined"
                                                            fullWidth
                                                            value={inputElement.heritageDesignation}
                                                            onChange={event => handleChangeInput(inputElement.id, event)}
                                                            >
                                                            {selectHeritageDesignationIreland.map((option) => (
                                                                <MenuItem key={option.value} value={option.value}>
                                                                {option.label}
                                                                </MenuItem>
                                                            ))}
                                                        </TextField>
                                                    </Grid>
                    
                                                    <Grid item xs={12} md={8} style={{ paddingTop: 25}}>
                                                        <TextField
                                                        name="heritageDesignationName"
                                                        label={t('heritageDesignationsLabelName')}
                                                        variant="outlined"
                                                        fullWidth="true"
                                                        value={inputElement.heritageDesignationName}
                                                        onChange={event => handleChangeInput(inputElement.id, event)}
                                                        InputLabelProps={{
                                                        shrink: true,
                                                        }}
                                                        />
                                                    </Grid>
                    
                                                    <Grid item xs={12} md={8} style={{ paddingTop: 25}}>
                                                        <TextField
                                                            name="heritageDesignationRemarks"
                                                            label={t('heritageDesignationsLabelRemarks')}
                                                            variant="outlined"
                                                            fullWidth="true"
                                                            value={inputElement.heritageDesignationRemarks}
                                                            onChange={event => handleChangeInput(inputElement.id, event)}
                                                            InputLabelProps={{
                                                            shrink: true,
                                                            }}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    ))}
                                </div>
                            );
                        }
                        })()}

            </Paper>
        </div>
        </Grid>
    </>
    );
};
      
export default HeritageDesignations;