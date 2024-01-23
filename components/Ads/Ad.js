import React, { useEffect, useState } from 'react'
import AffiliateAd, { affiliates } from './AffiliateAd'
import HtmlRev from './HtmlRev'

// https://ethical-ad-client.readthedocs.io/en/latest/

const Ad = () => {
  // const [affiliateAd, setAffiliateAd] = useState(null)

  // useEffect(() => {
  //   if (window.ethicalads) {
  //     window.ethicalads.load()
  //   } else {
  //     const random = Math.floor(Math.random() * affiliates.length)
  //     setAffiliateAd(random)
  //   }
  // }, [])

  return <HtmlRev />

  // return affiliateAd === null
  //   ? <div className="bordered horizontal adaptive" data-ea-publisher="wwebdev" data-ea-type="image" data-ea-manual="true"></div>
  //   : <AffiliateAd affiliateAd={affiliateAd}/>
}

export default Ad
