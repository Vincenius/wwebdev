import React from 'react'
import styles from './AffiliateAd.module.css'

export const affiliates = [{
    link: 'https://www.git-tower.com/?via=vincent',
    img: '/affiliate/tower.png',
    title: 'Git Tower',
    text: 'the most powerful Git client for Mac and Windows.'
  }, {
    link: 'https://refind.com/?utm_source=newsletter&utm_medium=barter&utm_campaign=E1QJg_NpD4MddPPeoFBaLA',
    img: '/affiliate/refind.png',
    title: 'Refind',
    text: 'picks 5 links every day that make you smarter, tailored to your interests.'
  }, {
    link: 'http://www.lambdatest.com?fp_ref=vincent78',
    img: '/affiliate/lambdatest.png',
    title: 'Lambdatest',
    text: 'test across 3000+ different browsers, real devices & operating systems.'
  }, {
    link: 'https://m.do.co/c/5ec9f49fcf88',
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

  return <a href={affiliate.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', marginBottom: '1em', display: 'block' }}>
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
