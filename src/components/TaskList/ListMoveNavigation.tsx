import { East, West } from "@mui/icons-material";
import { Box } from "@mui/material";
import { TList } from "../../types/CommonTypes";
import { useLists } from "../../context/ListsContext";
import { changePosition } from "../../Utils/ChangePosition";
import { useCallback } from "react";

export type TListMoveNavigationProps = {
    listId: number;
  };

const ListMoveNavigation: React.FC<TListMoveNavigationProps> = ({ listId } ) => {
    const {collectionOfLists, setCollectionOfLists} = useLists();

    const updateCollection = useCallback((updatedList: TList[]) => {
        setCollectionOfLists(updatedList);
    }, [setCollectionOfLists]);

    const handleClickMove = (offset: number) => {
        changePosition(listId, offset, collectionOfLists, updateCollection);
      };
    
    return(
        <Box display="flex" justifyContent="space-between" padding={0} margin-top={0} color={'white'}>
            <Box textAlign="left" onClick={() => handleClickMove(-1)}>
                <West fontSize="small" cursor='pointer'></West>
            </Box>
            <Box textAlign="right" onClick={() => handleClickMove(1)}>
                <East fontSize="small" cursor='pointer'></East>
            </Box>
        </Box>
    );
}

export default ListMoveNavigation;