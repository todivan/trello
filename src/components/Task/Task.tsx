import { useState } from "react";
import { Box, OutlinedInput, TextField } from "@mui/material";
import { TTask } from "../../types/CommonTypes";
import ModeIcon from '@mui/icons-material/Mode';

type TTaskProps = {
    key: React.Key;
    task: TTask;
    updateTask: (updatedItem: TTask) => void;
  };

const Task: React.FC<TTaskProps> = ({ task, updateTask }) => {

    const [isEdit, setIsEdit] = useState(false);

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

    const openTaskDetails = () => {
        alert("Task details \n\n Name: " + task.name + "\n\n Description: " + task.description);
    }

    return(
        <Box>
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
                sx={{  color:'white' }}
                onFocus={event => {
                    event.target.select();
                }}
                onBlur={() => {
                    setIsEdit(false);
                }}
            />
            :
            <OutlinedInput
                id="outlined-adornment-weight"
                multiline
                minRows={1}
                maxRows={8}
                defaultValue={task.name}
                endAdornment={<ModeIcon fontSize="small" onClick={switchToEdit} cursor='pointer'></ModeIcon>}
                aria-describedby="outlined-weight-helper-text"
                sx={{ border: '0px solid white', borderRadius:3, width:250, cursor: 'pointer', color:'white' }}
                onDoubleClick={openTaskDetails}
                inputProps={{
                'aria-label': 'weight', readOnly: true,
                }}
            />
            }
        </Box>
    );
}

export default Task;