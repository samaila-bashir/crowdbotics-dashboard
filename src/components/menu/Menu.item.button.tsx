import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

interface Props {
    primary: string;
    iconComponent: any;
}

const MenuItemBtn = (props: Props) => {
    const { primary, iconComponent } = props;

    return (
        <ListItemButton>
            <ListItemIcon>
                { iconComponent }
            </ListItemIcon>
            <ListItemText primary={primary} />
        </ListItemButton>
    );
}

export default MenuItemBtn;