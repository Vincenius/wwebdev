import React, { useEffect, useState } from 'react'
// https://ethical-ad-client.readthedocs.io/en/latest/

const Ad = () => {
  const [hasAdblocker, setHasAdblocker] = useState(false)
  useEffect(() => {
    if (window.ethicalads) {
      window.ethicalads.load()
    } else {
      setHasAdblocker(true)
    }
  }, [])

  return !hasAdblocker
    ? <div className="bordered horizontal adaptive" data-ea-publisher="wwebdev" data-ea-type="image" data-ea-manual="true"></div>
    : <div id="carbon">
        <span className="carbon-wrap">
          <span className="carbon-img">
            <img src="/adblock.jpg" alt="illustration of a desk with laptop" style={{ maxWidth: '130px' }} width="130" height="100" border="0" />
          </span>
          <span className="carbon-text">Help me to keep wweb.dev free and open-source by disabling AdBlock.</span>
        </span>
      </div>
}

export default Ad
