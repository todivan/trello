import React from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { TTaskDetailsProps } from '../../types/CommonTypes';

const TaskDetails: React.FC<TTaskDetailsProps> = ({ isOpen, handleClose, task }) => {
  
    return (
        <Dialog open={isOpen} onClose={handleClose} >
          <DialogTitle sx={{  color:'white', backgroundColor:'black' }}><b>Name: </b>{task.name}</DialogTitle>
          <DialogContent sx={{  color:'white', backgroundColor:'black' }}>
            <p><b>Description: </b>{task.description}</p>
          </DialogContent>
          <DialogActions sx={{  color:'white', backgroundColor:'black' }}>
            <Button onClick={handleClose} color="primary">Close</Button>
          </DialogActions>
        </Dialog>
    );
  }
  
  export default TaskDetails;