'use client'

import { Rating } from "@/lib/types"
import { Avatar, Chip, styled } from "@mui/material"
import { FC } from "react"

const StyledChip = styled(Chip)({
  '& .MuiChip-avatar': {
    width: 'auto',
    borderRadius: '20px',
    padding: '0 .5rem'
  }
})

interface Props {
  label: string
  percentage: number
  rating: Rating
}

/**
 * Chip for displaying demographic item data with indication on value relative to average
 * @example <DataChip label="Sledování televize" percentage={23.9889009} rating={Rating.ABOVE_AVERAGE} />
 */
export const DataChip: FC<Props> = ({
  label,
  percentage,
  rating,
}) => {

  return (
    <StyledChip
      avatar={
        <Avatar sx={{
          bgcolor: rating === Rating.BELOW_AVERAGE ? 'error.main' : rating === Rating.ABOVE_AVERAGE ? 'success.main' : '',
          color: rating === Rating.AVERAGE ? 'black !important' : 'white !important',
        }}>
          {percentage.toFixed()}%
        </Avatar>
      }
      key={label}
      label={label}
    />
  )
}