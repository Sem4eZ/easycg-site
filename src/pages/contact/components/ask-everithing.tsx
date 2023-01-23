import { styled } from '@mui/material/styles'
import { useRef } from 'react'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { useRevealBlock } from 'shared/lib/use-reveal-block'
import { XLFont } from 'shared/ui/typography'

export const ContactPageAskEverything = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  useRevealBlock({ ref: containerRef })

  return (
    <Container ref={containerRef}>
      <Title>
        <span>don’t worry. you can ask us about everything</span>
        <span>we sure, that there are not silly questions ever</span>
      </Title>
      <Remark>
        <p>
          we prefer to work as a team and will be glad to give answers on
          everything
        </p>
        <p>you’re welcome!</p>
      </Remark>
    </Container>
  )
}

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  '& p': {
    margin: 0,
  },
  ...getBreakpointsStylesByArray(theme, {
    gap: [32, null, null, 45, 32, null, 64, null, 48],
    borderTop: [
      'unset',
      null,
      null,
      null,
      null,
      null,
      `2px solid ${theme.palette.text.disabled}`,
    ],
  }),
}))

const Title = styled(XLFont)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  ...getBreakpointsStylesByArray(theme, {
    gap: [0, 8, 0],
  }),
}))

const Remark = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  color: theme.palette.text.secondary,
  '& p': {
    margin: 0,
  },
  ...getBreakpointsStylesByArray(theme, {
    gap: [16, null, 18, 0, 4, null, 6],
  }),
}))