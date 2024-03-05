import { Grid, OutlinedInput, Box } from "@mui/material"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { TListProps } from "../../types/CommonTypes";
import { useState } from "react";

const ListHeader: React.FC<TListProps> = ({ key, list, updateList })=> {
    const openListDetails = () => {
        alert("List details \n\n Name: " + list.name + "\n\n Description: " + list.description);
    }

    const [isEdit, setIsEdit] = useState(false);

    const switchToEdit = () => {
        setIsEdit(true);
    };

    const keyPress = (e) => {
        if(e.keyCode === 13){
           setIsEdit(false);
           list.name = e.target.value;
           updateList(list);
        } else if (e.keyCode === 27) {
            setIsEdit(false);
        }
     }

    return (
        <Box>
            {isEdit ? 
                <OutlinedInput
                    id="outlined-adornment-weight"
                    multiline
                    minRows={1}
                    maxRows={8}
                    defaultValue={list.name}
                    endAdornment={<MoreHorizIcon fontSize="small" onClick={openListDetails} cursor='pointer'></MoreHorizIcon>}
                    aria-describedby="outlined-weight-helper-text"
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

                <Grid container spacing={2} sx={{ border: '0px', width:250, padding:2, cursor: 'pointer'}} >
                    <Grid xs={10}>
                        <div onClick={switchToEdit}>
                            <Box display="flex"><b>{list.name}</b></Box>
                        </div>
                    </Grid>
                    <Grid xs={2}>
                        <MoreHorizIcon fontSize="small" onClick={openListDetails} cursor='pointer'></MoreHorizIcon>
                    </Grid>
                </Grid>
                
            }
        </Box>
    );
}

export default ListHeader;