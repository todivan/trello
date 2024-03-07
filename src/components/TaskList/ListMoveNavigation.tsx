import { ArrowRightAlt, East, West } from "@mui/icons-material";
import { Grid } from "@mui/material";

const ListMoveNavigation = () => {
    return(
        <Grid container spacing={2} p={2} m={1} sx={{ border: '0px', width:250, cursor: 'pointer'}} >
            <Grid xs={2}>
                <West fontSize="small" cursor='pointer'></West>
            </Grid>
            <Grid xs={8}>
            </Grid>
            <Grid xs={2}>
                <East fontSize="small" cursor='pointer'></East>
            </Grid>
        </Grid>
    );
}

export default ListMoveNavigation;