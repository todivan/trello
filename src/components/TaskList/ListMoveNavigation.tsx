import { East, West } from "@mui/icons-material";
import { Box } from "@mui/material";
import { TListMoveNavigationProps } from "../../types/CommonTypes";
import { useLists } from "../../context/ListsContext";

const ListMoveNavigation: React.FC<TListMoveNavigationProps> = ({ listId } ) => {
    const handleClickRight = (event: React.MouseEvent<HTMLDivElement>) => {
        changePosition(listId, 1);
      };

      const handleClickLeft = (event: React.MouseEvent<HTMLDivElement>) => {
        changePosition(listId, -1);
      };

      const {collectionOfLists, setCollectionOfLists} = useLists();

      const changePosition = (listId: number, offset: number) => {
        const index = collectionOfLists.findIndex((item) => item.id === listId);

        if (index === -1) {
            return;
        }

        const updatedList = [...collectionOfLists];
        const itemToMove = updatedList[index];
        const newPosition = itemToMove.position + offset;

        if (newPosition < 1 || newPosition > updatedList.length) {
            return;
        }

        updatedList.splice(index, 1);

        updatedList.splice(newPosition - 1, 0, itemToMove);

        updatedList.forEach((item, i) => {
            item.position = i + 1;
        });

        setCollectionOfLists(updatedList);
    };
    
    return(
        <Box display="flex" justifyContent="space-between" padding={0} margin-top={0} color={'white'}>
            <Box textAlign="left" onClick={handleClickLeft}>
                <West fontSize="small" cursor='pointer'></West>
            </Box>
            <Box textAlign="right" onClick={handleClickRight}>
                <East fontSize="small" cursor='pointer'></East>
            </Box>
        </Box>
    );
}

export default ListMoveNavigation;