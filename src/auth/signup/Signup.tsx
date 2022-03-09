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

const SignupFormSchema = Yup.object().shape({
  firstName: Yup.string().required('required'),
  lastName: Yup.string().required('required'),
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

export default function SignUp() {
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
            Sign up
          </Typography>
          <Box component="div" sx={{ mt: 3 }}>


          <Formik
                initialValues={{
                  firstName: '',
                  lastName: '',
                  email: '',
                  password: ''
                }}

                validationSchema={SignupFormSchema}

                onSubmit={values => {
                  // same shape as initial values
                  console.log(values);
                }}
                >
                  
                {({ submitForm,isValid }) => (
                  <Form>                    

                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                          <Field 
                              type="text" 
                              name="firstName" 
                              label="First Name" 
                              component={ Input } 
                          />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field 
                            type="text" 
                            name="lastName" 
                            label="Last Name" 
                            component={ Input } 
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Field 
                            type="email" 
                            name="email" 
                            label="Email Address" 
                            component={ Input } 
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Field 
                            type="password" 
                            name="password" 
                            label="Password" 
                            component={ Input } 
                        />
                      </Grid>
                    </Grid>

                    
                    <Button
                      onClick={submitForm}
                      fullWidth
                      disabled={!isValid}
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                     >
                        Sign Up
                     </Button>

                  </Form>
                )}
               
                </Formik>


            <Grid container justifyContent="flex-end">
              <Grid item>
                <CustomLink to="/auth/login">
                  Already have an account? Sign in
                </CustomLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}