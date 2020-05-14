import React from 'react'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { SubscribeForm, Layout, LinkBox, PrevNext } from '../../components'
import * as ui from '../../ui'

const fetchWeekly = async () => {
    const response = await fetch('/weekly/data/25.json')
    const result = await response.json()
    return result
}

const Weekly = () => {
    const info = useQuery('weekly25', fetchWeekly)

    return <div>TODO</div>

}

export default Weekly