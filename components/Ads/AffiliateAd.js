import React from 'react'
import styles from './AffiliateAd.module.css'

export const affiliates = [{
    link: 'https://links.wweb.dev/M7vHb',
    img: '/affiliate/tower.png',
    title: 'Git Tower',
    text: 'the most powerful Git client for Mac and Windows.'
  }, {
    link: 'https://links.wweb.dev/qgMNX',
    img: '/affiliate/refind.png',
    title: 'Refind',
    text: 'picks 5 links every day that make you smarter, tailored to your interests.'
  }, {
    link: 'https://links.wweb.dev/UbnpO',
    img: '/affiliate/lambdatest.png',
    title: 'Lambdatest',
    text: 'test across 3000+ different browsers, real devices & operating systems.'
  }, {
    link: 'https://links.wweb.dev/ZV0Wd',
    img: '/affiliate/digitalocean.jpg',
    title: 'Digital Ocean',
    text: 'the simple cloud. Sign up now and get 200$ in credit.'
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
          <img src={affiliate.img} alt={affiliate.text} style={{ maxWidth: '130px', objectFit: 'cover' }} width="130" height="100" border="0" />
        </span>
        <span className="carbon-text">
          <span>
            <span className={styles.title}>{affiliate.title}</span> - {affiliate.text}
          </span>
        </span>
      </span>
    </div>
    <div style={{ fontSize: '0.65em', fontStyle: 'italic', textAlign: 'right', padding: '.5em 1em 0', maxWidth: '330px', margin: '0 auto' }}>Sponsored</div>
  </a>
}

export default AffiliateAd
