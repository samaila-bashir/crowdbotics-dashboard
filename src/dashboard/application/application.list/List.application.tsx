import Card from "../../../components/card/Card";
import { useHistory } from "react-router-dom";
import ActionsAPI from "../../../api/Application.api";
import { useEffect, useState } from "react";
import { AppResponseObject } from "../../../types/entities";
import BasicTable from "../../../components/table/Table";
import Button from "../../../components/button/Button";

const ApplicationList = () => {

    const [applications, setApplications] = useState([] as AppResponseObject[]);
    const history = useHistory();

    const getApplications = async () => {
        const {success, payload} = await ActionsAPI.getApplications();
        if (success) {
            setApplications(payload as AppResponseObject[]);
        } else {
            console.log(payload);
        }
    }

    const applicationDataTitles = ["ID", "Name", "Framework", "Type", "Domain Name"];
    const applicationDataKeys = ["id", "name", "framework", "type", "domain_name"];

    useEffect(() => {
        getApplications();
    }, []);

    return (
        <Card>
           <h1>All Applications</h1>

           <div style={{display: "flex", justifyContent: "flex-end", marginBottom: 20}}>
                <Button onClick={() => history.push("/dashboard/application/edit")} title="New Application" variant="contained" />
           </div>

           <BasicTable tableHeads={applicationDataTitles} dataKeys={applicationDataKeys} data={applications} />
        </Card>
    );
}

export default ApplicationList;
