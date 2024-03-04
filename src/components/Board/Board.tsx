
import React from 'react';

import BoardContent from "../BoardContent/BoardContent";
import { Stack } from '@mui/material';
import BoardBar from '../MenuBar/BoardBar';

const Board = () => {


    return( 
        <Stack spacing={2} sx={{ padding:'0px 0px 0px 15px'}}>
            <BoardBar />
            <BoardContent />
        </Stack>
    );
}

export default Board;