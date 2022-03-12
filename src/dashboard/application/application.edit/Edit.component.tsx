import Card from "../../../components/card/Card";
import { Field, Form, Formik } from "formik";
import Input from "../../../components/form/Input";
import Select from '../../../components/form/Select';
import * as Yup from "yup";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { AppsRequestObject } from "../../../types/entities";
import { useDispatch, useSelector } from "react-redux";
import { AddApplicationActions } from "../actions";
import ApplicationActionsAPI from "../../../api/Application.api";
import Spinner from "../../../components/spinner/Spinner";
import { useHistory } from "react-router-dom";

const ApplicationFormSchema = Yup.object().shape({
  name: Yup.string().required('required'),
  description: Yup.string(),
  type: Yup.string().required('required'),
  framework: Yup.string().required('required'),
  domain_name: Yup.string(),
});

const ApplicationEdit = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const { addApplicationStatus } = useSelector((store: any) => ({
    addApplicationStatus: store.application.addApplicationStatus
  }));

  const handleSubmit = async (application: AppsRequestObject) => {
    dispatch({type: AddApplicationActions.ADDAPPLICATION_STARTED})
    const { success, payload } = await ApplicationActionsAPI.createApplication(application);

    if (success) {
      dispatch({ type: AddApplicationActions.ADDAPPLICATION_SUCCESSFUL, payload: payload });

      history.goBack();
    } else {
      dispatch({ type: AddApplicationActions.ADDAPPLICATION_FAILED, payload: payload });
    }
  };

  const isLoading = addApplicationStatus === AddApplicationActions.ADDAPPLICATION_STARTED; 

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
                  handleSubmit(values as any);
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
                        Create Application { isLoading && <Spinner color="inherit" size={25} /> }
                     </Button>

                  </Form>
                )}
               
                </Formik>

        </Card>
    );
}

export default ApplicationEdit;