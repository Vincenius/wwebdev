// Pure CSS-generation logic ported verbatim from
// legacy-next/components/LoaderGenerator/styled.js. These builders produce the
// exact CSS strings used both for the live loader demo and the copyable output,
// so their text must stay byte-identical to the original.

export interface LoaderSettings {
    color: string
    count: number
    size: number
    gap: number
    speed: number
}

export const getLoaderCss = ({ count, color, size, gap, speed }: LoaderSettings) => `
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 1px;
  background: conic-gradient(#0000, ${color}) content-box;
  mask: repeating-conic-gradient(
    #0000 0deg,
    #000 1deg calc(360deg/${count} - ${(gap * 10) / count}deg - 1deg),
    #0000 calc(360deg/${count} - ${(gap * 10) / count}deg) calc(360deg/${count})
  ), radial-gradient(
    farthest-side,
    #0000 calc(98% - ${size}px),
    #000 calc(100% - ${size}px)
  );
  mask-composite: intersect;
  -webkit-mask-composite: destination-in;
  animation: spin ${speed}ms infinite steps(${count});
`

export const getLoaderAnimation = () => `
@keyframes spin { to { transform: rotate(1turn) } }
`

export const getLoaderDotsCss = ({ count, color, size, gap, speed }: LoaderSettings) => `
  transform: scale(0.5);
  display: inline-block;
  height: 1em;
  width: 1em;
  line-height: 1;
  vertical-align: middle;
  border-radius: 1em;
  transition: all 150ms linear 0s;
  color: ${color};
  box-shadow: ${Array.from(Array(count).keys())
      .map(
          (i) =>
              `${2 * Math.cos(((i * 360) / count) * 0.01745329252)}em
      ${2 * Math.sin(((i * 360) / count) * 0.01745329252)}em 0
      ${(35 / size / 40) * -1}em`,
      )
      .slice((gap / 30) * (count / 2))
      .join(',')};
  animation: spinDots ${speed}ms infinite steps(${count});
`
export const getLoaderDotsAnimation = () => `
@keyframes spinDots {
  0% {
    transform: scale(0.5) rotate(0);
    animation-timing-function: cubic-bezier(.55,.055,.675,.19);
  }
  50% {
    transform: scale(0.5) rotate(180deg);
    animation-timing-function: cubic-bezier(.215,.61,.355,1);
  }
  100% {
    transform: scale(0.5) rotate(360deg);
  }
}`

export const getLoaderRingCss = ({ speed }: LoaderSettings) => `
  width: 2.2em;
  height: 2.2em;
  display: block;
  position: relative;
  animation: spinRing ${speed * 1.5}ms linear infinite;
`
export const getLoaderRingAfter = ({ color, size, gap, speed }: LoaderSettings) => `
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  height: auto;
  width: auto;
  border: ${size / 2}px solid ${color};
  border-radius: 50%;
  clip-path: polygon(50% 50%, 50% 0%, 100% 0%,100% ${-100 + (30 / gap) * 60}%);
  animation: spinRingInner ${speed * 1.5}ms cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
`

export const getLoaderRingAnimation = () => `
@keyframes spinRing {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
@keyframes spinRingInner {
  0%   { transform: rotate(-180deg); }
  50%  { transform: rotate(-160deg); }
  100% { transform: rotate(180deg); }
}`

export const getLoaderHourglasCss = ({ speed }: LoaderSettings) => `
  position: relative;
  display: block;
  height: 50px;
  width: 50px;
  transition: all .3s;
  transition-timing-function: ease-in;
  animation: spinHourglas ${speed}ms infinite;
`
export const getLoaderHourglasAfter = ({ color, size }: LoaderSettings) => `
  content: '';
  box-sizing: border-box;
  display: inline-block;
  width: 100%;
  height: 100%;
  background: 0 0;
  border-width: ${0.065 * (size - 1)}em;
  border-color: ${color} transparent;
  border-radius: 50%;
  border-style: solid;
`

export const getLoaderHourglasAnimation = () => `
@keyframes spinHourglas {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(.55,.055,.675,.19);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(.215,.61,.355,1);
  }
  100% {
    transform: rotate(360deg);
  }
}`

export const getCssString = ({
    settings,
    variant,
}: {
    settings: LoaderSettings
    variant: number
}): string => {
    if (variant === 0) {
        return `.loader {${getLoaderCss(settings)}}${getLoaderAnimation()}`
    } else if (variant === 1) {
        return `.loader {${getLoaderDotsCss(settings)}}${getLoaderDotsAnimation()}`
    } else if (variant === 2) {
        return `.loader {${getLoaderRingCss(settings)}}
.loader::after{${getLoaderRingAfter(settings)}}${getLoaderRingAnimation()}`
    } else if (variant === 3) {
        return `.loader {${getLoaderHourglasCss(settings)}}
.loader::after{${getLoaderHourglasAfter(settings)}}${getLoaderHourglasAnimation()}`
    }
    return ''
}
