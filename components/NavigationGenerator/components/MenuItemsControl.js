import React from 'react'
import styled from 'styled-components'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

const StyledRow = styled(Paper)`
  margin: 10px 0;
  padding: 10px;
  display: flex;

  @media (max-width: 560px) {
    flex-direction: column;
  }

  > div {
    margin-right: 30px;

    @media (max-width: 560px) {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
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
      >
        <DeleteForeverIcon />
      </IconButton>
    </StyledRow>
  )

  return (
    <div>
      <h3>Left Menu</h3>
      { generateItems('left') }
      { /* TODO add new row */ }

      <h3>Right Menu</h3>
      { generateItems('right') }
    </div>
  )
}

export default MenuItemsControl
