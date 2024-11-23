import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import AuthorImage from '../assets/images/Author.jpg'

const Info = () => {
  return (
    <Stack direction="row" sx={{ alignItems: 'center'}}>
        <img src={AuthorImage} alt='author-image' width="200px"/>
        <Stack ml={3} gap="15px">
            <Typography
             border='1px solid black'
             padding='10px 20px'
             borderRadius={2.5}
             boxShadow = 'rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px'
             >
             Ivan Popovych
             </Typography>
            <Typography
             border='1px solid black'
             padding='10px 20px'
             borderRadius={2.5}
             boxShadow = 'rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px'
             >
             Awen
             </Typography>
            <Typography
             border='1px solid black'
             padding='10px 20px'
             borderRadius={2.5}
             boxShadow = 'rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px'
             >
             AFE_44
             </Typography>
        </Stack>
    </Stack>
  )
}

export default Info