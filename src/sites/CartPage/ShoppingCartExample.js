import React, { useState, useEffect } from 'react';
import { Grid, makeStyles, Paper, TextField, Button} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/RemoveCircleOutlineSharp';

const useStyles = makeStyles((theme) => ({
    baseStyle: {
        width: '100%',
        display: "flex",
        flexDirection: "column",
        marginTop: 25,
        marginBottom: 50,
    },
  }));



const ShoppingCartExample = (props) => {

    return (
<>
    <Grid container direction="column" justify="center" alignItems="center" style={{ paddingTop: 25, margin: 'auto'}}>  
        {props.value.map((inputElement)=>(
            <div key={inputElement.id}> 
                {inputElement.id === "placeholder" ? (
                    <div/>
                ) : (
                    <div>
                        <Paper elevation={1} style={{marginBottom: 25}}>
                            <Grid> 
                                <TextField
                                    name="description"
                                    placeholder=""
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                    value={inputElement.description + "\n" + inputElement.values}
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

                            <Grid container item xs={12}>
                                <IconButton 
                                disabled={false}  
                                onClick={() => props.onClick(inputElement.id)}>
                                    <RemoveIcon/>
                                </IconButton>
                            </Grid>
                        </Paper>
                    </div>
                )}
            </div>
        ))}
        <Button 
        style={{marginBottom: 50}}
        variant="contained"
        disabled = {false}
        >
            SAVE
        </Button>
    </Grid>
</>
);
};
      
export default ShoppingCartExample;
