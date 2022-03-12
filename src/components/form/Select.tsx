import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import {ErrorMessage} from './styled.components'

// @ts-ignore
export default function Select({field,form,...props}) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          { props.title }
        </InputLabel>
        <NativeSelect
          {...field}
        >
            <option value="Null">Please Select</option>
            {
                props.options.map((item:any, index: number)=>
                  <option key={index.toString()} value={item.value}>
                    {item.title}
                  </option>
                  )
            }
          
        </NativeSelect>
      </FormControl>
      {form.errors[field.name] && form.touched[field.name] ? <ErrorMessage>{form.errors[field.name]}</ErrorMessage>:null}
    </Box>
  );
}
