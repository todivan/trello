import React, { useMemo, useState } from 'react';
import { Grid, OutlinedInput, Box, Dialog, DialogTitle, Button, DialogActions } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { type TTask, type TList } from '../../types/CommonTypes';
import ItemDetails from '../ItemDetails';
import { useLists } from '../../context/ListsContext';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export interface TListHeaderProps {
    list: TList
    isFocusOnNewList: boolean
    collectionOfTasks: TTask[]
}

const ListHeader: React.FC<TListHeaderProps> = ({ list, isFocusOnNewList, collectionOfTasks }: TListHeaderProps) => {
    const [isEdit, setIsEdit] = useState(isFocusOnNewList);
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);
    const { setCollectionOfLists } = useLists();
    const [openDialog, setOpenDialog] = useState(false);

    const taskOfCurrentList = useMemo(() => {
        return [...collectionOfTasks].filter(x => x.listId === list.id);
    }, [collectionOfTasks, list.id]);

    const switchToEdit = (): void => {
        setIsEdit(true);
    };

    const keyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter') {
            setIsEdit(false);
            const inputElement = e.target as HTMLInputElement;
            list.name = inputElement.value;
            updateList(list);
        } else if (e.key === 'Escape') {
            setIsEdit(false);
        }
    };

    const updateList = (updatedItem: TList): void => {
        setCollectionOfLists(prevList => prevList.map(item => (item.id === updatedItem.id ? updatedItem : item)));
    };

    const openDeleteDialog = (): void => {
        if (taskOfCurrentList.length > 0) {
            alert('This list can not be deleted, because contins tasks!!!');
        } else {
            setOpenDialog(true);
        }
    };

    const handleDeleteList = (): void => {
        setCollectionOfLists(prevList => prevList.filter(l => l.id !== list.id));
    };

    const handleDialogClose = (): void => {
        setOpenDialog(false);
    };

    return (
        <div data-testid='list-header'>
            {isEdit
                ? <div data-testid='ListHeaderEdit'>
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        multiline
                        minRows={1}
                        maxRows={8}
                        defaultValue={list.name}
                        aria-describedby="outlined-weight-helper-text"
                        autoFocus={true}
                        sx={{ cursor: 'pointer', color: 'white', padding: '10px 0px 10px 0px' }}
                        onKeyDown={keyPress}
                        onFocus={event => {
                            event.target.select();
                        }}
                        onBlur={() => {
                            setIsEdit(false);
                        }}
                    />
                </div>

                : <div data-testid='ListHeaderView'>
                    <Grid
                        item={true}
                        container
                        spacing={2}
                        sx={{ border: '0px', width: 250, padding: 2, paddingRight: 0, paddingBottom: 0, cursor: 'pointer' }}
                    >
                        <Grid item={true} xs={10}>
                            <div data-testid='ListName' onClick={switchToEdit}>
                                <Box display="flex" color="white">
                                    <b>
                                        {list.name}
                                    </b>
                                </Box>
                            </div>
                        </Grid>
                        <Grid item={true} xs={1}>
                            <div data-testid='DetailsIcon'>
                                <MoreHorizIcon
                                    sx={{ cursor: 'pointer', color: 'white' }}
                                    fontSize="small"
                                    cursor='pointer'
                                    onClick={() => { setIsDetailsOpen(true); }}
                                />
                            </div>
                        </Grid>
                        <Grid
                            data-testid='DeleteForeverIcon'
                            item={true}
                            xs={1}
                        >
                            <DeleteForeverIcon
                                aria-label='DeleteForeverIcon'
                                role='button'
                                sx={{ cursor: 'pointer', color: 'white' }}
                                fontSize="small"
                                cursor='pointer'
                                onClick={openDeleteDialog}
                            />
                        </Grid>
                    </Grid>
                    <ItemDetails
                        isOpen={isDetailsOpen}
                        handleClose={() => { setIsDetailsOpen(false); }}
                        name={list.name}
                        description={list.description}
                    />
                </div>}
            <Dialog
                fullWidth
                maxWidth="sm"
                open={openDialog} // Use value directly here
                onClose={handleDialogClose}
            >
                <DialogTitle>Are you sure that you want to delete list?</DialogTitle>
                <DialogActions>
                    <Button variant="outlined" onClick={handleDeleteList}>
                  Yes
                    </Button>
                    <Button variant="outlined" onClick={handleDialogClose}>
                  Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ListHeader;
