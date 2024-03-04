import { Grid, OutlinedInput, TextField } from "@mui/material";
import ModeIcon from '@mui/icons-material/Mode';
import React from "react";

type Props = {
    name: string;
    switchToEdit: () => void;
  };

  
const TaskView: React.FC<Props> = ({ name, switchToEdit }) => {
    return(
        <Grid container>
            <OutlinedInput
            id="outlined-adornment-weight"
            multiline
            disabled
            minRows={1}
            maxRows={8}
            defaultValue={name}
            endAdornment={<ModeIcon fontSize="small" onClick={switchToEdit}></ModeIcon>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          
            {/* <Grid item xs={11}>
                <TextField 
                    id="taskId"
                    variant="outlined"
                    disabled
                    multiline
                    minRows={1}
                    maxRows={8}
                    defaultValue={name}
                    color={"primary"}
                    sx={{ border: '0px' }}
                    InputProps={{
                        disableUnderline: true, // <== added this
                      }}>
                    
                    {name}
                </TextField>
            </Grid>

            <Grid item xs={1}>
                <ModeIcon fontSize="small" onClick={switchToEdit}></ModeIcon>
            </Grid> */}
        </Grid>
    );
}

export default TaskView;