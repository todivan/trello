import { useState } from "react";
//import { Container } from "./Task.styled";
import { Box, TextField } from "@mui/material";
import TaskView from "./TaskView";
import { TTask } from "../../types/CommonTypes";

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
        <Box
        height={50}
        width={180}
        my={4}
        display="flex"
        alignItems="center"
        gap={4}
        p={2}
        sx={{ border: '2px solid white' }}
      >
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
            />
            :
            <TaskView name={task.name} switchToEdit={switchToEdit} />
            }
        </Box>
    );
}

export default Task;