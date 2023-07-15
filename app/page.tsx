'use client'
import { Demographics } from '@/lib/types'
import { loadDemographics } from '@/lib/api'
import { useEffect, useState } from 'react'
import { DataView } from './components/dataView.module' 
import { Theme } from '@/lib/theme'
import { Loading } from './components/loading.component'

export default function Home() {

  const [data, setData] = useState<Demographics>()
  
  useEffect(() => {
    const loadData = async () => {
      const data = await loadDemographics()
      setData(data)
    }

    loadData()
  }, [])

  return (
    <Theme>
      {!!data
        ? <DataView data={data} />
        : <Loading />
      }
    </Theme>
  )
}
