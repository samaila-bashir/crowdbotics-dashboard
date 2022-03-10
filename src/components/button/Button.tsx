import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface Props {
    variant: "contained" | "text" | "outlined";
    title: string;
    onClick: () => void;
}

export default function BasicButtons(props: Props) {
    const { onClick, variant, title } = props;

  return (
    <Stack spacing={2} direction="row">
      <Button onClick={onClick} variant={variant}>{title}</Button>
    </Stack>
  );
}

