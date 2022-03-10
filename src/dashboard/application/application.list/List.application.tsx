import Card from "../../../components/card/Card";
import { Link } from "react-router-dom";
import ActionsAPI from "../../../api/Application.api";
import { useEffect, useState } from "react";
import { AppResponseObject } from "../../../types/entities";
import BasicTable from "../../../components/table/Table";

const ApplicationList = () => {

    const [applications, setApplications] = useState([] as AppResponseObject[]);

    const getApplications = async () => {
        const {success, payload} = await ActionsAPI.getApplications();
        console.log(payload);
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
           <Link to="/dashboard/application/edit">Add Application</Link>
           <BasicTable tableHeads={applicationDataTitles} dataKeys={applicationDataKeys} data={applications} />
        </Card>
    );
}

export default ApplicationList;
