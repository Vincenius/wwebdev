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
        <a><Tab label="by Week" /></a>
      </Link>
      <Link href="/weekly/library" scroll={false}>
      <a><Tab label="by Content" /></a>
      </Link>
    </Tabs>
  )
}

export default Test
