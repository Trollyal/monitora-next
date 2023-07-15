import { DemographicItem, Filter, RatedItems, Rating } from "@/lib/types"
import { Box, Chip, Stack, Typography } from "@mui/material"
import { FC, useMemo, useState } from "react"
import { DataChip } from "./dataChip.component"
import { ExpandLess, ExpandMore } from "@mui/icons-material"

/**
 * Determines if the number is below the average.
 * @param number - The number to check.
 * @param average - The average value.
 * @returns Whether the number is below the average.
 */
const _isBelowAverage = (number: number, average: number) => number - average < -3

/**
 * Determines if the number is above the average.
 * @param number - The number to check.
 * @param average - The average value.
 * @returns Whether the number is above the average.
 */
const _isAboveAverage = (number: number, average: number) => number - average > 3

/**
 * Gets the rating for an item based on its percentage and the average percentage.
 * @param percentage - The item's percentage.
 * @param percentageAverage - The average percentage.
 * @returns The rating of the item.
 */
const _getItemRating = (percentage: number, percentageAverage: number): Rating => {
  if (_isAboveAverage(percentage, percentageAverage)) return Rating.ABOVE_AVERAGE
  if (_isBelowAverage(percentage, percentageAverage)) return Rating.BELOW_AVERAGE
  return Rating.AVERAGE
}

const BASE_SHOW_LIMIT = 10

interface Props {
  title: string
  items: DemographicItem[]
  filter: Filter | null
}

/**
 * Represents a section of data.
 * @example <DataSection title="Volnočasové aktivity" items={[...]} filter={Filter.ALL} />
 */
export const DataSection: FC<Props> = ({
  title,
  items,
  filter,
}) => {

  const [showAll, setShowAll] = useState(false)

  const { displayItems, hasMore } = useMemo(() => {
    const filteredItems: RatedItems[] = []
    let hasMore = false

    for (const item of items) {
      if (filteredItems.length >= BASE_SHOW_LIMIT) hasMore = true
      if (!showAll && filteredItems.length === BASE_SHOW_LIMIT) break
      const rating = _getItemRating(item.percent, item.percent_avg)
      
      switch (filter) {
        case Filter.ALL:
          filteredItems.push({
            label: item.label,
            percentage: item.percent,
            rating,
          })
          continue

        case Filter.ABOVE_AVERAGE:
          if (rating === Rating.ABOVE_AVERAGE) {
            filteredItems.push({
              label: item.label,
              percentage: item.percent,
              rating,
            })
          }
          continue

        case Filter.BELOW_AVERAGE:
          if (rating === Rating.BELOW_AVERAGE) {
            filteredItems.push({
              label: item.label,
              percentage: item.percent,
              rating,
            })
          }
          continue

        default: continue
      }
    }

    return {
      displayItems: filteredItems,
      hasMore,
    }
  }, [filter, showAll])

  return (
    <Box>

      <Typography variant="h6" marginBottom={1}>
        {title}
      </Typography>

      <Stack
        direction="row"
        flexWrap="wrap"
        gap={2}
      >
        {displayItems.map(({ label, percentage, rating }) => (
          <DataChip
            key={`${label}-${percentage}-${rating}`}
            label={label}
            percentage={percentage}
            rating={rating}
          />
        ))}

        {hasMore && 
          <Chip
            variant="outlined"
            onClick={() => setShowAll((prev) => !prev)}
            label={showAll ? 'Zobrazit méně' : 'Zobrazit vše'}
            icon={showAll ? <ExpandLess /> : <ExpandMore />}
          />
        }

        {displayItems.length === 0 &&
          <span>-</span>
        }

      </Stack>

    </Box>
  )
}