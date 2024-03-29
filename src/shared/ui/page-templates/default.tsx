import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import { ArrowFatIcon } from 'shared/icons/arrow-fat'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { pxToRem } from 'shared/lib/px-to-rem'
import { useGetDevice } from 'shared/lib/use-get-device'
import { articleSpaceArr, maxWidth, spaceArr } from 'shared/theme'
import { Footer } from 'shared/ui/footer'
import { Header } from 'shared/ui/header'

import { XXLFont, XXXLFont } from '../typography'
import useProjects from './../../../entities/project/data'

type PageType = 'default' | 'article'

interface Props {
  title: string | React.ReactNode
  decorationText?: React.ReactNode
  subtitleContent?: React.ReactNode
  filter?: React.ReactNode
  children: React.ReactNode
  type?: PageType
  titleSize?: 'small' | 'normal'
}

export const Page = ({
  title,
  subtitleContent,
  filter,
  decorationText,
  children,
  type = 'default',
  titleSize = 'normal',
  ...rest
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

  const Title = titleSize === 'normal' ? NormalTitle : SmallTitle
  const projects = useProjects()

  return (
    <>
      <Header projectsCount={projects.length} />
      <main>
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
          <Title type={type} variant="h1" ref={titleRef}>
            {decorationText && (
              <DecorationTextBlock {...rest}>
                {decorationText}
              </DecorationTextBlock>
            )}
            {title}
          </Title>
          {subtitleContent && (
            <SubtitleContentBlock type={type}>
              {subtitleContent}
            </SubtitleContentBlock>
          )}
          {filter && <FilterBlock type={type}>{filter}</FilterBlock>}
          <ContentBlock>{children}</ContentBlock>
        </div>
      </main>
      <Footer projectsCount={projects.length} />
    </>
  )
}

const BackButtonWrapper = styled('div')(() => ({
  maxWidth: maxWidth,
  marginLeft: 'auto',
  marginRight: 'auto',
}))

const BackButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.secondary,
  '&:active': {
    color: theme.palette.text.disabled,
  },
  ...getBreakpointsStylesByArray(theme, {
    marginLeft: spaceArr,
    marginRight: spaceArr,
  }),
}))

const SmallTitle = styled(XXLFont)<{ type: PageType }>(({ theme, type }) => ({
  position: 'relative',
  marginTop: pxToRem(114),
  maxWidth: maxWidth,
  marginLeft: 'auto',
  marginRight: 'auto',
  ...getBreakpointsStylesByArray(theme, {
    paddingLeft: type === 'default' ? spaceArr : articleSpaceArr,
    paddingRight: type === 'default' ? spaceArr : articleSpaceArr,
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
      marginLeft: type === 'default' ? spaceArr : articleSpaceArr,
      display: ['none', null, null, null, null, null, 'block'],
    }),
  },
}))

const NormalTitle = styled(XXXLFont)<{ type: PageType }>(({ theme, type }) => ({
  position: 'relative',
  marginTop: pxToRem(114),
  maxWidth: maxWidth,
  marginLeft: 'auto',
  marginRight: 'auto',
  ...getBreakpointsStylesByArray(theme, {
    paddingLeft: type === 'default' ? spaceArr : articleSpaceArr,
    paddingRight: type === 'default' ? spaceArr : articleSpaceArr,
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
      marginLeft: type === 'default' ? spaceArr : articleSpaceArr,
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

const SubtitleContentBlock = styled('div')<{ type: PageType }>(
  ({ theme, type }) => ({
    maxWidth: maxWidth,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: pxToRem(24),
    ...getBreakpointsStylesByArray(theme, {
      paddingLeft: type === 'default' ? spaceArr : articleSpaceArr,
      paddingRight: type === 'default' ? spaceArr : articleSpaceArr,
      marginTop: [24, 16, 16, 16, 24, 16, 16, null, 24],
    }),
  }),
)

const FilterBlock = styled('section')<{ type: PageType }>(
  ({ theme, type }) => ({
    maxWidth: maxWidth,
    marginLeft: 'auto',
    marginRight: 'auto',
    ...getBreakpointsStylesByArray(theme, {
      paddingLeft: type === 'default' ? spaceArr : articleSpaceArr,
      paddingRight: type === 'default' ? spaceArr : articleSpaceArr,
      marginTop: [136, null, 112, 141, 267, null, 297, null, 288],
    }),
  }),
)

const ContentBlock = styled('div')(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    marginTop: [68, 76, 112, 95, 112],
  }),
}))
