import { Stack } from "@mui/material";
import LeftMenu from "../LeftMenu/LeftMenu";
import Board from "../Board/Board";

const Content = () => {
    return (
        <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={0}
            >
            <LeftMenu></LeftMenu>
            <Board />
        </Stack>
    );
}

export default Content;