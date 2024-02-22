import React from 'react'
import * as S from './styled'
import * as ui from '../../ui'
import RssFeedIcon from '@mui/icons-material/RssFeed'
import GitHubIcon from '@mui/icons-material/GitHub'
import LocalCafeIcon from '@mui/icons-material/LocalCafe'

const SocialBar = ({ children }) => (
    <S.Social>
        <li>
            <a href="https://bsky.app/profile/vincentwill.com" target="_blank" rel="noopener">
                <ui.Screenreader>Bluesky</ui.Screenreader>
                <svg width="24px" height="24px" viewBox="0 0 1452 1452" xmlns="http://www.w3.org/2000/svg"><path d="M725.669,684.169c85.954,-174.908 196.522,-329.297 331.704,-463.171c45.917,-43.253 98.131,-74.732 156.638,-94.443c80.779,-23.002 127.157,10.154 139.131,99.467c-2.122,144.025 -12.566,287.365 -31.327,430.015c-29.111,113.446 -96.987,180.762 -203.629,201.947c-36.024,5.837 -72.266,8.516 -108.726,8.038c49.745,11.389 95.815,32.154 138.21,62.292c77.217,64.765 90.425,142.799 39.62,234.097c-37.567,57.717 -83.945,104.938 -139.131,141.664c-82.806,48.116 -154.983,33.716 -216.529,-43.202c-28.935,-38.951 -52.278,-81.818 -70.026,-128.603c-12.177,-34.148 -24.156,-68.309 -35.935,-102.481c-11.779,34.172 -23.757,68.333 -35.934,102.481c-17.748,46.785 -41.091,89.652 -70.027,128.603c-61.545,76.918 -133.722,91.318 -216.529,43.202c-55.186,-36.726 -101.564,-83.947 -139.131,-141.664c-50.804,-91.298 -37.597,-169.332 39.62,-234.097c42.396,-30.138 88.466,-50.903 138.21,-62.292c-36.46,0.478 -72.702,-2.201 -108.725,-8.038c-106.643,-21.185 -174.519,-88.501 -203.629,-201.947c-18.762,-142.65 -29.205,-285.99 -31.328,-430.015c11.975,-89.313 58.352,-122.469 139.132,-99.467c58.507,19.711 110.72,51.19 156.637,94.443c135.183,133.874 245.751,288.263 331.704,463.171Z" /></svg>
            </a>
        </li>
        <li>
            <a href="https://github.com/Vincenius/wwebdev" target="_blank" rel="noopener">
                <ui.Screenreader>Github</ui.Screenreader>
                <GitHubIcon width="24px" height="24px" />
            </a>
        </li>
        {/* <li>
        https://more.ko-fi.com/brand-assets
            <a href="https://ko-fi.com/wweb_dev" target="_blank" rel="noopener">
                <ui.Screenreader>Ko-Fi Donation</ui.Screenreader>
                <LocalCafeIcon width="24px" height="24px" />
            </a>
        </li> */}
        <li>
            <a href="https://wweb.dev/rss/feed.xml">
                <ui.Screenreader>RSS Feed</ui.Screenreader>
                <RssFeedIcon width="24px" height="24px" />
            </a>
        </li>
        { children }
    </S.Social>
)

export default SocialBar
