import React, { useEffect } from 'react'

const Ad = () => {
  useEffect(() => {
    console.log('CALLED', window._carbonads)
    if (window._carbonads) {
      console.log('CALLED')
      window._carbonads.refresh()
    }
  }, [])
  return <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?serve=CEAILKQW&placement=wwebdev" id="_carbonads_js"></script>
}

export default Ad
