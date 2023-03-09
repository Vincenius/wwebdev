import React from 'react'
import styled, { css } from 'styled-components'
import SketchPicker from 'react-color/lib/Sketch' // https://casesandberg.github.io/react-color/

import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Slider from '@mui/material/Slider'

const Container = styled.div`
  width: 100%;
`

const ColorPickers = styled.div`
  display: flex;
  margin-bottom: 50px;

  @media (max-width: 800px) {
    flex-direction: column;
  }

  > div {
    margin-right: 20px;

    @media (max-width: 800px) {
      margin-right: 0;
      margin-bottom: 40px;
    }
  }

  legend {
    margin-bottom: 10px;
  }
`

const MenuItemsControl = ({ menuStyle, setMenuStyle }) => {
  const updateStyle = (name, value) => {
    const newMenuStyle = menuStyle
    newMenuStyle[name] = value
    setMenuStyle(prevStyle => ({ ...prevStyle, ...newMenuStyle }))
  }
  return (
    <Container>
      <ColorPickers>
        <div>
          <FormLabel component="legend">Primary</FormLabel>
          <SketchPicker
            color={ menuStyle.primaryColor }
            onChangeComplete={color => updateStyle('primaryColor', color.hex)}
          />
        </div>

        <div>
          <FormLabel component="legend">Secondary</FormLabel>
          <SketchPicker
            color={ menuStyle.secondaryColor }
            onChangeComplete={color => updateStyle('secondaryColor', color.hex)}
          />
        </div>

        <div>
          <FormLabel component="legend">Hover</FormLabel>
          <SketchPicker
            color={ menuStyle.hoverColor }
            onChangeComplete={color => updateStyle('hoverColor', color.hex)}
          />
        </div>
      </ColorPickers>

      <FormControl component="fieldset">
        <FormLabel component="legend">Burger Menu Position</FormLabel>
        <RadioGroup
          aria-label="Burger Menu Position"
          name="burgerMenuPosition"
          value={menuStyle.burgerMenuPosition}
          onChange={e => updateStyle('burgerMenuPosition', e.target.value)}
        >
          <FormControlLabel value="left" control={<Radio />} label="Left" />
          <FormControlLabel value="right" control={<Radio />} label="Right" />
        </RadioGroup>
      </FormControl>

      <br/><br/><br/>

      <FormLabel component="legend">Burger Menu Breakpoint</FormLabel>
      <Slider
        value={menuStyle.breakpoint}
        onChange={(e, value) => updateStyle('breakpoint', value)}
        aria-labelledby="breakpoint slider"
        min={480}
        max={1200}
        step={1}
        valueLabelDisplay="auto"
      />
    </Container>
  )
}

export default MenuItemsControl
