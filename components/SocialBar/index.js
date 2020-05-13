import React from 'react'
import * as S from './styled'
import * as ui from '../../ui'
import RssFeedIcon from '@material-ui/icons/RssFeed'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import GitHubIcon from '@material-ui/icons/GitHub'
import MailOutlineIcon from '@material-ui/icons/MailOutline'

const SocialBar = props => (
    <S.Social>
        <li>
            <a href="https://twitter.com/wweb_dev" target="_blank" rel="noopener">
                <ui.Screenreader>Twitter</ui.Screenreader>
                <TwitterIcon />
            </a>
        </li>
        <li>
            <a href="https://www.facebook.com/wweb.dev.blog" target="_blank" rel="noopener">
                <ui.Screenreader>Facebook</ui.Screenreader>
                <FacebookIcon />
            </a>
        </li>
        <li>
            <a href="https://github.com/wwebdev" target="_blank" rel="noopener">
                <ui.Screenreader>Github</ui.Screenreader>
                <GitHubIcon />
            </a>
        </li>
        <li>
            <a href="https://wweb.dev/rss.xml">
                <ui.Screenreader>RSS Feed</ui.Screenreader>
                <RssFeedIcon />
            </a>
        </li>
        <li wfd-id="5">
            <a href="mailto:info@wweb.dev">
                <ui.Screenreader>E-Mail</ui.Screenreader>
                <MailOutlineIcon />
            </a>
        </li>
    </S.Social>
)

export default SocialBar
