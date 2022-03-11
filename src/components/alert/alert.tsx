import * as React from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

interface Props {
  message: string;
  showButton?: boolean;
  severity: "error" | "warning" | "info" | "success" 
}

export default function Alerts(props: Props) {

  const { message, showButton, severity } = props;

  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity={ severity } 
        action={ showButton &&
          <Button color="inherit" size="small">
            Retry
          </Button>
        }
      >
        { message }
      </Alert>
    </Stack>
  );
}
