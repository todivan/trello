import React from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'

export interface TItemDetailsProps {
  name: string
  description: string
  handleClose: () => void
  isOpen: boolean
}

const ItemDetails: React.FC<TItemDetailsProps> = ({ isOpen, handleClose, name, description }) => {
  return (
    <div data-testid='ItemDetails'>
        <Dialog open={isOpen} onClose={handleClose} >
          <DialogTitle sx={{ color: 'white', backgroundColor: 'black' }}><b>Name: </b>{name}</DialogTitle>
          <DialogContent sx={{ color: 'white', backgroundColor: 'black' }}>
            <p><b>Description: </b>{description}</p>
          </DialogContent>
          <DialogActions sx={{ color: 'white', backgroundColor: 'black' }}>
            <Button onClick={handleClose} color="primary">Close</Button>
          </DialogActions>
        </Dialog>
    </div>
  )
}

export default ItemDetails
