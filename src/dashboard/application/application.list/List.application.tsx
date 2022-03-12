import Card from "../../../components/card/Card";
import { useHistory } from "react-router-dom";
import ActionsAPI from "../../../api/Application.api";
import { useEffect, useState } from "react";
import BasicTable from "../../../components/table/Table";
import Button from "../../../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { GetApplicationActions } from "../actions";
import BasicModal from "../../../components/modal/modal";

const ApplicationList = () => {
    const [open, setOpen] = useState(false);
    const [application, setApplication] = useState({} as any);

    const dispatch = useDispatch();

    const { applications, applicationStatus } = useSelector((store: any) => ({
        applications: store.application.applications,
        applicationStatus: store.application.applicationStatus
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

    return (
        <Card>
            <BasicModal open={open} onClose={() => setOpen(false)}>
                <h2>Application Info:</h2>
                <p><strong>Name:</strong> { application.name }</p>
                <p><strong>Framework:</strong> { application.framework }</p>
                <p><strong>Type:</strong> { application.type }</p>
                <p><strong>Domain Name:</strong> { application.domain_name }</p>
            </BasicModal>

           <h1>All Applications {applicationLoader && 'Loading...'}</h1>

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
                />
           }

           { emptyApplication && 'No applications found.' }
        </Card>
    );
}

export default ApplicationList;
