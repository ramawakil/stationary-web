import React from 'react';
import {Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import {makeStyles} from "@mui/styles";
import PropTypes from "prop-types";
import {useFormikContext} from "formik";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        overflow: 'hidden',
    }
}))

function AppRadioFormField({name, label, width = '100%', choices, ...rest}) {
    const {setFieldTouched, values, setFieldValue, setValues, errors, touched} = useFormikContext();
    const classes = useStyles();

    return (
        <Box sx={{my: 3, ml: 4, width: '100%'}}>
            <Box className={classes.root} sx={{width: width}}>
                <FormControl>
                    <FormLabel id={`${name}-${label}`}>{label}</FormLabel>
                    <RadioGroup
                        aria-labelledby={label}
                        name={name}
                        onChange={(event) => {
                            setFieldValue(name, event.target.value);
                        }}
                        onBlur={() => setFieldTouched(name, true)}
                        value={values[name]}
                        defaultValue={choices[0].value}
                        fullWidth
                        error={errors[name] && touched[name]}
                    >
                        {choices.map(choice => (
                            <Box key={choice.value}>
                                <FormControlLabel
                                    value={choice.value}
                                    control={<Radio/>}
                                    label={choice.label}

                                />
                            </Box>
                        ))}

                    </RadioGroup>
                </FormControl>

            </Box>
        </Box>
    );
}

AppRadioFormField.prototype = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    width: PropTypes.string,
    choices: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    }))
}

export default AppRadioFormField;