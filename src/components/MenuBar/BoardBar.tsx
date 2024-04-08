import { Box } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';

const BoardBar = () => {
    return (
        <div data-testid='BoardBar'>
            <Box
                display="flex"
                sx={{ bgcolor: '#323a48' }}
                color="white"
            >
                <Toolbar>
                    <h1>Board name</h1>
                </Toolbar>
            </Box>
        </div>
    );
};

export default BoardBar;
