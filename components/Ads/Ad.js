import React, { useEffect } from 'react'
import { useRouter } from 'next/router';

const Ad = ({ id }) => {
  const router = useRouter();

  const { ads } = router.query;

  useEffect(() => {
    if (window.ezstandalone && ads === 'enable') {
        ezstandalone.DEBUG = true;
        console.log('define', id)
        ezstandalone.define(id);
        if (!ezstandalone.enabled) {
          ezstandalone.setDisablePersonalizedStatistics(true); // disable for now
          ezstandalone.setDisablePersonalizedAds(true); // disable for now
          ezstandalone.enable();
          ezstandalone.display();
        }
        else {
          ezstandalone.refresh();
        }
    }
  },[])

  return <div id={`ezoic-pub-ad-placeholder-${id}`}> </div>
}

export const ids = {
  sidebar: 102,
  topMobile: 103,
  footer: 104,
  absolute: 105,
  firstParagraph: 106,
  secondParagraph: 107,
}

export default Ad
