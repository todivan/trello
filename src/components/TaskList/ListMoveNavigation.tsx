import { East, West } from "@mui/icons-material";
import { Box } from "@mui/material";
import { TListMoveNavigationProps } from "../../types/CommonTypes";

const ListMoveNavigation: React.FC<TListMoveNavigationProps> = ({ listId, changePosition } ) => {
    const handleClickRight = (event: React.MouseEvent<HTMLDivElement>) => {
        changePosition(listId, 1);
      };

      const handleClickLeft = (event: React.MouseEvent<HTMLDivElement>) => {
        changePosition(listId, -1);
      };

    return(
        <Box display="flex" justifyContent="space-between" padding={0} margin-top={0} color={'white'}>
            <Box textAlign="left" onClick={handleClickLeft}>
                <West fontSize="small" cursor='pointer'></West>
            </Box>
            <Box textAlign="right" onClick={handleClickRight}>
                <East fontSize="small" cursor='pointer'></East>
            </Box>
        </Box>
    );
}

export default ListMoveNavigation;