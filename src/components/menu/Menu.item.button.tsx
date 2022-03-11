import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import { Link } from "react-router-dom";
import CustomLink from "../styled.components/link.styles";

interface Props {
    primary: string;
    iconComponent: any;
    route: string;
    onClick?: () => void;
}

const MenuItemBtn = (props: Props) => {
    const { primary, iconComponent, route, onClick } = props;

    return (
        <CustomLink to={route} onClick={onClick}>
            <ListItemButton>
                <ListItemIcon>
                    { iconComponent }
                </ListItemIcon>
                    <ListItemText primary={primary} />
            </ListItemButton>
        </CustomLink>
    );
}

export default MenuItemBtn;