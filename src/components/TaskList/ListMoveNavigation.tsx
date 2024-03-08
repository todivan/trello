import { East, Padding, West } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import { TListMoveNavigationProps } from "../../types/CommonTypes";

const ListMoveNavigation: React.FC<TListMoveNavigationProps> = ({ listId, changePosition } ) => {
    const handleClickRight = (event: React.MouseEvent<HTMLDivElement>) => {
        changePosition(listId, 1);
      };

      const handleClickLeft = (event: React.MouseEvent<HTMLDivElement>) => {
        changePosition(listId, -1);
      };

    return(
        <Grid container spacing={2} p={2} m={1} sx={{ border: '0px', width:250, cursor: 'pointer'}} >
            <Grid xs={2}>
                <Box onClick={handleClickLeft}>
                    <West fontSize="small" cursor='pointer'></West>
                </Box>
            </Grid>
            <Grid xs={8}>
            </Grid>
            <Grid xs={2}>
                <Box onClick={handleClickRight}>
                    <East fontSize="small" cursor='pointer'></East>
                </Box>
            </Grid>
        </Grid>
    );
}

export default ListMoveNavigation;