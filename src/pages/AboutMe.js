import { Box, Stack } from '@mui/material'
import React from 'react'
import Info from '../Components/Info'
import Social from '../Components/Social'

const AboutMe = () => {
  return (
    <Box mt={5}>
      <Stack>
        <Info/>
        <Social/>
      </Stack>
    </Box>
  )
}

export default AboutMe