import Card from "../../../components/card/Card";
import { useHistory } from "react-router-dom";
import ActionsAPI from "../../../api/Application.api";
import { useEffect, useState } from "react";
import BasicTable from "../../../components/table/Table";
import Button from "../../../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { DeleteApplicationActions, GetApplicationActions } from "../actions";
import BasicModal from "../../../components/modal/modal";
import Spinner from "../../../components/spinner/Spinner";

const ApplicationList = () => {
    const [open, setOpen] = useState(false);
    const [application, setApplication] = useState({} as any);

    const dispatch = useDispatch();

    const { applications, applicationStatus, deleteApplicationStatus } = useSelector((store: any) => ({
        applications: store.application.applications,
        applicationStatus: store.application.applicationStatus,
        deleteApplicationStatus: store.application.deleteApplicationStatus
    }));

    const emptyApplication = applications.length === 0 && applicationStatus === GetApplicationActions.GETAPPLICATION_SUCCESSFUL;

    const applicationLoader = GetApplicationActions.GETAPPLICATION_STARTED === applicationStatus;

    const history = useHistory();

    const getApplications = async () => {
        dispatch({
            type: GetApplicationActions.GETAPPLICATION_STARTED
        });

        const {success, payload} = await ActionsAPI.getApplications();
        if (success) {
            dispatch({
                type: GetApplicationActions.GETAPPLICATION_SUCCESSFUL,
                payload
            });
        } else {
            dispatch({
                type: GetApplicationActions.GETAPPLICATION_FAILED,
                payload 
            });
        }
    }

    const applicationDataTitles = ["ID", "Name", "Framework", "Type", "Domain Name"];
    const applicationDataKeys = ["id", "name", "framework", "type", "domain_name"];

    useEffect(() => {
        getApplications();
    }, []);

    const handleViewApplication = (data: any) => {
        setApplication(data);
        setOpen(true);
    }

    const handleEditApplication = (data: any) => {
        // const response = ActionsAPI.updateApplication(data, data.id);
        console.log("Edit application:", data);
    }

    const handleDeleteApplication = async (data: any) => {
        dispatch({
            type: DeleteApplicationActions.DELETEAPPLICATION_STARTED
        });

        const { success, payload } = await ActionsAPI.deleteApplication(data.id);

        if (success) {
            dispatch({
                type: DeleteApplicationActions.DELETEAPPLICATION_SUCCESSFUL,
                payload: data.id 
            });

        } else {
            dispatch({
                type: DeleteApplicationActions.DELETEAPPLICATION_FAILED,
                payload 
            });
        }
    }

    const deleteApplicationLoader = DeleteApplicationActions.DELETEAPPLICATION_STARTED === deleteApplicationStatus;

    return (
        <Card>
            <BasicModal open={open} onClose={() => setOpen(false)}>
                <h2>Application Info:</h2>
                <p><strong>Name:</strong> { application.name }</p>
                <p><strong>Framework:</strong> { application.framework }</p>
                <p><strong>Type:</strong> { application.type }</p>
                <p><strong>Domain Name:</strong> { application.domain_name }</p>
            </BasicModal>

           <div style={{ display: "flex", alignContent: "center" }}>
                <span 
                    style={{ fontWeight: "bold", fontSize: 25 }}>
                        All Applications
                </span>
                
                {applicationLoader && <Spinner color="inherit" size={25} />}
           </div>

           <div style={{display: "flex", justifyContent: "flex-end", marginBottom: 20}}>
                <Button onClick={() => history.push("/dashboard/application/edit")} title="New Application" variant="contained" />
           </div>

           {
               !emptyApplication && 
               <BasicTable 
                    tableHeads={applicationDataTitles} 
                    dataKeys={applicationDataKeys} 
                    data={applications} 
                    onView={handleViewApplication}
                    onEdit={handleEditApplication}
                    onDelete={handleDeleteApplication}
                    deleteStatus={deleteApplicationLoader}
                />
           }

           { emptyApplication && 'No applications found.' }
        </Card>
    );
}

export default ApplicationList;
