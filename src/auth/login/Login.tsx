import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CustomLink from '../../components/styled.components/link.styles';
import { Field, Form, Formik } from "formik";
import Input from "../../components/form/Input";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Email email address is required.').required('required'),
  password: Yup.string().required('required')
});

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://crowdbotics.com/">
        Crowdbotics
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="div" sx={{ mt: 1 }}>

          <Formik
                initialValues={{
                  email: '',
                  password: ''
                }}

                validationSchema={LoginSchema}

                onSubmit={values => {
                  // same shape as initial values
                  console.log(values);
                }}
                >
                  
                {({ submitForm,isValid }) => (
                  <Form>

                    <Field 
                       type="email" 
                       name="email" 
                       label="Email Address" 
                       component={ Input } 
                    />

                    <Field 
                       type="password" 
                       name="password" 
                       label="Password" 
                       component={ Input } 
                    />

                    
                    <Button
                      onClick={submitForm}
                      fullWidth
                      disabled={!isValid}
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                     >
                        Sign In
                     </Button>

                  </Form>
                )}
               
                </Formik>
          
            
            <Grid container>
              <Grid item xs>
                <CustomLink to="/auth/reset-password">
                  Forgot password?
                </CustomLink>
              </Grid>
              <Grid item>
                <CustomLink to="/auth/signup">
                  {"Don't have an account? Sign Up"}
                </CustomLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}