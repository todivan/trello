import { Box } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';

const BoardBar = () => {
    return(
        <Box display="flex" sx={{ bgcolor:'#323a48'}} >
            <Toolbar>
                <h1>Board name</h1>
            </Toolbar>
        </Box>
    );
}

export default BoardBar;