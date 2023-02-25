import { styled } from '@mui/material/styles'

import { SnowflakeIcon } from 'shared/icons/snowflake'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { XXLFont } from 'shared/ui/typography'

interface Props {
  title: string
  isMobile: boolean
}

export const ContactHeader = ({ title, isMobile }: Props) => {
  return (
    <Container isMobile={isMobile}>
      <StyledText isMobile={isMobile}>{title}</StyledText>
      <Snowflake>
        <SnowflakeIcon />
      </Snowflake>
    </Container>
  )
}

const Container = styled('div')<{ isMobile: boolean }>(
  ({ theme, isMobile }) => {
    const width = !isMobile
      ? getBreakpointsStylesByArray(theme, {
          width: [null, null, null, null, null, 270, null, 440, null],
        })
      : {}

    return {
      display: isMobile ? 'flex' : 'grid',
      gridTemplateRows: 'auto 1fr',
      justifyContent: isMobile ? 'space-between' : undefined,

      ...width,
    }
  },
)

const StyledText = styled(XXLFont)<{ isMobile: boolean }>(
  ({ theme, isMobile }) => ({
    ...getBreakpointsStylesByArray(theme, {
      marginBottom: isMobile
        ? [null]
        : [null, null, null, null, null, 156, null, 121, null],
    }),
  }),
)

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
