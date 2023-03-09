import React from 'react'
import Link from 'next/link'

import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

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
