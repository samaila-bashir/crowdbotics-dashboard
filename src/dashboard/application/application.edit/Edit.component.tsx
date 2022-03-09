import Card from "../../../components/card/Card";
import { Field, Form, Formik } from "formik";
import Input from "../../../components/form/Input";
import Select from '../../../components/form/Select';

import * as Yup from "yup";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const ApplicationFormSchema = Yup.object().shape({
  name: Yup.string().required('required'),
  description: Yup.string(),
  type: Yup.string().required('required'),
  framework: Yup.string().required('required'),
  domain_name: Yup.string(),
});

const ApplicationEdit = () => {
    return (
        <Card>

            <Formik
                initialValues={{
                  name: '',
                  description: '',
                  type: '',
                  framework: '',
                  domain_name: ''
                }}

                validationSchema={ApplicationFormSchema}

                onSubmit={values => {
                  // same shape as initial values
                  console.log(values);
                }}
                >
                  
                {({ submitForm,isValid }) => (
                  <Form>                    

                    <Grid  container spacing={3}>

                      <Grid item xs={12} sm={6}>
                          <Field 
                              type="text" 
                              name="name" 
                              label="Name" 
                              component={ Input } 
                              variant="standard"
                              fullWidth
                          />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field 
                            type="text" 
                            name="description" 
                            label="Description" 
                            component={ Input } 
                            variant="standard"
                            fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} style={{ marginTop: 15 }}>
                        <Field 
                            title="Type" 
                            name="type" 
                            label="Type" 
                            component={ Select } 
                            variant="standard"
                            fullWidth
                            options={[
                                {
                                title:'Web',
                                value: "Web"
                            },{
                                title:'Mobile',
                                value: "Mobile"
                            }]}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} style={{ marginTop: 15 }}>
                        <Field 
                            title="Framework"
                            name="framework"
                            component={ Select } 
                            variant="standard"
                            fullWidth
                            options={[
                                {
                                title:'Django',
                                value: "Django"
                            },{
                                title:'React Native',
                                value: "React Native"
                            }]}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field 
                            type="text" 
                            name="domain_name" 
                            label="Domain Name" 
                            component={ Input } 
                            variant="standard"
                            fullWidth
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
                        Create Application
                     </Button>

                  </Form>
                )}
               
                </Formik>



                
                {/* <Grid item xs={12} md={6}>
                <TextField
                    required
                    id="cardNumber"
                    label="Card number"
                    fullWidth
                    autoComplete="cc-number"
                    variant="standard"
                />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                    required
                    id="expDate"
                    label="Expiry date"
                    fullWidth
                    autoComplete="cc-exp"
                    variant="standard"
                />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                    required
                    id="cvv"
                    label="CVV"
                    helperText="Last three digits on signature strip"
                    fullWidth
                    autoComplete="cc-csc"
                    variant="standard"
                />
                </Grid> */}


        </Card>
    );
}

export default ApplicationEdit;