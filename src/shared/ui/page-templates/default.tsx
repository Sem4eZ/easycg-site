import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import { ArrowThin } from 'shared/icons/arrow-thin'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { pxToRem } from 'shared/lib/px-to-rem'
import { spaceArr } from 'shared/theme'

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
  const navigate = useNavigate()

  const titleRef = useRef<HTMLSpanElement | null>(null)
  useEffect(() => {
    const title = titleRef.current
    if (!title) return
    setTimeout(() => {
      title.classList.add('animate')
    }, 0)
  }, [])

  return (
    <div style={{ overflow: 'hidden', paddingTop: '24px' }}>
      <BackButton
        startIcon={<ArrowThin />}
        endIcon=""
        onClick={() => navigate(-1)}>
        back
      </BackButton>
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

const BackButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.secondary,
  ...getBreakpointsStylesByArray(theme, {
    marginLeft: spaceArr,
    marginRight: spaceArr,
  }),
}))

const Title = styled(XXXLFont)(({ theme }) => ({
  position: 'relative',
  marginTop: pxToRem(114),
  ...getBreakpointsStylesByArray(theme, {
    paddingLeft: spaceArr,
    paddingRight: spaceArr,
    marginTop: [114, null, null, null, 258, 234, 85, null, 188],
  }),
  '&.animate': {
    '&::before': {
      transform: 'translateX(0)',
    },
  },
  '&::before': {
    boxSizing: 'border-box',
    content: "''",
    position: 'absolute',
    left: 0,
    top: 0,
    height: '2px',
    width: '100%',
    backgroundColor: theme.palette.text.disabled,
    transform: 'translateX(-100%)',
    transition: 'transform 1s',
    ...getBreakpointsStylesByArray(theme, {
      marginLeft: spaceArr,
      display: ['none', null, null, null, null, null, 'block'],
    }),
  },
}))

const DecorationTextBlock = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '-328px',
  left: '-192px',
  zIndex: '-1',
  ...getBreakpointsStylesByArray(theme, {
    paddingLeft: spaceArr,
    paddingRight: spaceArr,
    top: [-130, -130, -141, -141, -196, -196, -266, null, -328],
    left: [-52, -110, -60, -113, -60, -132, -267, null, -192],
  }),
}))

const SubtitleContentBlock = styled('div')(({ theme }) => ({
  marginTop: pxToRem(24),
  ...getBreakpointsStylesByArray(theme, {
    paddingLeft: spaceArr,
    paddingRight: spaceArr,
    marginTop: [24, 16, 16, 16, 24, 16, 16, null, 24],
  }),
}))

const FilterBlock = styled('section')(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    paddingLeft: spaceArr,
    paddingRight: spaceArr,
    marginTop: [168, 135, 112, 141, 267, null, 297, null, 288],
  }),
}))

const ContentBlock = styled('div')(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    marginTop: [136, 168, 112, 141, 267, 273, 249, null, 297],
  }),
}))
