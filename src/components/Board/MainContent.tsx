import { Stack } from '@mui/material';
import LeftMenu from '../LeftMenu/LeftMenu';
import Board from './Board';

const MainContent = () => {
    return (
        <Stack
            width="100%"
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={0}
        >
            <LeftMenu />
            <Board />
        </Stack>
    );
};

export default MainContent;
