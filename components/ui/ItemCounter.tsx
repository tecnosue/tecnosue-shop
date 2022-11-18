import React from 'react';
import { FC } from 'react';
import Typography from '@mui/material/Typography';
import IconButton  from '@mui/material/IconButton';
import  Box  from '@mui/material/Box';

import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';



interface Props {

}

export const ItemCounter:FC<Props> = () => {
  return (
    <Box display='flex' alignItems='center'>
        <IconButton>
            <RemoveCircleOutline />
        </IconButton>
        <Typography sx={{ width: 40, textAlign:'center' }}> 1 </Typography>
        <IconButton>
            <AddCircleOutline />
        </IconButton>
    </Box>
  )
}