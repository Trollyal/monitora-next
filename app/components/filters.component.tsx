'use client'

import { Filter } from "@/lib/types";
import { Equalizer, People, TrendingDown, TrendingUp } from "@mui/icons-material";
import { Chip, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface Props {
  activeFilter: Filter | null
}

/**
 * Interactive buttons for filtering demographic data based on their relation to average values
 */
export const Filters: FC<Props> = ({ activeFilter }) => {

  const router = useRouter()

  return (
    <Stack direction="row" gap={2}>

      <Chip
        color="primary"
        variant={activeFilter === Filter.ALL ? 'filled' : 'outlined'}
        icon={<Equalizer />}
        label="Vše"
        onClick={() => router.push(`./?filter=${Filter.ALL}`)}
      />

      <Chip
        color="primary"
        variant={activeFilter === Filter.ABOVE_AVERAGE ? 'filled' : 'outlined'}
        icon={<TrendingUp />}
        label="Nadprůměr"
        onClick={() => router.push(`./?filter=${Filter.ABOVE_AVERAGE}`)}
        />
      
      <Chip
        color="primary"
        variant={activeFilter === Filter.BELOW_AVERAGE ? 'filled' : 'outlined'}
        icon={<TrendingDown />}
        label="Podprůměr"
        onClick={() => router.push(`./?filter=${Filter.BELOW_AVERAGE}`)}
      />

    </Stack>
  )
}