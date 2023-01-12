import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import { ArrowFatIcon } from 'shared/icons/arrow-fat'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { pxToRem } from 'shared/lib/px-to-rem'
import { useGetDevice } from 'shared/lib/use-get-device'
import { maxWidth, spaceArr } from 'shared/theme'

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

  const { isDesktopS, isLaptop, isMacbook, isDesktop } = useGetDevice()

  const showBackButton = isDesktopS || isLaptop || isMacbook || isDesktop

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
      {showBackButton && (
        <BackButtonWrapper>
          <BackButton
            startIcon={<ArrowFatIcon />}
            endIcon=""
            onClick={() => navigate(-1)}>
            back
          </BackButton>
        </BackButtonWrapper>
      )}
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

const BackButtonWrapper = styled('div')(() => ({
  maxWidth: maxWidth,
  marginLeft: 'auto',
  marginRight: 'auto',
}))

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
  maxWidth: maxWidth,
  marginLeft: 'auto',
  marginRight: 'auto',
  ...getBreakpointsStylesByArray(theme, {
    paddingLeft: spaceArr,
    paddingRight: spaceArr,
    marginTop: [45, 103, 56, null, 258, 234, 85, null, 188],
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
    left: [-92, -110, -60, -113, -60, -132, -267, null, -192],
  }),
}))

const SubtitleContentBlock = styled('div')(({ theme }) => ({
  maxWidth: maxWidth,
  marginLeft: 'auto',
  marginRight: 'auto',
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
    marginTop: [136, null, 112, 141, 267, null, 297, null, 288],
  }),
}))

const ContentBlock = styled('div')(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    marginTop: [68, 76, 113, 95, 136, 273, 249, null, 297],
  }),
}))
