import React, { useCallback, useState } from 'react';
import { ListItemIcon, ListItemText, Menu, MenuItem, OutlinedInput, TextField } from '@mui/material';
import { type TTask } from '../../types/CommonTypes';
import ModeIcon from '@mui/icons-material/Mode';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { changePosition } from '../../Utils/ChangePosition';
import TaskDetails from './TaskDetails';
import { useTasks } from '../../context/TaskContext';

export interface TTaskProps {
    key: React.Key
    task: TTask
    isFocusOnNew: boolean
    collectionOfTasks: TTask[]
    setCollectionOfTasks: React.Dispatch<React.SetStateAction<TTask[]>>
}

const Task: React.FC<TTaskProps> = ({ task, isFocusOnNew }) => {
    const { collectionOfTasks, setCollectionOfTasks } = useTasks();
    const [isEdit, setIsEdit] = useState(isFocusOnNew);
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    const switchToEdit = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        setIsEdit(true);
        event.stopPropagation();
    };

    const updateTask = (updatedItem: TTask): void => {
        setCollectionOfTasks(prevList => prevList.map(item => (item.id === updatedItem.id ? updatedItem : item)));
    };

    const keyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter') {
            setIsEdit(false);
            const inputElement = e.target as HTMLInputElement;
            task.name = inputElement.value;
            updateTask(task);
        } else if (e.key === 'Escape') {
            setIsEdit(false);
        }
    };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = (): void => {
        setAnchorEl(null);
    };

    const openTaskDetails = (): void => {
        handleMenuClose();
        setIsDetailsOpen(true);
    };

    const updateCollection = useCallback((updatedList: TTask[]) => {
        setCollectionOfTasks(updatedList);
    }, [setCollectionOfTasks]);

    const handleCloseDetails = (): void => {
        setIsDetailsOpen(false);
    };

    const handleClickUp = (): void => {
        handleMenuClose();
        changePosition(task.id, -1, collectionOfTasks, updateCollection);
    };

    const handleClickDown = (): void => {
        handleMenuClose();
        changePosition(task.id, 1, collectionOfTasks, updateCollection);
    };

    const handleClickDelete = (): void => {
        handleMenuClose();
        setCollectionOfTasks(prevTask => prevTask.filter(t => t.id !== task.id));
    };

    return (
        <div data-testid={task.id}>
            {isEdit
                ? (
                    <TextField
                        id="outlined-multiline-static"
                        label="Edit name"
                        multiline
                        minRows={2}
                        maxRows={8}
                        defaultValue={task.name}
                        autoFocus={isEdit}
                        sx={{ color: 'white', padding: '10px 0px 10px 0px' }}
                        onKeyDown={keyPress}
                        onFocus={event => {
                            event.target.select();
                        }}
                        onBlur={() => {
                            setIsEdit(false);
                        }}
                    />
                )
                : <>
                    <OutlinedInput
                        data-testid='OutlinedInput'
                        id="outlined-adornment-weight"
                        multiline
                        minRows={1}
                        maxRows={8}
                        defaultValue={task.name}
                        endAdornment={<div data-testid='ModeIcon'>
                            <ModeIcon
                                fontSize="small"
                                cursor='pointer'
                                onClick={switchToEdit}
                            />
                        </div>}
                        aria-describedby="outlined-weight-helper-text"
                        sx={{ border: '0px solid white', borderRadius: 3, width: 250, cursor: 'pointer', color: 'white', '&:hover': { cursor: 'pointer' } }}
                        inputProps={{
                            'aria-label': 'weight', readOnly: true
                        }}
                        onClick={handleClick}
                    />
                    <Menu
                        data-testid='Menu'
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button'
                        }}
                        onClose={handleMenuClose}
                    >
                        <MenuItem data-testid='ClickUp' onClick={handleClickUp}>
                            <ListItemIcon>
                                <NorthIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Move Up</ListItemText>
                        </MenuItem>
                        <MenuItem data-testid='ClickDown' onClick={handleClickDown}>
                            <ListItemIcon>
                                <SouthIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Move Down</ListItemText>
                        </MenuItem>
                        <MenuItem data-testid='OpenDetails' onClick={openTaskDetails}>
                            <ListItemIcon>
                                <MoreHorizIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Details</ListItemText>
                        </MenuItem>
                        <MenuItem data-testid='Delete' onClick={handleClickDelete}>
                            <ListItemIcon>
                                <DeleteForeverIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Delete</ListItemText>
                        </MenuItem>
                    </Menu>
                    <TaskDetails
                        isOpen={isDetailsOpen}
                        handleClose={handleCloseDetails}
                        name={task.name}
                        description={task.description}
                        listId={task.listId}
                        taskId={task.id}
                        setMode={() => alert("setMode not valid")}
                    />
                </>}
        </div>
    );
};

export default Task;
