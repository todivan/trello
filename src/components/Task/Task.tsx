import { useState } from "react";
import { ListItemIcon, ListItemText, Menu, MenuItem, OutlinedInput, TextField } from "@mui/material";
import { TTask } from "../../types/CommonTypes";
import ModeIcon from '@mui/icons-material/Mode';
import React from "react";
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TaskDetails from "./TaskDetails";

type TTaskProps = {
    key: React.Key;
    task: TTask;
    updateTask: (updatedItem: TTask) => void;
    isFocusOnNew: boolean;
  };

const Task: React.FC<TTaskProps> = ({ task, updateTask, isFocusOnNew }) => {

    const [isEdit, setIsEdit] = useState(isFocusOnNew);

    const switchToEdit = () => {
        setIsEdit(true);
    };

    const keyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
           setIsEdit(false);
           const inputElement = e.target as HTMLInputElement; 
           task.name = inputElement.value;
           updateTask(task);
        } else if (e.key === 'Escape') {
            setIsEdit(false);
        }
     }

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
      setAnchorEl(null);
    };

    const openTaskDetails = () => {
        handleMenuClose();
        setIsDetailsOpen(true);
    }

    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    const handleCloseDetails = () => {
        setIsDetailsOpen(false);
    };

    return(
        <>
            {isEdit ? 
            <TextField
                id="outlined-multiline-static"
                label="Edit name"
                multiline
                minRows={2}
                maxRows={8}
                defaultValue={task.name}
                onKeyDown={keyPress}
                autoFocus={isEdit}
                sx={{  color:'white', padding:'10px 0px 10px 0px' }}
                onFocus={event => {
                    event.target.select();
                }}
                onBlur={() => {
                    setIsEdit(false);
                }}
            />
            :
            <>
                <OutlinedInput
                    id="outlined-adornment-weight"
                    multiline
                    minRows={1}
                    maxRows={8}
                    defaultValue={task.name}
                    endAdornment={<ModeIcon fontSize="small" onClick={switchToEdit} cursor='pointer'></ModeIcon>}
                    aria-describedby="outlined-weight-helper-text"
                    sx={{ border: '0px solid white', borderRadius:3, width:250, cursor: 'pointer', color:'white', '&:hover': {cursor: 'pointer',}}}
                    onClick={handleClick}
                    inputProps={{
                    'aria-label': 'weight', readOnly: true,
                    }}
                />
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleMenuClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleMenuClose}>
                        <ListItemIcon>
                            <NorthIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Move Up</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose}>
                        <ListItemIcon>
                            <SouthIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Move Down</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={openTaskDetails}>                        
                        <ListItemIcon>
                            <MoreHorizIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Details</ListItemText>
                    </MenuItem>
                </Menu>
                <TaskDetails isOpen={isDetailsOpen} handleClose={handleCloseDetails} task={task} />
            </>
            }
        </>
    );
}

export default Task;