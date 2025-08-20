import React from 'react'
import styles from './AffiliateAd.module.css'

const AffiliateAd = () => {
  return <a href="https://statusscout.dev?utm_source=wweb.dev" target="_blank" rel="noopener" style={{ textDecoration: 'none', marginBottom: '1em', display: 'block' }}>
    <div id="carbon">
      <span className="carbon-wrap">
        <span className="carbon-img">
          <img src="/affiliate/statusscout.png" alt="Get a complete overview of your website’s security, performance, and more. " style={{ maxWidth: '130px', objectFit: 'cover' }} width="130" height="100" border="0" />
        </span>
        <span className="carbon-text" style={{ padding: '8px' }}>
          <span className={styles.text}>
            <span className={styles.title}>StatusScout</span> - Get an overview of your website’s security, performance & more.
          </span>
        </span>
      </span>
    </div>
  </a>
}

export default AffiliateAd
