import React from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { TListDetailsProps } from '../../types/CommonTypes';

const ListDetails: React.FC<TListDetailsProps> = ({ isOpen, handleClose, list }) => {
  
    return (
        <Dialog open={isOpen} onClose={handleClose} >
          <DialogTitle sx={{  color:'white', backgroundColor:'black' }}><b>Name: </b>{list.name}</DialogTitle>
          <DialogContent sx={{  color:'white', backgroundColor:'black' }}>
            <p><b>Description: </b>{list.description}</p>
          </DialogContent>
          <DialogActions sx={{  color:'white', backgroundColor:'black' }}>
            <Button onClick={handleClose} color="primary">Close</Button>
          </DialogActions>
        </Dialog>
    );
  }
  
  export default ListDetails;