import Card from "../../../components/card/Card";
import { Link } from "react-router-dom";

const ApplicationList = () => {
    return (
        <Card>
           <h1>All Applications</h1>
           <Link to="/dashboard/application/edit">Add Application</Link>
        </Card>
    );
}

export default ApplicationList;