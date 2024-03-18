import { Box } from '@mui/material'

const LeftMenu = () => {
  return (
        <Box
        height={600}
        width={200}
        minWidth={200}
        my={4}
        display="flex"
        alignItems="top"
        color={'white'}
        gap={4}
        p={2}
        sx={{ border: '2px solid grey', bgcolor: 'primary.main', margin: '5px' }}>Trello Workspace</Box>
  )
}

export default LeftMenu
