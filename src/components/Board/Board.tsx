import React from 'react'
import BoardContent from '../Board/BoardContent'
import { Stack } from '@mui/material'
import BoardBar from '../MenuBar/BoardBar'

const Board = () => {
  return (
    <div data-testid='Board'>
      <Stack width="100%" spacing={2} sx={{ padding: '0px 0px 0px 15px' }}>
        <BoardBar />
        <BoardContent />
      </Stack>
    </div>
  )
}

export default Board
