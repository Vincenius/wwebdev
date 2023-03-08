import React from 'react'
import Link from 'next/link'

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const Test = ({ activeTab }) => {
  return (
    <Tabs
      value={activeTab}
      indicatorColor="primary"
      textColor="primary"
      onChange={() => {}}
      aria-label="disabled tabs example"
    >
      <Link href="/weekly" scroll={false}>
        <Tab label="by Week" />
      </Link>
      <Link href="/weekly/library" scroll={false}>
        <Tab label="by Content" />
      </Link>
    </Tabs>
  )
}

export default Test
