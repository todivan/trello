import { useState } from "react";
import { ListItemIcon, ListItemText, Menu, MenuItem, OutlinedInput, TextField } from "@mui/material";
import { TTask, TTaskProps } from "../../types/CommonTypes";
import ModeIcon from '@mui/icons-material/Mode';
import React from "react";
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TaskDetails from "./TaskDetails";
import { changePosition } from "../../Utils/ChangePosition";

const Task: React.FC<TTaskProps> = ({ task, isFocusOnNew, collectionOfTasks, setCollectionOfTasks }) => {

    const [isEdit, setIsEdit] = useState(isFocusOnNew);

    const switchToEdit = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        setIsEdit(true);
        event.stopPropagation();
    };

    const updateTask = (updatedItem: TTask) => {
        setCollectionOfTasks(prevList => prevList.map(item => (item.id === updatedItem.id ? updatedItem : item)));
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

    const handleClickUp = () => {
        handleMenuClose();
        changePosition(task.id, -1, collectionOfTasks, setCollectionOfTasks);
      };

      const handleClickDown = () => {
        handleMenuClose();
        changePosition(task.id, 1, collectionOfTasks, setCollectionOfTasks);
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
                    <MenuItem onClick={handleClickUp}>
                        <ListItemIcon>
                            <NorthIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Move Up</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleClickDown}>
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