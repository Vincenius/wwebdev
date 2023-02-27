import React, { useRef, useEffect } from 'react'

function Comments() {
    const ref = useRef(null);
    useEffect(() => {
      const scriptElement = document.createElement('script');
      scriptElement.async = true;
      scriptElement.crossOrigin = 'anonymous';
      scriptElement.src = 'https://utteranc.es/client.js';
  
      scriptElement.setAttribute('issue-term', 'og:title');
      scriptElement.setAttribute('label', 'comment');
      scriptElement.setAttribute(
        'repo',
        'wwebdev/utterances',
      );
      scriptElement.setAttribute(
        'theme',
        'preferred-color-scheme',
      );
  
      ref.current?.appendChild(scriptElement);
    }, []);
  
    return <div ref={ref} />;
}

export default Comments