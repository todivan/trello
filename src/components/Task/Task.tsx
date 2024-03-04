import { useState } from "react";
import { OutlinedInput, TextField } from "@mui/material";
import { TTask } from "../../types/CommonTypes";
import ModeIcon from '@mui/icons-material/Mode';

type TTaskProps = {
    key: React.Key;
    task: TTask;
    updateTask: (updatedItem: TTask) => void;
  };

const Task: React.FC<TTaskProps> = ({ key, task, updateTask }) => {

    const [isEdit, setIsEdit] = useState(false);

    const switchToEdit = () => {
        setIsEdit(true);
    };

    const keyPress = (e) => {
        if(e.keyCode === 13){
           setIsEdit(false);
           task.name = e.target.value;
           updateTask(task);
        } else if (e.keyCode === 27) {
            setIsEdit(false);
        }
     }

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
                autoFocus={true}
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
                sx={{ border: '0px solid white', width:250, cursor: 'pointer' }}
                inputProps={{
                'aria-label': 'weight', readOnly: true,
                }}
            />
            }
        </>
    );
}

export default Task;