import React, { useEffect, useState } from 'react'

const Ad = () => {
  const [hasAdblocker, setHasAdblocker] = useState(false)
  useEffect(() => {
    if (window._carbonads) {
      window._carbonads.refresh()
    } else {
      setHasAdblocker(true)
    }
  }, [])

  return !hasAdblocker
    ? <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?serve=CEAILKQW&placement=wwebdev" id="_carbonads_js"></script>
    : <div id="carbon">
        <span className="carbon-wrap">
          <span className="carbon-img">
            <img src="http://localhost:3000/adblock.jpg" alt="support me" style={{ maxWidth: '130px' }} width="130" height="100" border="0" />
          </span>
          <span className="carbon-text">Help me to keep wweb.dev free and open-source by disabling AdBlock.</span>
        </span>
      </div>
}

export default Ad
