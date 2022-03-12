import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

interface Props {
  color: string | any;
  size: number;
}

export default function Spinner(props: Props) {
  const { color, size } = props;

  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress 
          style={{ marginLeft: 10 }} 
          color={color} 
          size={size} 
      />
    </Box>
  );
}