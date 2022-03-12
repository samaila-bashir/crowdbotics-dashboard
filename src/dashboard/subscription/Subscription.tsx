import Alerts from "../../components/alert/alert";
import Card from "../../components/card/Card";

const Subscription = () => {
    return (
        <Card>
            <div>
                <span 
                    style={{ fontWeight: "bold", fontSize: 25 }}>
                        All Subscriptions
                </span>
            </div>

           <Alerts message="No subscriptions added." severity="info" />
        </Card>
    );
}

export default Subscription;