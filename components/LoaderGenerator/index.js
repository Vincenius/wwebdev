import React, { useState } from 'react'
import SketchPicker from 'react-color/lib/Sketch'
import FormLabel from '@mui/material/FormLabel'
import Slider from '@mui/material/Slider'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import CodeBlock from '../CodeBlock'
import { blue } from '../../ui/constants'
import * as S from './styled'

const CopyButton = ({ cssString }) => {
  const [showCopied, setShowCopied] = useState(false)
  const copyToClipboard = () => {
    navigator.clipboard.writeText(cssString)
    setShowCopied(true)

    setTimeout( () => {
      setShowCopied(false)
    }, 2000);
  }

  return <S.CopyLink
    onClick={() => copyToClipboard()}
    showCopied={showCopied}
  >
    <FileCopyIcon style={{ fontSize: '0.7em' }}/> Copy Code
  </S.CopyLink>
}

const LoaderGenerator = () => {
  const [settings, setSettings] = useState({
    color: blue,
    count: 10,
    size: 10,
    gap: 10,
    speed: 1000,
  })
  const [activeLoader, setActiveLoader] = useState(0)
  const cssString = S.getCssString({ settings, variant: activeLoader })

  return <div>
    <S.ControlContainer>
      <div>
        <SketchPicker
          color={ settings.color }
          onChangeComplete={color => setSettings({ ...settings, color: color.hex })}
        />
      </div>
      <S.SliderContainer>
        <FormLabel component="legend">Count</FormLabel>
        <Slider
          value={settings.count}
          onChange={(e, value) => setSettings({ ...settings, count: value })}
          aria-labelledby="breakpoint slider"
          min={5}
          max={30}
          step={1}
          valueLabelDisplay="auto"
        />

        <FormLabel component="legend">Size</FormLabel>
        <Slider
          value={settings.size}
          onChange={(e, value) => setSettings({ ...settings, size: value })}
          aria-labelledby="breakpoint slider"
          min={2}
          max={20}
          step={1}
          valueLabelDisplay="auto"
        />

        <FormLabel component="legend">Gap</FormLabel>
        <Slider
          value={settings.gap}
          onChange={(e, value) => setSettings({ ...settings, gap: value })}
          aria-labelledby="breakpoint slider"
          min={2}
          max={30}
          step={1}
          valueLabelDisplay="auto"
        />

        <FormLabel component="legend">Animation duration</FormLabel>
        <Slider
          value={settings.speed}
          onChange={(e, value) => setSettings({ ...settings, speed: value })}
          aria-labelledby="breakpoint slider"
          min={500}
          max={2000}
          step={50}
          valueLabelDisplay="auto"
        />
      </S.SliderContainer>
    </S.ControlContainer>

    <S.LoaderContainer>
      <S.LoaderCard active={activeLoader === 0} onClick={() => setActiveLoader(0)}>
        <S.Loader settings={settings} />
      </S.LoaderCard>
      <S.LoaderCard active={activeLoader === 1} onClick={() => setActiveLoader(1)}>
        <S.LoaderDots settings={settings} />
      </S.LoaderCard>
      <S.LoaderCard active={activeLoader === 2} onClick={() => setActiveLoader(2)}>
        <S.LoaderRing settings={settings} />
      </S.LoaderCard>
      <S.LoaderCard active={activeLoader === 3} onClick={() => setActiveLoader(3)}>
        <S.LoaderHourglas settings={settings} />
      </S.LoaderCard>
    </S.LoaderContainer>

    <CodeBlock
      language="css"
      value={cssString}
      wrapLongLines={true}
      label={<CopyButton cssString={cssString}/>}
    />
  </div>
}

export default LoaderGenerator
