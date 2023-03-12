import { createContext, useEffect, useState } from 'react'
import Script from 'next/script'

export const SponsorNinjaContext = createContext(null)

export default ({ children }) => {
  const [sponsorNinjaValue, setSponsorNinjaValue] = useState()

  return <>
    <Script
      src="/widget.js"
      onLoad={() => {
        fetch('https://app.sponsor.ninja/api/project?id=63d7dd38d907a8ed61dca67f')
          .then(res => res.json())
          .then(data => setSponsorNinjaValue(data))
      }}
    />
    <SponsorNinjaContext.Provider value={sponsorNinjaValue}>
      { children }
    </SponsorNinjaContext.Provider>
  </>
}