import React from 'react'
import styled, { css } from 'styled-components'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import AddCircleIcon from '@mui/icons-material/AddCircle'

const Container = styled.div`
  width: 100%;
`

const StyledRow = styled(Paper)`
  margin: 20px 0;
  padding: 10px;
  display: flex;

  @media (max-width: 560px) {
    flex-direction: column;
  }

  ${props => props.center && css`
    justify-content: center;
    align-items: center;
  `}

  > div {
    margin-right: 30px;

    @media (max-width: 560px) {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
`

const DeleteIcon = styled(DeleteForeverIcon)`
  color: #b71c1c;
`

const MenuItemsControl = ({ menuItems, setMenuItems }) => {
  const updateMenu = (key, value, menuPart, index) => {
    const newMenuItems = menuItems
    newMenuItems[menuPart][index][key] = value
    setMenuItems(prevItems => ({ ...prevItems, ...newMenuItems }))
  }

  const deleteItem = (menuPart, index) => {
    const newMenuItems = menuItems
    newMenuItems[menuPart].splice(index, 1)
    setMenuItems(prevItems => ({ ...prevItems, ...newMenuItems }))
  }

  const addItem = menuPart => {
    const newMenuItems = menuItems
    newMenuItems[menuPart].push({ caption: '', link: '' })
    setMenuItems(prevItems => ({ ...prevItems, ...newMenuItems }))
  }

  const updateLogo = (key, value, menuPart) => {
    const newMenuItems = menuItems
    newMenuItems.logo[key] = value
    setMenuItems(prevItems => ({ ...prevItems, ...newMenuItems }))
  }

  const generateItems = menuPart => menuItems[menuPart].map((item, index) =>
    <StyledRow key={`${menuPart}-${index}`}>
      <TextField
        label="Caption"
        value={item.caption}
        onChange={e => updateMenu('caption', e.target.value, menuPart, index)}
      />
      <TextField
        label="Link"
        value={item.link}
        onChange={e => updateMenu('link', e.target.value, menuPart, index)}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={!!item.blank}
            onChange={e => updateMenu('blank', e.target.checked, menuPart, index)}
            name="targetBlank"
            color="primary"
          />
        }
        label="Open in new tab"
      />
      <IconButton
        aria-label="delete row"
        component="span"
        onClick={() => { deleteItem(menuPart, index) }}
        size="large">
        <DeleteIcon />
      </IconButton>
    </StyledRow>
  )

  return (
    <Container>
      <h3>Logo</h3>
      { menuItems.logo.isUsed && <StyledRow>
        <TextField
          label="Link to logo"
          value={menuItems.logo.url}
          onChange={e => updateLogo('url', e.target.value)}
        />
        <TextField
          label="Link"
          value={menuItems.logo.link}
          onChange={e => updateLogo('link', e.target.value)}
        />

        <TextField
          label="Alt caption"
          value={menuItems.logo.alt}
          onChange={e => updateLogo('alt', e.target.value)}
        />

        <IconButton
          aria-label="delete row"
          component="span"
          onClick={() => updateLogo('isUsed', false)}
          size="large">
          <DeleteIcon />
        </IconButton>
      </StyledRow> }

      { !menuItems.logo.isUsed &&
        <Button variant="outlined" onClick={() => { updateLogo('isUsed', true) }}>
          <AddCircleIcon /> &nbsp;Add Logo
        </Button>
      }

      <br/>

      <h3>Left Menu</h3>
      { generateItems('left') }
      <Button variant="outlined" onClick={() => { addItem('left') }}>
        <AddCircleIcon /> &nbsp;Add Item
      </Button>

      <br/><br/>

      <h3>Right Menu</h3>
      { generateItems('right') }
      <Button variant="outlined" onClick={() => { addItem('right') }}>
        <AddCircleIcon /> &nbsp;Add Item
      </Button>
    </Container>
  );
}

export default MenuItemsControl
