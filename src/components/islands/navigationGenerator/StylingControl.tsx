// Ported from legacy-next/components/NavigationGenerator/components/StylingControl.js
// react-color SketchPicker → native <input type="color">; MUI Slider → range
// input; MUI Radio/RadioGroup → native radios; FormLabel → <label>. styled-
// components replaced with `ng-` classes (see src/styles/navigation-generator.css).
// Logic preserved verbatim.
import type { Dispatch, SetStateAction } from 'react'

export interface MenuStyle {
    primaryColor: string
    secondaryColor: string
    hoverColor: string
    burgerMenuPosition: string
    breakpoint: number
}

interface Props {
    menuStyle: MenuStyle
    setMenuStyle: Dispatch<SetStateAction<MenuStyle>>
}

export default function StylingControl({ menuStyle, setMenuStyle }: Props) {
    const updateStyle = (name: keyof MenuStyle, value: string | number) => {
        const newMenuStyle = menuStyle
        ;(newMenuStyle as any)[name] = value
        setMenuStyle((prevStyle) => ({ ...prevStyle, ...newMenuStyle }))
    }

    return (
        <div className="ng-control-container">
            <div className="ng-color-pickers">
                <div>
                    <label className="ng-legend">Primary</label>
                    <input
                        type="color"
                        className="ng-color-input"
                        value={menuStyle.primaryColor}
                        onChange={(e) => updateStyle('primaryColor', e.target.value)}
                    />
                </div>

                <div>
                    <label className="ng-legend">Secondary</label>
                    <input
                        type="color"
                        className="ng-color-input"
                        value={menuStyle.secondaryColor}
                        onChange={(e) => updateStyle('secondaryColor', e.target.value)}
                    />
                </div>

                <div>
                    <label className="ng-legend">Hover</label>
                    <input
                        type="color"
                        className="ng-color-input"
                        value={menuStyle.hoverColor}
                        onChange={(e) => updateStyle('hoverColor', e.target.value)}
                    />
                </div>
            </div>

            <fieldset className="ng-fieldset">
                <label className="ng-legend">Burger Menu Position</label>
                <div
                    className="ng-radio-group"
                    role="radiogroup"
                    aria-label="Burger Menu Position"
                >
                    <label className="ng-radio-label">
                        <input
                            type="radio"
                            name="burgerMenuPosition"
                            value="left"
                            checked={menuStyle.burgerMenuPosition === 'left'}
                            onChange={(e) => updateStyle('burgerMenuPosition', e.target.value)}
                        />
                        Left
                    </label>
                    <label className="ng-radio-label">
                        <input
                            type="radio"
                            name="burgerMenuPosition"
                            value="right"
                            checked={menuStyle.burgerMenuPosition === 'right'}
                            onChange={(e) => updateStyle('burgerMenuPosition', e.target.value)}
                        />
                        Right
                    </label>
                </div>
            </fieldset>

            <br />
            <br />
            <br />

            <label className="ng-legend">Burger Menu Breakpoint</label>
            <div className="ng-slider">
                <input
                    type="range"
                    aria-labelledby="breakpoint slider"
                    min={480}
                    max={1200}
                    step={1}
                    value={menuStyle.breakpoint}
                    onChange={(e) => updateStyle('breakpoint', Number(e.target.value))}
                />
                <span className="ng-slider-value">{menuStyle.breakpoint}</span>
            </div>
        </div>
    )
}
