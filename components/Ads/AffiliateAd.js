import React from 'react'

export const affiliates = [{
    link: 'https://links.wweb.dev/M7vHb',
    img: '/affiliate/tower.png',
    text: 'Git Tower - the most powerful Git client for Mac and Windows.'
  }, {
    link: 'https://links.wweb.dev/qgMNX',
    img: '/affiliate/refind.png',
    text: 'Refind - picks 5 links every day that make you smarter, tailored to your interests.'
  }, {
    link: 'https://links.wweb.dev/UbnpO',
    img: '/affiliate/lambdatest.png',
    text: 'Lambdatest - test across 3000+ different browsers, real devices & operating systems.'
  }
]

const AffiliateAd = ({ affiliateAd = 0 }) => {
  const affiliate = affiliates[affiliateAd]

  if (!affiliate) {
    return <div></div>
  }

  return <a href={affiliate.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
    <div id="carbon">
      <span className="carbon-wrap">
        <span className="carbon-img">
          <img src={affiliate.img} alt="todo" style={{ maxWidth: '130px' }} width="130" height="100" border="0" />
        </span>
        <span className="carbon-text">
          <span>{affiliate.text}</span>
        </span>
      </span>
    </div>
    <div style={{ fontSize: '0.65em', fontStyle: 'italic', textAlign: 'right', padding: '.5em 1em 0', maxWidth: '320px' }}>Sponsored</div>
  </a>
}

export default AffiliateAd
