// Ported verbatim from legacy-next/components/CssSeparatorGenerator/codeGenerators.js
// The GENERATED separator CSS strings are IDENTICAL to the original output.
import { SEPARATORS } from './constants'
import type { SeparatorValue, SliderOption } from './constants'

// darkGrey from legacy-next/ui/constants.js
const darkGrey = '#2c3e50'

// The generators are called in two shapes in the legacy code:
//  - from styled.js with the raw `options` object (slider values are objects)
//  - from generateCssCode with `{ ...options, cssClass }` / `{ ...options, active }`
// We type the args loosely (any) to preserve the exact runtime behaviour.
/* eslint-disable @typescript-eslint/no-explicit-any */

export const generateHtmlCode = (active: SeparatorValue): string =>
    active === SEPARATORS.SKEWED
        ? `<section>
  <div class="${active}"></div>
</section>`
        : active === SEPARATORS.WAVE
          ? `<section class="container">
  <div class="${active}"></div>
</section>`
          : `<section class="${active}"></section>`

export const generateCssCode = ({ active, options }: { active: SeparatorValue; options: any }): string => {
    // TODO check what to generate
    return active === SEPARATORS.SKEWED
        ? `.${active} {
  ${generateSkewCss(options)}
}`
        : active === SEPARATORS.SEMI_CIRCLE
          ? generateSemiCircleCss({ ...options, cssClass: active })
          : active === SEPARATORS.WAVE
            ? generateWaveCss({ ...options, active })
            : active === SEPARATORS.SPIKES
              ? generateSpikesCss({ ...options, cssClass: active })
              : active === SEPARATORS.TRIANGLE
                ? generateTriangleCss({ ...options, cssClass: active })
                : active === SEPARATORS.CURVED
                  ? generateCurvedCss({ ...options, cssClass: active })
                  : ''
}

const generateContainerStyle = (cssClass?: string): string =>
    `${
        cssClass
            ? `.${cssClass} {
  position: relative;
  background: ${darkGrey};
  height: 50vh;
}`
            : `background: ${darkGrey};`
    }`

export const generateSkewCss = ({ angle, reversed }: { angle: SliderOption; reversed?: boolean }): string =>
    `position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${darkGrey};
  z-index: 0;
  ${
      !reversed
          ? `transform: skewY(${angle.value}deg);
  transform-origin: top right;`
          : `transform: skewY(-${angle.value}deg);
  transform-origin: top left;`
  }`

export const generateSemiCircleCss = ({ cssClass, left, width, height, top, reversed }: any): string =>
    `${generateContainerStyle(cssClass)}

${cssClass ? `.${cssClass}` : '&'}::before {
  position: absolute;
  content: '';
  left: ${left.value}%;
  z-index: 10;
  width: ${width.value}px;
  height: ${height.value}px;
  border-radius: 50%;
  background: ${reversed ? '#fff' : 'inherit'};
  transform: ${
      reversed
          ? `translateX(-50%) translateY(${top.value * -1 + 100}%);`
          : `translateX(-50%) translateY(${top.value}%);`
  }
  bottom: 0px;
}`

export const generateWaveCss = ({ active, curve, reversed }: any): string => {
    const cssClass = active ? `.${active}` : '&'

    return `${
        active
            ? `${generateContainerStyle('container')}

.${active} {
  position: absolute;
  height: ${curve.value}px;
  width: 100%;
  background: ${darkGrey};
  bottom: 0;
}`
            : `position: absolute;
height: ${curve.value}px;
width: 101%;
background: ${darkGrey};
bottom: 0;`
    }

${cssClass}::before, ${cssClass}::after {
  content: "";
  display: block;
  position: absolute;
  border-radius: ${reversed ? '50% 100%' : '100% 50%'};
}

${cssClass}::before {
  width: 55%;
  height: ${!reversed ? '109%' : '100%'};
  background-color: ${!reversed ? '#fff' : darkGrey};
  right: -1.5%;
  top: ${!reversed ? '60%' : '40%'};
}
${cssClass}::after {
  width: 55%;
  height: ${!reversed ? '100%' : '109%'};
  background-color: ${!reversed ? darkGrey : '#fff'};
  left: -1.5%;
  top: ${!reversed ? '40%' : '60%'};
}`
}

export const generateSpikesCss = ({ cssClass, size, left }: any): string =>
    `${generateContainerStyle(cssClass)}

${cssClass ? `.${cssClass}` : '&'}::after {
  content: '';
  position: absolute;
  right: 0;
  left: -${left.value}%;
  top: 100%;
  z-index: 10;
  display: block;
  height: ${size.value}px;
  background-size: ${size.value}px 100%;
  background-image: linear-gradient(135deg, ${darkGrey} 25%, transparent 25%), linear-gradient(225deg, ${darkGrey} 25%, transparent 25%);
  background-position: 0 0;
}`

export const generateTriangleCss = ({ reversed, size, left, cssClass }: any): string =>
    `${generateContainerStyle(cssClass)}

${cssClass ? `.${cssClass}` : '&'}::before {
  content: '';
  position: absolute;
  bottom: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: ${
      reversed
          ? `0 ${size.value}px ${size.value}px ${size.value}px;`
          : `${size.value}px ${size.value}px 0 ${size.value}px;`
  }
  border-color: ${
      reversed
          ? 'transparent transparent #fff transparent;'
          : `${darkGrey} transparent transparent transparent;`
  }
  left: ${left.value}%;
  transform: ${reversed ? 'translateX(-50%)' : 'translateX(-50%) translateY(100%)'};
}`

export const generateCurvedCss = ({ cssClass, reversed, curve }: any): string =>
    !reversed
        ? `${
              cssClass
                  ? `.${cssClass} {
  position: relative;
  background: ${darkGrey};
  height: 50vh;
  border-bottom-left-radius: 50% ${curve.value}%;
  border-bottom-right-radius: 50% ${curve.value}%;
}`
                  : `
  border-bottom-left-radius: 50% ${curve.value}%;
  border-bottom-right-radius: 50% ${curve.value}%;
`
          }`
        : `${generateContainerStyle(cssClass)}

${cssClass ? `.${cssClass}` : '&'}::after {
  content: '';
  border-top-left-radius: 50% 100%;
  border-top-right-radius: 50% 100%;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #fff;
  height: ${curve.value}%;
}`
