import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';


const FormInput = ( { name, label, required } ) => {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
    {/* this controller from react-hook-form allows us to use any other input or text field as a controller  */}
      <Controller 
        render={({ field}) => <TextField {...field} />}
        control={control}
        fullWidth
        name={name}
        label={label}
        required={required}
        error={isError}
      />
    </Grid>
  );
}

export default FormInput;
