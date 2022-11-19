import Box from '@mui/material/Box';
import  Button from '@mui/material/Button';

import React, { FC } from 'react'
import { ISize } from '../../interfaces/products';

interface Props {
    selectedSize?: ISize;
    sizes: ISize[];
}

export const SizeSelector: FC<Props> = ({selectedSize, sizes}) => {
  return (
    <Box>
        {
            sizes.map( size =>
                <Button
                    key={ size }
                    size='small'
                    color={ selectedSize === size ? 'primary' : 'info' }
                >
                    { size }

                </Button>
                //falta la validación etc.
            )
        }

    </Box>
  )
}
