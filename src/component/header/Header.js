import React from 'react'
import MenuSharpIcon from '@mui/icons-material/MenuSharp'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import Stack from '@mui/material/Stack';
 import './Header.css';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function Header() {
  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="md">
      
    <div className='headerDiv'>
      <div>
        <MenuSharpIcon></MenuSharpIcon>
      </div>
      <div>
        <img src="logo192.png" id='headerImg'/>
      </div>
      <div>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Button variant="contained" component="label">
            Upload
            <input hidden accept="image/*" multiple type="file" />
          </Button>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input hidden accept="image/*" type="file" />
            <PhotoCamera />
          </IconButton>
        </Stack>
      </div>
    </div>
    </Container>
  </React.Fragment>




  )
}

export default Header
