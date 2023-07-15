'use client'

import { Demographics, Filter } from '@/lib/types'
import { FC, useLayoutEffect, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { Box, CssBaseline, Divider, Stack, ThemeProvider, Typography, createTheme } from '@mui/material'
import { themeOptions } from '@/lib/theme'
import { Filters } from './filters.component'
import { DataSection } from './dataSection.component'

const VALID_FILTERS = new Set(Object.values(Filter))

interface Props {
  data: Demographics
}

/**
 * Represents view for loaded demographic data
 * @example <DataView data={LoadedDemographicData} />
 */
export const DataView: FC<Props> = ({ data }) => {

  const router = useRouter()
  const params = useSearchParams()

  const filter = useMemo(() => {
    const filter = params.get('filter')
    
    if (!filter) return null
    if (!VALID_FILTERS.has(filter as Filter)) return null

    return filter as Filter
  }, [params])

  useLayoutEffect(() => {
    if (!filter) router.push(`.?filter=${Filter.ALL}`)
  }, [])
  
  return (
    <Box padding={2}>

      <Typography variant='h1' marginBottom={1}>
        {data.title}
      </Typography>

      <Typography variant='h3' marginBottom={4}>
        {data.subtitle}
      </Typography>

      <Filters activeFilter={filter}/>

      <Divider sx={{ marginTop: '1rem', marginBottom: '2rem' }} />

      <Stack gap={3}>
        {data.data.map(({ label, items }, index) => (
          <>
            <DataSection key={label} title={label} filter={filter} items={items} />
            {index + 1 < data.data.length && <Divider />}
          </>
        ))}
      </Stack>
      
    </Box>
  )
}
