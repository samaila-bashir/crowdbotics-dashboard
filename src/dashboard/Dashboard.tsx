import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Drawer, drawerWidth } from './component.style';
import MenuItemBtn from '../components/menu/Menu.item.button';
import RoutesConfig from './Routes.config';
import { Route, Switch, Redirect} from "react-router-dom";
import CustomToolbar from "../components/toolbar/toolbar";
import { useDispatch } from 'react-redux';
import { LogoutAction } from '../auth/actions';
import ApplicationRoute from './application/application.route';
import Pricing from './pricing/Pricing';
import Subscription from './subscription/Subscription';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://crowdbotics.com/">
        Crowdbotics
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const dispatch = useDispatch();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    dispatch({
      type: LogoutAction
    });
  }

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <CustomToolbar toggleDrawer={toggleDrawer} open={open} />
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <h2 style={{ color: '#555' }}>Crowdbotics</h2>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {
              RoutesConfig.map((route, index) =>

                <MenuItemBtn 
                  onClick={ 
                      route.title === "Logout" ? handleLogout : () => "" 
                    } 
                    key={index.toString()} 
                    primary={route.title} 
                    iconComponent={route.icon} 
                    route={route.route} 
                />
              )
            }
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Switch>
              <Route path="/dashboard/application">
                <ApplicationRoute />
              </Route>
              <Route path="/dashboard/pricing">
                <Pricing />
              </Route>
              <Route path="/dashboard/subscription">
                <Subscription />
              </Route>

              <Redirect from="*" to="/dashboard/application" />
            </Switch>
          </Container>
          <Copyright sx={{ pt: 4 }} />

        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}