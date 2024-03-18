import { Grid, OutlinedInput, Box } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { type TList } from '../../types/CommonTypes'
import { useState } from 'react'
import ItemDetails from '../ItemDetails'
import { useLists } from '../../context/ListsContext'

export interface TListHeaderProps {
  list: TList
  isFocusOnNewList: boolean
}

const ListHeader: React.FC<TListHeaderProps> = ({ list, isFocusOnNewList }: TListHeaderProps) => {
  const openListDetails = () => {
    setIsDetailsOpen(true)
  }

  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  const handleCloseDetails = () => {
    setIsDetailsOpen(false)
  }

  const [isEdit, setIsEdit] = useState(isFocusOnNewList)

  const switchToEdit = () => {
    setIsEdit(true)
  }

  const keyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIsEdit(false)
      const inputElement = e.target as HTMLInputElement
      list.name = inputElement.value
      updateList(list)
    } else if (e.key === 'Escape') {
      setIsEdit(false)
    }
  }

  const { setCollectionOfLists } = useLists()

  const updateList = (updatedItem: TList) => {
    setCollectionOfLists(prevList => prevList.map(item => (item.id === updatedItem.id ? updatedItem : item)))
  }

  return (
        <>
            {isEdit
              ? <OutlinedInput
                    id="outlined-adornment-weight"
                    multiline
                    minRows={1}
                    maxRows={8}
                    defaultValue={list.name}
                    aria-describedby="outlined-weight-helper-text"
                    onKeyDown={keyPress}
                    autoFocus={true}
                    sx={{ cursor: 'pointer', color: 'white', padding: '10px 0px 10px 0px' }}
                    onFocus={event => {
                      event.target.select()
                    }}
                    onBlur={() => {
                      setIsEdit(false)
                    }}
                />

              : <>
                    <Grid container spacing={2} sx={{ border: '0px', width: 250, padding: 2, paddingRight: 0, paddingBottom: 0, cursor: 'pointer' }} >
                        <Grid xs={10}>
                            <div onClick={switchToEdit}>
                                <Box display="flex" color={'white'}><b>{list.name}</b></Box>
                            </div>
                        </Grid>
                        <Grid xs={2}>
                            <MoreHorizIcon sx={{ cursor: 'pointer', color: 'white' }} fontSize="small" onClick={openListDetails} cursor='pointer'></MoreHorizIcon>
                        </Grid>
                    </Grid>
                    <ItemDetails isOpen={isDetailsOpen} handleClose={handleCloseDetails} name={list.name} description={list.description} />
                </>
            }
        </>
  )
}

export default ListHeader
