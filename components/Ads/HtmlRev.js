import React from 'react'
import styles from './AffiliateAd.module.css'

const AffiliateAd = () => {
  return <a href="https://htmlrev.com" target="_blank" rel="noopener" style={{ textDecoration: 'none', marginBottom: '1em', display: 'block' }}>
    <div id="carbon">
      <span className="carbon-wrap">
        <span className="carbon-img">
          <img src="/affiliate/htmlrev.png" alt="1000+ free HTML templates for web developers" style={{ maxWidth: '130px', objectFit: 'cover' }} width="130" height="100" border="0" />
        </span>
        <span className="carbon-text">
          <span>
            <span className={styles.title}>HTMLrev</span> - 1000+ free HTML templates for web developers
          </span>
        </span>
      </span>
    </div>
    <div style={{ fontSize: '0.65em', fontStyle: 'italic', textAlign: 'right', padding: '.5em 1em 0', maxWidth: '330px', margin: '0 auto' }}>Sponsored</div>
  </a>
}

export default AffiliateAd
