import React from 'react'
import * as S from './styled'
import * as ui from '../../ui'
import RssFeedIcon from '@mui/icons-material/RssFeed'
import TwitterIcon from '@mui/icons-material/Twitter'
import GitHubIcon from '@mui/icons-material/GitHub'

const SocialBar = ({ children }) => (
    <S.Social>
        <li>
            <a href="https://twitter.com/wweb_dev" target="_blank" rel="noopener">
                <ui.Screenreader>Twitter</ui.Screenreader>
                <TwitterIcon width="24px" height="24px" />
            </a>
        </li>
        <li>
            <a href="https://github.com/wwebdev" target="_blank" rel="noopener">
                <ui.Screenreader>Github</ui.Screenreader>
                <GitHubIcon width="24px" height="24px" />
            </a>
        </li>
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
