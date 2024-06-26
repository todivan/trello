import { East, West } from '@mui/icons-material';
import { Box } from '@mui/material';
import type { TList } from '../../types/CommonTypes';
import { useLists } from '../../context/ListsContext';
import { changePosition } from '../../Utils/ChangePosition';
import React, { useCallback } from 'react';

export interface TListMoveNavigationProps {
    listId: number
}

const ListMoveNavigation: React.FC<TListMoveNavigationProps> = ({ listId }: TListMoveNavigationProps) => {
    const { collectionOfLists, setCollectionOfLists } = useLists();

    const updateCollection = useCallback((updatedList: TList[]) => {
        setCollectionOfLists(updatedList);
    }, [setCollectionOfLists]);

    const handleClickMove = (offset: number): void => {
        changePosition(listId, offset, collectionOfLists, updateCollection);
    };

    return (
        <div data-testid='ListMoveNavigation'>
            <Box
                display="flex"
                justifyContent='space-between'
                padding={0}
                margin-top={0}
                color='white'
            >
                <Box
                    data-testid='leftIcon'
                    textAlign="left"
                    onClick={() => { handleClickMove(-1); }}
                >
                    <West fontSize="small" cursor='pointer' />
                </Box>
                <Box
                    data-testid='rightIcon'
                    textAlign="right"
                    onClick={() => { handleClickMove(1); }}
                >
                    <East fontSize="small" cursor='pointer' />
                </Box>
            </Box>
        </div>
    );
};

export default ListMoveNavigation;
