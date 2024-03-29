import React, { useRef, useEffect } from 'react'

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
            'vincenius/wwebdev-comments',
        );
        scriptElement.setAttribute(
            'theme',
            'github-light',
        );
        ref.current?.appendChild(scriptElement);
    }, []);

    return <div ref={ref} />;
}

export default Comments