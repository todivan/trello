import { useState } from "react";
import { Container, Description } from "./Task.styled";
import ModeIcon from '@mui/icons-material/Mode';
import { TextField } from "@mui/material";

const Task = (props) => {

    const [isEdit, setIsEdit] = useState(false);

    const switchToEdit = () => {
        setIsEdit(true);
    };

    const endEdit = () => {
        setIsEdit(false);
    };

    const keyPress = (e) => {
        if(e.keyCode === 13){
           setIsEdit(false);
           props.task.description = e.target.value;
        } else if (e.keyCode === 27) {
            setIsEdit(false);
        }
     }

    return(
        <Container>
            <h3>{props.task.name}</h3>
            {isEdit ? 
            <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                defaultValue={props.task.description}
                onKeyDown={keyPress}
            />
            :
            <Description isVisible={!isEdit}>
                <div>
                    {props.task.description}
                </div>
                <ModeIcon onClick={switchToEdit}></ModeIcon>
            </Description>
            }
        </Container>
    );
}

export default Task;