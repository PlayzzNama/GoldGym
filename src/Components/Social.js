import React from 'react'
import { Stack } from '@mui/material'

import GitHubIcon from '../assets/icons/github.svg'
import InstagramIcon from '../assets/icons/insta.webp'
import ClassRoomIcon from '../assets/icons/classroom.jpg'
import TrelloIcon from '../assets/icons/trello.svg'

const Social = () => {
  return (
    <Stack direction="row" gap={2} mt={3}>
        <a href='https://www.instagram.com/mqdqwarrior/' style={{boxShadow:'rgba(0, 0, 0, 0.4) 0 2px 4px, rgba(0, 0, 0, 0.3) 0 7px 13px -3px, rgba(0, 0, 0, 0.2) 0 -3px 0 inset', padding: '5px'}} target='_blank' rel='noreferrer'><img src={InstagramIcon} width="32px" alt='instagram icon'/></a>
        <a style={{boxShadow:'rgba(0, 0, 0, 0.4) 0 2px 4px, rgba(0, 0, 0, 0.3) 0 7px 13px -3px, rgba(0, 0, 0, 0.2) 0 -3px 0 inset', padding: '5px'}} href='https://github.com/PlayzzNama' target='_blank' rel='noreferrer'><img src={GitHubIcon} width="32px" alt='github icon'/></a>
        <a style={{boxShadow:'rgba(0, 0, 0, 0.4) 0 2px 4px, rgba(0, 0, 0, 0.3) 0 7px 13px -3px, rgba(0, 0, 0, 0.2) 0 -3px 0 inset', padding: '5px'}} href='https://classroom.google.com/c/NjY2ODM0MDcxODk2' target='_blank' rel='noreferrer'><img src={ClassRoomIcon} width="32px" alt='classroom icon'/></a>
        <a style={{boxShadow:'rgba(0, 0, 0, 0.4) 0 2px 4px, rgba(0, 0, 0, 0.3) 0 7px 13px -3px, rgba(0, 0, 0, 0.2) 0 -3px 0 inset', padding: '5px'}} href='https://trello.com/b/xCgaD6gB/final-project' target='_blank' rel='noreferrer'><img src={TrelloIcon} width="32px" alt='trello icon'/></a>
    </Stack>
  )
}

export default Social