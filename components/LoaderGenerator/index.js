import React, { useState } from 'react'
import SketchPicker from 'react-color/lib/Sketch'
import FormLabel from '@material-ui/core/FormLabel'
import Slider from '@material-ui/core/Slider'
import * as S from './styled'

// https://codepen.io/t_afif/pen/PoJyaNy
// https://loading.io/button/generator/#top
// https://mui.com/material-ui/react-progress/#circular

const LoaderGenerator = () => {
  const [settings, setSettings] = useState({
    color: 'blue',
    count: 10,
  })
  console.log(settings)
  return <div>
    <S.Container>
      <S.LoaderContainer>
        <S.Loader settings={settings} />
      </S.LoaderContainer>

      <div>
        <div>
          <SketchPicker
            color={ settings.color }
            onChangeComplete={color => setSettings({ ...settings, color: color.hex })}
          />
        </div>
        <FormLabel component="legend">Dash count</FormLabel>
        <Slider
          value={settings.count}
          onChange={(e, value) => setSettings({ ...settings, count: value })}
          aria-labelledby="breakpoint slider"
          min={5}
          max={30}
          step={1}
          valueLabelDisplay="auto"
        />
      </div>
    </S.Container>

    <div>
      {/* code */}
    </div>
  </div>
}

export default LoaderGenerator
