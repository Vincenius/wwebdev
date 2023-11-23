import React from 'react'
import * as ui from '../../ui'
import Layout from './index'
import Ad from '../Ads/Ad'

const SidebarLayout = ({ children, ...rest }) => (
    <Layout {...rest}>
        <ui.Container>
            <ui.SidebarContainer>
                <ui.SidebarMain>
                    { children }
                </ui.SidebarMain>
                <ui.Sidebar>
                    <Ad />
                </ui.Sidebar>
            </ui.SidebarContainer>
        </ui.Container>
    </Layout>
)

export default SidebarLayout
