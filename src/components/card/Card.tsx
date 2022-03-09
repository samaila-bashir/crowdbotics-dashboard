import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const Card = (props: any) => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
            <Paper
                sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                }}
            >
                { props.children }
            </Paper>
            </Grid>
        </Grid>
    );
}

export default Card; 