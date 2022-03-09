import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';

const RoutesConfig = [
    {
        title: "Applications",
        icon: <DashboardIcon />,
        route: "/dashboard/application-list"
    },
    {
        title: "Pricing",
        icon: <ShoppingCartIcon />,
        route: "/dashboard/pricing"
    },
    {
        title: "Subscription",
        icon: <PeopleIcon />,
        route: "/dashboard/subscription"
    },
    {
        title: "Logout",
        icon: <BarChartIcon />,
        route: "/logout"
    },
];

export default RoutesConfig;