import { useState } from 'react'
import type { ReactNode } from 'react'
import Background1 from './animatedCssBg/Background1'
import Background2 from './animatedCssBg/Background2'
import Background3 from './animatedCssBg/Background3'
import '../../styles/animated-css-background-generator.css'

const BACKGROUNDS = [
    { name: 'Bokeh effect animation', image: '/resources/animated-bg-generator/bg1.jpg' },
    { name: 'Pure CSS animation', image: '/resources/animated-bg-generator/bg2.jpg' },
    { name: 'Rectangle animation', image: '/resources/animated-bg-generator/bg3.jpg' },
]

interface Props {
    ad?: ReactNode
    description?: ReactNode
    featured?: ReactNode
}

export default function AnimatedCssBackgroundGenerator({ ad, description, featured }: Props) {
    const [activeBg, changeBg] = useState(0)

    return (
        <div className="ui-container">
            <h1 className="ui-section-headline">Animated CSS Background Generator</h1>
            <div className="ui-sidebar-container acbg-sidebar-container">
                <article className="ui-sidebar-article">
                    {activeBg === 0 && <Background1 />}
                    {activeBg === 1 && <Background2 />}
                    {activeBg === 2 && <Background3 />}

                    {description}

                    <h2 className="ui-subheadline">You might also like</h2>
                    {featured}
                </article>
                <aside className="ui-sidebar">
                    {ad}
                    <h2 className="ui-subheadline no-margin-bottom">Choose a background</h2>
                    <div className="acbg-row">
                        {BACKGROUNDS.map((bg, i) => (
                            <button
                                type="button"
                                key={bg.image}
                                className={`ui-unbutton acbg-card${activeBg === i ? ' active' : ''}`}
                                aria-pressed={activeBg === i}
                                onClick={() => changeBg(i)}
                            >
                                <img src={bg.image} alt={`${bg.name} background preview`} />
                            </button>
                        ))}
                    </div>
                    <br />
                </aside>
            </div>
        </div>
    )
}
