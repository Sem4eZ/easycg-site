import { styled } from '@mui/material/styles'

import { SnowflakeIcon } from 'shared/icons/snowflake'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { useGetTime } from 'shared/lib/use-get-time.ts'
import { useGetUserTime } from 'shared/lib/use-get-user-time'

export const TimeRemark = () => {
  const { timezone, time } = useGetUserTime()
  const { time: ourTime } = useGetTime(6)

  return (
    <Container>
      <Item>
        <Label>
          <Icon>
            <SnowflakeIcon />
          </Icon>
          our current time:
        </Label>
        <Time>{`${ourTime.getHours()}:${ourTime.getMinutes()} (+6 GTM)`}</Time>
      </Item>

      <Item>
        <Label>
          <Icon>
            <SnowflakeIcon />
          </Icon>
          your currect time:&nbsp;
        </Label>
        <Time>{`${time.getHours()}:${time.getMinutes()} (${timezone} GTM)`}</Time>
      </Item>
    </Container>
  )
}

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  ...getBreakpointsStylesByArray(theme, {
    flexDirection: ['column', null, null, 'row'],
    justifyContent: [
      'space-between',
      null,
      null,
      null,
      null,
      null,
      'flex-start',
    ],
    gap: [24, null, 16, 0, null, null, 80],
    marginTop: [36, null, 8, 28, 16, null, 24],
    maxWidth: ['100%', 273, '100%'],
  }),
}))

const Item = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}))

const Icon = styled('div')(({ theme }) => ({
  display: 'flex',
  color: theme.palette.text.primary,
  ...getBreakpointsStylesByArray(theme, {
    height: [16, null, null, null, null, null, 34],
    marginRight: [8, null, null, null, 16, null, 24],
  }),
  '& svg': {
    height: '100%',
    width: 'auto',
  },
}))

const Label = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  ...getBreakpointsStylesByArray(theme, {
    marginRight: [16, null, null, null, 8, null, 16],
  }),
}))

const Time = styled('div')(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    textAlign: ['end'],
  }),
}))
