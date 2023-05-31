import React from 'react'
import styles from './AffiliateAd.module.css'

export const affiliates = [
  {
    link: 'https://try.carrd.co/9mphxky8',
    img: '/affiliate/carrd.png',
    title: 'Carrd',
    text: 'build one-page sites for pretty much anything - for free.'
  },
  {
    link: 'https://m.do.co/c/5ec9f49fcf88',
    img: '/affiliate/digitalocean.jpg',
    title: 'Digital Ocean',
    text: 'the simple cloud. Sign up now and get 200$ in credit.'
  },
  {
    link: 'https://mrscraper.com/?via=vincent',
    img: '/affiliate/mrscraper.png',
    title: 'MrScraper',
    text: 'a web scraper with a visual builder, proxy rotation, API and more.'
  },
  {
    link: 'blinkist.o6eiov.net/WqYoLM',
    img: '/affiliate/blinkist.png',
    title: 'Blinkist',
    text: 'get the key ideas from non-fiction bestsellers in minutes, not hours.'
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
