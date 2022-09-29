import React, { useEffect } from 'react'
// import { getCookieConsentValue } from "react-cookie-consent"

const Ad = ({ id }) => {
  // useEffect(() => {
  //   if (window.ezstandalone && location.hostname !== 'localhost') {
  //       ezstandalone.DEBUG = true;
  //       ezstandalone.define(id);
  //       if (!ezstandalone.enabled) {
  //         const allowCookies = getCookieConsentValue()
  //         ezstandalone.setDisablePersonalizedStatistics(!allowCookies)
  //         ezstandalone.setDisablePersonalizedAds(!allowCookies)
  //         ezstandalone.enable();
  //         ezstandalone.display();
  //       }
  //       else {
  //         ezstandalone.refresh();
  //       }
  //   }
  // },[])

  // return <div id={`ezoic-pub-ad-placeholder-${id}`}> </div>
  return <div></div>
}

export const ids = {
  sidebar: 102,
  topMobile: 103,
  footer: 104,
  absolute: 105,
  firstParagraph: 106,
  secondParagraph: 107,
  sidebarBottom: 108,
  sidebarMiddle: 109,
  inContent1: 110,
  inContent2: 111,
}

export default Ad
