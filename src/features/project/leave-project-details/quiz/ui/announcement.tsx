import { styled } from '@mui/material/styles'

import { SnowflakeIcon } from 'shared/icons/snowflake'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { LFont, XLFont } from 'shared/ui/typography'

interface Props {
  title: React.ReactNode
  description: React.ReactNode
}

export const Announcement = ({ title, description }: Props) => {
  return (
    <Container>
      <XLFont>{title}</XLFont>
      <Icon>
        <SnowflakeIcon />
      </Icon>
      <LFont>{description}</LFont>
    </Container>
  )
}

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  ...getBreakpointsStylesByArray(theme, {
    gap: [32, null, 56, null, null, null, 64],
  }),
}))

const Icon = styled('div')(({ theme }) => ({
  display: 'flex',
  color: theme.palette.accent,
  ...getBreakpointsStylesByArray(theme, {
    height: [24, null, 48, null, null, null, 72],
  }),
  '& svg': {
    height: '100%',
    width: 'auto',
  },
}))
