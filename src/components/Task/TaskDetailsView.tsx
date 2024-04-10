import React from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { useLists } from '../../context/ListsContext';
import { TTaskDetailsProps } from './TaskDetails';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

const TaskDetailsView: React.FC<TTaskDetailsProps> = ({ isOpen, handleClose, name, description, listId, setMode }) => {
    const { collectionOfLists } = useLists();

    return (
        <div data-testid='TaskDetails'>
            <Dialog open={isOpen} onClose={handleClose} >
                <DialogTitle sx={{ color: 'white', backgroundColor: 'black' }}>
                    <b>Name: </b>
                    {name}
                </DialogTitle>
                <DialogContent sx={{ color: 'white', backgroundColor: 'black' }}>
                    <p>
                        <b>Description: </b>
                        {description}
                    </p>
                    <p>
                        <b>Status: </b>
                        {collectionOfLists.find(l => l.id === listId)?.name}
                    </p>
                </DialogContent>
                <DialogActions sx={{ color: 'white', backgroundColor: 'black' }}>
                    <IconButton color="primary" aria-label="edit" 
                        onClick={() => { setMode ? setMode(true) : alert('setMode not defined') }}
                    >
                        <EditIcon />
                    </IconButton>
                    <Button color="primary" onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default TaskDetailsView;
