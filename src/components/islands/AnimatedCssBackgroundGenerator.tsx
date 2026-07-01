// Ported from
// legacy-next/components/AnimatedCssBackgroundGenerator (index.js Demo) — the
// interactive part only (the surrounding page chrome lives in the .astro page).
// Framework/styling stack changes only:
//   - styled-components  → plain-CSS classes (acbg-*, see
//     src/styles/animated-css-background-generator.css) for layout/controls,
//     plus a scoped <style> tag per variant that injects the exact same
//     generated CSS the original styled components did.
//   - @mui/material Slider   → <input type="range"> (same min/max/step/value).
//   - @mui/material Select   → <select> (none present in this generator).
//   - @mui/material FormLabel → <label>. MUI Button → <button>.
//   - @mui/icons-material FileCopy → inline SVG.
//   - react-color            → native <input type="color">.
// React logic (useState activeBg, the three Background variants, generated
// html/css) is preserved verbatim; generated output stays identical.
import { useState } from 'react'
import Background1 from './animatedCssBg/Background1'
import Background2 from './animatedCssBg/Background2'
import Background3 from './animatedCssBg/Background3'
import '../../styles/animated-css-background-generator.css'

export default function AnimatedCssBackgroundGenerator() {
    const [activeBg, changeBg] = useState(0)

    return (
        <div className="acbg-root">
            {activeBg === 0 && <Background1 changeBg={changeBg} activeBg={activeBg} />}
            {activeBg === 1 && <Background2 changeBg={changeBg} activeBg={activeBg} />}
            {activeBg === 2 && <Background3 changeBg={changeBg} activeBg={activeBg} />}
        </div>
    )
}
