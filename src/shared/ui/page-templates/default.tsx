import { styled } from '@mui/material/styles'
import { useEffect, useRef } from 'react'

import { pxToRem } from 'shared/lib/px-to-rem'

import { XXXLFont } from '../typography'

interface Props {
  title: string
  decorationText?: React.ReactNode
  subtitleContent?: React.ReactNode
  filter?: React.ReactNode
  children: React.ReactNode
}

export const Page = ({
  title,
  subtitleContent,
  filter,
  decorationText,
  children,
}: Props) => {
  const titleRef = useRef<HTMLSpanElement | null>(null)
  useEffect(() => {
    const title = titleRef.current
    if (!title) return
    setTimeout(() => {
      title.classList.add('animate')
    }, 0)
  }, [])

  return (
    <div>
      back
      <Title variant="h1" ref={titleRef}>
        {decorationText && (
          <DecorationTextBlock>{decorationText}</DecorationTextBlock>
        )}
        {title}
      </Title>
      {subtitleContent && (
        <SubtitleContentBlock>{subtitleContent}</SubtitleContentBlock>
      )}
      {filter && <FilterBlock>{filter}</FilterBlock>}
      <ContentBlock>{children}</ContentBlock>
    </div>
  )
}

const Title = styled(XXXLFont)(({ theme }) => ({
  position: 'relative',
  marginTop: pxToRem(114),
  '&.animate': {
    '&::before': {
      transform: 'translateX(0)',
    },
  },
  '&::before': {
    content: "''",
    position: 'absolute',
    left: 0,
    top: 0,
    height: '2px',
    width: '100vw',
    backgroundColor: theme.palette.text.disabled,
    transform: 'translateX(-110vw)',
    transition: 'transform 1s',
  },
  [theme.breakpoints.up('tablet')]: {
    marginTop: pxToRem(258),
  },
  [theme.breakpoints.up('tablet_landscape')]: {
    marginTop: pxToRem(234),
  },
  [theme.breakpoints.up('laptop')]: {
    marginTop: pxToRem(85),
  },
  [theme.breakpoints.up('desktop')]: {
    marginTop: pxToRem(188),
  },
}))

const DecorationTextBlock = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '-251px',
  left: '-192px',
  zIndex: '-1',
}))

const SubtitleContentBlock = styled('div')(({ theme }) => ({
  marginTop: pxToRem(24),
  [theme.breakpoints.up('mobile_s_landscape')]: {
    marginTop: pxToRem(16),
  },
  [theme.breakpoints.up('mobile')]: {
    marginTop: pxToRem(16),
  },
  [theme.breakpoints.up('tablet')]: {
    marginTop: pxToRem(24),
  },
  [theme.breakpoints.up('tablet_landscape')]: {
    marginTop: pxToRem(16),
  },
  [theme.breakpoints.up('laptop')]: {
    marginTop: pxToRem(16),
  },
  [theme.breakpoints.up('desktop')]: {
    marginTop: pxToRem(24),
  },
}))

const FilterBlock = styled('section')(({ theme }) => ({
  marginTop: pxToRem(168),
  [theme.breakpoints.up('mobile_s_landscape')]: {
    marginTop: pxToRem(135),
  },
  [theme.breakpoints.up('mobile')]: {
    marginTop: pxToRem(112),
  },
  [theme.breakpoints.up('mobile_landscape')]: {
    marginTop: pxToRem(141),
  },
  [theme.breakpoints.up('tablet')]: {
    marginTop: pxToRem(267),
  },
  [theme.breakpoints.up('laptop')]: {
    marginTop: pxToRem(297),
  },
  [theme.breakpoints.up('desktop')]: {
    marginTop: pxToRem(288),
  },
}))

const ContentBlock = styled('div')(({ theme }) => ({
  marginTop: pxToRem(168),
  [theme.breakpoints.up('mobile_s_landscape')]: {
    marginTop: pxToRem(135),
  },
  [theme.breakpoints.up('mobile')]: {
    marginTop: pxToRem(112),
  },
  [theme.breakpoints.up('mobile_landscape')]: {
    marginTop: pxToRem(141),
  },
  [theme.breakpoints.up('tablet')]: {
    marginTop: pxToRem(267),
  },
  [theme.breakpoints.up('laptop')]: {
    marginTop: pxToRem(297),
  },
  [theme.breakpoints.up('desktop')]: {
    marginTop: pxToRem(288),
  },
}))
