import React, { useEffect, useState } from 'react'
import AffiliateAd from './AffiliateAd'
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
    : <AffiliateAd />
}

export default Ad
