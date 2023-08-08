import { styled } from '@mui/material/styles'

import { SnowflakeIcon } from 'shared/icons/snowflake'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { XLFontContent } from 'shared/ui/typography'

interface Props {
  title: string
}

export const ContactPageHeader = ({ title }: Props) => {
  return (
    <Container>
      <XLFontContent>{title}</XLFontContent>
      <Snowflake>
        <SnowflakeIcon />
      </Snowflake>
    </Container>
  )
}

const Container = styled('div')(({ theme }) => ({
  display: 'grid',
  ...getBreakpointsStylesByArray(theme, {
    gridRowGap: [16, null, 24, null, 16, null, 48],
    marginBottom: [64, null, null, 56, 48, null, 112, null, 104],
  }),
}))

const Snowflake = styled('div')(({ theme }) => ({
  color: theme.palette.accent,
  ...getBreakpointsStylesByArray(theme, {
    height: [42, null, null, null, 44, null, 88],
  }),
  '& svg': {
    height: '100%',
    width: 'auto',
  },
}))
