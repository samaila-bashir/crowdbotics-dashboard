import TextField from '@mui/material/TextField';
import {ErrorMessage} from './styled.components'

// @ts-ignore
const Input = ({form,field,...props}) => {

    return (
<>
      <TextField
        margin="normal"
        fullWidth
        autoComplete="off"
        {...field}
        {...props}

      />
        {form.errors[field.name] && form.touched[field.name] ? <ErrorMessage>{form.errors[field.name]}</ErrorMessage>:null}
    </>
    );
}

export default Input;